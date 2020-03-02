import React from 'react';
import { Consumer } from '../context';

function Navbar(){
    return(
        <div>
    <Consumer>
        {({nombre, apellido})=> 
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
        </ul>}
        </Consumer>
    
    </div>)
}

export default Navbar;