"use client"
import '../estilos/swichMode.css'


let estadoSwicthMode = 0
const switchMode = ({id}) => {

    function screenMode(){
        const color1 = document.querySelectorAll(".color1");
        const colorLetra1 = document.querySelectorAll('.colorLetra1')
        let colorFondo = '', colorLetra = ''
        if(estadoSwicthMode == 0){
            estadoSwicthMode = 1
            colorFondo = 'black'
            colorLetra = 'white'
        } else {
            estadoSwicthMode = 0
            colorFondo = 'white'
            colorLetra = 'black'
        }
        color1.forEach(elemento => {
            elemento.style.transition= '1s';
            elemento.style.backgroundColor = colorFondo;
        });
        colorLetra1.forEach(elemento => {
            elemento.style.transition= '1s';
            elemento.style.color = colorLetra;
        });

        
    }

    return (
        <div>
            <label className="switch">
                <input onClick={() => screenMode()}   type="checkbox"/>
                <span className="slide round"></span>
            </label>
        </div>
    );
};


export default switchMode;