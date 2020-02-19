import React from 'react';
import marco from '../titulos/marco.svg'
import './style.css';

function Titulo({text, className}){
    return(
        <div>
        <h1 className="titulo">{text}</h1>
        <img className={className} src={marco} alt="" />
        </div>
    )
};

export default Titulo;