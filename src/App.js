
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Menu from './Components/MenuComponent';


export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Menu/>
      </>
    )
  }
}

export default App
