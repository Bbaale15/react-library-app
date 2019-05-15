import React from 'react';
import { Link } from 'react-router-dom';

const nav = (props) => {
    const { appTitle } = props;
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">{appTitle}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link className="nav-link" to='/'>
                        <li className="nav-item active">
                            Sign Up
                        </li>
                    </Link>
                    <Link className="nav-link" to='/login'>
                        <li className="nav-item">
                            Login
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default nav;