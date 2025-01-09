
   //SELECCIONAR MASCOTA

/**
 * En la función cuando el jugador da click sobre una mascota y presiona el botón "seleccionar", el DOM
 * de la sección "seleccionarAtaque" mostrará la mascota seleccionada.
 * @param {HTMLElement} seleccionarMascotaJugador 
 * @returns {void}
*/

function seleccionarMascotaJugador(){

    if(hipogeChamp.checked){
        spanMascotaJugador.innerHTML = 'Hipoge';
    }else if(capipepoChamp.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(rarigueyaChamp.checked){
        spanMascotaJugador.innerHTML = 'Rarigueya'
    }else if(langostelvisChamp.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }else if(tucapalmaChamp.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }else if(pydosChamp.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
    }else{
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()

}

   //---

   //MASCOTA ALEATORIA ENEMIGA

/**
 * Selecciona aleatoriamente una mascota enemiga entre 6 opciones posibles
 * y actualiza el contenido del elemento HTML con el ID 'spanMascotaEnemigo'.
 * @param {HTMLElement} spanMascotaEnemigo
 * @returns {void}
*/

function seleccionarMascotaEnemigo(){
    let ataqueEnemigo = aleatorio(1, 6);

    if(ataqueEnemigo == 1){
        spanMascotaEnemigo.innerHTML = 'Hipoge'
    }else if(ataqueEnemigo == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(ataqueEnemigo == 3){
        spanMascotaEnemigo.innerHTML = 'Rarigueya'
    }else if(ataqueEnemigo == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }else if(ataqueEnemigo == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }else if(ataqueEnemigo == 6){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

   //---

   //FUNCIÓN ALEATORIEDAD

/** 
 * Esta función devuelve un número aleatorio entre un mínimo y un máximo dado.
 * @param {number} min número mínimo
 * @param {number} max número máximo
 * @returns {number} devuelve un número entre el número mínimo y el máximo seleccionados usando una operación matematica. 
*/

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

   //---

   //VARIABLES CAMPEONES

/**
 * Las variables que terminan en 'Champ' representan elementos del DOM que corresponden 
 * a los diferentes campeones que puede seleccionar el jugador.
 * @type {HTMLElement}
*/

let hipogeChamp = document.getElementById('hipoge');
let capipepoChamp = document.getElementById('capipepo');
let rarigueyaChamp = document.getElementById('rarigueya');
let langostelvisChamp = document.getElementById('langostelvis');
let tucapalmaChamp = document.getElementById('tucapalma');
let pydosChamp = document.getElementById('pydos');

   //---

   //VARIABLES MASCOTAS

/**
 * Le muestra al jugador qué mascota eligió por medio del DOM.
 * @type {HTMLElement}
*/

let spanMascotaJugador = document.getElementById('mascotaJugador');

/**
 * Le muestra al jugador cuál es la mascota del enemigo por medio del DOM.
 * @type {HTMLElement}
*/

let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

   //---

   //EVENTO MASCOTA JUGADOR

/**
 * Obtiene el botón del DOM con el ID 'botonMascotas' y asigna un evento de clic que ejecuta la función 'seleccionarMascotaJugador'.
 * @type {HTMLButtonElement}
*/

let botonMascotaJugador = document.getElementById('botonMascotas');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

   //---