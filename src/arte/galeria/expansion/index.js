import React from 'react';
import './style.css';
import Boton from './botones/index';

class Expandida extends React.Component{
  render(){ 
    return(
        
        <div className='container'>
        {console.log(this.props.closeModal)}
                <img src={this.props.src} className='expandida' alt=""></img>
                <Boton handleClick={this.props.closeModal}></Boton>
            </div>
    );
  }
}

export default Expandida
