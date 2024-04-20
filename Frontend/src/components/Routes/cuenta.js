import Navbar from '../pages/Navbar';
import './cuentaStyles.css';
import avatar from "../img/default-avatar.png";
import { Link } from 'react-router-dom';
import { ProfileTabsItems, profileConfigItems } from "./ProfileTabsItems";
import React, { useState } from 'react';

function Cuenta() {
    // Define state using useState hook
    const [clicked, setClicked] = useState(false);

    // Define handleClick function
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <>
            <Navbar />
            <body className='cuenta-main-region'>
                <div className='main-content'>
                    <div className='user-profile-layout'>
                        <div className='profile-container'>
                            <div className='main-panel'>
                                <div className='avatar-panel'>
                                    <div className='user-avatar own'>
                                        <a className="avatar">
                                            {/*falta codigo aqui*/}
                                            <img src={avatar} alt="Logo" className="ig-avatar" loading="lazy" onload="lazyLoadImage(this)"></img>
                                        </a>
                                        {/*}::after*/}
                                    </div>
                                    <div className="user-links">
                                        <div className='item title'>
                                            <span className="user-nickname placeholder-nickname">
                                                Compostify-User
                                            </span>
                                        </div>
                                        <div className='ig-profile-info-date'>Miembro desde: abr 03, 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div className='separator'></div>
                            <ul className="user-profile-tabs">
                                <i className="fa-solid fa-chevron-right"></i>
                                {ProfileTabsItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link className={item.cName} to={item.url}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li className="settings">
                                    <Link className='user-link active' to='/my-account'>
                                        <i className="fa-solid fa-gear"></i>
                                        Configuración
                                        {/*::after*/}
                                    </Link>
                                </li>
                            </ul>
                            <div className="separator mobile"></div>
                            <div className="user-profile-settings" onClick={handleClick}>
                                <ul className="user-profile-settings-tabs">
                                    {profileConfigItems.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link className={clicked ? item.cNameActive : item.cName} to={item.url}>
                                                    <i className={item.icon}></i>
                                                    <div className="lines">
                                                        <span class="title">{item.title}</span>
                                                        <span>{item.content}</span>
                                                    </div>
                                                    <div className="fa-solid fa-chevron-right"></div>
                                                </Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}

export default Cuenta;