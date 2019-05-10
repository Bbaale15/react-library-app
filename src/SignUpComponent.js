import React from 'react';

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
      return (
    <div>
      <h3>Create an account</h3>
      <form  onSubmit={this.handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" id="email" name = "email"  aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="form-group">
      <label htmlFor="fullname">Full Name</label>
      <input type="text" className="form-control" id="fullname"  name="fullname" placeholder="Enter your full name"/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
    </div>
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="Confirm password"/>
    </div>
    <button type="submit"  className="btn btn-primary">Submit</button>
  </form>

    </div>);
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      console.log(data);
    }

    // handleChange(event) {
    //   this.setState({email: event.target.value});
    // }
}

export default SignUpForm;