import React from 'react';
import LoginForm from '../components/loginForm';
import HttpClient from '../Services/httpClient';
// import { browserHistory } from 'react-router-dom';


class LoginView extends React.Component {
    state = {
        username: '',
        password: '',
        alert_messages: '',
        disabled: false
    }
    handleOnchange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
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
            this.setState({ disable : true });
            if (res) {
                this.setState({ disable : false });
                localStorage.setItem('userData', res);
                // Redirect to private area.
                this.props.history.push('/menu');
            }
        });
    }

    render() {
        return (
            <LoginForm action="Login" disabled={this.state.disabled} handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
        )
    }
}

export default LoginView;