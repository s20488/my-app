import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import BlockFriendsItem from "./BlockFriendsItem/BlockFriendsItem"

const Navbar = (props) => {

    let blockFriendsElements = props.state.map(d => <BlockFriendsItem img={d.img}/>
    );

    return <nav className={s.nav}>
        <div className={s.item}>
            {/*Для React v6: вместо NavLink  activeClassName ставим аргумент navData внутри функции и передаем свойство isActive, которое будет истинным, если маршрут активен в этот момент.*/}
            <NavLink className={navData => navData.isActive ? s.active : s.item} to={'/profile'}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to={'/dialogs'}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Musice</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        <div className={s.blockFriends}>
            <a>Friends</a>
            <div className={s.avatars}>
                {blockFriendsElements}
            </div>
        </div>
    </nav>
}

export default Navbar;