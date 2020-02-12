import React from 'react';
import Text from './texto/text'
import perfil from './perfil/index'
import './estilos.css';


function Dafne(){
    return(
      <div>
    <h1>Dafne Musante</h1>
    <Text></Text>
    <img perfil={perfil}></img>
    </div>
    );
  }

  export default Dafne;