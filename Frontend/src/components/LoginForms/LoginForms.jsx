import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock  } from "react-icons/fa";

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
                    <a href='#forgot-password'>¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link" id="register-link">
                    <p>¿Aún no tienes cuenta?<a href='#register'>  Registrarme</a></p>
                </div>
            </form>

            <div id="forgot-password">
                {/* Forgot Password Content */}
            </div>

            <div id="register">
                {/* Register Content */}
            </div>

        </div>
    );
};

export default LoginForm