import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCity,
  faBusinessTime,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";







const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        
	<li className="nav-item">
          <Link to={"#"} className="nav-link">
            <FontAwesomeIcon icon={faUsers} />
            &nbsp; &nbsp;
            <p>
              PERSONAS
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to={"/listUsr"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Usuarios</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/listOwner"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Residentes</p>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to={"#"} className="nav-link">
            <FontAwesomeIcon icon={faCity} />
            &nbsp; &nbsp;
            <p>
              OPERACIONES
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to={"/listBuilding"} className="nav-link">
                <i className="fa fa-home nav-icon" />
                <p>Inmuebles
                <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={"/listCoefficient"} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Coeficientes</p>
                  </Link>
              
                </li> 
              </ul>
                

            </li>
            <li className="nav-item">
              <Link to={"/listMaintenance"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Mantenimientos</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/listCommonArea"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Areas comunes</p>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to={"#"} className="nav-link">
            <FontAwesomeIcon icon={faBusinessTime} />
            &nbsp; &nbsp;
            <p>
              FACTURACIÓN
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to={"/createBilling"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Facturación</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/listTariff"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Tarifas</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/listNews"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Novedades</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/listConcept"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Conceptos de factura</p>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <FontAwesomeIcon icon={faWallet} />
            &nbsp; &nbsp;
            <p>
              GESTIÓN
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to={"../../index.html"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Reservas</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"../../index2.html"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Asambleas</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
