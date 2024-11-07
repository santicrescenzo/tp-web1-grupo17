import recetas from "../../data/recetas.json" with { type: 'json' };
import configuracion from "../../config/configuracion.json" with { type: 'json' };

const tabCategoria1 = document.querySelector("#tab-categoria-1");

var linksCategorias = document.querySelectorAll("a.tab-categoria");
var articulos;

// Cosas para categoría "Todas"
let seccionCategoria = document.getElementById('seccion-categoria');
let nuevoDiv = document.createElement("div");
nuevoDiv.id = "div-nuevo";
nuevoDiv.style.display = "none";
seccionCategoria.appendChild(nuevoDiv);


linksCategorias.forEach(function(linkCategoria) {
   linkCategoria.addEventListener("click", function() {
      articulos = ""

       if(linkCategoria.innerText === "Todas" || linkCategoria.innerText === "restaurant"){
          cargaDatosCategoriaTodas();
       } else{
          nuevoDiv.style.display = "none";
       }


      Object.entries(recetas).forEach((entry) => {
      const [key, value] = entry;
   
      if (linkCategoria.innerText === value.Categoria || linkCategoria.innerText === value.Icono)
      {
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-nombre").innerText = value["Nombre"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-autor").innerText = value["Autor"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").src = value["Portada"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").alt = value["Nombre"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-descripcion").innerText = value["Descripcion"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-rating").innerText = value["Rating"];

         for (const property in value) {
            switch(property.split(".")[0]) {
               case "personalizado_1":
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > h4.item-campo-personalizado_1").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > p.item-valor-personalizado_1").innerText = value[property];
                  break;
               case "personalizado_2":
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > h4.item-campo-personalizado_2").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > p.item-valor-personalizado_2").innerText = value[property];
                  break;
               case "personalizado_3":
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > h4.item-campo-personalizado_3").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > p.item-valor-personalizado_3").innerText = value[property];
                  break;
               case "personalizado_4":
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > h4.item-campo-personalizado_4").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > p.item-valor-personalizado_4").innerText = value[property];
                  break;
               case "personalizado_5":
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > h4.item-campo-personalizado_5").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " div.detalle-articulo > p.item-valor-personalizado_5").innerText = value[property];
                  break;
            }
         };

         document.querySelector("article." + value["Id"].split("-")[1]).id = value["Id"];
      };

      });
   });
});

if(configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();  
};


function cargaDatosCategoriaTodas(){

  nuevoDiv.style.display = "flex";
  nuevoDiv.innerHTML = "";


         const articulos = document.querySelectorAll(".articulo-categoria");
         for(let i = 0; i < 4; i++){
            articulos.forEach(art =>{
               const artClonado = art.cloneNode(true);
               nuevoDiv.appendChild(artClonado);
            })
         }
         const articulos2 = document.querySelectorAll(".articulo-categoria");
         console.log(articulos2);
         articulos2.forEach((art, index) =>{

               

         art.getElementsByClassName("item-valor-nombre")[0].innerText = recetas[index].Nombre;
         art.getElementsByClassName("item-valor-autor")[0].innerText = recetas[index].Autor;
         art.getElementsByClassName("item-valor-portada")[0].src = recetas[index].Portada;
         art.getElementsByClassName("item-valor-descripcion")[0].innerText = recetas[index].Descripcion;
         art.getElementsByClassName("item-valor-rating")[0].innerText = recetas[index].Rating;


          for (const property in recetas[index]) {

            switch(property.split(".")[0]) {
               case "personalizado_1":
                  art.getElementsByClassName("item-campo-personalizado_1")[0].innerText = property.split(".")[1];
                  art.getElementsByClassName("item-valor-personalizado_1")[0].innerText = recetas[index][property];
                  
                  break;
               case "personalizado_2":
                art.getElementsByClassName("item-campo-personalizado_2")[0].innerText = property.split(".")[1];
                art.getElementsByClassName("item-valor-personalizado_2")[0].innerText = recetas[index][property];
                
                  break;
               case "personalizado_3":
                art.getElementsByClassName("item-campo-personalizado_3")[0].innerText = property.split(".")[1];
                  art.getElementsByClassName("item-valor-personalizado_3")[0].innerText = recetas[index][property];
                
                  break;
               case "personalizado_4":
                art.getElementsByClassName("item-campo-personalizado_4")[0].innerText = property.split(".")[1];
                  art.getElementsByClassName("item-valor-personalizado_4")[0].innerText = recetas[index][property];
                
                  break;
               case "personalizado_5":
                art.getElementsByClassName("item-campo-personalizado_5")[0].innerText = property.split(".")[1];
                  art.getElementsByClassName("item-valor-personalizado_5")[0].innerText = recetas[index][property];
                
                  break;
            }
         };})

         
         
         }




