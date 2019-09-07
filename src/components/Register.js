import React, { Component } from "react";
import './Login.css'
import {Redirect } from "react-router-dom"

class Register extends Component {

  constructor(props) {
    super(props)
    //TYPES: USER, PUBLISHER, AUTHOR
    this.state = {
      registerType: 'USER',
      name: '',
      email: '',
      password: '',
      genres: '',
      registered: false
    }
    this.genreRef = React.createRef()
  }

  componentDidMount() {
    
  }

  handleSubmit(event) {
    event.preventDefault()
    this.fetchSelectedOptions()
    this.setState({
      registered: true
    })
  }

  fetchSelectedOptions = () => {
    let selectedValues = []
    const options = this.genreRef.current && this.genreRef.current.options
    for(let i = 0; i < options.length; i++){
      if(options[i].selected === true) {
        selectedValues.push(options[i].value)
      }
    }
    this.setState({
      genres: selectedValues
    })
  }

  handleUserTypeChange = (event) => {
    this.setState({
      registerType: event.target.value
    })
  }

  render() {
    const genres = [
      'Narrative',
      'Fiction',
      'Novel',
      'Poetry',
      'Drama'
    ]

    if(this.state.registered) {
      return (
        <Redirect to="/dashboard"/>
      )
    }

    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="login-form">
            <div className="main-div">
              <div className="form-group">
                <input type="text" maxLength="30" className="form-control" id="inputName" placeholder="Full Name"  />
              </div>
              <div className="form-group">
                <input type="email" maxLength="30" className="form-control" id="inputEmail" placeholder="Email Address" onChange={(e) => {
                  this.setState({
                    email: e.target.value
                  })
                }}/>
              </div>
              <div className="form-group">
                <input type="password" maxLength="30" className="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>{
                  this.setState({
                    password: e.target.value
                  })
                }}/>
              </div>
              <div className="form-group">
                <select className="form-control" onChange={(e) => {
                  this.setState({
                    registerType: e.target.value
                  })
                }}>
                  <option value="USER">User</option>
                  <option value="AUTHOR">Author</option>
                  <option value="PUBLISHER">Publisher</option>
                </select> 
              </div>
              <div className="form-group">
                {this.state.registerType === 'USER' && (
                  <div className="form-group">
                    <select className="form-control" ref={this.genreRef} multiple>
                        <option>Interest</option>
                        {genres.map(value => (
                          <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                  </div>  
                )}
              </div>

                <button type="submit" className="btn btn-primary">Register</button>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Register