import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './List'
import Textbox from './TextBox/Textbox';
import Button from './Button/Button'
import ButtonWithoutBind from './Button/ButtonWithoutBind/ButtonWithoutBind';

class App extends Component {
  constructor(props){
    super(props);
      console.log(this.props);
        this.state =  {
          num: 0,
          name : ''

        };
  }
  incrementNum = () =>    {
    this.setState({
      num : this.state.num + 1,

    }) ; 
   }  

   saveValue = (event) => {
    this.setState({name : event.target.value})
   }

   showValue = () =>{
     console.log(this.state.name)
   }

  render() {
    const {name} = this.state.name; 

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
          <Button button="Reset" />
         <ButtonWithoutBind/>
         {this.state.name}

         <form>
           <input type="text" value={this.state.name} name="testing" placeholder={name ? name : null} onChange={this.saveValue} />
           <button type="submit" onClick="{this.showValue}">Enter</button>
         </form>
        </header>
      </div>
    );
  }

 

 
  
}

export default App;

