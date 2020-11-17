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

import {
    Grid,
    GridItem
} from '@patternfly/react-core/dist/esm/layouts';

import React from 'react';
import propTypes from 'prop-types';

const CardCollection = ({ collectionTitle, collectionDesc, cards }) => {

    const cardBuilder = card => <Card className='ins-c-collection-card' isFlat>
        <CardTitle>{card.title}</CardTitle>
        <CardBody>{card.body}</CardBody>
        {card.footer && <CardFooter>{card.footer}</CardFooter>}
    </Card>;

    return <div className="ins-c-content-section">
        <Grid hasGutter>
            <TextContent>
                <Title headingLevel='h2' size={TitleSizes.xl}>
                    {collectionTitle}
                </Title>
                <Text component={TextVariants.p}>{collectionDesc}</Text>
            </TextContent>
            <Grid md={6} lg={6} xl={6} xl2={6} hasGutter>
                {cards.map(card => <GridItem key={card}> {cardBuilder(card)} </GridItem>)}
            </Grid>
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

