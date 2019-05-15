import React from 'react';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import Nav from './views/NavView'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <div className="container">
            <div className="row">
              <div className="col-6">
                {/* <SignUpView name={props.loginName} /> */}
                <Route path="/" exact component={SignUpView} />
                <Route path="/login" component={LoginView} />
              </div>
            </div>
          </div>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
