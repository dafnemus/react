import React from 'react';
import Text from './texto/text';
import perfil from './perfil/index';
import ImagenPerfil from './imagenperfil/index';
import './estilos.css';


function Dafne(){
    return(
      <div>
    <h1>Dafne Musante</h1>
    <div className="perfil">
    <Text></Text>
    <ImagenPerfil perfil={perfil}/>
    </div>
    </div>
    );
  }

  export default Dafne;