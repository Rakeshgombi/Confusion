import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: 'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label: 'Hot',
          price: '4.99',
          description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
        },
        {
          id: 1,
          name: 'Zucchipakoda',
          image: 'assets/images/zucchipakoda.png',
          category: 'appetizer',
          label: '',
          price: '1.99',
          description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
        },
        {
          id: 2,
          name: 'Vadonut',
          image: 'assets/images/vadonut.png',
          category: 'appetizer',
          label: 'New',
          price: '1.99',
          description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
        },
        {
          id: 3,
          name: 'ElaiCheese Cake',
          image: 'assets/images/elaicheesecake.png',
          category: 'dessert',
          label: '',
          price: '2.99',
          description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        }
      ],
    }
  }

  render() {
    return (
      this.state.dishes.map((dish) => {
        return (
          <div className="container my-4">
            <div class="card my-2 p-1 d-flex justify-content-center">
              <div class="row g-0">
                <div class="col-md-2">
                  <img src={dish.image} className="img-fluid w-100 rounded-start" alt="..." />
                </div>
                <div className="col-md-10 d-flex justify-content-center">
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">{dish.description}</p>
                    <p className="card-text"><small className="text-muted">{dish.category}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }
}

export default Menu;
