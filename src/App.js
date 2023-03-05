import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (<div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Routes className="app-wrapper-content">
            <Route path='/profile' element={<Profile
                postsElements={props.state.profilePage.postsElements}
                newPostText={props.state.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />}/>

            <Route path='/dialogs/*' element={<Dialogs
                messagesElements={props.state.messagesPage.messagesElements}
                dialogsElements={props.state.messagesPage.dialogsElements}
                newMessageText={props.state.messagesPage.newMessageText}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
            />}/>
        </Routes>
    </div>);

};

export default App;