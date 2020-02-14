import React from 'react';
import perfil from './perfil/index';
import ImagenPerfil from './imagenperfil/index';
import Titulo from '../componentesTexto/titulos';
import Parrafo from '../componentesTexto/parrafo';
import './estilos.css';


function Dafne(){
    return(
      <div>
        <Titulo text="Dafne Musante"/>
    <div className="perfil">
    <Parrafo text="Soy una persona curiosa, sociable y divertida. Me gusta diversificar mis conocimientos, ya sea desde lo digital(programación, diseño gráfico) o desde lo analogo (edición de libros, jardinería) con el fin de seguir aprendiendo. El trabajo en equipo con alegría es clave para poder un sano crecimiento profesional. Busco ser parte de un grupo de trabajo que busque realizar un cambio por medio del desarrollo web. Teniendo como valores el compromiso por el bien común ante el ambiente y la sociedad."/>
    <ImagenPerfil perfil={perfil}/>
    </div>
    </div>
    );
  }

  export default Dafne;