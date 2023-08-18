"use client"


import RangeInput from './InputRange'
import Menu from './Menu'
import EditoresReproductor from './EditoresReproductor';
import { ToastContainer } from 'react-toastify';
import { ElementoAudio } from './ElementoAudio';
import 'react-toastify/dist/ReactToastify.css';


export function Video(){
    return(
        <div>
            <ToastContainer />
            <div style={{display: 'flex'}}>
                <div style={{width: '40vh', padding: '10px', background: 'blue'}} className='mirar'>  
                    <Menu />
                </div>
                {ElementoAudio()} 
            </div>
            <div>  
                <div style={{display: 'flex'}} className='espacioEquilatero'>
                    <RangeInput id='input'/>
                </div>       
                <EditoresReproductor/>
            </div>
        </div>
    )
}




