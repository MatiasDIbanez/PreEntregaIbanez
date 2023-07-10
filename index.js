//Ingreso de usuarios
let usuario = confirm(
  "Suscribite a nuestra pagina y enterate todas las novedades!"
);

let nombre, apellido, email;

if (usuario === true) {
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  email = prompt("Ingrese su email");
  const persona = new Persona(nombre, apellido, email);
  alert(`Bienvenido ${persona.nombre} ${persona.apellido}`);
}
//Constructora para usuarios
function Persona(nombre, apellido, fechaNacimiento) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.fechaNacimiento = fechaNacimiento;
}

 //let usuarios = [{ persona }];

//Productos
const categoriasProductos = [];
function ItemConstructora(nombre, categoria, stock) {
  this.nombre = nombre;
  this.categoria = categoria;
  this.stock = stock;
}
const item1 = new ItemConstructora("Carne suave", "Clasica", 100);
const item2 = new ItemConstructora("Carne picante", "Clasica", 100);
const item3 = new ItemConstructora("Pollo", "Clasica", 100);
const item4 = new ItemConstructora("Pollo con salsa blanca", "Clasica", 100);
const item5 = new ItemConstructora("Roquefort con jamón", "Clasica", 100);
const item6 = new ItemConstructora("Jamón y queso", "Clasica", 100);
const item7 = new ItemConstructora("Caprese", "Vegetariana", 100);
const item8 = new ItemConstructora("Queso y cebolla", "Vegetariana", 100);
const item9 = new ItemConstructora("Humita", "Vegetariana", 100);
const item10 = new ItemConstructora("Calabaza", "Vegetariana", 100);
const item11 = new ItemConstructora("Verdura", "Vegetariana", 100);
const item12 = new ItemConstructora("Diabla", "Especial", 100);
const item13 = new ItemConstructora("Cuatro queso", "Especial", 100);
const item14 = new ItemConstructora("Cheese burger", "Especial", 100);
const item15 = new ItemConstructora("No pollo", "Vegana", 80);
const item16 = new ItemConstructora("Caprese", "Vegana", 80);
const item17 = new ItemConstructora("Agridulce", "Vegana", 80);
const item18 = new ItemConstructora("New mix", "Vegana", 80);
const item19 = new ItemConstructora("Membrillo", "Dulce", 30);
const item20 = new ItemConstructora("Batata", "Dulce", 30);
const item21 = new ItemConstructora("Chocotorta", "Postre", 10);
const item22 = new ItemConstructora("Bomba oreo", "Postre", 10);
const item23 = new ItemConstructora("Brownie explotado", "Postre", 10);
const item24 = new ItemConstructora("Vegano", "Postre", 10);
let productos = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
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

//Filtrado por categoria
// const categoriaClasica = productos.filter(
//   (elemento) => elemento.categoria === "Clasica"
// );
// const categoriaEspeciales = productos.filter(
//   (elemento) => elemento.categoria === "Especial"
// );
// const categoriaVeganas = productos.filter(
//   (elemento) => elemento.categoria === "Vegana"
// );
// const categoriaDulce =productos.filter(
//   (elemento) => elemento.categoria==="Dulce"
// )
// const categoriaPostres = productos.filter(
//   (elemento) => elemento.categoria === "Postre"
// );
//Funcion filtrado
function FilterCategoria(categoria){
  let filtrado=[]
  return filtrado= productos.filter(
    (elemento) => elemento.categoria.toLowerCase() === categoria.toLowerCase()
    
  );
}
function Categorias(categorias){
  for (let index=0;index<categoriaFiltrada.length;index++) {
         console.log(categorias[index].categoria)
       }
}    
//Funcion muestra
function MuestraCategoria(categoriaFiltrada){
  for (let index=0;index<categoriaFiltrada.length;index++) {
         console.log(categoriaFiltrada[index].nombre)
       }
}    
//Seleccion de productos
let suma = 0,
  continuar;
do{
  let  categoriaSeleccionada=prompt("---Seleccione su producto---\nClasica\nEspecial\nVegana\nDulce\nPostre");

  MuestraCategoria(FilterCategoria(categoriaSeleccionada)
  alert(`La Categoria ${categoriaSeleccionada} no fue encontrada.`)
 
  
  continuar  = prompt("¿Desea seleccionar otro producto? (S/N)");
   } while (continuar === "S");
const precioUnidad = 200;

// do {
//   let cate=prompt("---Seleccione su producto---\nClasica\nEspecial\nVegana\nDulce\nPostre");
//   if (cate==="Clasica"){
//     for (let index=0;index<categoriaClasica.length;index++) {
//       console.log(categoriaClasica[index].nombre)
//     }
//   }
//   else if (cate==="Especial"){
//     for (let index=0;index<categoriaEspeciales.length;index++) {
//       console.log(categoriaEspeciales[index].nombre)
//     }
//   }
//   else if (cate==="Vegana"){
//     for (let index=0;index<categoriaVeganas.length;index++) {
//       console.log(categoriaVeganas[index].nombre)
//     }
//   } 
//   else if (cate==="Dulce"){ 
//     for (let index=0;index<categoriaDulce.length;index++) {
//       console.log(categoriaDulce[index].nombre)
//     }
//   }
//   else if(cate==="Postre"){
//     for (let index=0;index<categoriaPostres.length;index++) {
//       console.log(categoriaPostres[index].nombre)
//     }
//   }

//   suma++;
//   continuar  = prompt("¿Desea seleccionar otro producto? (S/N)");
// } while (continuar === "S");
//Pagos
console.log("La suma de los productos seleccionados es: " + suma);

let medio = Number(
  prompt(
    "Seleccione su medio de pago:2\n1.Efectivo - 2.Debito - 3.Credito - 4.Qr"
  )
);
let pago;
switch (medio) {
  case 1:
    pago = "efectivo";
    break;
  case 2:
    pago = "debito";
    break;
  case 3:
    pago = "credito";
    break;
  case 4:
    pago = "qr";
    break;
  default:
    alert("No se reconoce medio de pago");
    break;
}
function descuentoPorDocena(cantidadSeleccionada) {
  if (1 >= cantidadSeleccionada / 12 < 2) {
    return 0.925;
  } else if (2 >= cantidadSeleccionada / 12 < 3) {
    return 0.925;
  } else if (3 >= cantidadSeleccionada / 12 < 4) {
    return 0.9;
  } else if (4 >= cantidadSeleccionada / 12 > 10) {
    return 0.8;
  } else {
    return 1;
  }
}
cantidad = suma;
function pagos(medio, cantidad) {
  if (medio === "efectivo") {
    return precioUnidad * cantidad * descuentoPorDocena(cantidad);
  } else if (medio === "tarjeta") {
  } else {
    return precioUnidad * cantidad;
  }
}
pagos(pago, cantidad);
