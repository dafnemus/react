import React from 'react';
import pajaro from '../imagenperfil/pajaro.webp'
import './style.css';

function ImagenPerfil(props){
return(
<div>
<img className="foto-perfil54"  src={props.perfil.url} id={props.perfil.id} alt=""/>
<img className="pajaro" src={pajaro} alt=""/>
</div>
);
};




export default ImagenPerfil;
