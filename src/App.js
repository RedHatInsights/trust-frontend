import './App.scss';

import { NotificationsPortal, notifications } from '@redhat-cloud-services/frontend-components-notifications/';
import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { Routes } from './Routes';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import { withRouter } from 'react-router-dom';

const registry = getRegistry();
registry.register({ notifications });

const App = (props) => {
    async function initChrome() {
        insights.chrome.init();
        insights.chrome.identifyApp('trust');
    }

    useEffect(() => {
        initChrome();
    }, []);

    return <Provider store={registry.getStore()}>
        <NotificationsPortal />
        <Routes childProps={props} />
    </Provider>;
};

export default withRouter(App);
