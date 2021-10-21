import React, { Component } from 'react'
import Navbar from './Navbar';
import Menu from './MenuComponent';
import { DISHES } from '../Shared/dishes'
import Dishdetail from './DishdetailComponent ';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId })
  }
  render() {
    return (
      <>
        <Navbar />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </>
    )
  }
}

export default Main;
