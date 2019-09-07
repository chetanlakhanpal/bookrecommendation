import React, { Component } from "react";
import {HOSTNAME} from '../constants'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      synopsis: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${HOSTNAME}/book/addbook`, {
      cors: true,
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <input className="form-control" type="text" name="name" placeholder="Book Name" required onChange={e => {this.setState({name: e.target.value})}}/>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="synopsis" placeholder="Add Synopsis data here" onChange={e => {this.setState({synopsis: e.target.value})}} ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-info">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Book