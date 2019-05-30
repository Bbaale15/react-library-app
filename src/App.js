import React from 'react';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import MenuView from './views/MenuView';
import Nav from './views/NavView'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import OrdersView from './views/OrdersView';



class App extends React.Component {

  state = {
    isLoggedIn: false,
    userName: ''
  }

  render() {
    return (
      <div className="main-div">
        <Router>
          <Nav appTitle="Fast Foods App" isLoggedIn={this.state.isLoggedIn} userName={this.state.userName} handleLogout={this.handleLogOut} />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Switch>
                  <Route path="/" exact component={SignUpView} />
                  <Route path="/login" component={LoginView} />
                  <Route path="/menu" render={() => (this.state.isLoggedIn ? (<MenuView />) : (<Redirect to="/login" />))} />
                  <Route path="/orders" render={() => (this.state.isLoggedIn ? (<OrdersView />) : (<Redirect to="/login" />))} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const loginState = nextProps.loginState;
    if (loginState) {
      if (loginState.loginStatus) {
        this.setState(
          {
            isLoggedIn: true,
            userName: loginState.payload.username
          });
      } else {
        this.setState(
          {
            isLoggedIn: false,
            userName: ''
          });
      }
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists update app state.
      this.setState(
        {
          isLoggedIn: true,
          userName: localStorage.getItem('username')
        });
    }

  }

  handleLogOut = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: false });
    localStorage.clear();
  }

}


export const mapStateToProps = state => {
  return {
    loginState: state.LoginState
  }
}

export default connect(mapStateToProps)(App);
// export default App;