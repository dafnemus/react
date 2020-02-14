import React from 'react';
import image from './marco/index';
import Titulo from '../componentesTexto/titulos';
import Epigrafe from '../componentesTexto/epigrafe';
import ImagenMarco from './imagenMarco/index';
import './styles.css';

function Nuevas(){
    return(
                    <div>
                      <Titulo text="Nuevas Experiencias"/>
                      <Epigrafe text="A partir de abril de 2017 hasta julio 2018, aunque cada vez que puedo participo de alguna actividad, me sume al Voluntariado de biorremediación de la Reserva Ecológica Lago Lugano, con el objetivo de recuperar y sanear la costa del Arroyo Cildañez. Por medio de limpieza de costa, el armado de sistemas para lograr el saneamiento de aguas, plantaciones de flora nativa de la zona ribereña de Buenos Aires y mucha conciencia. "/>
                      <ImagenMarco image={image}/>
                      <ImagenMarco image={image}/>


                    </div>
    
    );
    }

export default Nuevas;