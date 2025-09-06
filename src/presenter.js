import {ingresarDato, ingresarCodigoEst } from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const codigo = document.querySelector("#codigos");
const form = document.querySelector("#Totalizador");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cantidad_output = "<p> Cantidad: " + ingresarDato(Number.parseInt(cantidad.value)) + "</p>";
  let precio_output = "<p>Precio: " + ingresarDato(Number.parseInt(precio.value)) + "</p>";
  let codigo_output = "<p>Precio: " + ingresarCodigoEst(codigo.value) + "</p>";
  div.innerHTML = cantidad_output + "<br>" + precio_output + "<br>" + codigo_output;
});