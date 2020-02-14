import React from 'react';
import './style.css'

function ImagenPluma(props){
    return(
        <img className="imagen-pluma" src={props.pluma.url}  alt=""></img>
    );
}

export default ImagenPluma;