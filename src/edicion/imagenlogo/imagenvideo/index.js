import React from 'react';
import './style.css';

function ImagenVideo(props){
    return(
        <img className="logo-video" src={props.logoVideo.url}  onClick={props.openModal} alt="" ></img>
    );
}

export default ImagenVideo;