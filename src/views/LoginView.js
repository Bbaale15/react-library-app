import React from 'react';
import LoginForm from '../components/loginForm';
import HttpClient from '../Services/httpClient';
// import { browserHistory } from 'react-router-dom';


class LoginView extends React.Component {
    state = {
        username: '',
        password: '',
        alert_messages:''
    }
    handleOnchange = (e) => {
        let fields = {[e.target.id]: e.target.value};
        this.setState( {
            fields:fields
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        HttpClient.post('auth/login', null, data).then(res => {
            //Login was sucessful. Add token to local storage.
            if(res){
               localStorage.setItem('userData', res);
               // Redirect to private area.
            //    browserHistory.push('/menu');
            }
        });
    }

    render() {
        return (
            <LoginForm action="Login" handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
        )
    }
}

export default LoginView;