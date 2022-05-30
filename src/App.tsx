import React from 'react';
import './App.css';
import {Body} from './componets/body/Body';
import {Header} from './componets/header/Header';
import {Footer} from "./componets/footer/Footer";


function App() {

    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
