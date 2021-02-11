import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

import './Photo.sass';

const Photo = ({ id, title, thumbnailUrl, openModal }) => {

    return (
        <div className="photo-wrap">
            <div className="photo" onClick={() => openModal(id)}>
                <img src={thumbnailUrl} alt={title} className="photo__img" width="150" height="150" />
            </div>
        </div>
    );
};

export default Photo;
