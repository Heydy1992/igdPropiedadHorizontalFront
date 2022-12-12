import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
                </li>
                
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"#"} className="nav-link" data-widget="fullscreen" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;