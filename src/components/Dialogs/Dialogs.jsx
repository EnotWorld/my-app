import classes from './Dialogs.module.scss';
import React from 'react';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogs_list}>
                <Dialog name='Andrey' id={1}/>
                <Dialog name='Katya' id={2}/>
                <Dialog name='Bob' id={3}/>
                <Dialog name='Mister' id={4}/>
                <Dialog name='Xxx' id={5}/>
                <Dialog name='Yyy' id={6}/>
            </ul>

            <ul className={classes.messages_list}>
                <Message message='Hi'/>
                <Message message='Ho is you'/>
                <Message message='Yo my friend'/>
                <Message message='Yo my friend'/>
                <Message message='Yo my friend'/>
            </ul>
        </div>
    );
}
export default Dialogs;