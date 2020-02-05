import React from 'react';
import './estilos.css';
import photo from '../photo/index'
import Galeria from './galeria/index';


function Arte(){
    return(
          <div className="contenedor">
           <h1>Arte Digital</h1>
           <p>En el 2019 retome un hobbie: El DIBUJO, deje  por un rato de lado lo analogo por lo digital.</p>
           <Galeria photo={photo}/>
          </div>
  
    );
  }

  export default Arte;