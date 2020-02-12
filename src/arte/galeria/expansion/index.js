import React from 'react';
import './style.css';
import Boton from './botones/index';
import cruz from './iconos/cruzar.svg';
import adelante from './iconos/avance-rapido.svg';
import atras from './iconos/avance-rapido.svg';



class Expandida extends React.Component{

  atras=()=>{
    let index = (this.props.index -1 + this.props.photo.length) % this.props.photo.length;
    let url = this.props.photo[index].url;

    this.props.updateIndex(url, index);
  };

  siguiente=()=>{
    let index = (this.props.index + 1) % this.props.photo.length; 
    let url = this.props.photo[index].url;
    
 this.props.updateIndex(url, index);
  };

  render(){ 
    return(
      
      <div className='container'>
                <img src={this.props.url} className='expandida' alt=""></img>
                <Boton icono={cruz} handleClick={this.props.closeModal} id='cierre'></Boton>
                <Boton handleClick={this.atras} icono={atras} id='anterior'></Boton>
                <Boton handleClick={this.siguiente} icono={adelante} id='siguiente'></Boton>
                <span>{this.props.index +'/3'}</span>
      </div>
    );
  }
}

export default Expandida
