import React, { Component } from 'react'

class Updates extends Component {

  constructor(){
    this.state = {
      data: [{
        id: 1,
        bookName: '',
        userName: 'Full name',
        rating: 4,
        title: '',
        description: '',
        imagename: ''
      }]
    }
  }

  componentDidMount(){
    //fetch data and assign to state
  }

  render() {
    return (
    <div>
      {this.state.data.map(value => (
        <div key={value.id} className="card">
            <div className="card-body">
              <div className="float-left">
                <img src={value.imagename} alt="" width="50"/>
                <h2>{value.title}</h2>
                <h3>Rating: {value.rating}</h3>
                <p>{value.description}</p>
              </div>
            </div>
        </div>
      )
      )}
    </div>
    )
  }
}

export default Updates