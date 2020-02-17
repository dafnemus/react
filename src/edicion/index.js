import React from 'react';
import Titulo from '../componentesTexto/titulos/index';
import Epigrafe from '../componentesTexto/epigrafe/index';
import plumaurl from './pluma';
import ImagenPluma from './imagenpluma';
import ImagenPdf from './imagenlogo/imagenPdf';
import ImagenVideo from './imagenlogo/imagenvideo';
import logoPdf from './logo/logoPdf';
import logoVideo from './logo/logoVideo';
import './styles.css';

function Edicion(){
    return(
                  <div>
                    <Titulo text="Edición"/>
                    <Epigrafe text="Curso en la  Facultad de Filosofía y Letras(UBA) la carrera de edición, en la cual me tocó realizar un catálogo de Filosofía Feminista y ser por una vez Booktubder desde la edición del video."/>
                    <div className="logos">
                    <div className="pdf-epigrafe">
                    <ImagenPdf logoPdf={logoPdf}/>
                    <Epigrafe text="Catálogo Filosofía Feminista"/>
                    </div>
                    <div className="video-epigrafe">
                    <ImagenVideo logoVideo={logoVideo}/>
                    <Epigrafe  text="Booktubers del Lector"/>
                    </div>
                    </div>
                    <ImagenPluma pluma={plumaurl}/>

                  </div>
  
    )
  }
  
export default Edicion;  