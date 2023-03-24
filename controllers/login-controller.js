import { clientServices } from "../service/client_service.js";

let getName, getPassword;

const dataProfile = (nombre, email, password) => {
    const createP = document.createElement("p");
    const contenido = `
        ${nombre}
        ${email}
        ${password}
    `;
    createP.innerHTML = contenido;
    return createP;
};
  
clientServices.adminPerfil().then((data) => {
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

const dataLoginForm = document.querySelector("[data-login]");
dataLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const dataLoginName = document.querySelector("[data-name]");
  const dataLoginPassword = document.querySelector("[data-password]");

  if(dataLoginName.value == getName && dataLoginPassword.value == getPassword){
    window.location.href = "/screens/crear_producto.html"
  }else{
    alert("Solo esta admitido el login con admin");
  }
});