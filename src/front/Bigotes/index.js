import React from 'react';
import ImagenBigotes from './imagenBigotes';
import bigotes from './bigotes.png';
import BotonBigotes from './botonBigotes';
import './style.css'

function Bigotes(props){
    return(
        <div className="bigotes">
            <h1>Sr. Bigotes</h1>
            <ImagenBigotes src={bigotes}/>
            <BotonBigotes/>
       </div>
    )
}

export default Bigotes