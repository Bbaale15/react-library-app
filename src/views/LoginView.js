import React from 'react';
import LoginForm from '../components/loginForm';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';
// import { browserHistory } from 'react-router-dom';
import HOC from '../hoc/logInHoc';

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
        this.setState({ disabled : true });
        this.props.loginAction(data);
        // HttpClient.post('auth/login', null, data).then(res => {
        //     //Login was sucessful. Add token to local storage.
        //     this.setState({ disable : true });
        //     if (res) {
        //         this.setState({ disable : false });
        //         localStorage.setItem('userData', JSON.stringify(res));
        //         // Redirect to private area.
        //         this.props.history.push('/menu');
        //     }
        // });
    }

    componentWillReceiveProps(nextProps, nextContext) {

        this.goHome(nextProps.loginState.loginStatus);
        this.setState({ disabled : false });
    }

    componentDidMount() {
        console.log('HOC login view')
        const token = localStorage.getItem('token');
        this.goHome(token);
    }

    goHome = (val) => {
        if (val) {
            this.props.history.push('/menu');
        }
    }

    render() {
        return (
            <LoginForm action="Login" disabled={this.state.disabled}
             handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
        )
    }

    
}

// export default LoginView;
export const mapStateToProps = state => {
    return {
        loginState: state.LoginState
    }
}
export default connect(mapStateToProps, { loginAction })(LoginView) ;