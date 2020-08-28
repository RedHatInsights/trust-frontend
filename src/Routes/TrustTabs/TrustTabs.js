import './TrustTabs.scss';

import { Button, Tab, TabTitleText, Tabs, Text, TextContent, Title, TitleSizes } from '@patternfly/react-core/dist/esm/components';
import { Main, PageHeader } from '@redhat-cloud-services/frontend-components';
import React, { Suspense, lazy, useEffect, useState } from 'react';

import Loading from '../../Components/Loading/Loading';
import PropTypes from 'prop-types';
import messages from '../../Messages';
import routerParams from '@redhat-cloud-services/frontend-components-utilities/files/RouterParams';
import { useIntl } from 'react-intl';

const Overview = lazy(() => import(/* webpackChunkName: "Overview" */ '../../Components/Tabs/Overview'));
const DataCollection = lazy(() => import(/* webpackChunkName: "DataCollection" */ '../../Components/Tabs/DataCollection'));
const DataProtection = lazy(() => import(/* webpackChunkName: "DataProtection" */ '../../Components/Tabs/DataProtection'));

const TrustTabs = ({ history, location }) => {
    const intl = useIntl();
    const [activeTabKey, setActiveTabKey] = useState();
    const tabs = [{
        key: 0, title: intl.formatMessage(messages.overview), to: '/overview',
        component: <Suspense fallback={<Loading />}> <Overview /> </Suspense>
    }, {
        key: 1, title: intl.formatMessage(messages.dataCollection), to: '/datacollection',
        component: <Suspense fallback={<Loading />}> <DataCollection /> </Suspense>
    }, {
        key: 2, title: intl.formatMessage(messages.dataProtection), to: '/dataprotection',
        component: <Suspense fallback={<Loading />}> <DataProtection /> </Suspense>
    }, {
        key: 3, title: intl.formatMessage(messages.faq), to: '/faq',
        component: <Suspense fallback={<Loading />}>  </Suspense>
    }
    ];

    useEffect(() => {
        const activeTab = location.pathname !== '/' ? tabs.find((tab => tab.to === location.pathname)).key : 0;
        setActiveTabKey(activeTab);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTabClick = (event, tabKey) => {
        const activeTab = tabs[tabKey];
        setActiveTabKey(activeTab.key);
        history.push(activeTab.to);
    };

    return <React.Fragment>
        <PageHeader>
            <TextContent className='ins-c-flex-center'>
                <Title headingLevel='h1' size={TitleSizes['3xl']}>
                    {intl.formatMessage(messages.redHatInsightsSecurity)}
                </Title>
                <Text className='ins-c-flex-center__text'>
                    {intl.formatMessage(messages.redHatInsightsSecurityBody)}
                </Text>
                <Text className='ins-c-flex-center__text'>
                    {intl.formatMessage(messages.redHatInsightsSecurityBody2)}
                </Text>
                <Button className='ins-c-dashboard-link' component='a' variant='primary' href='https://cloud.redhat.com/insights/' >
                    {intl.formatMessage(messages.goto)}
                </Button>
            </TextContent>
        </PageHeader>
        <Main>
            <div className='ins-c-flex-center'>
                <Tabs activeKey={activeTabKey} onSelect={handleTabClick} aria-label="Insights Tabs">
                    {tabs.map(item =>
                        <Tab key={item.key} eventKey={item.key} title={<TabTitleText>{item.title}</TabTitleText>}>
                            {item.component}
                        </Tab>)}
                </Tabs>
            </div>
        </Main>
    </React.Fragment >;
};

TrustTabs.displayName = 'insights-tabs';
TrustTabs.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
};

export default routerParams(TrustTabs);
