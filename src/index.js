import React from 'react';
import './index.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireThee = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     updateNewPostText={updateNewPostText}
                     addPost={addPost}
                     updateNewMessageText={updateNewMessageText}
                     addMessage={addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireThee(state)
subscribe(rerenderEntireThee)