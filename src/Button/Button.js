import React, { Component } from 'react';

class Button extends Component{
   
  
    render(){
        return(
            <div className="Button">
            <div class="form-group">
            <input type="button" value={this.props.btnvalue} name="Submit" ></input>        
                {/* <input type="reset" value="Reset" name="reset" class="btn btn-danger"></input> */}
            </div>
            </div>
        )

       
    }

   

}

export default Button;