import React from 'react';
import Cuadrilla from'./cuadrilla/index';
import photo from '../photo/index';
import Expandida from './expansion/index';

class Galeria extends React.Component{
    state={
        isOpen:false,
        url: '',
        index: 1  
    }
  
   openModal=(url, index)=>this.setState({isOpen:true, url, index:parseInt(index)})
   closeModal=()=>this.setState({isOpen:false})
   updateIndex=(url, index)=>this.setState({url,index})

   render(){
       return(
           
           <div>
               <Cuadrilla actualizar={this.actualizar} photo={photo} openModal={this.openModal} ></Cuadrilla>
       {this.state.isOpen === true && <Expandida url={this.state.url} isOpen={this.state.isOpen} closeModal={this.closeModal} index={this.state.index} photo={photo} updateIndex={this.updateIndex}/>}
              
           </div>

       )
}
}
export default Galeria;
