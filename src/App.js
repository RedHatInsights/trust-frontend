import './App.scss';

import React, { useEffect } from 'react';

import { Routes } from './Routes';

const App = (props) => {
    async function initChrome() {
        insights?.chrome?.init();
        insights?.chrome?.identifyApp('trust');
    }

    useEffect(() => {
        initChrome();
    }, []);

    return <Routes childProps={props} />;
};

export default App;
