import ingresarCantItems from "./totalizador";

const cantidad =document.querySelector("#cantidad");
const form = document.querySelector("#Totalizador");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad_int = Number.parseInt(cantidad.value);
  div.innerHTML = "<p> Cantidad: " + ingresarCantItems(cantidad_int)+ "</p>";
});