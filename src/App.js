import React, { Component } from 'react';
import Formulario from './form/index';
import './App.css';

class App extends Component {
  state={
   archivarInfo:''
  };

  enviar=(datos) => {
    this.setState({archivarInfo:datos})};


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-logo"></h1>
            <Formulario enviar={this.enviar}/>
           </div>
            </div>
        
    );
  }
}



export default App;
