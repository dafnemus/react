import React, { Component } from 'react';
import './stile.css';
import composicion from './photo/composicion.jpg';
import compo2 from './photo/compo2.jpg';
import compo4 from './photo/compo4.jpg';
import japon from './photo/japon.jpg';



class Imagenes extends Component{
    handleClick = (event) => this.props.onClick(event.target.src);
    render() {
        return(
            <div className="contenedor">
                <img src={composicion} className={this.props.className}onClick={this.handleClick} alt="composicion" />
                <img src={compo2}      className={this.props.className} onClick={this.handleClick} alt="compo2" />
                <img src={compo4}      className={this.props.className} onClick={this.handleClick} alt="compo4" />
                <img src={japon}  className={this.props.className}   onClick={this.handleClick} alt="japon"/>
            </div>
        );
    }
}
   



export default Imagenes;
