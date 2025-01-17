

 let ataqueJugador  
 let contraAtaqueEnemigo

/**
 * El jugador selecciona su mascota, el jugador da click en uno de los botones de ataque llamando a la función 
 * propia de cada botón.
 * @returns {void}
 */
function iniciarJuego(){

    /**
     * Obtiene el botón del DOM con el ID 'botonMascotas' y asigna un evento de clic que ejecuta la función 'seleccionarMascotaJugador'.
     * @type {HTMLButtonElement}
    */
    let botonMascotaJugador = document.getElementById('botonMascotas');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuegoJs = document.getElementById('botonFuego');
    botonFuegoJs.addEventListener('click', ataqueFuego);

    let botonAguaJs = document.getElementById('botonAgua');
    botonAguaJs.addEventListener('click', ataqueAgua);

    let botonTierraJs = document.getElementById('botonTierra');
    botonTierraJs.addEventListener('click', ataqueTierra);

}

 //SELECCIONAR MASCOTA

/**
 * En la función cuando el jugador da click sobre una mascota y presiona el botón "seleccionar", el DOM
 * de la sección "seleccionarAtaque" mostrará la mascota seleccionada.
 * @param {HTMLElement} seleccionarMascotaJugador 
 * @returns {void}
*/

function seleccionarMascotaJugador(){

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

    /**
     * Le muestra al jugador qué mascota eligió por medio del DOM.
     * @type {HTMLElement}
    */

    let spanMascotaJugador = document.getElementById('mascotaJugador');


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
    let mascotaAleatoria = aleatorio(1, 6);

    /**
     * Le muestra al jugador cuál es la mascota del enemigo por medio del DOM.
     * @type {HTMLElement}
    */

    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')


    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipoge'
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = 'Rarigueya'
    }else if(mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }else if(mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }else if(mascotaAleatoria == 6){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

   //---

/**
 * Selecciona el tipo de ataque enemigo usando la función aleatorio y lo almacena en la variable 
 * global "contraAtaqueEnemigo", esto permite que la variable sea dinamica y se pueda llamar esta función más adelante
 * en el código.
 * @returns {void}
*/   

function ataqueEnemigo(){
    let contraAtaqueAleatorio = aleatorio(1, 3);

    if(contraAtaqueAleatorio == 1){
        contraAtaqueEnemigo = 'FUEGO'
        alert("Ataque enemigo " + contraAtaqueEnemigo)
    }else if(contraAtaqueAleatorio == 2){
        contraAtaqueEnemigo = 'AGUA'
        alert("Ataque enemigo " + contraAtaqueEnemigo)
    }else if(contraAtaqueAleatorio == 3){
        contraAtaqueEnemigo = 'TIERRA'
        alert("Ataque enemigo " + contraAtaqueEnemigo)
    }
}   

/**
 * Si el usuario seleccionó el botón de fuego, esta función cambiara la variable global "ataqueJugador", lanzará 
 * una alerta y llamada a la función "ataqueEnemigo"
 * @returns {void}
 */
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
    ataqueEnemigo();
}

/**
 * Si el usuario seleccionó el botón de agua, esta función cambiara la variable global "ataqueJugador", lanzará 
 * una alerta y llamada a la función "ataqueEnemigo"
 * @returns {void}
 */
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
    ataqueEnemigo();
}

/**
 * Si el usuario seleccionó el botón de tierra, esta función cambiara la variable global "ataqueJugador", lanzará 
 * una alerta y llamada a la función "ataqueEnemigo"
 * @returns {void}
 */
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
    ataqueEnemigo();
}

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

/**
 * Inicializa el juego al cargar la página.
 * Agrega un event listener al botón de selección de mascota del jugador.
*/

window.addEventListener('load', iniciarJuego)


