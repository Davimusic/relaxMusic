"use client"

import Imagenes from "./Img";
import {usarAudio} from '../funciones/UsarAudio'


const editoresReproductor = ({id}) => {

    const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   

    return (
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
    );
};


export default editoresReproductor;
