const container = document.getElementById("container");
let lista = [
  {
    nombre: "Python",
    descripcion:
      "Lenguaje de programación, orientado a objetos, facil de aprender y a la vez muy potente",
    imagen:
      "https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAAAAA?pid=ImgDet&rs=1",
  },
  {
    nombre: "JavaScript",
    descripcion:
      "Lenguaje de programación interpretado, orientado a eventos y utilizado en navegadores web.",
    imagen: "https://logodix.com/logo/374728.png",
  },
  {
    nombre: "Java",
    descripcion:
      "Lenguaje de programación de propósito general, orientado a objetos y portable.",
    imagen:
      "https://3.bp.blogspot.com/-cyMzveP3IvQ/TaR7f3qkYmI/AAAAAAAAAIk/mrChE-G0b5c/s1600/Java.png",
  },
];

container.innerHTML += lista.map((lenguaje) => {
  return `
        <div class="card my-card d-flex" style="max-width: 18rem;">
            <img src="${lenguaje.imagen}" class="card-img-top my-img" alt="${lenguaje.nombre}">
            <div class="card-body ">
                <h5>${lenguaje.nombre}</h5>
                <p>${lenguaje.descripcion}</p>
            </div>
        </div>
    `;
});
