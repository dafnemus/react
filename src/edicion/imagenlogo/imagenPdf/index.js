import React from 'react';
import './style.css';

function ImagenPdf(props){
    return(
        <img className="logo-pdf" src={props.logoPdf.url} alt=""></img>
    );
}

export default ImagenPdf;