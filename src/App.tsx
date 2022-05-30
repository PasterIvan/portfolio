import React, {useState} from 'react';
import './App.css';
import {Body} from './componets/body/Body';
import {Header} from './componets/header/Header';
import {v1} from "uuid";



function App() {




    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
