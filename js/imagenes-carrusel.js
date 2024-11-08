import recetas from "../data/recetas.json" with { type: 'json' };

// Obtengo numero aleatorio entre 1 y 50
function numeroAleatorioEntre1y50() {
  return Math.floor(Math.random() * 50) + 1;
}

// En base al numero aleatorio, consigo una portada aleatoria
function portadaAleatoriaFuncion(){
  let indiceAleatorio = numeroAleatorioEntre1y50() - 1;
  let recetaAleatoria = recetas[indiceAleatorio];
  let portadaAleatoria = recetaAleatoria.Portada;
  return portadaAleatoria;
}

// Items del carrusel
let itemsCarrusel = document.querySelectorAll(".d-block.w-100");

// Array utilizado para evitar que aparezcan portadas repetidas
let portadasYaElegidas = [];

for(let i = 0; i < 5; i++){
  let portada = itemsCarrusel[i];
  let portadaAleatoria = portadaAleatoriaFuncion();

  if(portadasYaElegidas.includes(portadaAleatoria)){
    i--;
  } else{
    portadasYaElegidas.push(portadaAleatoria);
    // Agrego la portada al carrusel
    portada.src = portadaAleatoria;
  }
  
}

