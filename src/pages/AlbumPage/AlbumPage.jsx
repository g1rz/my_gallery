import React from 'react';
import axios from 'axios';

import { useParams, useLocation } from 'react-router-dom';
import PageWrap from '../../components/PageWrap/PageWrap';
import Loader from '../../components/Loader/Loader';
import Photo from '../../components/Photo/Photo';
import ModalGallery from '../../components/ModalGallery/ModalGallery';

const AlbumPage = () => {
    const [album, setAlbum] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [activePhotoId, setActivePhotoId] = React.useState(false);

    const { id } = useParams();

    const openModal = (activePhotoId) => {
        setActivePhotoId(activePhotoId);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    React.useEffect(() => {
        setIsLoaded(false);

        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${id}?_embed=photos&_expand=user`)
            .then(({ data }) => {
                setAlbum(data);
                setIsLoaded(true);
            });
    }, [id]);



    const photos = isLoaded
        ? album.photos.map((item) => (
            <Photo
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                openModal={openModal}

            />
        ))
        : null;

    return (
        <PageWrap>
            {!isLoaded && <Loader />}
            {isLoaded && (
                <React.Fragment>
                    <h1>
                        {album.user.name} - {album.title}
                    </h1>
                    <div className="row">{photos}</div>
                    {isModalOpen && (
                        <ModalGallery photos={album.photos} activePhotoId={activePhotoId} closeModal={closeModal} />
                    )}
                </React.Fragment>
            )}
        </PageWrap>
    );
};

export default AlbumPage;
