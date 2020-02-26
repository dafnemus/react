import React from 'react';
import cruzar from './cruzar.svg';
import './style.css'


class Video extends React.Component{
  
    render(){ 
      return(
        
        <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/U0Q78L6rmwE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
              <button className="cerrar" onClick={this.props.closeModal}><img src={cruzar} alt="icono"/></button>
        </div>
      );
    }
  }
  
  export default Video;
  