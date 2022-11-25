import { React, useState, useEffect } from 'react';
import logo from '../../logo.png';
import { Link, useNavigate } from 'react-router-dom'; 
import { login } from "../../utils/APIInvoke";


const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const { username, password } = user;
    
    const onchange = (e) =>{

        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    useEffect( () => {
        document.getElementById("username").focus();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        
        login(user, function(response) {
            console.log(response);
            if(response.succeeded){
                localStorage.setItem("session", response.data.token);
                navigate("/home");
            }else{
                alert("Hubo un error");
            }
        } )

        
    }

    return (
        <div className='hold-transition login-page'>
        
            <div className="card" >
                <div className="card-body login-card-body">
                    <div className="login-box">
                        <div className="login-logo">
                            
                            <img className="card-img-top" src={ logo } alt="Logotipo" />
                           
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input 
                                    type="username" 
                                    className="form-control" 
                                    placeholder="Usuario" 
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={onchange}
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
                                    value={password}
                                    onChange={onchange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-block btn-danger">
                                    Acceder al sistema
                                </button>
                                

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;