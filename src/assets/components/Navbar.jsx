import React from 'react';
import {Link } from 'react-router-dom';
import Routes from './allRoutes';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                   {Routes.map((route,index)=>{
                        return(
                               
                            <li key={index} className="nav-item">
                            <Link className="nav-link" to={route.path}>{route.title}</Link>
                          </li>
                        )
                    })
                   }
                            
                            {/* <li className="nav-item">
                                <NavLink className="nav-link " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact">Contact</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;