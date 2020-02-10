import React from 'react';
import './stile.css';



function Imagenes(props) {
       let handleClick =(event) =>{
            props.handleClick(event.target.src, event.target.id)
            
        }
        return(
            <img className="imagen" src={props.src} alt=""  id={props.id} onClick={handleClick} />
        );
    
}
   



export default Imagenes;
