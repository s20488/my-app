import React from "react";
import s from './Post.module.css';
import cat from './cat.jpg'

const Post = (props) => {

    return <div className={s.item}>
        <img src={cat}/>
        {props.message}
        <div>
            <span>like:</span> {props.likesCount}
        </div>
    </div>
}

export default Post;