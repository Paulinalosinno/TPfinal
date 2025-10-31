
const productos = [
  {
    id: 1,
    nombre: "LG 30870",
    tecnologia: "VT3P",
    precio: 25000,
    imagen: "soja1.jpg",
    detalle: "producto1.png",
    categoria: "soja",
    presentacion: "Bolsa de 40kg",
  },
  {
    id: 2,
    nombre: "LG 30910",
    tecnologia: "VIP3",
    precio: 27000,
    imagen: "soja1.jpg",
    detalle: "producto2.png",
    categoria: "soja",
    presentacion: "Bolsa de 40kg",
  },
  {
    id: 3,
    nombre: "LG 31230",
    tecnologia: "VT3P",
    precio: 29000,
    imagen: "maiz1.jpg",
    detalle: "producto3.png",
    categoria: "maiz",
    presentacion: "Bolsa de 20kg",
  },
  {
    id: 4,
    nombre: "LG 30849",
    tecnologia: "VT3P",
    precio: 36200,
    imagen: "trigo1.jpg",
    detalle: "producto4.png",
    categoria: "trigo",
    presentacion: "Bolsa de 20kg",
  },
  {
    id: 5,
    nombre: "LG 30915",
    tecnologia: "CLP",
    precio: 28000,
    imagen: "girasol1.jpg",
    detalle: "producto5.png",
    categoria: "girasol",
    presentacion: "Bolsa de 8kg",
  },
  {
    id: 6,
    nombre: "LG 30916",
    tecnologia: "VIP3",
    precio: 27000,
    imagen: "soja1.jpg",
    detalle: "producto7.png",
    categoria: "soja",
    presentacion: "Bolsa de 40kg",
  },
  {
    id: 7,
    nombre: "LG 30917",
    tecnologia: "VIP8",
    precio: 23050,
    imagen: "soja1.jpg",
    detalle: "producto6.png",
    categoria: "soja",
    presentacion: "Bolsa de 40kg",
  },
  {
    id: 8,
    nombre: "LG 96687",
    tecnologia: "VIC20",
    precio: 19200,
    imagen: "maiz1.jpg",
    detalle: "producto5.png",
    categoria: "maiz",
    presentacion: "Bolsa de 20kg",
  },
  {
    id: 9,
    nombre: "LG 98777",
    tecnologia: "VIC69",
    precio: 16000,
    imagen: "maiz1.jpg",
    detalle: "producto4.png",
    categoria: "maiz",
    presentacion: "Bolsa de 20kg",
  },
  {
    id: 10,
    nombre: "LG 45630",
    tecnologia: "CLP",
    precio: 27000,
    imagen: "girasol1.jpg",
    detalle: "producto3.png",
    categoria: "girasol",
    presentacion: "Bolsa de 8kg",
  },
  {
    id: 11,
    nombre: "LG 30697",
    tecnologia: "VIP10",
    precio: 29500,
    imagen: "trigo1.jpg",
    detalle: "producto2.png",
    categoria: "trigo",
    presentacion: "Bolsa de 20 kg",
  },
  {
    id: 12,
    nombre: "LG 309157",
    tecnologia: "VIP8",
    precio: 29000,
    imagen: "trigo1.jpg",
    detalle: "producto6.png",
    categoria: "trigo",
    presentacion: "Bolsa de 20 kg",
  },
  {
    id: 13,
    nombre: "LG 30587",
    tecnologia: "CLPpro",
    precio: 24780,
    imagen: "girasol1.jpg",
    detalle: "producto3.png",
    categoria: "girasol",
    presentacion: "Bolsa de 8kg"
  },
  {
    id: 14,
    nombre: "LG 35915",
    tecnologia: "CLP5",
    precio: 28750,
    imagen: "girasol1.jpg",
    detalle: "producto5.png",
    categoria: "girasol",
    presentacion: "Bolsa de 8kg"
  },
  {
    id: 15,
    nombre: "LG 47852",
    tecnologia: "VT35P",
    precio: 38760,
    imagen: "trigo1.jpg",
    detalle: "producto4.png",
    categoria: "trigo",
    presentacion: "Bolsa de 20kg"
  },
  {
    id: 16,
    nombre: "LG 33629",
    tecnologia: "VT3P",
    precio: 36200,
    imagen: "trigo1.jpg",
    detalle: "producto4.png",
    categoria: "trigo",
    presentacion: "Bolsa de 20kg"
  },
  {
    id: 17,
    nombre: "LG 37899",
    tecnologia: "VT3Pro",
    precio: 36200,
    imagen: "trigo1.jpg",
    detalle: "producto4.png",
    categoria: "trigo",
    presentacion: "Bolsa de 20kg"
  },
  {
    id: 18,
    nombre: "LG 56897",
    tecnologia: "VIC698",
    precio: 18500,
    imagen: "maiz1.jpg",
    detalle: "producto1.png",
    categoria: "maiz",
    presentacion: "Bolsa de 20kg"
  },
  {
    id: 19,
    nombre: "LG 92237",
    tecnologia: "VIC69",
    precio: 13620,
    imagen: "maiz1.jpg",
    detalle: "producto6.png",
    categoria: "maiz",
    presentacion: "Bolsa de 20kg"
  },
  {
    id: 20,
    nombre: "LG 98677",
    tecnologia: "VIC69",
    precio: 16000,
    imagen: "maiz1.jpg",
    detalle: "producto7.png",
    categoria: "maiz",
    presentacion: "Bolsa de 20kg"
  }

];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarContador();
});

