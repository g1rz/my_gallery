
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.sass';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import UserAlbums from './pages/UserPage/UserPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import Page404 from './pages/Page404/Page404';

function App() {
    

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user/:id" component={UserAlbums} />
                <Route path="/album/:id" component={AlbumPage} />

                <Route component={Page404}/>
            </Switch>
        </div>
    );
}

export default App;

