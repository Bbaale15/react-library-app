import React from 'react';
import SignUpView from './views/SignUpView';
import './App.css';

function App(props) {

  return (
<div>
<nav className="navbar navbar-expand-md navbar-light bg-light">
<a className="navbar-brand" href="/">React Library App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>

    <div className="container">
      <div className="row">
      <div className="col-6">
      <SignUpView name={props.loginName}/>
      </div>
      </div>
    </div>
</div>
  );
}

export default App;
