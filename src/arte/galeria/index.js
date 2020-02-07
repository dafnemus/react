import React from 'react';
import Cuadrilla from'./cuadrilla/index';
import photo from '../photo/index';
import Expandida from './expansion/index';

class Galeria extends React.Component{
    state={isOpen:false}
  
   openModal=()=>this.setState({isOpen:true})
   closeModal=()=>this.setState({isOpen:false})
   
   render(){
    
       return(
           
           <div>
               <Cuadrilla photo={photo} openModal={this.openModal} ></Cuadrilla>
               {this.state.isOpen === true && <Expandida isOpen={this.state.isOpen} closeModal={this.closeModal} photo={photo}></Expandida>}
              
           </div>

       )
}
}
export default Galeria;
