import './trust-scroll.scss';

import {
    Button,
    JumpLinks,
    JumpLinksItem,
    PageGroup,
    PageSection,
    Text,
    TextContent,
    Title,
    TitleSizes
} from '@patternfly/react-core/dist/esm/components';
import { Flex, FlexItem } from '@patternfly/react-core/dist/esm/layouts';
import React, { Suspense, lazy, useEffect } from 'react';

import Loading from '../../Components/Loading/Loading';
import { PageHeader } from '@redhat-cloud-services/frontend-components';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
import messages from '../../Messages';
import routerParams from '@redhat-cloud-services/frontend-components-utilities/RouterParams';
import { useIntl } from 'react-intl';

const Overview = lazy(() => import(/* webpackChunkName: "Overview" */ '../../Components/Sections/Overview'));
const DataCollection = lazy(() => import(/* webpackChunkName: "DataCollection" */ '../../Components/Sections/DataCollection'));
const DataProtection = lazy(() => import(/* webpackChunkName: "DataProtection" */ '../../Components/Sections/DataProtection'));
const FAQ = lazy(() => import(/* webpackChunkName: "FAQ" */ '../../Components/Sections/FAQ'));

const TrustScroll = () => {
    const intl = useIntl();

    const jumpLinks = [{
        key: 0, section: 'overview', title: intl.formatMessage(messages.overview),
        component: <Suspense fallback={<Loading />}> <Overview /> </Suspense>
    }, {
        key: 1, section: 'data-collection', title: intl.formatMessage(messages.dataCollection),
        component: <Suspense fallback={<Loading />}> <DataCollection /> </Suspense>
    }, {
        key: 2, section: 'data-protection', title: intl.formatMessage(messages.dataProtection),
        component: <Suspense fallback={<Loading />}> <DataProtection /> </Suspense>
    }, {
        key: 3, section: 'faq', title: intl.formatMessage(messages.faq),
        component: <Suspense fallback={<Loading />}> <FAQ /> </Suspense>
    }
    ];

    useEffect(() => {
        const hash = document.location.hash;
        hash && setTimeout(() => document.querySelector(hash).scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }, []);

    return <div className="ins-c-marketing-page">
        <PageHeader className='ins-c-page-header' isWidthLimited>
            <Flex justifyContent={{ default: 'justifyContentCenter' }}>
                <TextContent
                    className='ins-c-width-limiter pf-u-text-align-center'>
                    <Title headingLevel='h1' size={TitleSizes['3xl']}>
                        {intl.formatMessage(messages.redHatInsightsSecurity)}
                    </Title>
                    <Text>
                        {intl.formatMessage(messages.redHatInsightsSecurityBody)}
                    </Text>
                    <Button className='ins-c-dashboard-link' component='a' variant='primary' href='https://cloud.redhat.com/insights/' >
                        {intl.formatMessage(messages.goto)}
                    </Button>
                </TextContent>
            </Flex>
        </PageHeader>
        <PageSection className="pf-u-pt-sm pf-u-pb-0" sticky="top">
            <JumpLinks isCentered scrollableSelector="#root">
                {jumpLinks.map(item =>
                    <JumpLinksItem key={item.key} href={`#section-${item.section}`}
                        onClick={() => window.history.pushState({}, '', `${getBaseName(window.location.pathname)}#section-${item.section}`)}>
                        {item.title}
                    </JumpLinksItem>
                )}
            </JumpLinks>
        </PageSection>
        <PageGroup hasOverflowScroll id="trust-scroll">
            {jumpLinks.map(item =>
                <PageSection key={item.key}>
                    <div className="pf-c-page__anchor" id={`section-${item.section}`} tabIndex={-1}></div>
                    <Flex justifyContent={{ default: 'justifyContentCenter' }}>
                        <FlexItem
                            className='ins-c-width-limiter'>
                            {item.component}
                        </FlexItem>
                    </Flex>
                </PageSection>)}
        </PageGroup>
    </div>;
};

TrustScroll.displayName = 'insights-scroll';

export default routerParams(TrustScroll);
