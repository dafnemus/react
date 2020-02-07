import React from 'react';
import './style.css'

class Formulario extends React.Component{
   state={
       nombre:'',
       comentario:''
   };
   handleSubmit=(event)=>{
       event.preventDefault();
       this.props.enviar(this.state);
   }
    render(){
    return(
        <div>
      <form className="form" onSubmit={this.handleSubmit}>
           <div className="contenedorNombre" >
           <label> Nombre </label>
           <input type="text" id="nombre" name="nombre" onChange={(event)=>{this.setState({nombre: event.target.value})}}></input>
           </div>
           <div className="contenedorIdeas">
           <label> Comentario  </label>
           <textarea type="text" id="comentario" name="comentario" onChange={(event)=>{this.setState({comentario: event.target.value})}}></textarea>
           </div>
           <button type="submit"className="boton">Enviar</button>
         </form>
         
    </div>
  
    );
    }
  }

  export default Formulario;