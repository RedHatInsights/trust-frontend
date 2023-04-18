import React, { useEffect } from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  Grid,
  GridItem,
} from '@patternfly/react-core';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import './overview-page.scss';

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
const OverviewPage = () => {
  useEffect(() => {
    insights?.chrome?.appAction?.('sample-page');
  }, []);

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Trusted Content" />
        <p> Overview </p>
      </PageHeader>
      <Main>
        <Grid hasGutter>
          <GridItem span={12}>
            <Card>
              <CardBody>Upload an SBOM etc</CardBody>
            </Card>
          </GridItem>
          <GridItem span={6}>
            <Card>
              <CardTitle>Get Started</CardTitle>
            </Card>
          </GridItem>
          <GridItem span={6} rowSpan={2}>
            <Card>
              <CardTitle> Why Trust Red Hat? </CardTitle>
            </Card>
          </GridItem>
          <GridItem span={6}>
            <Card>
              <CardTitle> Subscribe </CardTitle>
              <CardBody>
                Large enterprises to single developers, we have the right
                subscription for you.
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
        {/*
        <Stack hasGutter>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              Get Started!
            </Title>
            Get Started by doing that thing with the other things, now!
          </StackItem>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              Want to know more about your SBOM?
            </Title>
            Upload it here. Don't have an SBOM? Use ours.
          </StackItem>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              Why trust Red Hat?
            </Title>
            We have cool hats.
          </StackItem>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              Subscribe
            </Title>
            Buy now, for less than the cost of a cup of coffee a day.
          </StackItem>
          <StackItem>
            <Stack hasGutter>
              <StackItem>
                <Title headingLevel="h2" size="3xl">
                  Handy-Dandy Developer Links{' '}
                </Title>
              </StackItem>
              <StackItem>
                <AppLink to="search"> Search </AppLink>
              </StackItem>
              <StackItem>
                <AppLink to="tutorial"> Tutorial Page </AppLink>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
        */}
      </Main>
    </React.Fragment>
  );
};

export default OverviewPage;
