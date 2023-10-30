
document.getElementById("disabled").style.display = "none";

// FUNCIÓN para VERIFICAR EDAD a partir de la fecha de nacimiento.

function verificarEdad() {
    var fechaNacimiento = new Date(document.getElementById("fecha-nacimiento").value);
    var fechaActual = new Date();
    var anio = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    var mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    var dia = fechaActual.getDate() - fechaNacimiento.getDate();

// Verifica si el usuario tiene 18 años o más.
    if (anio>18 || (anio==18 && mes>=0 && dia >0)){
      document.getElementById("edad-form").style.display = "none";
      document.getElementById("disabled").style.display = "block";
    } else {
      alert("Lo siento, debes ser mayor de 18 años para acceder a esta tienda.");
    }
}

// Variables globales para almacenar los productos seleccionados y el monto total.

var productosSeleccionados = [];
var montoTotal = 0;
var unidadesPorProducto = {};

document.getElementById("carrito").style.display = "none";
 
// Función para agregar un producto al carrito y calcular el monto total.
function agregarAlCarrito(precio, nombreProducto) {
  productosSeleccionados.push({ nombre: nombreProducto, precio: precio });
  montoTotal += precio;
  if (unidadesPorProducto[nombreProducto]) {
      unidadesPorProducto[nombreProducto]++;
  } else {
      unidadesPorProducto[nombreProducto] = 1;
  }
  document.getElementById("carrito").style.display = "block";
  // Actualiza la lista de productos en el carrito y el monto total en la página.
  actualizarCarrito();
  actualizarContador();
}

//Reiniciar carrito
function reiniciarCarrito() {
  productosSeleccionados = [];
  montoTotal = 0;
  unidadesPorProducto = {};
  actualizarCarrito();
  actualizarContador();
}
function reiniciarCompra(){
  document.getElementById("carrito").style.display = "block";
  document.getElementById("carrito-option").style.display = "block";
  document.getElementById("mensaje-compra").style.display = "none";
  document.getElementById("carrito").style.display = "none";

}

// Define la función actualizarContador
function actualizarContador() {
  var contadorUnidades = document.getElementById("contador-unidades");
  var totalUnidades = 0;

  for (var nombreProducto in unidadesPorProducto) {
    totalUnidades += unidadesPorProducto[nombreProducto];
  }
  contadorUnidades.textContent = totalUnidades;
}

// Función para actualizar la lista de productos en el carrito y el monto total en la página.
function actualizarCarrito() {
  var listaCarrito = document.getElementById("lista-carrito");
  var montoTotalSpan = document.getElementById("monto-total");
  listaCarrito.innerHTML = "";
  productosSeleccionados.forEach(function (producto) {
    var item = document.createElement("li");
    item.textContent = producto.nombre + " - $" + producto.precio;
    listaCarrito.appendChild(item);
  });
  montoTotalSpan.textContent = montoTotal;
}

document.getElementById("mensaje-compra").style.display = "none";

// Función para finalizar la compra y mostrar un mensaje de agradecimiento.
function finalizarCompra() {
  document.getElementById("carrito").style.display = "none";
  document.getElementById("carrito-option").style.display = "none";
  document.getElementById("mensaje-compra").style.display = "block";


  reiniciarCarrito();
}











//funcion para ordenar de mayor a menor

document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento change al menú desplegable
    document.getElementById("filtroOrden").addEventListener("change", function () {
      ordenarTarjetas();
    });
    // Llama a la función de ordenamiento al cargar la página
    ordenarTarjetas();
  });
  
function ordenarTarjetas() {
    var tarjetas = document.querySelectorAll(".card");
    tarjetas = Array.from(tarjetas);
    var filtroOrden = document.getElementById("filtroOrden").value;

    tarjetas.sort(function (a, b) {
    var valorA = parseInt(a.getAttribute("data-valor"));
    var valorB = parseInt(b.getAttribute("data-valor"));

    if (filtroOrden === "menorAMayor") {
        return valorA - valorB;
    } else if (filtroOrden === "mayorAMenor") {
        return valorB - valorA;
    }
    });

    var contenedor = document.querySelector(".contenedorDeTarjetas");
    if (contenedor) {
        // Limpia el contenedor antes de agregar las tarjetas ordenadas
        contenedor.innerHTML = "";
  
        tarjetas.forEach(function (tarjeta) {
          // Vuelve a aplicar las clases de Bootstrap
          tarjeta.classList.add("col-3", "g-4");
          tarjeta.style.marginLeft= "12px";
          tarjeta.style.marginRight= "12px";
          tarjeta.style.border= "0px";
          tarjeta.style.padding= "0px";
          tarjeta.style.width= "22%";
          contenedor.appendChild(tarjeta);
        });
    } else {
        console.error("No se encontró el contenedor con la clase 'contenedorDeTarjetas'.");
    }
};

  
  
  

      
     
 