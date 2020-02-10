import React from 'react';
import './style.css';
import Boton from './botones/index';
import cruz from './iconos/cruzar.svg';
import adelante from './iconos/avance-rapido.svg';
import atras from './iconos/avance-rapido.svg';



class Expandida extends React.Component{

  atras=()=>{
    let index = this.props.index - 1 
    let url=this.props.photo[index].url

    this.props.updateIndex(url, index)
  };

  siguiente=()=>{};

  render(){ 
    return(
      
      <div className='container'>
                <img src={this.props.url} className='expandida' alt=""></img>
                <Boton icono={cruz} handleClick={this.props.closeModal} id='cierre'></Boton>
                <Boton handleClick={this.atras} icono={atras} id='anterior'></Boton>
                <Boton icono={adelante} id='siguiente'></Boton>
        </div>
    );
  }
}

export default Expandida
