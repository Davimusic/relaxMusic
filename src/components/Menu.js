"use client"

import Imagenes from "./Img";
import SwitchMode from './SwichtMode';


const menu = ({id}) => {
    
    const styleLi = {display: 'flex', marginRight: '5px'}
    const styleA = {marginRight: '5px',  marginRight: 'auto'}
    const styleIma = {width: '6vh', height: '6vh',  marginLeft: 'auto'}

    return (
        <ul className="container">
            <li style={styleLi} className="espacioEquilatero">
                <a style={styleA} href="#"> Inicio</a>
                <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/casa_qqdrbh.png'/>
            </li>
            <li style={styleLi} className="espacioEquilatero">
                <a style={styleA} href="#"> Buscar</a>
                <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/lupa_dyyko5.png'/>
            </li>
            <h3>PLAY LIST</h3>
            <li style={styleLi} className="espacioEquilatero">
                <a style={styleA} href="#"> Crear nueva lista</a>
                <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318587/mias/agregar_elne1c.png'/>
            </li>
            <li style={styleLi} className="espacioEquilatero">
                <a style={styleA} href="#"> Mis favoritos</a>
                <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'/>
            </li>
            <SwitchMode/>
        </ul>    
    );
};


export default menu;