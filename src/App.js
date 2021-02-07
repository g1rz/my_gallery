import React from 'react';

import './App.sass';
import Header from './components/Header/Header';

function App() {
    React.useEffect(() => {
        console.log('run');
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <div className="container">
                    <h1>Альбомы</h1>
                </div>
            </main>
        </div>
    );
}

export default App;
