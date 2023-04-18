import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, GridItem, TextInput } from '@patternfly/react-core';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import './inventory-page.scss';
import AppLink from '../../Components/AppLink';
import { useLocation } from 'react-router-dom';
import { loadInventory, selectInventory } from '../../store/inventory';
import { TableComposable, Tbody, Td, Tr } from '@patternfly/react-table';

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
const InventoryPage = () => {
  const dispatch = useDispatch();

  const inventory = useSelector(selectInventory);
  const location = useLocation();

  useEffect(() => {
    console.log('location changed');
    dispatch(loadInventory());
  }, [location]);

  useEffect(() => {
    insights?.chrome?.appAction?.('sample-page');
  }, []);

  const [filter, setFilter] = React.useState<string>('');
  const [filteredInventory, setFilteredInventory] = React.useState<any>([]);

  const doFilter = (input: any) => {
    setFilter(input);
  };

  useEffect(() => {
    setFilteredInventory(
      inventory
        .sort((left: any, right: any) => {
          if (left.purl == right.purl) {
            return 0;
          } else if (left.purl < right.purl) {
            return -1;
          } else {
            return 1;
          }
        })
        .filter((each: any) => {
          return each.purl.includes(filter);
        })
    );
  }, [filter, inventory]);

  //console.log('dependencies: ', dependencies);
  //console.log('dependants: ', dependants);

  console.log('redraw filtered', filteredInventory.length);

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Inventory" />
      </PageHeader>
      <Main>
        <Grid>
          <GridItem span={8}>
            <TextInput onChange={doFilter} />
          </GridItem>
          <GridItem span={8}>
            <TableComposable variant="compact">
              <Tbody>
                {filteredInventory.map((each: any) => {
                  return (
                    <Tr key={each.purl}>
                      <Td>
                        <AppLink
                          to={
                            '/package/' +
                            encodeURIComponent(each.trustedVersions[0].purl)
                          }
                        >
                          {each.trustedVersions[0].purl}
                        </AppLink>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </TableComposable>
          </GridItem>
          <GridItem span={4}>RHS</GridItem>
        </Grid>
      </Main>
    </React.Fragment>
  );
};
export default InventoryPage;
