import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

import './Photo.sass';
import PhotoSkeleton from './PhotoSkeleton';

const Photo = ({ id, title, thumbnailUrl, openModal }) => {

    const [isLoaded, setIsLoaded] = React.useState(false);

    const handleLoad = () => {
        setIsLoaded(true)
    }

    return (
        <div className="photo-wrap">
            <div className="photo" onClick={() => openModal(id)}>
                {!isLoaded && <PhotoSkeleton />}
                <img src={thumbnailUrl} alt={title} className="photo__img" onLoad={() => handleLoad()} />

            </div>
        </div>
    );
};

export default Photo;
