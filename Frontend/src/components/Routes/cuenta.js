import Navbar from '../pages/Navbar';
import './cuentaStyles.css';
//import Editar from './components/Routes/editar';
import avatar from "../img/default-avatar.png";
import { Link } from 'react-router-dom';
import { ProfileTabsItems } from "./ProfileTabsItems";

function Cuenta() {
    return (
        <>
            <Navbar />
            <body class='cuenta-main-region'>
                <div class='main-content'>
                    <div class='user-profile-layout'>
                        <div class='profile-container'>
                            <div class='main-panel'>
                                <div class='avatar-panel'>
                                    <div class='user-avatar own'>
                                        <a class="avatar">
                                            {/*falta codigo aqui*/}
                                            <img src={avatar} alt="Logo" class="ig-avatar" loading="lazy" onload="lazyLoadImage(this)"></img>
                                        </a>
                                        {/*}::after*/}
                                    </div>
                                    <div class="user-links">
                                        <div class='item title'>
                                            <span class="user-nickname placeholder-nickname">
                                                Compostify-User
                                            </span>
                                        </div>
                                        <div class='ig-profile-info-date'>Miembro desde: abr 03, 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div class='separator'></div>
                            <ul class="user-profile-tabs">
                                <i class="fa-solid fa-chevron-right"></i>
                                {ProfileTabsItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link class={item.cName} to={item.url}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li class="settings">
                                    <Link class='user-link active' to='/my-account'>
                                        <i class="fa-solid fa-gear"></i>
                                        <span>Configuración</span>
                                        {/*::after*/}
                                    </Link>
                                </li>
                            </ul>
                            <div class="separator mobile">

                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Cuenta;