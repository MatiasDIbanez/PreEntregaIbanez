//Ingreso de usuarios
let usuario = confirm(
  "Suscribite a nuestra pagina y enterate todas las novedades!"
);

let nombre, apellido, email;

if (usuario === true) {
  nombre = prompt("Ingrese su nombre");
  console.log(nombre);
  apellido = prompt("Ingrese su apellido");
  console.log(apellido);
  email = prompt("Ingrese su email");
  console.log(email);
  prompt(
    "Bienvenido " +
      nombre +
      " " +
      apellido +
      " se enviaran todas las novedades al mail " +
      email +
      "\nGracias por sumarte!"
  );
}

let medio=prompt("Seleccione su medio de pago.\n1.Efectivo - 2.Debito - 3.Credito - 4.Qr")
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
function descuentoPorDocena(cantidadSelecionada) {
  if (1 >= cantidadSelecionada / 12 < 2) {
    return 0.075;
  } else if (2 >= cantidadSelecionada / 12 < 3) {
    return 0.075;
  } else if (3 >= cantidadSelecionada / 12 < 4) {
    return 0.1;
  } else if (4 >= cantidadSelecionada / 12 > 10) {
    return 0.2;
  } else {
    return 1;
  }
}
const precioUnidad = 200;
function mediosDePago(medio, cantidad) {
  if (medio === "efectivo") {
    return precioUnidad * cantidad * descuentoPorDocena(cantidad);
  }
}
