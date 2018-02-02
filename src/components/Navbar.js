import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-shadow navbar-light fixed-top bg-light">
                    <Link to="/" className="navbar-brand">Album Reviews <i className="fas fa-comments"></i></Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/browse" className="nav-link">Browse</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/reviews" className="nav-link">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/create" className="btn btn-dark">Create Review</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
