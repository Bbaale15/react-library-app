import React from 'react';
import Button from './button'
const signupForm = (props) => {
    const { handleSubmit, handleOnchange, disabled } = props;
    return (
        <div>
            <h3>Create an account</h3>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        {/* <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleOnchange} type="email" className="form-control" id="email" name = "email"  aria-describedby="emailHelp" placeholder="Enter email"/>
                </div> */}
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={handleOnchange} type="text" className="form-control" id="username" name="username" placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={handleOnchange} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input onChange={handleOnchange} type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" />
                        </div>
                        <Button disabled={disabled} type="submit" action="Register" className="btn-success" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default signupForm;
