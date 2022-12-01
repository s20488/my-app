import React from "react";
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar state={props.state.dialogsPage.sidebar}/>
                <div class='app-wrapper-content'>
                    <Routes>
                        {/*Для React v6: вместо exact ставим *  для дочерних URL-адресов*/}
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}
                                                                   updateNewPostText={props.updateNewPostText}
                                                                   addPost={props.addPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;