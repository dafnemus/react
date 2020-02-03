import React from 'react';
import './style.css';
import cruz from './botones/iconos/cruz.png';
import atras from './botones/iconos/atras.png';
import adelante from './botones/iconos/adelante.png';
import Boton from './botones/index';


class Expandida extends React.Component{
  render(){ 
    return(
        
        <div className='container'>
        {console.log(this.props.closeModal)}
                <img src={this.props.src} className='expandida' alt=""></img>
                <Boton src={cruz} handleClick={this.props.closeModal}></Boton>
                <Boton src={atras}></Boton>
                <Boton src={adelante}></Boton>
            </div>
    );
  }
}

export default Expandida
