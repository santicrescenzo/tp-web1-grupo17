
let linksCategorias = document.querySelectorAll("a.tab-categoria");
let articulos = document.querySelectorAll(".articulo-categoria");

document.addEventListener ("DOMContentLoaded", function () {

    // Recorro todos los articulos
    articulos.forEach((art) => {
        let header = art.querySelector(".header-articulo");

        // Obtengo la cantidad de estrellas en base al rating
        let cantidadEstrellas = parseInt (header.querySelector(".item-valor-rating").innerHTML);

        // Calculo cantidad de estrellas grises
        let cantidadEstrellasGrises = 5 - cantidadEstrellas;

        // Elimino estrellas para que no se acumulen
        header.querySelectorAll(".fa-star").forEach((estrella) => estrella.remove());

        // Agrego estrellas amarillas
        for (let i = 0; i < cantidadEstrellas; i++) {
            let icono = document.createElement("i");
            icono.classList.add('fa-sharp', 'fa-solid', 'fa-star');
            header.appendChild(icono);
        }

        // Agrego estrellas grises
        for(let j = 0; j < cantidadEstrellasGrises; j++){
            let iconoGris = document.createElement("i");
            iconoGris.classList.add('fa-sharp', 'fa-solid', 'fa-star', 'gris');
            header.appendChild(iconoGris);
        }
     })
  
     
})

// Es el mismo codigo que arriba solo que para el evento "click" en las categorias
linksCategorias.forEach(function(linkCategoria) {
linkCategoria.addEventListener ("click", function () {
    
    articulos.forEach((art) => {
        let header = art.querySelector(".header-articulo");
        let cantidadEstrellas = parseInt (header.querySelector(".item-valor-rating").innerHTML);
        let cantidadEstrellasGrises = 5 - cantidadEstrellas;

        header.querySelectorAll(".fa-star").forEach((estrella) => estrella.remove());

        for (let i = 0; i < cantidadEstrellas; i++) {
            let icono = document.createElement("i");
            icono.classList.add('fa-sharp', 'fa-solid', 'fa-star');
            header.appendChild(icono);
        }

        for(let j = 0; j < cantidadEstrellasGrises; j++){
            let iconoGris = document.createElement("i");
            iconoGris.classList.add('fa-sharp', 'fa-solid', 'fa-star', 'gris');
            header.appendChild(iconoGris);
        }
     })
  
    })
})
