import React from 'react';
import  './styles.css'

function Boton(props){

    return(
        <div >
            <button onClick={props.handleClick} className='btn'id={props.id}><img src={props.icono}alt="icono"/></button>
          
        </div>
      
    ) 
}

export default Boton;