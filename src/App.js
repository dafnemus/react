import React, { Component } from 'react';
import {Provider} from './context';
import Navbar from './navbar';
import Form from './form';
import './App.css';


class App extends Component {
  state={
    nombre:'',
    setNombre: ({ value }) => this.setState({ nombre: value }),
    apellido:'',
    setApellido: ({ value }) => this.setState({ apellido: value })
  }
  render() {
    return (
      <div className="App">
      <Provider value={this.state}>
      <Navbar/>
      <Form/>
      </Provider>
      </div>
    );
  }
}

export default App;
