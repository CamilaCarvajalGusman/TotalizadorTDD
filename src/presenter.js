import { ingresarDato, ingresarCodigoEst, calcularPrecioNeto, calcularImpuestoEstado, calcularDescuento } from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const codigo = document.querySelector("#codigos");
const form = document.querySelector("#Totalizador");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cantidad_output = "<p> Cantidad: " + ingresarDato(Number.parseInt(cantidad.value)) + "</p>";
  let precio_output = "<p> Precio: " + ingresarDato(Number.parseInt(precio.value)) + "</p>";
  let codigo_output = "<p> Estado: " + ingresarCodigoEst(codigo.value) + "</p>";
  let impuesto_output = "<p> Impuesto por el estado de  " + ingresarCodigoEst(codigo.value) + ": " + calcularImpuestoEstado(codigo.value) + "%</p>";
  let descuento_output = "<p> Descuento: " + calcularDescuento(precio.value) + "%</p>";
  let precio_neto = "<p> Precio Neto: " + calcularPrecioNeto(Number.parseInt(cantidad.value), Number.parseInt(precio.value), codigo.value) + "$</p>";
  div.innerHTML = cantidad_output + "<hr>" + precio_output + "<hr>" + codigo_output + "<hr>" + impuesto_output + "<hr>" + descuento_output + "<hr>" + precio_neto;
});