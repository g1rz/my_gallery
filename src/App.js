
import React from 'react';
import { Route } from 'react-router-dom';

import './App.sass';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import UserAlbums from './pages/UserPage/UserPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';

function App() {
    

    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={UserAlbums} />
            <Route path="/album/:id" component={AlbumPage} />
        </div>
    );
}

export default App;

// https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10
