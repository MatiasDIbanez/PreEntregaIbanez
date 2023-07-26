//Productos
 class Producto{
     constructor(nombre, categoria, stock,identificador) {
     this.nombre = nombre;
     this.categoria = categoria;
     this.stock = stock;
     this.identificador= identificador;
   }} 
   const item1 = new Producto("Carne suave", "Clasica", 100,'CS');
   const item2 = new Producto("Carne picante", "Clasica", 100);
   const item3 = new Producto("Pollo", "Clasica", 100);
   const item4 = new Producto("Pollo con salsa blanca", "Clasica", 100);
   const item5 = new Producto("Roquefort con jamón", "Clasica", 100);
   const item6 = new Producto("Jamón y queso", "Clasica", 100);
   const item7 = new Producto("Caprese", "Vegetariana", 100);
   const item8 = new Producto("Queso y cebolla", "Vegetariana", 100);
   const item9 = new Producto("Humita", "Vegetariana", 100);
   const item10 = new Producto("Calabaza", "Vegetariana", 100);
   const item11 = new Producto("Verdura", "Vegetariana", 100);
   const item12 = new Producto("Diabla", "Especial", 100);
   const item13 = new Producto("Cuatro queso", "Especial", 100);
   const item14 = new Producto("Cheese burger", "Especial", 100);
   const item15 = new Producto("No pollo", "Vegana", 80);
   const item16 = new Producto("Caprese", "Vegana", 80);
   const item17 = new Producto("Agridulce", "Vegana", 80);
   const item18 = new Producto("New mix", "Vegana", 80);
   const item19 = new Producto("Membrillo", "Dulce", 30);
   const item20 = new Producto("Batata", "Dulce", 30);
   const item21 = new Producto("Chocotorta", "Postre", 10);
   const item22 = new Producto("Bomba oreo", "Postre", 10);
   const item23 = new Producto("Brownie explotado", "Postre", 10);
   const item24 = new Producto("Vegano", "Postre", 10);
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
 //Traer por Class
let total=0;
const botonesParaAgregar = document.querySelectorAll(".agregar");
botonesParaAgregar.forEach(boton => {
  boton.addEventListener('click', agregarCarrito);
});
function agregarCarrito(event) {
  const idDelBoton = event.target.id;
  console.log("Se hizo clic en el botón con ID:", idDelBoton);
  carrito.push(idDelBoton);
}
const carrito=[];

function agregarAlCarritoClicked(event){
  let botonCarrito = event.target;
  let item = botonCarrito.parentElement;
  var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
  var precio = item.getElementsByClassName('precio-item')[0].innerText;
  var imagenSrc = item.getElementsByClassName('img-item')[0].src;
  console.log(imagenSrc);

  agregarItemAlCarrito(titulo, precio, imagenSrc);

  hacerVisibleCarrito();
}
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
//Funciòn que controla el boton clickeado de agregar al carrito
