import React from 'react';
import { Link } from 'react-router-dom';

import './User.sass';


const User = ({ id, name, username, albums }) => {
    return (
        <div className="user-wrap">
            <Link to={`/user/${id}`} className="user">
                <p className="user__name">{name}</p>
                <p className="user__albums">Альбомов: <span className="user__albums-count">{albums.length}</span></p>
            </Link>
        </div>
    )
}

export default User
