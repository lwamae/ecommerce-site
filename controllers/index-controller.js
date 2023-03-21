import { clientServices } from "../service/client_service.js";

const dataProfile = (nombre, precio, categ, desc, id, url) => {
    const createLi = document.createElement("li");
    createLi.className = "product__li";
    const contenido = `
        <img class="product__imagen" alt="thumbnail" src="${url}"/>
        <p class="product__titulo">${nombre}</p>
        <h4 class="product__precio">$${precio}</h4>
        <a class="product_ver" href="#">Ver producto</a>
    `;
    createLi.innerHTML = contenido;
    return createLi;
};
  
clientServices.adminProductos().then((data) => {
  const pElement = document.querySelector("[data-profile]");
  console.log(data);
  data.forEach((perfil) => {
    if(perfil.categ == "variados"){
      console.log("variados");
    }
    const getData = dataProfile(perfil.nombre, perfil.precio, perfil.categ, perfil.desc, perfil.id, perfil.url);
    pElement.append(getData);
  });
}).catch((error) => alert("Ocurrió un error: " + error));