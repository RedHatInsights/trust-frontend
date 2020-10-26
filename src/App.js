import './App.scss';

import { NotificationsPortal, notifications } from '@redhat-cloud-services/frontend-components-notifications/';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { Routes } from './Routes';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/files/Registry';
import { withRouter } from 'react-router-dom';

const registry = getRegistry();
registry.register({ notifications });

const App = (props) => {

    useEffect(() => {
        insights.chrome.init();
        insights.chrome.identifyApp('trust');
    });

    return (
        <Provider store={registry.getStore()}>
            <NotificationsPortal />
            <Routes childProps={props} />
        </Provider>
    );
};

App.propTypes = {
    history: PropTypes.object
};

export default withRouter(App);
