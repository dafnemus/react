import React from 'react';
import Dafne from './dafne/index';
import Arte from './arte/index';
import Front from './front/index';
import Nuevas from './nuevas/index';
import Edicion from './edicion/index';
import './App.css';



class App extends  React.Component {
  render() {
    return (  

      <div className="App">
        <div className="App-header">
          <h1 className="App-logo"></h1>

          <Dafne/>
          <Arte>
          </Arte>
          <Front/>
          <Nuevas/>
          <Edicion/>
          
          <h1 className="App-logo"></h1>
           </div>
            </div>
        
    );
  }
}


export default App;
