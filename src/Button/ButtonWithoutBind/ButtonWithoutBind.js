import React, { Component } from 'react'

class ButtonWithoutBind extends Component {

    constructor(){
        super();
        this.state = { toggle: false};

    }

    ToggleButton = () =>{
        this.setState(prevState => ({ toggle : !prevState.toggle}));
    }
    render(){

        const toggle = this.state.toggle;
        return(
            <div>
                <button onClick={this.ToggleButton}>
                    {toggle ? "ON" : "OFF"}
                </button>
            </div>
        );
    }
}

export default ButtonWithoutBind;