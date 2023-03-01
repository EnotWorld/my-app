import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes className="app-wrapper-content">
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='/news' element={<Profile/>}/>
                    <Route path='/music' element={<Profile/>}/>
                    <Route path='/settings' element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );

};

export default App;
