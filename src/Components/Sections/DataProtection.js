/* eslint-disable max-len */
import CardCollection from '../CardCollection/CardCollection';
import React from 'react';
import { link } from '../Common';
import messages from '../../Messages';
import { useIntl } from 'react-intl';

const DataProtection = () => {
    const intl = useIntl();

    const protectionData = [{
        collectionTitle: intl.formatMessage(messages.infrastructure),
        collectionDesc: intl.formatMessage(messages.infrastructureBody),
        cards: [{
            title: intl.formatMessage(messages.openShiftDedicated),
            body: intl.formatMessage(messages.openShiftDedicatedBody),
            footer: link(intl.formatMessage(messages.openShiftDedicatedFooter), 'https://access.redhat.com/products/openshift-dedicated-red-hat')
        }, {
            title: intl.formatMessage(messages.cvePatching),
            body: intl.formatMessage(messages.cvePatchingBody)
        }, {
            title: intl.formatMessage(messages.penetrationTesting),
            body: intl.formatMessage(messages.penetrationTestingBody)
        }, {
            title: intl.formatMessage(messages.agileSoftware),
            body: intl.formatMessage(messages.agileSoftwareBody)
        },  {
            title: intl.formatMessage(messages.restrictedData),
            body: intl.formatMessage(messages.restrictedDataBody)
        }]
    }, {
        collectionTitle: intl.formatMessage(messages.userAccess),
        collectionDesc: intl.formatMessage(messages.userAccessBody),
        cards: [{
            title: intl.formatMessage(messages.redhatSso),
            body: intl.formatMessage(messages.redhatSsoBody),
            footer: link(intl.formatMessage(messages.redhatSsoFooter), 'https://access.redhat.com/start/how-to-create-and-manage-users')
        }, {
            title: intl.formatMessage(messages.roleBasedAccess),
            body: intl.formatMessage(messages.roleBasedAccessBody),
            footer: link(intl.formatMessage(messages.roleBasedAccessFooter), 'https://access.redhat.com/documentation/en-us/red_hat_insights/2020-10/html/user_access_configuration_guide_for_red_hat_insights/index')
        }]
    }, {
        collectionTitle: intl.formatMessage(messages.dataRetention),
        cards: [{
            title: intl.formatMessage(messages.lastUploads),
            body: intl.formatMessage(messages.lastUploadsBody)
        }, {
            title: intl.formatMessage(messages.automaticStale),
            body: intl.formatMessage(messages.automaticStaleBody)
        }]
    }, {
        collectionTitle: intl.formatMessage(messages.regulations),
        collectionDesc: intl.formatMessage(messages.regulationsBody),
        cards: [{
            title: intl.formatMessage(messages.gdprPii),
            // eslint-disable-next-line react/display-name
            body: intl.formatMessage(messages.gdprPiiBody, { break: () => <React.Fragment><br /><br /></React.Fragment> }),
            footer: link(intl.formatMessage(messages.gdprPiiFooter), 'https://www.redhat.com/en/gdpr')
        }, {
            title: intl.formatMessage(messages.dataControls),
            body: intl.formatMessage(messages.dataControlsBody),
            footer: link(intl.formatMessage(messages.dataControlsFooter), 'https://cloud.redhat.com/security/insights#section-data-collection')
        }]
    }];

    return <React.Fragment>
        {protectionData.map(data => <CardCollection key={data.collectionTitle} {...data} />)}
    </React.Fragment>;
};

export default DataProtection;
