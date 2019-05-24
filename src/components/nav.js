import React from 'react';
import { Link } from 'react-router-dom';

const nav = (props) => {
    const { appTitle, isLoggedIn, handleLogout, userName } = props;
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
         <div className="container">
            <Link className="navbar-brand" to='/'>
                {appTitle}
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                {isLoggedIn ? <LoggedInMenu  userName = {userName} handleLogout = {handleLogout}  /> : <LoggedOutMenu />}
            </div>
         </div>
        </nav>
    );
}

// Logged in menu
const LoggedOutMenu = (props) => {
    return (
        <ul className="navbar-nav w-100">
            <li className="nav-item">
                <Link className="nav-link" to='/'>Sign Up </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/login'> Login </Link>
            </li>
        </ul>
    )
}

const LoggedInMenu = (props) => {
    const {userName, handleLogout } = props;
    return (
        <ul className="navbar-nav w-100">
            <li className="nav-item">
                <Link className="nav-link" to='/menu'> Menu </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/orders'> Orders </Link>
            </li>

            <li className="nav-item dropdown ml-auto">
                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >{userName}</Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/myorders">My Orders</Link>
                    <Link className="dropdown-item" to="#" onClick={handleLogout}>Log Out</Link>
                </div>
            </li>
        </ul>
    )
}

export default nav;