import { clientServices } from "../service/client_service.js";

const formElement = document.querySelector("[data-newproduct]");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const valueUrl = document.querySelector("[data-url]").value;
  const valueCateg = document.querySelector("[data-categ]").value;
  const valueName = document.querySelector("[data-name]").value;
  const valuePrice = document.querySelector("[data-price]").value;
  const valueDesc = document.querySelector("[data-desc]").value;

  clientServices.crearProductos(valueUrl, valueCateg, valueName, valuePrice, valueDesc)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
});
