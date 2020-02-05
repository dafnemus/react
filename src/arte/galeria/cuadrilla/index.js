import React from 'react';
import Imagenes from './imagenes/index';
import './style.css';

function Cuadrilla(props){

    return(
     <div className="galeria">
         {
             props.photo.map ((photo)=>{
                 return <Imagenes key={photo.id} src={photo.url}/>
             })
         }
     </div>
   ) 
}



export default Cuadrilla;