import React from 'react';
import {Consumer} from '../context';

function Form(){
    
    const InputNombre = ({ value, onChange}) => (
        <input
          value={value}
          onChange={event => onChange({ value: event.target.value })}
          style={{ width: "100%", fontSize: "1.5em" }}
        
        />
      );
      
      const InputApellido = ({ value, onChange }) => (
        <input
          value={value}
          onChange={event => onChange({ value: event.target.value })}
          style={{ width: "100%", fontSize: "1.5em" }}

          />
      );
return(
    <Consumer>
    {({nombre, setNombre, apellido, setApellido})=><form>
        <label>Nombre: </label>
        <InputNombre value={nombre} onChange={setNombre} />
        <label>Apellido: </label>
        <InputApellido  value={apellido} onChange={setApellido}/>
     
    </form>
    }
    </Consumer>
)
}

export default Form