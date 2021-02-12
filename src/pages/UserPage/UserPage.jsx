import React from 'react';
import axios from 'axios';

import { useParams, useHistory } from 'react-router-dom';
import PageWrap from '../../components/PageWrap/PageWrap';
import Loader from '../../components/Loader/Loader';
import Album from '../../components/Album/Album';

const UserAlbums = () => {
    const [user, setUser] = React.useState(null);
    const [albums, setAlbums] = React.useState(null);
    const [isLoadedUser, setIsLoadedUser] = React.useState(false);
    const [isLoadedAlbums, setIsLoadedAlbums] = React.useState(false);

    const [isError, setIsError] = React.useState(false);

    const { id } = useParams();

    const history = useHistory();

    React.useEffect(() => {
        setIsLoadedUser(false);
        setIsLoadedAlbums(false);
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(({ data }) => {
                setUser(data);
                setIsLoadedUser(true);
            })
            .catch((error) => {
                setIsError(true);
                console.error('Ошибка - ', error);
            });
        axios
            .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}&_embed=photos`)
            .then(({ data }) => {
                setAlbums(data);
                setIsLoadedAlbums(true);
            })
            .catch((error) => {
                setIsError(true);
                console.error('Ошибка - ', error);
            });
    }, [id]);

    const albumsList = isLoadedAlbums
        ? albums.map((item) => (
            <Album
                key={item.id}
                id={item.id}
                cover={item.photos[0]}
                photosCount={item.photos.length}
                title={item.title}
            />
        ))
        : null;

    return (
        <PageWrap>
            {(!isLoadedUser || !isLoadedAlbums) && !isError && <Loader />}
            {isLoadedUser && !isError && isLoadedAlbums && (
                <React.Fragment>
                    <div className="btn-wrap">
                        <button className="btn" onClick={() => history.goBack()}>Назад</button>
                    </div>
                    <h1>{user.name}</h1>
                    <div className="row">{albumsList}</div>

                </React.Fragment>
            )}

            {isError && <div className="error">Сожалеем, произошла ошибка</div>}
        </PageWrap>
    );
};

export default UserAlbums;
