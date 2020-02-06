import React from 'react';
import './style.css';
import Boton from './botones/index';
import cruz from './iconos/cruzar.svg';
import adelante from './iconos/avance-rapido.svg';
import atras from './iconos/avance-rapido.svg';



class Expandida extends React.Component{
  render(){ 
    return(
        
        <div className='container'>
                <img src={this.props.photo} className='expandida' alt=""></img>
                <Boton icono={cruz} handleClick={this.props.closeModal} id='cierre'></Boton>
                <Boton icono={atras} id='anterior'></Boton>
                <Boton icono={adelante} id='siguiente'></Boton>
        </div>
    );
  }
}

export default Expandida
