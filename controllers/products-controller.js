import { clientServices } from "../service/client_service.js";

clientServices.adminProductos.then((data) => {
    const pElement = document.querySelector("[data-profile]");
    console.log(data);
    data.forEach((perfil) => {
      getName = perfil.nombre;
      getPassword = perfil.password;
  
      //esto es para mostrar data on the webpage
      //const getData = dataProfile(perfil.nombre, perfil.email, perfil.password);
      //pElement.append(getData);
    });
  }).catch((error) => alert("Ocurrió un error"));