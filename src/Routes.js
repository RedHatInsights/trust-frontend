import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './Components/Loading/Loading';

const Trust = lazy(() => import(/* webpackChunkName: "Trust" */ './Routes/TrustScroll/TrustScroll'));
const paths = { trust: '' };

export const Routes = () => <Switch>
    <Route key='trust' path={paths.trust} rootClass='Insights'
        component={() => <Suspense fallback={<Loading />}><Trust /></Suspense>} />
    <Redirect path='*' to={paths.trust} push />
</Switch>;
