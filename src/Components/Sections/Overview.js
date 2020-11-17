import './overview.scss';

import { Card, CardBody, CardTitle, TextContent, Title, TitleSizes } from '@patternfly/react-core/dist/esm/components';
import { Grid } from '@patternfly/react-core/dist/esm/layouts';
import { Split, SplitItem } from '@patternfly/react-core/dist/esm/layouts/Split';

import React from 'react';
import messages from '../../Messages';
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
    const cardBuilder = (card, index) => <Card className='ins-c-card' isFlat>
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

    return <React.Fragment>
        <Grid hasGutter>
            <TextContent>
                <Title headingLevel='h2' size={TitleSizes.lg}>
                    {intl.formatMessage(messages.dataPrivacy)}
                </Title>
            </TextContent>
            <Grid hasGutter>
                {steps.map((step, index) => cardBuilder(step, index))}
            </Grid>
        </Grid>
    </React.Fragment>;
};

export default OverviewTab;
