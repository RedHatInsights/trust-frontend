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
        leftCards: [{
            title: intl.formatMessage(messages.openShiftDedicated),
            body: intl.formatMessage(messages.openShiftDedicatedBody),
            footer: link(intl.formatMessage(messages.openShiftDedicatedFooter), 'https://access.redhat.com/products/openshift-dedicated-red-hat')
        }, {
            title: intl.formatMessage(messages.penetrationTesting),
            body: intl.formatMessage(messages.penetrationTestingBody)
        }, {
            title: intl.formatMessage(messages.restrictedData),
            body: intl.formatMessage(messages.restrictedDataBody)
        }
        ],
        rightCards: [{
            title: intl.formatMessage(messages.cvePatching),
            body: intl.formatMessage(messages.cvePatchingBody)
        }, {
            title: intl.formatMessage(messages.agileSoftware),
            body: intl.formatMessage(messages.agileSoftwareBody)
        }]
    }, {
        collectionTitle: intl.formatMessage(messages.insightsClientArchitecture),
        leftCards: [{
            title: intl.formatMessage(messages.redhatSso),
            body: intl.formatMessage(messages.redhatSsoBody),
            footer: link(intl.formatMessage(messages.redhatSsoFooter), 'https://access.redhat.com/start/how-to-create-and-manage-users')
        }],
        rightCards: [{
            title: intl.formatMessage(messages.roleBasedAccess),
            body: intl.formatMessage(messages.roleBasedAccessBody),
            footer: link(intl.formatMessage(messages.roleBasedAccessFooter), 'https://access.redhat.com/documentation/en-us/red_hat_insights/2020-04/html/user_access_configuration_guide_for_red_hat_insights/index')
        }]
    }, {
        collectionTitle: intl.formatMessage(messages.dataRetention),
        leftCards: [{
            title: intl.formatMessage(messages.lastUploads),
            body: intl.formatMessage(messages.lastUploadsBody)
        }],
        rightCards: [{
            title: intl.formatMessage(messages.automaticStale),
            body: intl.formatMessage(messages.automaticStaleBody)
        }]
    }, {
        collectionTitle: intl.formatMessage(messages.regulations),
        collectionDesc: intl.formatMessage(messages.regulationsBody),
        leftCards: [{
            title: intl.formatMessage(messages.gdprPii),
            body: intl.formatMessage(messages.gdprPiiBody),
            footer: link(intl.formatMessage(messages.gdprPiiFooter), 'https://www.redhat.com/en/gdpr')
        }],
        rightCards: [{
            title: intl.formatMessage(messages.dataControls),
            body: intl.formatMessage(messages.dataControlsBody),
            footer: link(intl.formatMessage(messages.dataControlsFooter), 'https://docs.google.com/document/d/1A7XnHrgAifFb-DH14P0QI1WcbP_8HVpTK83Bssvx8jA/edit?ts=5f452b87#heading=h.gni941inqxhg')
        }]
    }];

    return <div className='ins-c-flex-center'>
        {protectionData.map(data => <CardCollection key={data.collectionTitle} {...data} />)}
    </div>;
};

export default DataProtection;
