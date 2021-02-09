import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Photo.sass';

const Photo = ({ id, title, thumbnailUrl }) => {
    let location = useLocation();
    return (
        <div className="photo-wrap">
            <Link
                to={{
                    pathname: location.pathname,
                    search: '?gallery=' + id,
                }}
                className="photo">
                <img src={thumbnailUrl} alt={title} className="photo__img" />
            </Link>
        </div>
    )
}

export default Photo
