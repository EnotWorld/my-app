import React from 'react';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <>
            <li>
                <NavLink to={'/dialogs/' + props.id}
                         className={navData => navData.isActive ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}>
                    {props.name}
                </NavLink>
            </li>
        </>
    )
}
// className={navData => navData.isActive ? classes.active : classes.item}
// className={classNames('list-group-item d-flex justify-content-between align-items-center')}
export default Dialog;