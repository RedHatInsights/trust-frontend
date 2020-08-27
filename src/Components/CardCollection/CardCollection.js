import './CardCollection.scss';

import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Text,
    TextContent,
    TextVariants,
    Title,
    TitleSizes
} from '@patternfly/react-core/dist/esm/components';
import { Split, SplitItem } from '@patternfly/react-core/dist/esm/layouts/Split/index';

import React from 'react';
import propTypes from 'prop-types';

const CardCollection = ({ collectionTitle, collectionDesc, leftCards, rightCards }) => {

    const cardBuilder = card => <Card className='ins-c-collection-card'>
        <CardTitle>{card.title}</CardTitle>
        <CardBody>{card.body}</CardBody>
        {card.footer && <CardFooter>{card.footer}</CardFooter>}
    </Card>;

    return <div className='ins-c-data-collection'>
        <Title headingLevel='h2' size={TitleSizes.xl} className='ins-c-title'>
            {collectionTitle}
        </Title>
        {collectionDesc && <TextContent className='ins-c-collection-desc'>
            <Text component={TextVariants.p}>{collectionDesc}</Text>
        </TextContent>}
        <Split hasGutter>
            <SplitItem>
                {leftCards.map(card => cardBuilder(card))}
            </SplitItem>
            <SplitItem>
                {rightCards.map(card => cardBuilder(card))}
            </SplitItem>
        </Split>
    </div>;
};

CardCollection.propTypes = {
    children: propTypes.node,
    collectionTitle: propTypes.string,
    collectionDesc: propTypes.string,
    leftCards: propTypes.array,
    rightCards: propTypes.array
};

export default CardCollection;

