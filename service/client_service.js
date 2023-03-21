const adminPerfil = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const adminProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProductos = (url, categ, nombre, precio, desc) => {
  fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({url, categ, nombre, precio, desc, id: uuid.v4()}),
  });
};

export const clientServices = {
  adminPerfil,
  adminProductos,
  crearProductos
};