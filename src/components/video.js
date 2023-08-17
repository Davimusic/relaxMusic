"use client"
import Imagenes from './Img';
import RangeInput from './InputRange'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



let arreAudiosPadre =  [{ linkAudio:'https://res.cloudinary.com/dplncudbq/video/upload/v1657579441/mias/m1_s2epfa.mp3',
                            imagenAudio: 'https://res.cloudinary.com/dplncudbq/image/upload/v1658015902/mias/i1_ndc8ga.png', 
                            titulo: 'titulo', 
                            contenido: 'contenido contenido contenido contenido contenido contenido contenido contenido contenido contenido  contenido contenido contenido'
                            },
                            { linkAudio:'https://res.cloudinary.com/dplncudbq/video/upload/v1658158699/mias/26mesclaLista_kf3qai.wav',
                            imagenAudio: 'https://res.cloudinary.com/dplncudbq/image/upload/v1657473822/mias/red-304573_xrlhrp.png', 
                            titulo: 'titulo', 
                            contenido: 'contenido'
                        }, { linkAudio:'https://res.cloudinary.com/dplncudbq/video/upload/v1655401932/mias/pista1C_i5w9id.wav',
                            imagenAudio: 'https://res.cloudinary.com/dplncudbq/image/upload/v1655489421/mias/instagram_uugsxq.png', 
                            titulo: 'titulo', 
                            contenido: 'contenido'
                        }, { linkAudio:'https://res.cloudinary.com/dplncudbq/video/upload/v1657299118/mias/m2_koysag.mp3',
                            imagenAudio: 'https://res.cloudinary.com/dplncudbq/image/upload/v1657297550/mias/logoGenerico_dotmc8.png', 
                            titulo: 'titulo', 
                            contenido: 'contenido'
                        }, { linkAudio:'https://res.cloudinary.com/dplncudbq/video/upload/v1658158699/mias/26mesclaLista_kf3qai.wav',
                            imagenAudio: 'https://res.cloudinary.com/dplncudbq/image/upload/v1657473822/mias/red-304573_xrlhrp.png', 
                            titulo: 'titulo', 
                            contenido: 'contenido'
                    }]

function subir(){
    let audio = document.getElementById('audioRep')
    //console.log(audio.currentTime)
    document.getElementById('input').value=audio.currentTime
}

function audioToast(mensaje){
    toast.success(mensaje, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export function Video(){

const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   



    return(
        <div>
            <ToastContainer />
            <div style={{display: 'flex'}}>
                <div style={{width: '40vh', padding: '10px', background: 'blue'}}>
                    <ul className="container">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                {usarReproductorAudio()} 
            </div>
            <div>  
                <div style={{display: 'flex'}} className='espacioEquilatero'>
                    <RangeInput id='input'/>
                </div>         
                <div style={{display: "flex", height: 'min-content', margin: '1vh'}} className='espacioEquilatero'>
                    <Imagenes  onClick={() => usarAudio('adelante', 0)}  id='botonRepro0'  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png' />
                    <Imagenes  onClick={() => usarAudio('play', 1)}      id='botonRepro1'  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png' />
                    <Imagenes  onClick={() => usarAudio('atras', 2)}     id='botonRepro2'  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png' />
                    <Imagenes  onClick={() => usarAudio('aleatorio', 3)} id='botonRepro3'  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692223038/mias/alea_awok3b.png' />
                    <Imagenes  onClick={() => usarAudio('repetir', 4)}   id='botonRepro4'  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692223037/mias/re_oyr9yt.png' />
                    <audio id='audioRep' preload = "metadata" controls   style={{display: 'none'}}>
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>
            </div>
        </div>
    )
}

let coor = 0, reproducir = 'no', intervaloSubir, estado = 'audioActual'
function usarAudio(i, d) {
    const audio = document.getElementById('audioRep');
    //const contenedorAudios = document.getElementById('contenedorAudios');
    const botonPlay = document.getElementById('botonRepro1');

    if (i === 'play') {
        if (audio.src === '') {
            audio.src = arreAudiosPadre[0].linkAudio;
        }

        if (reproducir === 'no') {
            audio.play();
            reproducir = 'si';
            botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png';
        } else {
            audio.pause();
            reproducir = 'no';
            botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png';
        }
    } else if (i === 'adelante' || i === 'atras') {
        coor = (coor + (i === 'adelante' ? 1 : -1) + arreAudiosPadre.length) % arreAudiosPadre.length;
        console.log(coor);
        reproducirAudio(coor);
    } else if (i === 'aleatorio' || i === 'repetir') {
        estado = i
    } else {
        coor = i;
        reproducirAudio(coor);
    }

    audio.addEventListener('loadedmetadata', function() {
        document.getElementById('input').max = audio.duration;
    });

    clearInterval(intervaloSubir); // Detener el intervalo anterior
    intervaloSubir = setInterval(subir, 1000); // Crear un nuevo intervalo
    actualizarColorFondo('secAudio', coor, '#00000052', '#083fa78f', arreAudiosPadre.length);
    actualizarColorFondo('botonRepro', d, '#06ec98', '#ffffff', 5)

    function onAudioEnded() {
        //const audio = document.getElementById('audioRep');
        if(estado == 'audioActual'){
            
        } else if(estado == 'repetir'){
            usarAudio(coor)
        } else if(estado == 'aleatorio'){
            let numAle = Math.round(Math.random() * ((arreAudiosPadre.length - 1) - 0));
            usarAudio(numAle)
        }
        audio.removeEventListener('ended', onAudioEnded); // Eliminar el oyente
    }
    audio.addEventListener('ended', onAudioEnded);

    audioToast(i)
}

function reproducirAudio(coor) {
    const audio = document.getElementById('audioRep');
    const contenedorAudios = document.getElementById('contenedorAudios');
    const botonPlay = document.getElementById('botonRepro1');

    audio.src = arreAudiosPadre[coor].linkAudio;
    contenedorAudios.style.backgroundImage = `url(${arreAudiosPadre[coor].imagenAudio})`;
    contenedorAudios.style.backgroundRepeat = 'no-repeat';
    contenedorAudios.style.backgroundSize = 'cover';
    
    console.log(coor);
    audio.play();
    reproducir = 'si';
    botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png';
}

function actualizarColorFondo(contidoId, id, colorResaltar, colorGeneral, largoArreglo){
    for (let u = 0; u < largoArreglo; u++) {
        document.getElementById(`${contidoId}${u}`).style.background = colorGeneral
    }
    document.getElementById(`${contidoId}${id}`).style.background = colorResaltar
}

function usarReproductorAudio(){
    const styleImages = {height: '5vh', width: '5vh'}

    return(
            <div id='contenedorAudios' style={{ width: "100%", height: '90vh', background: "black", padding: "10px" }} className='scrollVertical'>
                {arreAudiosPadre.map((item, index) => (
                    <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '10vh', borderRadius: '0.5em', padding: '10px', marginBottom:'10px' }} className='efectoFondoTransparente'>
                        <div style={{display: "flex"}}>
                            <Imagenes link={item.imagenAudio} style={styleImages} className={'efectoGirar'}/>
                            <div style={{ marginLeft: '20px', height: '10.5vh', width: '90vw' }} className='scrollVertical'>
                                <h2>{item.titulo}</h2>
                                <h3>{item.contenido}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
}
