import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './Components/Loading/Loading';
import PropTypes from 'prop-types';

const Trust = lazy(() => import(/* webpackChunkName: "Trust" */ './Routes/TrustScroll/TrustScroll'));
const paths = { trust: '/' };

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
    root.setAttribute('role', 'main');

    return (<Route {...rest} component={Component} />);
};

InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

export const Routes = () => <Switch>
    <InsightsRoute key='trust' path={paths.trust} rootClass='Insights'
        component={() => <Suspense fallback={<Loading />}><Trust /></Suspense>} />
    <Redirect path='*' to={paths.trust} push />
</Switch>;
