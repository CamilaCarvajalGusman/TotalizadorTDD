import ingresarDato from "./totalizador";

const cantidad =document.querySelector("#cantidad");
const precio =document.querySelector("#precio");
const form = document.querySelector("#Totalizador");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad_int = Number.parseInt(cantidad.value);
  const precio_int = Number.parseInt(precio.value);
  let cantidad_output = "<p> Cantidad: " + ingresarDato(cantidad_int)+ "</p>";
  let precio_output = "<p>Precio: "+ ingresarDato(precio_int)+"</p>";
  div.innerHTML = cantidad_output + "<br>" + precio_output;
});