import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom'; 


const Login = () => {
    return (
        <div className='hold-transition login-page'>
        
            <div className="card" >
                <div className="card-body login-card-body">
                    <div className="login-box">
                        <div className="login-logo">
                            
                            <img className="card-img-top" src={ logo } alt="Logotipo" />
                           
                        </div>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Usuario" 
                                    id="user"
                                    name="user"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user-alt"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Contraseña" 
                                    id="password"
                                    name="password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link to={'/principal'} className="btn btn-block btn-danger">
                                    Acceder al sistema
                                </Link>
                                

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;