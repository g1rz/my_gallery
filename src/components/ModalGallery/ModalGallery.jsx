import React from 'react';

import classNames from 'classnames'

import './ModalGallery.sass';

const ModalGallery = ({ photos, activePhotoId, closeModal }) => {

    const [currentPhotoId, setCurrentPhotoId] = React.useState(null);
    const modalRef = React.useRef(null);


    const handleOutsideclick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (path[0] === (modalRef.current)) {
            closeModal();
        }
    };

    const onClickPrevPhoto = () => {

        let prevPhotoIndex = photos.findIndex(photo => photo.id === currentPhotoId) - 1;
        prevPhotoIndex = prevPhotoIndex === -1 ? photos.length - 1 : prevPhotoIndex;

        setCurrentPhotoId(photos[prevPhotoIndex].id)
    }

    const onClickNextPhoto = () => {
        let nextPhotoIndex = photos.findIndex(photo => photo.id === currentPhotoId) + 1;
        nextPhotoIndex = nextPhotoIndex > photos.length - 1 ? 0 : nextPhotoIndex;

        setCurrentPhotoId(photos[nextPhotoIndex].id)
    }

    React.useEffect(() => {
        setCurrentPhotoId(activePhotoId);
    }, [activePhotoId])

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideclick);
        return () => document.body.removeEventListener('click', handleOutsideclick);

    }, []);


    const photoList = photos.map((item) => (
        <div className={classNames('modal__inner', { active: item.id === currentPhotoId })} key={item.id}>
            <img className="modal__img" src={item.url} alt={item.title} />
            <p className="modal__caption">{item.title}</p>
        </div>
    ))

    return (
        <div className="modal" ref={modalRef}>
            <div className="modal__wrap">
                {photoList}
            </div>
            <div className="modal-arrows">
                <button className="modal-arrows__btn modal-arrows__btn--left" onClick={onClickPrevPhoto}>
                    <span>Предыдущее фото</span>
                </button>
                <button className="modal-arrows__btn modal-arrows__btn--right" onClick={onClickNextPhoto}>
                    <span>Следующее фото</span>
                </button>
            </div>
        </div>
    )
}

export default ModalGallery
