import React from 'react'

const Menu = (props) => {
  return (
    <div className="container my-4 row mx-auto d-flex justify-content-center">
      {props.dishes.map((dish) => {
        return (
          <div className="card col-12 col-md-5 p-1 m-1 d-flex justify-content-center" role="button" onClick={() => props.onClick(dish.id)}>
            <div className="g-0">
              <div className="col bg-">
                <img src={dish.image} className="img-fluid w-100 rounded-start" alt="..." />
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title">{dish.name}</h5>
                  <p className="card-text"><small className="text-muted">{dish.category}</small></p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu;
