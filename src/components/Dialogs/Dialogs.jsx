import classes from './Dialogs.module.scss';
import React from 'react';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import classNames from "classnames";


const Dialogs = (props) => {


    let dialogsData = props.dialogsElements.map((e, i) => (
        <Dialog key={i} name={e.name} id={e.id}/>));

    let messagesData = props.messagesElements.map((e, i) => (
        <Message key={i} message={e.message} id={e.id}/>));


    let newMessageElement = React.createRef()


    let AddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={classNames(classes.dialogs, 'card border-success mb-3')}>
            <div className={classes.dialogs_messages}>
                <ul className={classNames(classes.dialogs_list, 'list-group')}>
                    {dialogsData}
                </ul>
                <ul className={classNames(classes.messages_list, 'card text-white bg-success mb-3')}>
                    {messagesData}
                </ul>
            </div>
            <div className={classes.enterMessage}>
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.newMessageText}
                    />
                </div>
                <button onClick={AddMessage}>AddMessage
                </button>
            </div>
        </div>
    );
}
export default Dialogs;