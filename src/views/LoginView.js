import React from 'react';
import LoginForm from '../components/loginForm';

class LoginView extends React.Component {
    state = {
        username:'',
        password:'',
        disabled: true
    }
    handleOnchange=(e)=>{
       this.setState({
           [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }


    render() {
      return (
          <LoginForm disabled={this.state.disabled} action="Login" handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
      )
    }
}

export default LoginView;