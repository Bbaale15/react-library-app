import React from 'react';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import MenuView from './views/MenuView';
import Nav from './views/NavView'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



class App extends React.Component {

  state = {
    isLoggedIn: false,
    userName: ''
  }

  render() {
    return (
      <div className="main-div">
        <Router>
          <Nav appTitle="Fast Foods App" isLoggedIn={this.state.isLoggedIn} userName = {this.state.userName} handleLogout = {this.handleLogOut}  />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Switch>
                  <Route path="/" exact component={SignUpView} />
                  <Route path="/login" component={LoginView} />
                  <Route path="/menu" render={() => (this.state.isLoggedIn ? (<MenuView />) : (<Redirect to="/login" />))} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  };


  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/login';
    console.log('User has been logged out');
  }

}



export default App;