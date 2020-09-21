/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
    redHatInsightsSecurity: {
        id: 'redHatInsightsSecurity',
        description: 'Title',
        defaultMessage: 'Red Hat Insights Security'
    },
    redHatInsightsSecurityBody: {
        id: 'redHatInsightsSecurityBody',
        description: 'Red Hat Insights provides',
        defaultMessage: 'Red Hat Insights provides a mechanism for users to obtain actionable intelligence regarding suggested improvements to deployed Red Hat software. This document covers the security measures Red Hat puts in place to provide secure transmission, processing, and analysis of this data by those tools.'
    },
    goto: {
        id: 'goto',
        description: 'Action go to Red Hat Insights',
        defaultMessage: 'Go to Red Hat Insights'
    },
    overview: {
        id: 'overview',
        description: 'Overview',
        defaultMessage: 'Overview'
    },
    dataCollection: {
        id: 'dataCollection',
        description: 'Data collection and controls',
        defaultMessage: 'Data collection and controls'
    },
    dataProtection: {
        id: 'dataProtection',
        description: 'Data protection',
        defaultMessage: 'Data protection'
    },
    faq: {
        id: 'faq',
        description: 'Frequently asked questions',
        defaultMessage: 'Frequently asked questions'
    },
    dataPrivacy: {
        id: 'dataPrivacy',
        description: 'Data Privacy in Red Hat Insights for Managing Red Hat Enterprise Linux Environments',
        defaultMessage: 'Data Privacy in Red Hat Insights for Managing Red Hat Enterprise Linux Environments'
    },
    insightsIsDesigned: {
        id: 'insightsIsDesigned',
        description: 'Insights is designed to work with minimal data.',
        defaultMessage: 'Insights is designed to work with minimal data.'
    },
    insightsIsDesignedBody: {
        id: 'insightsIsDesignedBody',
        description: 'Insights is designed - body',
        defaultMessage: 'Red Hat Insights collects only the minimum system metadata that is needed to analyze and identify issues in your Red Hat Enterprise Linux environments.'
    },
    youControlWhat: {
        id: 'youControlWhat',
        description: 'You control what data is sent to Red Hat for analysis.',
        defaultMessage: 'You control what data is sent to Red Hat for analysis.'
    },
    youControlWhatBody: {
        id: 'youControlWhatBody',
        description: 'You control what data is sent - body',
        defaultMessage: 'Before data is sent, you have the option to inspect and redact information.'
    },
    dataIsEncrypted: {
        id: 'dataIsEncrypted',
        description: 'Data is encrypted throughout the processes, with a customizable collection schedule.',
        defaultMessage: 'Data is encrypted throughout the processes, with a customizable collection schedule.'
    },
    dataIsEncryptedBody: {
        id: 'dataIsEncryptedBody',
        description: 'Data is encrypted throughout the processes - body',
        defaultMessage: 'Red Hat signs its data collection rules and will abort if the signature cannot be verified.'
    },
    onlyOneUploaded: {
        id: 'onlyOneUploaded',
        description: 'Only one uploaded data set is stored at a time.',
        defaultMessage: 'Only one uploaded data set is stored at a time.'
    },
    onlyOneUploadedBody: {
        id: 'onlyOneUploadedBody',
        description: 'Only one uploaded data - body',
        defaultMessage: 'For each REHL host or instance, one uploaded data set is stored on the services infrastructure.'
    },
    insightsClientArchitecture: {
        id: 'insightsClientArchitecture',
        description: 'Insights Client Architecture',
        defaultMessage: 'Insights Client Architecture'
    },
    insightsClientArchitectureBody: {
        id: 'insightsClientArchitectureBody',
        description: 'Insights Client Architecture Description',
        defaultMessage: 'The Insights Client plays a critical role in extracting metadata from a Red Hat Enterprise Linux host to be analyzed by Red Hat Insights. Several design decisions have been made as well as additional controls available to protect the collection and transmission of host data to meet your needs.'
    },
    openSourceClientCode: {
        id: 'openSourceClientCode',
        description: 'Open source client code',
        defaultMessage: 'Open Source Client Code'
    },
    openSourceClientCodeBody: {
        id: 'openSourceClientCodeBody',
        description: 'Open source client code body',
        defaultMessage: 'The Insights client was developed with OpenSource principles in mind & the Insights client code is available for viewing.'
    },
    openSourceClientCodeFooter: {
        id: 'openSourceClientCodeFooter',
        description: 'Open source client code footer',
        defaultMessage: 'Red Had Insights Client Source Code'
    },
    minimalSystemMetadata: {
        id: 'minimalSystemMetadata',
        description: 'Minimal System Metadata Collected',
        defaultMessage: 'Minimal System Metadata Collected'
    },
    minimalSystemMetadataBody: {
        id: 'minimalSystemMetadataBody',
        description: 'Minimal System Metadata Collected Body',
        defaultMessage: 'The Insights Client takes the approach of minimal data collection and will pre-process the collection to target specific lines or facts of files where possible. This ensures the overall payload remains small, collecting only what is necessary for analysis and avoids key areas where sensitive data may be stored (ex: core dumps, databases)'
    },
    minimalSystemMetadataFooter: {
        id: 'minimalSystemMetadataFooter',
        description: 'Minimal System Metadata Collected Footer',
        defaultMessage: 'System information collected for Red Hat Insights'
    },
    encryptedCommunication: {
        id: 'encryptedCommunication',
        description: 'Encrypted Communication',
        defaultMessage: 'Encrypted Communication'
    },
    encryptedCommunicationBody: {
        id: 'encryptedCommunicationBody',
        description: 'Encrypted Communication Body',
        defaultMessage: 'All communication with Red Hat occurs over encrypted channels - leveraging TLS & mutual certificate authentication. All data is encrypted in transit and at rest.'
    },
    leverageExistingFirewallRules: {
        id: 'leverageExistingFirewallRules',
        description: 'Leverage existing Firewall rules',
        defaultMessage: 'Leverage existing Firewall rules'
    },
    leverageExistingFirewallRulesBody: {
        id: 'leverageExistingFirewallRulesBody',
        description: 'Leverage existing Firewall rules body',
        defaultMessage: 'If a host is already subscribed to Red Hat Subscription Manager (RHSM) or to a connected Red Hat Satellite, the Insights Client by default will leverage those existing established connections for its communication with Red Hat resulting in no additional firewall rules or ports to be added.'
    },
    leverageExistingFirewallRulesFooter: {
        id: 'leverageExistingFirewallRulesFooter',
        description: 'Leverage existing Firewall rules Footer',
        defaultMessage: 'Accessing Red Hat Insights Through a Firewall'
    },
    resourceRestrictions: {
        id: 'resourceRestrictions',
        description: 'Resource Restrictions',
        defaultMessage: 'Resource Restrictions'
    },
    resourceRestrictionsBody: {
        id: 'resourceRestrictionsBody',
        description: 'Resource Restrictions body',
        defaultMessage: 'Resource constraints are implemented to limit the client’s usage of the host’s CPU and memory resources and all collection items have automatic timeouts if taking longer than expected.'
    },
    insightsClientControls: {
        id: 'insightsClientControls',
        description: 'Insights Client Controls',
        defaultMessage: 'Insights Client Controls'
    },
    insightsClientControlsBody: {
        id: 'insightsClientControlsBody',
        description: 'Insights Client Controls body',
        defaultMessage: 'The Red Hat Insights client has several optional controls available for use to enable overall customization on how the Insights client runs as well as what information the Insights client sends from the host th Red Hat for analysis.'
    },
    ipHostnameObf: {
        id: 'ipHostnameObf',
        description: 'IP & Hostname Obfuscation',
        defaultMessage: 'IP & Hostname Obfuscation'
    },
    ipHostnameObfBody: {
        id: 'ipHostnameObfBody',
        description: 'IP & Hostname Obfuscation body',
        defaultMessage: 'Some organizations may consider IP and hostnames to be sensitive information they wish to not transmit. Red Hat Insights has optional controls that enable you to easily redact the IP address or hostname from being transmitted to Red Hat and obfuscate the values within the UI. Additional options enable a custom “Display Name” to be entered for the identification of obfuscated hosts.'
    },
    ipHostnameObfFooter: {
        id: 'ipHostnameObfFooter',
        description: 'IP & Hostname Obfuscation footer',
        defaultMessage: 'IP Address & Hostname obfuscation guide'
    },
    minimalHostImpact: {
        id: 'minimalHostImpact',
        description: 'Minimal Host Impact',
        defaultMessage: 'Minimal Host Impact'
    },
    minimalHostImpactBody: {
        id: 'minimalHostImpactBody',
        description: 'Minimal Host Impact body',
        defaultMessage: 'The Insights client is designed to activate at its scheduled time, perform the collection, and then shut down. By default, check-ins occur once per day and are staggered with a time delay from each system to minimize network strain. The scheduled time can be overridden via a custom schedule to change the time of day or frequency of the check-in from the default values.'
    },
    minimalHostImpactFooter: {
        id: 'minimalHostImpactFooter',
        description: 'Minimal Host Impact footer',
        defaultMessage: 'Change the Insights Client schedule'
    },
    proxySupport: {
        id: 'proxySupport',
        description: 'Proxy support',
        defaultMessage: 'Proxy Support'
    },
    proxySupportBody: {
        id: 'proxySupportBody',
        description: 'Proxy support body',
        defaultMessage: 'Insights client has built-in support for HTTP proxies or an existing connected Red Hat Satellite may be leveraged as a proxy to streamline setup and registration.'
    },
    proxySupportFooter: {
        id: 'proxySupportFooter',
        description: 'Proxy support footer',
        defaultMessage: 'Insights Client proxy documentation'
    },
    granularControls: {
        id: 'granularControls',
        description: 'Granular controls for Data Redaction',
        defaultMessage: 'Granular controls for Data Redaction'
    },
    granularControlsBody: {
        id: 'granularControlsBody',
        description: 'Granular controls for Data Redaction body',
        defaultMessage: 'Red Hat Insights provides several optional controls that can be leveraged to redact data on-premise prior to being sent for analysis. Any file, pattern, or keyword can be specified within the Insights-client’s deny list functionality, which will result in the Insights-client to not proceed with collection of what’s been defined.'
    },
    granularControlsFooter: {
        id: 'granularControlsFooter',
        description: 'Granular controls for Data Redaction footer',
        defaultMessage: 'Insights Client Data Redaction guide'
    },
    payloadTesting: {
        id: 'payloadTesting',
        description: 'Payload testing and review',
        defaultMessage: 'Payload testing and review'
    },
    payloadTestingBody: {
        id: 'payloadTestingBody',
        description: 'Payload testing and review body',
        defaultMessage: 'The Insights client has built-in options available to generate a payload archive locally without being sent to Red Hat. This may be used to inspect the contents from the host which Red Hat Insights leverages or to verify any redaction or obfuscation settings leveraged. Additionally, the client has controls to enable an archive to be saved locally for every check-in for auditing.'
    },
    payloadTestingFooter: {
        id: 'payloadTestingFooter',
        description: 'Payload testing and review footer',
        defaultMessage: 'Validating via local audit redaction & obfuscation'
    },
    optionalHost: {
        id: 'optionalHost',
        description: 'Optional Host Unregistration',
        defaultMessage: 'Optional Host Unregistration'
    },
    optionalHostBody: {
        id: 'optionalHostBody',
        description: 'Optional Host Unregistration body',
        defaultMessage: 'The registration of a host to Red Hat Insights may be unregistered manually at any point. Running the unregistration command will disable the Insights client from checking-in and remove the host and its results from Red Hat Insights.'
    },
    optionalHostFooter: {
        id: 'optionalHostFooter',
        description: 'Optional Host Unregistration footer',
        defaultMessage: 'Unregistering a host'
    },
    infrastructure: {
        id: 'infrastructure',
        description: 'Infrastructure',
        defaultMessage: 'Infrastructure'
    },
    infrastructureBody: {
        id: 'infrastructureBody',
        description: 'Infrastructure body',
        defaultMessage: 'Security of your data in Red Hat is a priority and every effort is made to ensure that information is not unnecessarily persisted and that it is secured using industry-standard best practices.'
    },
    openShiftDedicated: {
        id: 'openShiftDedicated',
        description: 'Openshift Dedicated',
        defaultMessage: 'Openshift Dedicated'
    },
    openShiftDedicatedBody: {
        id: 'openShiftDedicatedBody',
        description: 'Openshift Dedicated body',
        defaultMessage: 'Red Hat Insights operates off of Red Hat’s own Openshift Dedicated infrastructure.'
    },
    openShiftDedicatedFooter: {
        id: 'openShiftDedicatedFooter',
        description: 'Openshift Dedicated footer',
        defaultMessage: 'Red Hat Openshift Dedicated'
    },
    cvePatching: {
        id: 'cvePatching',
        description: 'CVE & Patching',
        defaultMessage: 'CVE & Patching'
    },
    cvePatchingBody: {
        id: 'cvePatchingBody',
        description: 'CVE & Patching body',
        defaultMessage: 'All infrastructure software components are continuously monitored for known Common Vulnerability Exposures (CVEs) and proactively patched. Patches that can impact end-users will be applied as soon as possible but may necessitate end-user notification and scheduling a service window in some cases.'
    },
    penetrationTesting: {
        id: 'penetrationTesting',
        description: 'Penetration Testing',
        defaultMessage: 'Penetration Testing'
    },
    penetrationTestingBody: {
        id: 'penetrationTestingbody',
        description: 'Penetration Testing body',
        defaultMessage: 'Penetration testing is conducted by both internal and external parties.'
    },
    agileSoftware: {
        id: 'agileSoftware',
        description: 'Agile Software Delivery Lifecycle',
        defaultMessage: 'Agile Software Delivery Lifecycle'
    },
    agileSoftwareBody: {
        id: 'agileSoftwareBody',
        description: 'Agile Software Delivery Lifecycle body',
        defaultMessage: 'Development teams follow an Agile software delivery lifecycle, which means that security-related defects can be addressed rapidly, and software patches are regularly released as part of our continuous delivery model. All software is analyzed with static code analyzers and all reported issues are fixed before code is deployed into production.'
    },
    restrictedData: {
        id: 'restrictedData',
        description: 'Restricted Data Access',
        defaultMessage: 'Restricted Data Access'
    },
    restrictedDataBody: {
        id: 'restrictedDataBody',
        description: 'Restricted Data Access body',
        defaultMessage: 'Access to systems that handle customer data is controlled via multi-factor authentication and authorization controls. Access is granted on a need to know basis.'
    },
    roleBasedAccess: {
        id: 'roleBasedAccess',
        description: 'Role-Based Access Control',
        defaultMessage: 'Role-Based Access Control'
    },
    roleBasedAccessBody: {
        id: 'roleBasedAccessBody',
        description: 'Role-Based Access Control Body',
        defaultMessage: 'Cloud.redhat.com includes Role-Based Access Control (RBAC) functionality which enables super-users to grant or restrict user logins on their account access to Red Hat Insights and it’s individual services. '
    },
    roleBasedAccessFooter: {
        id: 'roleBasedAccessFooter',
        description: 'Role-Based Access Control footer',
        defaultMessage: 'Insights User Access Configuration Guide'
    },
    redhatSso: {
        id: 'redhatSso',
        description: 'Red Hat SSO Authentication',
        defaultMessage: 'Red Hat SSO Authentication'
    },
    redhatSsoBody: {
        id: 'redhatSsoBody',
        description: 'Red Hat SSO Authentication body',
        defaultMessage: 'Red Hat Insights on cloud.redhat.com is integrated into Red Hat’s existing Single-Sign-On (SSO) service for user management. This integration enables users to use their existing login credentials that are used by other Red Hat assets such as the Red Hat Customer Portal.'
    },
    redhatSsoFooter: {
        id: 'redhatSsoFooter',
        description: 'Red Hat SSO Authentication footer',
        defaultMessage: 'Red Hat User Management'
    },
    dataRetention: {
        id: 'dataRetention',
        description: 'Data Retention',
        defaultMessage: 'Data Retention'
    },
    lastUploads: {
        id: 'lastUploads',
        description: 'Latest Upload for Insights Client',
        defaultMessage: 'Latest Upload for Insights Client'
    },
    lastUploadsBody: {
        id: 'lastUploadsBody',
        description: 'Latest Upload for Insights Client body',
        defaultMessage: 'A host registered with the Insights-client checks in daily, and when a new upload is sent, the previous upload is removed; resulting in only one upload from the client is kept at a time.'
    },
    automaticStale: {
        id: 'automaticStale',
        description: 'Automatic Stale System Removal',
        defaultMessage: 'Automatic Stale System Removal'
    },
    automaticStaleBody: {
        id: 'automaticStaleBody',
        description: 'Automatic Stale System Removal body',
        defaultMessage: 'If a system stops checking in with the Red Hat Insights service, after 24 hours it is marked and identified as a “stale host”. If a stale host is not seen reporting into Red Hat Insights for 30 consecutive days, the host is automatically unregistered from the Red Hat Insights service.'
    },
    regulations: {
        id: 'regulations',
        description: 'Regulations',
        defaultMessage: 'Regulations'
    },
    regulationsBody: {
        id: 'regulationsBody',
        description: 'Regulations body',
        defaultMessage: 'As a Red Hat product, Red Hat Insights is internally assessed and takes several steps to follow Red Hat’s policies around various Data Regulations.'
    },
    gdprPii: {
        id: 'gdprPii',
        description: 'GDPR & PII',
        defaultMessage: 'GDPR & PII'
    },
    gdprPiiBody: {
        id: 'gdprPiiBody',
        description: 'GDPR & PII body',
        defaultMessage: 'Red Hat Insights adheres to Red Hat’s policies and guidelines put in place for the European Union’s General Data Protection Regulation.'
    },
    gdprPiiFooter: {
        id: 'gdprPiiFooter',
        description: 'GDPR & PII footer',
        defaultMessage: 'Red Hat’s GDPR Policy and Guidelines'
    },
    dataControls: {
        id: 'dataControls',
        description: 'Data Controls & Redaction',
        defaultMessage: 'Data Controls & Redaction'
    },
    dataControlsBody: {
        id: 'dataControlsBody',
        description: 'Data Controls & Redaction body',
        defaultMessage: 'Highlighted in the “Insights Client Controls” section of this page, the Red Hat Insights client offers several controls which may be leveraged to inspect what data is collected, redact file, pattern or keywords from being collected, obfuscate IP address or Hostnames and locally audit the payload that is collected by the Insights Client.'
    },
    dataControlsFooter: {
        id: 'dataControlsFooter',
        description: 'Data Controls & Redaction footer',
        defaultMessage: 'Insights Client Controls'
    }
});
