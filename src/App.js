import axios from 'axios';
import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

function App() {
    const [albums, setAlbums] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(false);
        axios
            .get('https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10')
            .then(({ data }) => {
                setAlbums(data);
                setIsLoaded(true);
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <div className="container">
                    <h1>Альбомы</h1>
                    {isLoaded && <span>Загружено</span>}

                    {!isLoaded && <Loader />}
                </div>
            </main>
        </div>
    );
}

export default App;

// https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10
