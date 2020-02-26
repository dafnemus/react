import React from 'react';
import bigotes from './bigotes.png';
import Animation from './animacion';
import Boton from './boton';
import './style.css'

function Bigotes(){
    return(
        <div className="container-b">
        <Animation  src={bigotes}/>
        <Boton/>
        </div>
        )
}

export default Bigotes;