//Productos
class Producto {
  constructor(nombre, categoria, stock, identificador) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.stock = stock;
    this.identificador = identificador;
  }
}
const item1 = new Producto("Carne suave", "Clasica", 100, "CS");
const item2 = new Producto("Carne picante", "Clasica", 100, "CP");
const item3 = new Producto("Pollo", "Clasica", 100, "PO");
const item4 = new Producto("Pollo con salsa blanca", "Clasica", 100, "PB");
const item5 = new Producto("Roquefort con jamón", "Clasica", 100, "RJ");
const item6 = new Producto("Jamón y queso", "Clasica", 100, "JQ");
const item7 = new Producto("Caprese", "Vegetariana", 100, "CA");
const item8 = new Producto("Queso y cebolla", "Vegetariana", 100, "QC");
const item9 = new Producto("Humita", "Vegetariana", 100, "HU");
const item10 = new Producto("Calabaza", "Vegetariana", 100, "CB");
const item11 = new Producto("Verdura", "Vegetariana", 100, "VE");
const item12 = new Producto("Diabla", "Especial", 100, "DI");
const item13 = new Producto("Cuatro queso", "Especial", 100, "4Q");
const item14 = new Producto("Cheese burger", "Especial", 100, "CH");
const item15 = new Producto("No pollo", "Vegana", 80, "NP");
const item16 = new Producto("Caprese", "Vegana", 80, "CV");
const item17 = new Producto("Agridulce", "Vegana", 80, "AG");
const item18 = new Producto("New mix", "Vegana", 80, "NM");
const item19 = new Producto("Membrillo", "Dulce", 30, "DM");
const item20 = new Producto("Batata", "Dulce", 30, "DB");
const item21 = new Producto("Chocotorta", "Postre", 10, "CHOCO");
const item22 = new Producto("Bomba oreo", "Postre", 10, "BOMB");
const item23 = new Producto("Brownie explotado", "Postre", 10, "BROW");
const item24 = new Producto("Vegano", "Postre", 10, "VEfGAN");
let productos = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item24,
];
let total = 0;
const botonesParaAgregar = document.querySelectorAll(".agregar");
botonesParaAgregar.forEach((boton) => {
  boton.addEventListener("click", agregarCarrito);
});
const carrito = [];
function agregarCarrito(event) {
  const idDelBoton = event.target.id;
  console.log("Se hizo clic en el botón con ID:", idDelBoton);
  let productoElegido = buscoProducto(idDelBoton);
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].identificador === idDelBoton) {
      alert("El item ya se encuentra en el carrito");
      carrito.splice(i, 1);
    }
  }

  carrito.push(productoElegido);
  sumarProductoAlCarritoMenu(productoElegido.nombre,productoElegido.categoria);
}

function buscoProducto(ID) {
  for (const producto of productos) {
    if (ID === producto.identificador) {
      return producto;
    }
  }
}
function sumarProductoAlCarritoMenu(nombre,categoria) {
  //Traemos a el div del carrito
  let carritoMenu = document.getElementById("carritoBar");
  //Agregamos el producto al carrito
  let itemCarritoContenido=document.createElement("div")

  itemCarritoContenido.innerHTML = `
  <div class="productosCarrito">
  <div class="categoria-i">${categoria}</div>
  <div class="productosCarrito">${nombre}</div>
</div>
<div class="info">+Cantidad-</div>
  `;
  itemCarritoContenido.className="itemCarrito"
 carritoMenu.append(itemCarritoContenido)
    
    //Definimos el innerHTML del elemento con una plantilla de texto
  }
// function sumarProductoAlCarritoMenu(carrito) {
//   //Traemos a el div del carrito
//   let carritoMenu = document.getElementById("carritoBar");
//   //Agregamos el producto al carrito
//   for(let index = 0; index < carrito.length; index++){
//       let itemCarritoContenido = `
//     <div class="productosCarrito">
//       <div class="productosCarrito">${carrito[index].nombre}</div>
//     </div>
//     <div class="info">  
//       <i class="fa-solid fa-minus restar-cantidad"></i>
//         <input type="text" value="1" class="carrito-item-cantidad" disabled>
//       <i class="fa-solid fa-plus sumar-cantidad"></i></div>
//     <button class="btn-eliminar">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//   `;
//       console.log(itemCarritoContenido); 
//       let contenedor = document.createElement("div")
//       carritoMenu.innerHTML = itemCarritoContenido;
    
//    ;}
//     //Definimos el innerHTML del elemento con una plantilla de texto
//   }

//>Funcion para el DOM de carrito
// function llenarCarrito(carrito){
//   let itemCarritoContenido = `
//     <div class="productosCarrito">
//       <div class="categoria-i">${carrito.categoria}</div>
//       <div class="productosCarrito">${carrito.nombre}</div>
//     </div>
//     <div class="info">
//       <i class="fa-solid fa-minus restar-cantidad"></i>
//         <input type="text" value="1" class="carrito-item-cantidad" disabled>
//       <i class="fa-solid fa-plus sumar-cantidad"></i></div>
//     <button class="btn-eliminar">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//   `
//   let item.innerHTML = itemCarritoContenido;
//   carritoMenu.append(item);

// }
//Funcion muestra
function MuestraCategoria(categoriaFiltrada) {
  muestra = [];
  for (let index = 0; index < categoriaFiltrada.length; index++) {
    muestra[index] = categoriaFiltrada[index].nombre;
  }
  return muestra;
}
// carritoMenu.innerHTML="<div>me lo agrega</div>";
// document.carrito-menu.appendChild(carritoMenu)

//  let suma.onclick = function sumaClick(){
//      total=total+1
//      contador.innerHTML=`<p>${total}}</p>`
//      console.log(total)
//  }
//  let resta=document.getElementsByClassName('restaClick')
//  resta.onclick = function restaClick(){
//      if(total>0){
//          total=total-1
//          console.log(total)
//   }
//  }
