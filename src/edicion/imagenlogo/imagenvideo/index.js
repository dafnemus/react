import React from 'react';
import './style.css';

function ImagenVideo(props){
    return(
        <img className="logo-video" src={props.logoVideo.url} alt=""></img>
    );
}

export default ImagenVideo;