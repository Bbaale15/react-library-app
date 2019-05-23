import React from 'react';
import SignUpForm from '../components/signupForm';
import HttpClient from '../Services/httpClient';

class SignUpView extends React.Component {
    state = {
        username: '',
        // email: '',
        password: '',
        confirmPassword: '',
        disabled: false
    }
    handleOnchange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ disabled: true });

        const data = {
            username: this.state.username,
            password: this.state.password,
            confirm: this.state.confirmPassword
        }

        HttpClient.post('auth/signup',null, data).then(res=>{
            // Redirect to login page with message.
            console.log(res);
        })


        // fetch('https://librarymanagement-api.herokuapp.com/api/register', {
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(this.state)
        // }).then(res=>res.json()).then(data=>{
        //     console.log(data)
        // })
    }


    render() {
        // console.log(this.state)
        return (
            <SignUpForm disabled={this.state.disabled} action="signup" handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
        )

    }

    // componentWillUnmount = () => {
    //     console.log("Component removed from DOM.");
    // }

    // componentDidMount() {
    //     console.log("Component Just loaded..");
    // }

}

export default SignUpView;
