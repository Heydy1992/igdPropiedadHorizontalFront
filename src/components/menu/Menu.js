import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <Link to="#" className="nav-link" >
              <i className="fa-thin fa-people-arrows" />
              <p>
                PERSONAS
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Usuarios</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listOwner" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Residentes</p>
                </Link>
              </li>
              
            </ul>
          </li>


          <li className="nav-item">
            <Link to="#" className="nav-link" >
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                OPERACIONES
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inmuebles</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../../index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Mantenimientos</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../../index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Areas comunes</p>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link" >
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                FACTURACIÓN
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Facturación</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../../index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Tarifas</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../../index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Novedades</p>
                </Link>
              </li>
            </ul>
          </li>


          <li className="nav-item">
            <Link to="#" className="nav-link" >
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                GESTIÓN
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Reservas</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../../index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Asambleas</p>
                </Link>
              </li>
              
            </ul>
          </li>




         
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
