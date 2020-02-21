import React from 'react';


class Video extends React.Component{
  
    render(){ 
      return(
        
        <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/U0Q78L6rmwE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <button onClick={this.props.closeModal}>X</button>
        </div>
      );
    }
  }
  
  export default Video;
  