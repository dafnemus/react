import React from 'react';
import Titulo from '../componentesTexto/titulos/index';
import Epigrafe from '../componentesTexto/epigrafe/index';
import plumaurl from './pluma';
import ImagenPluma from './imagenpluma';
import ImagenPdf from './imagenlogo/imagenPdf';
import ImagenVideo from './imagenlogo/imagenvideo';
import logoPdf from './logo/logoPdf';
import logoVideo from './logo/logoVideo';
import Video from './expansion'
import './styles.css';

class Edicion extends React.Component{
  state={
    open:false
  }

  openModal=(src)=>this.setState({open:true, src})
  closeModal=()=>this.setState({open:false})


  render(){
    return(
                  <div>
                    <Titulo className="marco5" text="Edición"/>
                    <Epigrafe text="Curso en la  Facultad de Filosofía y Letras(UBA) la carrera de edición, en la cual me tocó realizar un catálogo de Filosofía Feminista y ser por una vez Booktubder desde la edición del video."/>
                    <div className="logos">
                    <div className="pdf-epigrafe">
                    <ImagenPdf logoPdf={logoPdf}/>
                    <Epigrafe text="Catálogo Filosofía Feminista"/>
                    </div>
                    <div className="video-epigrafe">
                    <ImagenVideo logoVideo={logoVideo} openModal={this.openModal}/>
                    {this.state.open === true && <Video open={this.state.open} src={this.state.src} closeModal={this.closeModal}/>}
                    <Epigrafe  text="Booktubers del Lector"/>
                    </div>
                    </div>
                    <ImagenPluma pluma={plumaurl}/>

                  </div>
  
    )
  }
  }
  
export default Edicion;  