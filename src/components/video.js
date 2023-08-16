"use client"
import Imagenes from './Img';
import RangeInput from './InputRange'



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


function saludar(e){
    console.log(e);
    document.getElementById('inputRangeA').value = e
    console.log(document.getElementById('inputRangeA').value);
}


function subir(){
    let audio = document.getElementById('audioRep')
    //console.log(audio.currentTime)
    document.getElementById('input').value=audio.currentTime
}


export function Video(){

const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   

    return(
        <div>
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
                    <Imagenes  onClick={() => usarAudio('adelante')} className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png' />
                    <Imagenes  onClick={() => usarAudio('play')} id='play'    className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png' />
                    <Imagenes  onClick={() => usarAudio('atras')}    className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png' />
                    <Imagenes  onClick={() => usarAudio('aleatorio')}    className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692146284/ale_tkcekv.jpg' />
                    <Imagenes  onClick={() => usarAudio('repetir')}    className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692146284/repe_odo27o.png' />
                    <audio id='audioRep' preload = "metadata" controls   style={{display: 'none'}}>
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>
            </div>
        </div>
    )
}

let coor = 0, reproducir = 'no', intervaloSubir
function usarAudio(i, d) {
    const audio = document.getElementById('audioRep');
    //const contenedorAudios = document.getElementById('contenedorAudios');
    const botonPlay = document.getElementById('play');

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
        alert(i);
    } else {
        coor = i;
        reproducirAudio(coor);
    }

    audio.addEventListener('loadedmetadata', function() {
        document.getElementById('input').max = audio.duration;
    });

    clearInterval(intervaloSubir); // Detener el intervalo anterior
    intervaloSubir = setInterval(subir, 1000); // Crear un nuevo intervalo
    actualizarColorFondo(coor);


    // para cuando acabe el audio
    audio.addEventListener('ended', function() {
        usarAudio('adelante')
    });
}


function reproducirAudio(coor) {
    const audio = document.getElementById('audioRep');
    const contenedorAudios = document.getElementById('contenedorAudios');
    const botonPlay = document.getElementById('play');

    audio.src = arreAudiosPadre[coor].linkAudio;
    contenedorAudios.style.backgroundImage = `url(${arreAudiosPadre[coor].imagenAudio})`;
    contenedorAudios.style.backgroundRepeat = 'no-repeat';
    contenedorAudios.style.backgroundSize = 'cover';
    
    console.log(coor);
    audio.play();
    reproducir = 'si';
    botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png';
}

function actualizarColorFondo(i){
    for (let u = 0; u < arreAudiosPadre.length; u++) {
        document.getElementById(`secAudio${u}`).style.background = '#00000052'
    }
    document.getElementById(`secAudio${i}`).style.background = '#264439'
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
