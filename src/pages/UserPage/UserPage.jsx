import React from 'react';
import axios from 'axios';

import { useParams } from "react-router-dom";
import PageWrap from '../../components/PageWrap/PageWrap';
import Loader from '../../components/Loader/Loader';
import Album from '../../components/Album/Album';

const UserAlbums = () => {
    const [user, setUser] = React.useState(null);
    const [albums, setAlbums] = React.useState(null);
    const [isLoadedUser, setIsLoadedUser] = React.useState(false);
    const [isLoadedAlbums, setIsLoadedAlbums] = React.useState(false);
    const { id } = useParams();

    React.useEffect(() => {
        setIsLoadedUser(false);
        setIsLoadedAlbums(false);
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(({ data }) => {
                setUser(data);
                setIsLoadedUser(true);
            });
        axios
            .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}&_embed=photos`)
            .then(({ data }) => {
                setAlbums(data);
                setIsLoadedAlbums(true)
            })
    }, [id]);


    const albumsList = isLoadedAlbums
        ? albums.map(item => <Album key={item.id} id={item.id} cover={item.photos[0]} photosCount={item.photos.length} title={item.title} />)
        : null;

    return (
        <PageWrap>
            {(!isLoadedUser || !isLoadedAlbums) && <Loader />}
            {isLoadedUser && isLoadedAlbums && (
                <React.Fragment>
                    <h1>{user.name}</h1>
                    <div className="row">{albumsList}</div>
                </React.Fragment>
            )}

        </PageWrap>
    )
}

export default UserAlbums
