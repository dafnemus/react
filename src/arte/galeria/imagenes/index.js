import React from 'react';
import './stile.css';
import composicion from './composicion.jpg';
import compo2 from './compo2.jpg';
import compo4 from './compo4.jpg';
import japon from './japon.jpg';



function Imagenes(props){
    return(
        <div className="contenedor">
            <img src={composicion} onClick={props.onClick} alt="composicion" />
            <img src={compo2} onClick={props.onClick} alt="compo2" />
            <img src={compo4} onClick={props.onClick} alt="compo4" />
            <img src={japon} onClick={props.onClick} alt="japon"/>
        </div>
    );
}
   



export default Imagenes;
