import React, { Component } from "react";
import './Login.css'
import { Redirect } from "react-router-dom"

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginError: false,
      email: '',
      password: '',
      authenticated: false
    }
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.setState({loginError: false})
    
    const data = [
      {
        id: 1,
        email: 'reader@xyz.com',
        password: '1',
        type: 'USER'
      }, {
        id: 2,
        email: 'publisher@xyz.com',
        password: '1',
        type: 'PUBLISHER'
      }, {
        id: 3,
        email:'author@xyz.com',
        password: '1',
        type: 'AUTHOR'
      }, 
    ]

    const user = data.filter(value => {
      return value.email === this.state.email && value.password === this.state.password
    })

    if(user[0] !== undefined) {
      this.props.loggedInUser(user[0])
      this.setState({
        authenticated: true
      })
    } else {
      this.setState({loginError: true})
    }
  }

  render() {
    if (this.state.authenticated){
      return (
        <Redirect to='/dashboard'/>
      )
    }
    return (
      <div>
        <form onSubmit={(e) => this.handleLogin(e)} id="LoginForm">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <p>Please enter your email and password</p>
              {this.state.loginError && (
                  <div class="alert alert-danger" role="alert">
                  Invalid Credentials
                </div>
              )}

            </div>
            <div className="form-group">
              <input required type="email" maxLength="30" className="form-control" id="inputEmail" placeholder="Email Address" onChange={(e) => {
                this.setState({
                  email: e.target.value
                })
              }}/>
            </div>
            <div className="form-group">
              <input required type="password" maxLength="30" className="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>{
                this.setState({
                  password: e.target.value
                })
              }}/>
            </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </div>
        </form>
      </div>
    )
  }
}

export default Login