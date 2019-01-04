import React, { Component } from 'react';


export class Textbox extends Component {
    render(){
        return (
            <div className="Textbox">
                <input type="number" name="id" value="15" placeholder="Enter an id"></input> <br/>
                <input type="text" name="Description" value="tommorow is Saturday" placeholder="Enter a value"></input>
            </div>
        )

    }
}

export default Textbox ;