function mostrarProductos(categoria) {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  const filtrados = productos.filter(p => p.categoria === categoria);

  filtrados.forEach(p => {
    contenedor.innerHTML += `
      <div class="card" data-id="${p.id}">
        <img src="${p.imagen}" alt="${p.nombre}" class="icono">
        <h3>${p.nombre}</h3>
        <p class="tecno">Tecnología disponible</p>
        <p>${p.tecnologia}</p>
        <p>${p.presentacion}</p>
        <p>$${p.precio}</p>
        <button class="btn-detalle" onclick="abrirImagen('${p.detalle}')">VER DETALLES</button>
        <button class="btn-agregar" onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
      </div>
    `;
  });
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  if (!producto) return;

  const enCarrito = carrito.find(p => p.id === idProducto);
  if (enCarrito) {
    enCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarContador();
  mostrarCarrito();
  guardarCarrito();

  const aviso = document.createElement("div");
  aviso.textContent = `${producto.nombre} agregado al carrito 🛒`;
  aviso.classList.add("mensaje-agregado");
  document.body.appendChild(aviso);
  setTimeout(() => aviso.remove(), 2000);
}

function mostrarCarrito() {
  const contenedor = document.getElementById("lista-carrito");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((p, i) => {
    total += p.precio * p.cantidad;

    contenedor.innerHTML += `
      <div class="item-carrito">
        <div class="info-producto">
          <img src="${p.imagen}" alt="${p.nombre}" class="thumb">
          <span><strong>${p.nombre}</strong> — $${p.precio}</span>
        </div>
        <div class="controles">
          <button class="cantidad-btn" onclick="cambiarCantidad(${i}, -1)">-</button>
          <span class="cantidad">${p.cantidad}</span>
          <button class="cantidad-btn" onclick="cambiarCantidad(${i}, 1)">+</button>
          <button class="btn-eliminar" onclick="eliminarDelCarrito(${i})">🗑</button>
        </div>
      </div>
    `;
  });

  const totalElem = document.getElementById("total");
  if (totalElem) totalElem.textContent = `Total: $${total.toLocaleString()}`;
}

function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;
  if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
  actualizarContador();
  mostrarCarrito();
  guardarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarContador();
  mostrarCarrito();
  guardarCarrito();
}

function actualizarContador() {
  const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  const contador = document.getElementById("contador-carrito");
  if (contador) contador.textContent = total;
}

function toggleCarrito() {
  const seccion = document.getElementById("carrito");
  if (seccion) seccion.classList.toggle("visible");
}

function pagar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  alert("Procesando el pago...");

  carrito = [];

  actualizarContador();
  mostrarCarrito();
  guardarCarrito();
  toggleCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  const botonHero = document.querySelector(".btn-hero");

  function actualizarDestino() {
    if (!botonHero) return;
    if (window.innerWidth <= 768) {
      botonHero.setAttribute("href", "servicios.html"); // versión mobile
    } else {
      botonHero.setAttribute("href", "nosotros.html");  // versión escritorio
    }
  }

  actualizarDestino(); // ejecuta al cargar la página
  window.addEventListener("resize", actualizarDestino); // ejecuta si se cambia el tamaño
});


function abrirImagen(ruta) {
  const modal = document.getElementById("modalImagen");
  const img = document.getElementById("imgAmpliada");
  if (modal && img) {
    img.src = ruta;
    modal.style.display = "block";
  }
}

function cerrarImagen() {
  const modal = document.getElementById("modalImagen");
  if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modalImagen");
  if (event.target === modal) modal.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector("header .logo");

  if (logo && window.innerWidth <= 768) {
    logo.addEventListener("click", function() {
      window.location.href = "index.html"; // te lleva al inicio
    });
  }
});

