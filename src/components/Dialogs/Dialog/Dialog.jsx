import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Dialog.module.scss";


const Dialog = (props) => {
    return (
        <>
            <li>
                <NavLink to={'/dialogs/' + props.id}
                         className={navData => navData.isActive ? classes.active : classes.item}>{props.name} </NavLink>
            </li>
        </>
    )
}
export default Dialog;