import React from 'react';
import Nav from '../components/nav';

class NavView extends React.Component {

    render() {
      return (
          <Nav  appTitle={this.props.appTitle} isLoggedIn = {this.props.isLoggedIn} userName = {this.props.userName}  handleLogout = {this.props.handleLogout} />
      )
    }
}

export default NavView;