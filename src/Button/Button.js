import React, { Component } from 'react';

class Button extends Component{
   
  
    render(){
        return(
            <div className="Button">
            <div class="form-group">
           <button>{this.props.button}</button>
            </div>
            </div>
        )

       
    }

   

}

export default Button;