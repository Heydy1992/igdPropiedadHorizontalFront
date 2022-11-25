import { React, useState, useEffect } from 'react';
import logo from '../../logo.png';
import { useNavigate } from 'react-router-dom'; 
import APIInvoke from '../../utils/APIInvoke';
import Swal from 'sweetalert2';





const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const { username, password } = user;
    
    const onChange = (e) =>{

        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    useEffect( () => {
        document.getElementById("username").focus();
    }, []);

    const initLogin = async () => {
        
            const data = {
                userName: user.username,
                password: user.password
        
            };

            const response = await APIInvoke.invokePOST(`/api/Auth/login`, data);
            if(!response.succeeded){
                //Validaciones
                const msg = response.errors[0];
                Swal.fire({
                    title: '',
                    text:msg,
                    icon:'error',
                    showConfirmButton:false,
                    showDenyButton: true,
                    denyButtonText: 'Aceptar',



                });

        
            }else{
                //Obtenemos token de acceso jwt
                const jwt = response.data.accessToken;

                //guardamos el token en local storage
                localStorage.setItem('token',jwt);

                //redireccionamos al home
                navigate('/Home');




            }
      
        
        

        
    };

    const onSubmit = (e) => {
        e.preventDefault();
        initLogin();
        
       
           

        
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
                                    onChange={onChange}
                                    required
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
                                    onChange={onChange}
                                    required
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