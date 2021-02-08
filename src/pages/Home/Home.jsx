import React from 'react';
import axios from 'axios';

import PageWrap from '../../components/PageWrap/PageWrap';
import Loader from '../../components/Loader/Loader';
import User from '../../components/User/User';

const Home = () => {
    const [users, setUsers] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(false);
        axios
            .get(`https://jsonplaceholder.typicode.com/users?_embed=albums`)
            .then(({ data }) => {
                setUsers(data);
                setIsLoaded(true);
            });
    }, []);

    const usersList =
        isLoaded
            ? users.map(item => <User key={item.id} id={item.id} name={item.name} username={item.username} albums={item.albums} />)
            : null;

    return (
        <PageWrap >
            <h1>Пользователи</h1>
            {!isLoaded && <Loader />}
            {isLoaded && <div className="row">{usersList}</div>}
        </PageWrap>
    )
}

export default Home
