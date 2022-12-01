import React from "react";
import s from './../Navbar.module.css';

const BlockFriendsItem = (props) => {
    return <div className={s.item}>
        <img src={props.img}/>
    </div>
}

export default BlockFriendsItem;