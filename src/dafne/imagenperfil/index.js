import React from 'react';
import './style.css';

function ImagenPerfil(props){
return(
<img className="foto-perfil54" src={props.perfil.url} id={props.perfil.id} alt=""/>);
};




export default ImagenPerfil;
