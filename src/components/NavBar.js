import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link 
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
         
        </ul>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            
            <div className="navbar-search-block">
                <form className="form-inline">
                <div className="input-group input-group-sm">
                    
                    <div className="input-group-append">
                    
                    </div>
                </div>
                </form>
            </div>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
                <h3 className="text-sm text-muted" > Administrador del sistema propiedad horizontal</h3>
                
            </li>
       
         
        
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
