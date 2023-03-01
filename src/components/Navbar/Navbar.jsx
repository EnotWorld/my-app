import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className={classes.nav}>
                <ul className={classes.nav_list}>
                    <li className={classes.item}>
                        <NavLink to='/profile'
                                 className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/dialogs'
                                 className={navData => navData.isActive ? classes.active : classes.item}>Massages</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/news'
                                 className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/music'
                                 className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/settings'
                                 className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;