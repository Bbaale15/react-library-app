import React from 'react';
import Button from  './button'
const loginForm = (props) => {
    const { handleSubmit, handleOnchange, disabled } = props;
    return(
        <div>
            <h3>Login Form</h3>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleOnchange} type="text" className="form-control" id="username"  name="username" placeholder="Enter your full name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleOnchange} type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                </div>
                <Button disabled={disabled} type="submit" action="Login" className="btn-success"/>
            </form>

        </div>
    );
}
export  default  loginForm;
