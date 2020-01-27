import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-logo"></h1>
          <Dafne/>
          <Arte/>
          <Front/>
          <Nuevas/>
          <Edicion/>
          <h1 className="App-logo"></h1>
          <Formulario/>
           </div>
            </div>
        
    );
  }
}
function Dafne(){
  return(
    <div>
  <h1>Dafne Musante</h1>
  <p>Quién soy? Cómo soy? Qué quiero? Qué hago?</p>
  </div>
  );
}

function Arte(){
  return(
        <div>
         <h1>Arte Digital</h1>
         <p>En el 2019 retome un hobbie: El DIBUJO, deje  por un rato de lado lo analogo por lo digital.</p>
        </div>

  );
}
 
function Front(){
  return(
  <div>
    <div>
       <h1>Front End</h1>
     </div>
       <p>Señor Bigotes es lo primero que logre desarrollar en equipo, donde solo utilizamos HTML, CSS y un poco de JS.</p>
      </div>
  );
}

function Nuevas(){
return(
                <div>
                  <h1>Nuevas Experiencias</h1>
                  <p>Random</p>
                </div>

);
}

function Edicion(){
  return(
                <div>
                  <h1>Edición</h1>
                  <p>Curso en la Facultad de Filosofía y Letras(UBA) la carrera de edición, en la cuál realice los siguientes trabajos:</p>
                </div>

  )
}

class Formulario extends React.Component{
  state={
    nombre:'',
    comentario: ''
  }
  handl
  
  render(){
  return(
    <form className="form" onSubmit={this.handleSubmit}>
         <div className="contenedorNombre">
         <label>Nombre </label>
         <input></input>
         </div>
         <div className="contenedorIdeas">
         <label>Comentario  </label>
         <textarea ></textarea>
         </div>
         <button className="boton">Enviar</button>
       </form>

  )
  }
}
export default App;
