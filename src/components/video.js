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
    console.log(audio.currentTime)
    document.getElementById('input').value=audio.currentTime
}


export function Video(){

const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   

    return(
        <div>
            {usarReproductorAudio()}
            <div style={{display: "flex", height: 'min-content', margin: '1vh'}} className='espacioEquilatero'>
                <Imagenes  onClick={() => usarAudio('adelante')} className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png' />
                <Imagenes  onClick={() => usarAudio('play')}     className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png' />
                <Imagenes  onClick={() => usarAudio('pause')}    className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png' />
                <Imagenes  onClick={() => usarAudio('atras')}    className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png' />
                <audio id='audioRep' controls   style={{display: 'none'}}>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
            <div style={{margin: '1vh'}}>
                <RangeInput id='input'/>
            </div>
        </div>
    )
}

let coor = 0
function usarAudio(i, d){
    console.log(`${i} ${d}`)
    let audio = document.getElementById('audioRep')
    if(i == 'pause'){
        audio.pause()
    } else if(i == 'play'){
        audio.play()
    } else if(i == 'adelante'){
        if(coor+1 < arreAudiosPadre.length){
            coor += 1
        } else {
            coor = 0
        }
        console.log(coor);
        audio.src = arreAudiosPadre[coor].linkAudio
        audio.play()
    } else if(i == 'atras'){
        if(coor-1 >= 0) {
            coor -= 1
        } else {
            coor = (arreAudiosPadre.length - 1)
        }
        console.log(coor);
        audio.src = arreAudiosPadre[coor].linkAudio
        audio.play()
    } else {
        coor = i
        console.log(coor);
        audio.src = arreAudiosPadre[coor].linkAudio
        audio.play()
    }

    setInterval(subir, 1000)// buscar pararlo y reinicralo cada vez que paro o cambio
    actualizarColorFondo(coor)
}

function actualizarColorFondo(i){
    for (let u = 0; u < arreAudiosPadre.length; u++) {
        document.getElementById(`secAudio${u}`).style.background = '#264439'
    }
    document.getElementById(`secAudio${i}`).style.background = 'gray'
}

function usarReproductorAudio(){
    const styleImages = {height: '10vh', width: '10vh'}

    return(
            <div style={{ width: "100%", height: '85vh', overflow: 'scroll', whiteSpace: 'nowrap', background: "#264439", padding: "20px" }}>
                {arreAudiosPadre.map((item, index) => (
                    <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '15vh', borderRadius: '0.5em', padding: '20px', marginBottom:'20px' }} className='efectoFondoTransparente'>
                        <div style={{display: "flex"}}>
                            <Imagenes link={item.imagenAudio} style={styleImages} className={'efectoGirar'}/>
                            <div style={{ marginLeft: '20px' }}>
                                <h2>{item.titulo}</h2>
                                <h3>{item.contenido}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );

}
