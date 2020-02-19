import React from 'react';
import './estilos.css';
import Galeria from './galeria/index';
import Titulo from '../componentesTexto/titulos';
import Epigrafe from '../componentesTexto/epigrafe';
import mano from './mano.webp'


function Arte(){
    return(
          <div className="contenedor">
           <Titulo className="marco2" text="Arte Digital"/>
           <Epigrafe text="En el 2019 retome un hobbie: El DIBUJO, deje  por un rato de lado lo analogo por lo digital."/>           
           <img  className="mano" src={mano} alt="" />
           <Galeria/>
          </div>
  
    );
  }

  export default Arte;