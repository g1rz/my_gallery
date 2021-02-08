import React from 'react';
import { Link } from 'react-router-dom';
import './Album.sass';

const Album = ({ id, cover, title, photosCount }) => {
    return (
        <div className="album-wrap">
            <Link to={`/album/${id}`} className="album">
                <p className="album__img-wrap">
                    <img src={cover.thumbnailUrl} alt={cover.title} className="album__img" />
                </p>
                <div className="album__body">
                    <p>
                        {title}
                        <span className="album__count">({photosCount})</span>
                    </p>
                </div>
            </Link>
        </div>

    )
}

export default Album
