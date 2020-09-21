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
import { Grid, GridItem } from '@patternfly/react-core/dist/esm/layouts/Grid/index';

import React from 'react';
import propTypes from 'prop-types';

const CardCollection = ({ collectionTitle, collectionDesc, cards }) => {

    const cardBuilder = card => <Card className='ins-c-collection-card' isFlat>
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
        <Grid md={6} lg={6} xl={6} xl2={6} hasGutter>
            {cards.map(card => <GridItem key={card}> {cardBuilder(card)} </GridItem>)}
        </Grid>
    </div>;
};

CardCollection.propTypes = {
    children: propTypes.node,
    collectionTitle: propTypes.string,
    collectionDesc: propTypes.string,
    cards: propTypes.array
};

export default CardCollection;

