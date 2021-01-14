/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
    redHatInsightsSecurity: {
        id: 'redHatInsightsSecurity',
        description: 'Title',
        defaultMessage: 'Red Hat Insights Data & Application Security'
    },
    redHatInsightsSecurityBody: {
        id: 'redHatInsightsSecurityBody',
        description: 'Red Hat Insights provides',
        defaultMessage: 'Red Hat Insights is a Software-as-a-Service offering that enables users to obtain actionable intelligence regarding their Red Hat Enterprise Linux environments, helping to identify and address operational and vulnerability risks before an issue results in downtime.  To do this analysis, small pieces of system metadata are sent to the Red Hat Insights service for analysis.  This page covers the measures Red Hat has put into place to help reduce security risks when transmitting, processing, and analyzing this data.'
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
        defaultMessage: 'For each RHEL host or instance, one uploaded data set is stored on the services infrastructure.'
    },
    insightsClientArchitecture: {
        id: 'insightsClientArchitecture',
        description: 'Insights Client Architecture',
        defaultMessage: 'Insights Client Architecture'
    },
    insightsClientArchitectureBody: {
        id: 'insightsClientArchitectureBody',
        description: 'Insights Client Architecture Description',
        defaultMessage: 'The Insights Client plays a critical role in extracting metadata from a Red Hat Enterprise Linux host to be analyzed by Red Hat Insights. Several privacy controls are available to manage the collection and transmission of host data so that you can tailor what metadata is extracted and transmitted for Insights to analyze.  '
    },
    openSourceClientCode: {
        id: 'openSourceClientCode',
        description: 'Open source client code',
        defaultMessage: 'Open Source Client Code'
    },
    openSourceClientCodeBody: {
        id: 'openSourceClientCodeBody',
        description: 'Open source client code body',
        defaultMessage: 'The Insights client was developed with OpenSource principles in mind & the Insights client code is available for review and contribution.'
    },
    openSourceClientCodeFooter: {
        id: 'openSourceClientCodeFooter',
        description: 'Open source client code footer',
        defaultMessage: 'Red Hat Insights Client Source Code'
    },
    minimalSystemMetadata: {
        id: 'minimalSystemMetadata',
        description: 'Minimal System Metadata Collected',
        defaultMessage: 'Minimal System Metadata Collected'
    },
    minimalSystemMetadataBody: {
        id: 'minimalSystemMetadataBody',
        description: 'Minimal System Metadata Collected Body',
        defaultMessage: 'The Insights Client collects the minimum necessary metadata and will pre-process this data to target specific lines or facts within files where possible. This ensures the overall payload remains small, collecting what is necessary for analysis and avoiding key areas where sensitive data may be stored (e.g., core dumps, databases).'
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
        defaultMessage: 'All communication with Red Hat occurs over encrypted channels - leveraging Transport Layer Security (TLS) & mutual certificate authentication. All data is encrypted in transit and at rest.'
    },
    leverageExistingFirewallRules: {
        id: 'leverageExistingFirewallRules',
        description: 'Leverage existing Firewall rules',
        defaultMessage: 'Leverage existing Firewall rules'
    },
    leverageExistingFirewallRulesBody: {
        id: 'leverageExistingFirewallRulesBody',
        description: 'Leverage existing Firewall rules body',
        defaultMessage: 'If a host is already subscribed to Red Hat Subscription Manager (RHSM) or to a connected Red Hat Satellite, the Insights Client by default will leverage those existing and established connections for its communication with Red Hat. This means that no additional firewall rules or ports must be added.'
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
        defaultMessage: 'Resource constraints are implemented to limit the client’s usage of the host’s CPU and memory resources and all collection items have automatic timeouts if they are taking longer than expected.'
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
        defaultMessage: 'Some organizations may consider IP addresses and hostnames to be sensitive information they prefer not to transmit to Red Hat. Red Hat Insights has optional controls that enable you to easily exclude the IP address or hostname from the data file transmitted to Red Hat and to obfuscate the values within the user interface. Additional options enable a custom “Display Name” to be entered for the identification of obfuscated hosts. (e.g., “Webserver1”)'
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
        defaultMessage: 'The Insights client is designed to activate at its scheduled time, perform the metadata collection, and then shut down. By default, check-ins occur once per day and check-in time slots are staggered across each system to minimize network strain. A scheduled collection time slot can be overridden via a custom schedule function to change the time of day or frequency of the check-in from the default values on a per-system basis.'
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
        defaultMessage: 'Red Hat Insights provides several optional controls that can be leveraged to redact data on-premises prior to being sent for analysis. Any file, pattern, or keyword can be specified within the Insights-client’s deny list function, which will omit the specified items from the final collection prior to submission.'
    },
    granularControlsFooter: {
        id: 'granularControlsFooter',
        description: 'Granular controls for Data Redaction footer',
        defaultMessage: 'Insights Client Data Redaction guide'
    },
    payloadTesting: {
        id: 'payloadTesting',
        description: 'Payload testing and review',
        defaultMessage: 'Local collection inspection and redaction verification'
    },
    payloadTestingBody: {
        id: 'payloadTestingBody',
        description: 'Payload testing and review body',
        defaultMessage: 'The Insights client has built-in options available to generate a payload archive locally without sending this archive to Red Hat. This option may be used to inspect the contents of the collection and can be used to verify any redaction or obfuscation settings that you have specified.'
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
        defaultMessage: 'The security of your data in Red Hat is a priority. Safeguards include measures designed so that information is not unnecessarily persisted and that data is properly protected.'
    },
    openShiftDedicated: {
        id: 'openShiftDedicated',
        description: 'OpenShift Dedicated',
        defaultMessage: 'OpenShift Dedicated'
    },
    openShiftDedicatedBody: {
        id: 'openShiftDedicatedBody',
        description: 'OpenShift Dedicated body',
        defaultMessage: 'Red Hat Insights operates on Red Hat’s own OpenShift Dedicated infrastructure.'
    },
    openShiftDedicatedFooter: {
        id: 'openShiftDedicatedFooter',
        description: 'OpenShift Dedicated footer',
        defaultMessage: 'Red Hat OpenShift Dedicated'
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
        defaultMessage: 'Software-as-a-Service Delivery Lifecycle'
    },
    agileSoftwareBody: {
        id: 'agileSoftwareBody',
        description: 'Agile Software Delivery Lifecycle body',
        defaultMessage: 'Development teams follow a SaaS delivery lifecycle, which means that security-related defects can be addressed rapidly, and software patches are regularly released as part of our continuous delivery model.'
    },
    restrictedData: {
        id: 'restrictedData',
        description: 'Restricted Data Access',
        defaultMessage: 'Restricted Data Access'
    },
    restrictedDataBody: {
        id: 'restrictedDataBody',
        description: 'Restricted Data Access body',
        defaultMessage: 'Access to systems that handle customer data is controlled via multi-factor authentication and strict authorization controls. Access is granted on a need to know basis and limited for required SaaS infrastructure operations.'
    },
    roleBasedAccess: {
        id: 'roleBasedAccess',
        description: 'Role-Based Access Control',
        defaultMessage: 'Role-Based Access Control'
    },
    roleBasedAccessBody: {
        id: 'roleBasedAccessBody',
        description: 'Role-Based Access Control Body',
        defaultMessage: 'Cloud.redhat.com includes Role-Based Access Control (RBAC) functionality which enables administrators to grant or restrict user logins on their account access to Red Hat Insights and its individual services.'
    },
    roleBasedAccessFooter: {
        id: 'roleBasedAccessFooter',
        description: 'Role-Based Access Control footer',
        defaultMessage: 'Insights User Access Configuration Guide'
    },
    userAccess: {
        id: 'userAccess',
        description: 'User Access',
        defaultMessage: 'User Access'
    },
    userAccessBody: {
        id: 'userAccessBody',
        description: 'User Access body',
        defaultMessage: 'For user access management, Red Hat Insights uses Red Hat’s Single-Sign-On service and also provides Role Based Access Control (RBAC) functions to help manage user access to Red Hat Insights capabilities and information in a more granular way.'
    },
    redhatSso: {
        id: 'redhatSso',
        description: 'Red Hat SSO Authentication',
        defaultMessage: 'Red Hat SSO Authentication'
    },
    redhatSsoBody: {
        id: 'redhatSsoBody',
        description: 'Red Hat SSO Authentication body',
        defaultMessage: 'Red Hat Insights on cloud.redhat.com is integrated into Red Hat’s existing Single-Sign-On (SSO) service for user management. This integration enables users to use their existing login credentials that are used to access other Red Hat assets such as the Red Hat Customer Portal.'
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
        defaultMessage: 'As a Red Hat product, Red Hat Insights is internally assessed against Red Hat’s Data Regulation policies.'
    },
    gdprPii: {
        id: 'gdprPii',
        description: 'GDPR & PII',
        defaultMessage: 'GDPR & PII'
    },
    gdprPiiBody: {
        id: 'gdprPiiBody',
        description: 'GDPR & PII body',
        defaultMessage: 'Red Hat Insights adheres to Red Hat policies and guidelines aligned to the European Union’s General Data Protection Regulation. <break></break> The Red Hat Insights client collection does not target Personally Identifiable Information (PII).'
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
        defaultMessage: 'Highlighted in the “Insights Client Controls” section of this page, the Red Hat Insights client offers several controls which may be leveraged to inspect what data is collected, redact file, pattern, or keywords from being collected, obfuscate IP address or hostnames and locally audit the payload that is collected by the Insights Client.'
    },
    dataControlsFooter: {
        id: 'dataControlsFooter',
        description: 'Data Controls & Redaction footer',
        defaultMessage: 'Insights Client Controls'
    }
});
