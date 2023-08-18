import { reproducirAudio } from "./ReproducirAudio";
import {arrePadre} from './RetornarInfoAudios'
import {actualizarColorFondo} from './ActualizarColorFondo'
import { audioToast } from "./AudioToast";
import { variablesGlobales } from "./VariablesGlobales";


export function usarAudio(i, d) {
    const audio = document.getElementById('audioRep');
    const arreAudiosPadre = arrePadre()
    const botonPlay = document.getElementById('botonRepro1');

    if (i === 'play') {
        if (audio.src === '') {
            audio.src = arreAudiosPadre[0].linkAudio;
        }

        if (variablesGlobales().getReproducir() === 'no') {
            audio.play();
            variablesGlobales().setReproducir('si')
            botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png';
        } else {
            audio.pause();
            variablesGlobales().setReproducir('no')
            botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png';
        }

    } else if (i === 'adelante' || i === 'atras') {

        variablesGlobales().setCoor(
            (variablesGlobales().getCoor() 
            + 
            (i === 'adelante' ? 1 : -1) 
            + arreAudiosPadre.length) 
            % arreAudiosPadre.length)

        reproducirAudio(variablesGlobales().getCoor());

    } else if (i === 'aleatorio' || i === 'repetir') {
        variablesGlobales().setEstado(i)
    } else {
        variablesGlobales().setCoor(i)
        reproducirAudio(variablesGlobales().getCoor());
    }

    audio.addEventListener('loadedmetadata', function() {
        document.getElementById('input').max = audio.duration;
    });

    clearInterval(variablesGlobales().getIntervaloSubir()); // Detener el intervalo anterior
    variablesGlobales().setIntervaloSubir(setInterval(subir, 1000))  // Crear un nuevo intervalo
    actualizarColorFondo('secAudio', variablesGlobales().getCoor(), '#00000052', '#083fa78f', arreAudiosPadre.length);
    actualizarColorFondo('botonRepro', d, '#06ec98', '#ffffff', 5)

    function subir(){
        let audio = document.getElementById('audioRep')
        //console.log(audio.currentTime)
        document.getElementById('input').value=audio.currentTime
    }

    function onAudioEnded() {
        //const audio = document.getElementById('audioRep');
        if(variablesGlobales().getEstado() == 'audioActual'){
            
        } else if(variablesGlobales().getEstado() == 'repetir'){
            usarAudio(variablesGlobales().getCoor())
        } else if(variablesGlobales().getEstado() == 'aleatorio'){
            let numAle = Math.round(Math.random() * ((arreAudiosPadre.length - 1) - 0));
            usarAudio(numAle)
        }
        audio.removeEventListener('ended', onAudioEnded); // Eliminar el oyente
    }
    audio.addEventListener('ended', onAudioEnded);

    audioToast(i)
}






