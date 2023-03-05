import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import React from 'react';
import classNames from "classnames";

const Navbar = () => {
    return (
        <>
            <nav className={classNames(classes.nav)}>
                <ul className={classNames(classes.nav_list, 'nav nav-pills')}>
                    <li className={classNames(classes.item, 'nav-item')}>
                        <NavLink to='/profile'
                                 className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}>Profile</NavLink>
                    </li>
                    <li className={classNames(classes.item, 'nav-item')}>
                        <NavLink to='/dialogs'
                                 className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}>Messages</NavLink>
                    </li>
                    <li className={classNames(classes.item, 'nav-item')}>
                        <NavLink to='/news'
                                 className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}>News</NavLink>
                    </li>
                    <li className={classNames(classes.item, 'nav-item')}>
                        <NavLink to='/music'
                                 className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}>Music</NavLink>
                    </li>
                    <li className={classNames(classes.item, 'nav-item')}>
                        <NavLink to='/settings'
                                 className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;