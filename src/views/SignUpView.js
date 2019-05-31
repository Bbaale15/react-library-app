import React from 'react';
import SignUpForm from '../components/signupForm';
import HttpClient from '../Services/httpClient';

class SignUpView extends React.Component {
    state = {
        username: '',
        // email: '',
        password: '',
        confirmPassword: '',
        disabled: false,
        invalid: false
    }
    handleOnchange = (e) => {
        const name = e.target.id;
        const value = e.target.value
        this.setState({
            [name]: value
        }, () => {
           switch(name){
               case 'username':
               if(value.length === 'deo'){
                   this.setState({
                       invalid:true
                   })
                   return;
               }
               this.setState({
                   invalid: false
               })
               break;
               case 'email':
               break;
           }
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
            this.setState({ disabled: true });
            this.props.history.push('/login');
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
    componentDidMount() {
        const token = localStorage.getItem('token');
        this.goHome(token);
    }


    goHome = (val) => {
        if (val) {
            this.props.history.push('/menu');
        }
    }


    render() {
        // console.log(this.state)
        return (
            <SignUpForm invalid={this.state.invalid} disabled={this.state.disabled} action="signup" handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
        )

    }

    // componentWillUnmount = () => {
    //     console.log("Component removed from DOM.");
    // }

   

}

export default SignUpView;
