import React from 'react';
import axios from 'axios';

import Loader from '../../components/Loader/Loader';
import Album from '../../components/Album/Album';
import PageWrap from '../../components/PageWrap/PageWrap';

const Albums = () => {
    const [albums, setAlbums] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(false);
        axios
            .get(`https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_page=1&_limit=12`)
            .then(({ data }) => {
                setAlbums(data);
                setIsLoaded(true);
            });
    }, []);

    const albumsList = isLoaded ? albums.map(item => <Album key={item.id} id={item.id} cover={item.photos[0]} photosCount={item.photos.length} title={item.title} user={item.user} />) : null;

    return (
        <PageWrap title="Альбомы">
            {!isLoaded && <Loader />}
            {isLoaded && <div className="row">{albumsList}</div>}
        </PageWrap>

    )
}

export default Albums
