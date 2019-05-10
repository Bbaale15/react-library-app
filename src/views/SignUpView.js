import React from 'react';
import SignUpForm from '../components/signupForm';
import HttpClient from '../Services/httpClient';

class SignUpView extends React.Component {
    state = {
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        disabled: true
    }
    handleOnchange=(e)=>{
       this.setState({
           [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const resp = HttpClient.post('https://librarymanagement-api.herokuapp.com/api/register', this.state)
        console.log(resp);
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
        console.log(this.state)
      return (
          <SignUpForm disabled={this.state.disabled} action="signup" handleOnchange={this.handleOnchange} handleSubmit={this.handleSubmit} />
      )

    }
}

export default SignUpView;
