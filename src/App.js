import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Login from './components/Login'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import { appContext } from "./components/contexts";
class App extends Component {

  constructor() {
    super();
    this.state = {
      loginError: false,
      loggedInUser: {}
    }
  }

  componentDidMount() {
    sessionStorage.removeItem('user')
  }

  loggedInUser = (user) => {
    this.setState({
      loggedInUser: user
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header loggedInUser={this.state.loggedInUser}/>
          <Route path="/" render={() => {
            if(Object.keys(this.loggedInUser).length === 0) {
              return (
                <Redirect to="/login" />
              )
            }
          }}/>
          <Switch>
            {/* <Route path="/book/:book_id" component={Book} /> */}
            <Route exact path="/login"  render={() => {
              if(sessionStorage.getItem('user') !== null) {
                return (<Dashboard user={this.state.loggedInUser}/>)
              }
              return <Login loggedInUser={this.loggedInUser}/>
            }} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" render={() => {
              sessionStorage.removeItem('user')
              return (
                <Redirect to='/login' />
              )
            }} />
            <Route exact path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
