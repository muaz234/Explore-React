import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Textbox from './TextBox/Textbox'
import ButtonWithoutBind from './Button/ButtonWithoutBind/ButtonWithoutBind'
import Table from './Table/table'

class App extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      num: 0,
      name: ''

    }
  }
  incrementNum = () => {
    this.setState({
      num: this.state.num + 1

    })
  }

   saveValue = (event) => {
     this.setState({ name: event.target.value })
   }

   showValue = () => {
     console.log(this.state.name)
   }

   render () {
     const { name } = this.state.name
     const details = [
       {
         'name': 'Amri Yahya',
         'details': 'amri@yahoo.com'
       },
       {
         'name': 'Mr Brian',
         'details': 'brian@yahoo.com'
       },
       {
         'name': 'Najib Bossku',
         'details': 'najib@mastermind.com'

       }
     ]
     return (
      <div className='App'>
         {/* <header className='App-header'> */}
         <img src={logo} className='App-logo' alt='logo' />
         {/* </header> */}

         <div className='container' style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
           <Table details={details} />
         </div>

         <Textbox text='Reassign Data' value='13' />
         <br />
         {this.state.num}
         <button onClick={this.incrementNum}>Add</button>
         <ButtonWithoutBind />
         {this.state.name}

         <input type='text' value={this.state.name} name='testing' placeholder={name || null} onChange={this.saveValue} />
         <button type='submit' onClick='{this.showValue}'>Enter</button>

       </div>
     )
   }
}

export default App
