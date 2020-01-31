import React from 'react';
import Imagenes from './imagenes/index';
import './style.css';
import Expandida from './expansion/index';

class Galeria extends React.Component{
    state={isOpen:false}
    
    openModal=(src)=>this.setState({isOpen:true, src:src});

    closeModal=()=>this.setState({isOpen:false})

    render(){
        return(
            <div>
                <Imagenes onClick={this.openModal}></Imagenes>
                {this.state.isOpen === true && <Expandida  src={this.state.src} isOpen={this.state.isOpen} closeModal={this.closeModal}></Expandida>}
                
            </div>
        )
    }
}



export default Galeria;