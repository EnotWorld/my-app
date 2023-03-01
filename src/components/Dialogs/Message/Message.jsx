import React from 'react';
import classes from "./Message.module.scss";

const Message = (props) => {
    return (
        <div>
            <li className={classes.message}>{props.message}</li>
        </div>
    )
}
export default Message;