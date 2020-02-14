import React from 'react';
import Titulo from '../componentesTexto/titulos/index';
import Epigrafe from '../componentesTexto/epigrafe/index';
import plumaurl from './pluma';
import ImagenPluma from './imagenpluma';
import './styles.css';

function Edicion(){
    return(
                  <div>
                    <Titulo text="Edición"/>
                    <Epigrafe text="Curso en la  Facultad de Filosofía y Letras(UBA) la carrera de edición, en la cual me tocó realizar un catálogo de Filosofía Feminista y ser por una vez Booktubder desde la edición del video."/>
                    <ImagenPluma pluma={plumaurl}/>

                  </div>
  
    )
  }
  
export default Edicion;  