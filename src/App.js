import axios from 'axios';
import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Album from './components/Album/Album';

function App() {
    const [albums, setAlbums] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(false);
        axios
            .get('https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=12')
            .then(({ data }) => {
                setAlbums(data);
                setIsLoaded(true);
                console.log(data);
            });
    }, []);

    const albumsList = isLoaded ? albums.map(item => <Album id={item.id} cover={item.photos[0]} title={item.title} user={item.user}/>) : null ;

    return (
        <div className="App">
            <Header />
            <main>
                <div className="container">
                    <h1>Альбомы</h1>

                    {!isLoaded && <Loader />}
                    {isLoaded && <div className="row">{albumsList}</div>}

                    
                </div>
            </main>
        </div>
    );
}

export default App;

// https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10
