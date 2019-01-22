import React, { Component } from 'react'


export class Textbox extends Component {
  render () {
    return (
      <div className='Textbox'>
        <input type='number' name='id' value={this.props.value} placeholder='Enter an id' /> <br />
        <input type='text' name='Description' value={this.props.text} placeholder='Enter a value' />
      </div>
    )
  }
}

export default Textbox 
