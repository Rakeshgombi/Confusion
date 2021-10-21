import React from 'react'

const Dishdetail = (props) => {
  {
    return ((props.dish != null) ?
      <div className="row container mx-auto">
        <div className="card my-2 col-md-6 p-1 d-flex justify-content-center">
          <div className="g-0">
            <div className="col">
              <img src={props.dish.image} className="img-fluid w-100 rounded-start" alt="..." />
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card-body d-flex justify-content-center flex-column">
                <h5 className="card-title">{props.dish.name}</h5>
                <p className="card-text">{props.dish.description}</p>
                <p className="card-text"><small className="text-muted">{props.dish.category}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-2 col-md-6 p-1 d-flex justify-content-center">
          <div className="g-0">
            <div className="col">
              <h2>Comments</h2>
            </div>
            {
              props.dish.comments.map((commentObj) => {
                return (
                  <div className="col d-flex justify-content-center" key={commentObj.id}>
                    <div className="card-body d-flex justify-content-center flex-column">
                      <p className="card-text">{commentObj.comment}</p>
                      <p className="card-text">-- {commentObj.author}, {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentObj.date)))}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      : null
    )
  }
}


export default Dishdetail;
