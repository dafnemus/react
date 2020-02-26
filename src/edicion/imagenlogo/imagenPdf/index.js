import React from 'react';
import catalogo from './catalogo.pdf'
import './style.css';

function ImagenPdf(props){
    return(
        <div>
            <a href={catalogo} download="catalogo"><img className="logo-pdf" src={props.logoPdf.url} alt="catalogo"></img></a>
            
      </div>
    );
}

export default ImagenPdf;