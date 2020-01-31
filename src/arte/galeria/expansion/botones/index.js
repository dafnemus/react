import React from 'react';
import  './styles.css'

function Boton(props){

    return(
        <div >
            <button onClick={props.handleClick} className='btn'> x </button>
        </div>
      
    ) 
}

export default Boton;