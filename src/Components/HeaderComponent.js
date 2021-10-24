import React, { Component } from 'react'
import Navbar from './Navbar'

class Header extends Component {
  render() {
    return (
      <>
        <Navbar />
      
        <div className="container">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Restuarant Con Fusion</h1>
              <p class="col-md-8 fs-4">We take Inspiration from the worlds best Cuisines, and create a unique fusion Experience. Our Lipsmacking creation will ticle your culinery senses.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header
