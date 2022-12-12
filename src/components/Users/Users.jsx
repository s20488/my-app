import React from 'react';
import s from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    avatar: 'https://avatars.mds.yandex.net/i?id=3371c45886ba7b9626277725061c98c9_l-5644585-images-thumbs&n=27&h=384&w=480',
                    fullName: 'Dimych',
                    status: 'I am free',
                    location: {city: 'Moskow', country: 'Russia'},
                    followed: true
                },
                {
                    id: 2,
                    avatar: 'https://avatars.mds.yandex.net/i?id=3371c45886ba7b9626277725061c98c9_l-5644585-images-thumbs&n=27&h=384&w=480',
                    fullName: 'Katy',
                    status: 'I am free',
                    location: {city: 'Moskow', country: 'Russia'},
                    followed: false
                },
                {
                    id: 3,
                    avatar: 'https://avatars.mds.yandex.net/i?id=3371c45886ba7b9626277725061c98c9_l-5644585-images-thumbs&n=27&h=384&w=480',
                    fullName: 'Alice',
                    status: 'I am free',
                    location: {city: 'Moskow', country: 'Russia'},
                    followed: true
                }
            ]
        );
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} className={s.usersAvatar}/>
                    </div>
                    <div>
                       {u.followed
                           ? <button onClick={() => {
                               props.unfollow(u.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
                               props.follow(u.id)
                           }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;