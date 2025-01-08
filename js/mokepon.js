

//Seleccionar mascota
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

//Mascota aleatoria enemiga
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

//Función aleatoreidad 
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//VARIABLES

//Variables campeones 
let hipogeChamp = document.getElementById('hipoge');
let capipepoChamp = document.getElementById('capipepo');
let rarigueyaChamp = document.getElementById('rarigueya');
let langostelvisChamp = document.getElementById('langostelvis');
let tucapalmaChamp = document.getElementById('tucapalma');
let pydosChamp = document.getElementById('pydos');

//Variables mascotas
let spanMascotaJugador = document.getElementById('mascotaJugador');
let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

//Evento mascota del jugador
let botonMascotaJugador = document.getElementById('botonMascotas');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);