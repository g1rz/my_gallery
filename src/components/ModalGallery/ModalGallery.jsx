import React from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';

import './ModalGallery.sass';

const ModalGallery = ({ photos, activePhotoId }) => {
    const modalRef = React.useRef(null);

    const activePhoto = photos.filter((item) => item.id === activePhotoId)[0];
    const activePhotoIndex = photos.indexOf(activePhoto);

    const prevPhotoIndex = activePhotoIndex - 1 >= 0 ? activePhotoIndex - 1 : photos.length - 1;
    const nextPhotoIndex = activePhotoIndex + 1 <= photos.length - 1 ? activePhotoIndex + 1 : 0;

    const prevPhoto = photos[prevPhotoIndex];
    const nextPhoto = photos[nextPhotoIndex];

    let location = useLocation();
    let history = useHistory();

    console.log(prevPhoto, activePhoto, nextPhoto);

    const handleOutsideclick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (path[0] === modalRef.current) {
            history.push(Location.pathname);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideclick);
        return () => document.body.removeEventListener('click', handleOutsideclick);
    });

    return (
        <div className="modal" ref={modalRef}>
            <div className="modal__wrap">
                <img className="modal__img" src={activePhoto.url} alt={activePhoto.title} />
                <p className="modal__caption">{activePhoto.title}</p>
            </div>
            <div className="modal-arrows">
                <button className="modal-arrows__btn modal-arrows__btn--left">
                    <span>Предыдущее фото</span>
                </button>
                <button className="modal-arrows__btn modal-arrows__btn--right">
                    <span>Следующее фото</span>
                </button>
            </div>
        </div>
    );
};

export default ModalGallery;
