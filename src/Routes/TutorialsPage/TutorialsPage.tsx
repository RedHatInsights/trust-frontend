import React, { useEffect } from 'react';

import { Stack, StackItem, Title } from '@patternfly/react-core';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import './tutorials-page.scss';
import AppLink from '../../Components/AppLink';

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
const TutorialsPage = () => {
  useEffect(() => {
    insights?.chrome?.appAction?.('sample-page');
  }, []);

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Tutorials" />
        <p> Tutorial! </p>
      </PageHeader>
      <Main>
        <Stack hasGutter>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              <AppLink to="tutorial/1">Tutorial 1</AppLink>
            </Title>
          </StackItem>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              <AppLink to="tutorial/2">Tutorial 2</AppLink>
            </Title>
          </StackItem>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              <AppLink to="tutorial/3">Tutorial 3</AppLink>
            </Title>
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default TutorialsPage;
