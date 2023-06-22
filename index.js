//Ingreso de usuarios
let usuario = confirm(
  "Suscribite a nuestra pagina y enterate todas las novedades!"
);

let nombre, apellido, email;

if (usuario === true) {
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  email = prompt("Ingrese su email");
  confirm(
    "Bienvenido " +
      nombre +
      " " +
      apellido +
      " se enviaran todas las novedades al mail " +
      email +
      "\nGracias por sumarte!"
  );
}
//Constructora
/*function Persona(nombre,apellido,fechaNacimiento){
  this.nombre = nombre
  this.apellido = apellido
  this.fechaNacimiento = fechaNacimiento
}
const persona = new Persona(nombre, apellido, email)
console.log(persona)
ususariois*/
//Pagos
const precioUnidad = 200;
let suma = 0,continuar
do {
  prompt("Seleccione su producto")
  suma++
  continuar = prompt("¿Desea seleccionar otro producto? (S/N)")
} while (continuar === "S");

console.log("La suma de los productos seleccionados es: " + suma);

let medio=Number( prompt("Seleccione su medio de pago:2\n1.Efectivo - 2.Debito - 3.Credito - 4.Qr"))
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
    alert("No se reconoce medio de pago") ;
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
cantidad=suma
function pagos(medio, cantidad) {
  if (medio === "efectivo") {
    return precioUnidad * cantidad * descuentoPorDocena(cantidad);
  }
  else{
    return precioUnidad * cantidad;
  }
}
pagos(pago,cantidad)

