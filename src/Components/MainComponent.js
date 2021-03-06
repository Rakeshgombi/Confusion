import React, { Component } from 'react'
import Menu from './MenuComponent';
import { DISHES } from '../Shared/dishes'
import Dishdetail from './DishdetailComponent ';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
      <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer/>
      </>
    )
  }
}

export default Main;
