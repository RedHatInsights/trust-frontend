import './Overview.scss';

import { Card, CardBody, CardTitle, Title, TitleSizes } from '@patternfly/react-core/dist/esm/components';
import { Grid, GridItem } from '@patternfly/react-core/dist/esm/layouts';

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
    const cardBuilder = (card) => <Card className='ins-c-numbered-card' isFlat>
        <CardTitle>
            <Title headingLevel="h3" size={TitleSizes.xl} aria-hidden='true'>
                {card.title}
            </Title>
        </CardTitle>
        <CardBody>{card.body}</CardBody>
    </Card>;

    return <React.Fragment>
        <Grid hasGutter>
            <GridItem>
                <Title headingLevel='h2' size={TitleSizes.lg}>
                    {intl.formatMessage(messages.dataPrivacy)}
                </Title>
            </GridItem>
            <GridItem>
                <ol className='pf-l-grid pf-m-gutter ins-c-numbered-list'>
                    {steps.map(step => <li className='pf-l-grid__item ins-c-numbered-list__item' key={step}> {cardBuilder(step)} </li>)}
                </ol>
            </GridItem>
        </Grid>
    </React.Fragment>;
};

export default OverviewTab;
