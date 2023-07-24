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



//Funcion filtrado
function FilterCategoria(categoria){
  let filtrado=[]
  return filtrado= productos.filter(
    (elemento) => elemento.categoria.toLowerCase() === categoria.toLowerCase()
    
  );
} 
//Funcion muestra
function MuestraCategoria(categoriaFiltrada){
  muestra=[]
  for (let index=0;index<categoriaFiltrada.length;index++) {
        muestra[index]= categoriaFiltrada[index].nombre
       }
       return muestra;
}    
//Seleccion de productos
let suma = 0,
 continuar;

do{
  let cantidad=0;
  let  categoriaSeleccionada=prompt("---Seleccione una categoria---\nClasica\nEspecial\nVegana\nDulce\nPostre");
 let productos= MuestraCategoria(FilterCategoria(categoriaSeleccionada))
 do{ produc=prompt(`Elija su Producto:\n ${productos}`)
  if(productos.includes(produc)){
    cantidad=Number(prompt('Elija la cantidad que desea'))
    suma=suma+cantidad

  }
}while(confirm('Seguir en la misma categoria?'));
 continuar  = prompt("¿Desea seleccionar otro categoria? (S/N)");
   } while (continuar === "S");

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
const precioUnidad=220;
function pagos(medio, cantidad) {
  if (medio === "efectivo") {
    return precioUnidad * cantidad * descuentoPorDocena(cantidad);
  }
  else {
    return precioUnidad * cantidad;
  }
}
let precioAPagar=pagos(pago, suma)
alert(`El precio a pagar es $${precioAPagar}`)
