import React from 'react';
import Titulo from '../componentesTexto/titulos/index';
import Epigrafe from '../componentesTexto/epigrafe';
import Bigotes from './bigotes';
import './style.css';

function Front(){
    return(
    <div>
  
        <Titulo className="marco3" text="Front End"/>
        <Epigrafe text="Señor Bigotes es lo primero que logre desarrollar en equipo, donde solo utilizamos HTML, CSS y un poco de JS."/>
        <div className="bigotes-container">
        <Epigrafe className="titulo-bigotes" text="Sr. Bigotes"/>
        <Bigotes/>
        </div>
      
    </div>
    );
  }

  export default Front; 