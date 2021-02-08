
import React from 'react';
import { Route } from 'react-router-dom';

import './App.sass';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import UserAlbums from './pages/UserAlbums/UserAlbums';

function App() {
    

    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={UserAlbums} />
        </div>
    );
}

export default App;

// https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10
