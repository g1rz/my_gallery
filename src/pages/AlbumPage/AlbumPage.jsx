import React from 'react';
import axios from 'axios';

import { useParams } from "react-router-dom";
import PageWrap from '../../components/PageWrap/PageWrap';
import Loader from '../../components/Loader/Loader';

const AlbumPage = () => {
    const [album, setAlbum] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const { id } = useParams();

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
        ? album.photos.map(item => <img key={item.id} src={item.thumbnailUrl} alt={item.title} />)
        : null;

    return (
        <PageWrap>
            {!isLoaded && <Loader />}
            {isLoaded && (
                <React.Fragment>
                    <h1>{album.user.name} - {album.title}</h1>
                    <div className="row">{photos}</div>
                </React.Fragment>
            )}

        </PageWrap>
    )
}

export default AlbumPage;
