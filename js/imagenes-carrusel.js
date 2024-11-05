import recetas from "../data/recetas.json" with { type: 'json' };


function numeroAleatorioEntre1y50() {
  return Math.floor(Math.random() * 50) + 1;
}

function portadaAleatoriaFuncion(){
  let indiceAleatorio = numeroAleatorioEntre1y50() - 1;
  let recetaAleatoria = recetas[indiceAleatorio];
  let portadaAleatoria = recetaAleatoria.Portada;
  return portadaAleatoria;
}

let itemsCarrusel = document.querySelectorAll(".d-block.w-100");


let portadasYaElegidas = [];

for(let i = 0; i < 5; i++){
  let portada = itemsCarrusel[i];
  let portadaAleatoria = portadaAleatoriaFuncion();

  if(portadasYaElegidas.includes(portadaAleatoria)){
    i--;
  } else{
    portadasYaElegidas.push(portadaAleatoria);
    portada.src = portadaAleatoria;
  }
  
}


// let primerportada = itemsCarrusel[0];
// primerportada.src = portadaAleatoria();

// let segundaportada = itemsCarrusel[1];
// segundaportada.src = portadaAleatoria();

// let tercerPortada = itemsCarrusel[2];
// tercerPortada.src = portadaAleatoria();

// let cuartaPortada = itemsCarrusel[3];
// cuartaPortada.src = portadaAleatoria();

// let quintaPortada = itemsCarrusel[4];
// quintaPortada.src = portadaAleatoria();
