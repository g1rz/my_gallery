import React from 'react'

import './Album.sass'

const Album = ({ id, cover, title, photosCount }) => {
    return (
        <div className="album-wrap">
            <div className="album" key={id}>
                <a href="/" className="album__img-wrap">
                    <img src={cover.thumbnailUrl} alt={cover.title} className="album__img" />
                </a>
                <div className="album__body">
                    <p>
                        <a href="/" className="album__title-link">{title}</a>
                        <span className="album__count">({photosCount})</span>
                    </p>


                </div>
            </div>
        </div>

    )
}

export default Album
