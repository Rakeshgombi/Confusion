import React, { Component } from 'react'

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      if (this.props.dish != null) {
        return (
          <div className="row">
            <div className="card my-2 col-md-6 p-1 d-flex justify-content-center">
              <div className="g-0">
                <div className="col">
                  <img src={this.props.dish.image} className="img-fluid w-100 rounded-start" alt="..." />
                </div>
                <div className="col d-flex justify-content-center">
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">{this.props.dish.name}</h5>
                    <p className="card-text">{this.props.dish.description}</p>
                    <p className="card-text"><small className="text-muted">{this.props.dish.category}</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-2 col-md-6 p-1 d-flex justify-content-center">
              <div className="g-0">
                <div className="col">
                  <h2>Comments</h2>
                </div>
                {this.props.dish.comments.map((commentObj) => {
                  return (
                    <div className="col d-flex justify-content-center" key={commentObj.id}>
                      <div className="card-body d-flex justify-content-center flex-column">
                        <p className="card-text">{commentObj.comment}</p>
                        <p className="card-text">-- {commentObj.author}, {commentObj.date}</p>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        )
      }
      else {
        return (
          <div></div>
        )
      }
    }
  }
}

export default Dishdetail;
