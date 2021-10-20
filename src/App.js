
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Menu from './Components/MenuComponent';
import { DISHES } from './Shared/dishes'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      dishes: DISHES
    };
  }
  render() {
    return (
      <>
        <Navbar />
        <Menu dishes={this.state.dishes}/>
      </>
    )
  }
}

export default App
