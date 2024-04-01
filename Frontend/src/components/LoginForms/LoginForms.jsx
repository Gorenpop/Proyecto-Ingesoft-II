import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock  } from "react-icons/fa";
// se inicializa con npm star en login
// 
const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Iniciar sesión</h1>
                <div className="inputbox">
                    <input type="text" placeholder='Usuario' required/>
                    <FaUser className='icon'/>

                </div>
                <div className="inputbox">
                    <input type="password" placeholder='Contraseña' required/>
                    <FaLock className='icon'/>

                </div>    

                <div className="remember-forgot">
                    <label><input type="checkbox" />Recuerdame</label>
                    <a href='#'>¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>¿Aún no tienes cuenta?<a href='#'>  Registrarme</a></p>
                </div>
            </form>

        </div>
    );
};

export default LoginForm
