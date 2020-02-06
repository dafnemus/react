import React from 'react';
import './stile.css';



function Imagenes(props) {
    
        return(
            <img className="imagen" src={props.src} alt="" onClick={props.handleClick} />
        );
    
}
   



export default Imagenes;
