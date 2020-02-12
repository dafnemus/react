import React from 'react';
import './stile.css';



function Imagenes(props) {
       let handleClick = () => props.handleClick(props.src, props.id);
        
        return(
            <img className="imagen" src={props.src} alt=""  id={props.id} onClick={handleClick} />
        );
    
}
   



export default Imagenes;
