import React from 'react';
import logo from '../../assets/img/Logo.svg'
import logoName from '../../assets/img/Logo-name.png'
import {NavLink, Outlet} from "react-router-dom";
import s from './index.module.css'
const Layout = () => {
    return (
        <div>
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <div>
                            <img src={logo} alt="img: logo"/>
                            <img src={logoName} alt="img: name logo"/>
                        </div>
                        <div>
                        <span className={s.item}>
                            +7 (495) 495-49-54
                        </span>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <NavLink to='/Catalog'>Lorem</NavLink>
                <NavLink to='/Catalog1'>Ipsum</NavLink>
            </div>
            <Outlet />
            <footer className={s.footer}>
                <span className={s.copyright}>
                    © TEST, 1022–2022
                </span>
            </footer>
        </div>
    );
};

export default Layout;