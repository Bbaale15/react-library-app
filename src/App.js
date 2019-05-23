import React from 'react';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import MenuView from './views/MenuView';
import Nav from './views/NavView'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <div className="container">
            <div className="row">
              <div className="col-6">
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
}

// function App(props) {


// }

export default App;