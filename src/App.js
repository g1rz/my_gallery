
import React from 'react';
import { Route } from 'react-router-dom';

import './App.sass';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Albums from './pages/Albums/Albums';

function App() {
    

    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Albums} />
        </div>
    );
}

export default App;

// https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user&_limit=10
