import './Overview.scss';

import { Card, CardBody, CardTitle, Title, TitleSizes } from '@patternfly/react-core/dist/esm/components';
import { Split, SplitItem } from '@patternfly/react-core/dist/esm/layouts/Split/index';

import React from 'react';
import messages from '../../Messages';
import routerParams from '@redhat-cloud-services/frontend-components-utilities/files/RouterParams';
import { useIntl } from 'react-intl';

const OverviewTab = () => {
    const intl = useIntl();

    const steps = [{
        title: intl.formatMessage(messages.insightsIsDesigned),
        body: intl.formatMessage(messages.insightsIsDesignedBody)
    }, {
        title: intl.formatMessage(messages.youControlWhat),
        body: intl.formatMessage(messages.youControlWhatBody)
    }, {
        title: intl.formatMessage(messages.dataIsEncrypted),
        body: intl.formatMessage(messages.dataIsEncryptedBody)
    }, {
        title: intl.formatMessage(messages.onlyOneUploaded),
        body: intl.formatMessage(messages.onlyOneUploadedBody)
    }];
    const cardBuilder = (card, index) => <Card className='ins-c-card'>
        <Split>
            <SplitItem>
                <span className='ins-c-cardNumber'>{index + 1}.</span>
            </SplitItem>
            <SplitItem>
                <CardTitle>{card.title}</CardTitle>
                <CardBody>{card.body}</CardBody>
            </SplitItem>
        </Split>

    </Card>;

    return <div className='ins-c-flex-center'>
        <Title headingLevel='h2' size={TitleSizes.lg} className='ins-c-title'>
            {intl.formatMessage(messages.dataPrivacy)}
        </Title>
        {steps.map((step, index) => cardBuilder(step, index))}
    </div>;
};

export default routerParams(OverviewTab);
