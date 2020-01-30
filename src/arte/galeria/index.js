import React from 'react';
import Imagenes from './imagenes/index';
import './style.css';
import Expandida from './expansion/index';

class Galeria extends React.Component{
    state={isVisible:false,
    src:''}

    handelClick = (src)=>this.setState({isVisible: true,
                                        src: src})
    render(){
        const {isVisible}=this.state;
    return(
    <div>
        <Imagenes onClick={this.handelClick}></Imagenes>
        {isVisible && (
            <Expandida src={this.state.src}/>
        )}
    </div>
    );
 }
}



export default Galeria;