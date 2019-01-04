import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './List'
import Textbox from './TextBox/Textbox';
import Button from './Button/Button'

class App extends Component {
  constructor(props){
    super(props);
      console.log(this.props);
        this.state =  {
          num: 0,
        };
  }
  incrementNum = () =>    {
    this.setState({
      num : this.state.num + 1  
    }) ; 
   }  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           <List title="New Project"/>
           <List user="Initial Project"/> 
           </p>
            <Textbox />
           <br/>
           {this.state.num}
          <button onClick={this.incrementNum}>Add</button> 
          
         
        </header>
      </div>
    );
  }

 

 
  
}

export default App;
