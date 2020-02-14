import React from 'react';
import './style.css'
function ImagenMarco(props){
    return(
        <img className="imagen-marco" src={props.image.url} id={props.image.id} alt=""></img>
    );
}

export default ImagenMarco;