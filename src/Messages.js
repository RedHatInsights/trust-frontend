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
    redHatInsightsSecurityBody2: {
        id: 'redHatInsightsSecurityBody2',
        description: 'Red Hat is committed',
        defaultMessage: 'Red Hat is committed to evaluating, implementing and monitoring the  industry security standards for those tools as they continue to evolve.'
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
    },
    faqBody: {
        id: 'faqBody',
        description: 'Taken from https://access.redhat.com/hydra/rest/drupal/articles/4602981',
        defaultMessage: '<p><strong>Q: What is Red Hat Insights?</strong><br /> <strong>A</strong>: Red Hat® Insights provides proactive analytics with remediation guidance for Red Hat Enterprise Linux® (RHEL) environments. Insights is now available as part of active RHEL subscriptions for versions 6.4 and higher. Using more than 1,000 (and growing!) rules, it automatically scans RHEL systems to identify potential risks in the areas of performance, scalability, availability and security. This service is continually updated to include new rules and features that make administration easier. Regardless of whether the RHEL deployment is on premises, in the cloud or on private clouds, Insights helps proactively identify and remediate threats to avoid outages and unplanned downtime.</p> <p>Note that as of May 2019, Insights is included with active Red Hat Enterprise Linux subscriptions for version 6.4 and above. Full details are available in the supported versions of Red Hat Enterprise Linux document.</p> <p><strong>Q: How do I install Red Hat Insights?</strong><br /> <strong>A</strong>: The installation process generally follows three basic steps:</p> <blockquote><ul> <li>Register your hosts or environments</li> <li>Review the analytics results </li> <li>Remediate issues</li> </ul> </blockquote> <p>More information, including registration details, is available at <a href="https://access.redhat.com/products/red-hat-insights#direct" target="_blank">Getting Started page</a></p> <p><strong>Q: Will Insights be included with all Red Hat Enterprise Linux versions, or are there exclusions?</strong><br /> <strong>A</strong>: Insights is available with all active RHEL subscriptions versions 6.4 and above - including RHEL 8. For versions of RHEL below version 8, you will install the Insights client, then register it. RHEL 8 includes the Insights client already, so you do not need to install it, but will need to register it. Note that embedded versions of Red Hat Enterprise Linux will not include Insights. See complete details on this page: <a href="https://access.redhat.com/support/policy/updates/errata" target="_blank">Supported Versions of Red hat Enterprise Linux</a>.</p> <p><strong>Q: What types of risks does Red Hat Insights identify?</strong><br /> <strong>A</strong>: Insights proactively identifies security, performance, availability and scalability issues. It leverages more than 1,000 rules that are derived from Red Hat’s extensive experience in supporting clients. Insights uniquely makes deep Red Hat knowledge that is used in identifying and solving issues in RHEL environments available when and where needed so you know where to focus your attention. It also provides remediation guidance for each issue and integrates with other Red Hat products such as Red Hat Ansible® to help you automate remediation steps.</p> <p><strong>Q: Where do I access Red Hat Insights?</strong><br /> <strong>A</strong>: Red Hat Insights is hosted on <a href="http://cloud.redhat.com" target="_blank">cloud.redhat.com</a>. Existing Insights users who have already installed the Insights client can proceed directly to the analytics dashboard on this cloud site. New users or existing customers who want to register additional systems should begin on the <a href="https://access.redhat.com/products/red-hat-insights#direct" target="_blank">Getting Started page</a> for detailed instructions on registering hosts.</p> <p><strong>Q: If I use RHEL from a public cloud provider can I still access Insights?</strong><br /> <strong>A</strong>: Yes. Insights will be bundled with RHEL as a value of the subscription or service instance. You are able to run Insights regardless of where you are running your RHEL workload including on premise, or on public or private clouds. You must have a Red Hat customer portal ID and a Red Hat account number to access Insights. Full details are available <a href="https://access.redhat.com/products/red-hat-insights#cloud" target="_blank"> here</a>.</p> <p><strong>Q: Can I choose to use Insights through access.redhat.com instead of cloud.redhat.com?</strong><br /> <strong>A</strong>: No. All existing Insights customers who were using Insights on access.redhat.com have been moved to cloud.redhat.com. There is no longer an option to use Insights on access.redhat.com.</p> <p><strong>Q: On which environments and cloud deployments does Red Hat Insights identify issues?</strong><br /> <strong>A</strong>: Insights works on any RHEL environment (except embedded RHEL) and identifies issues associated with this operating system across a range of deployment options including on-premises (including virtual) and public or private cloud.</p> <p><strong>Q: What connectivity does the server need to use Insights?</strong><br /> <strong>A</strong>: Ensure active network connection to:</p> <blockquote><ul> <li>https://api.access.redhat.com:443 </li> <li>https://cert-api.access.redhat.com:443 </li> </ul> </blockquote> <p><strong>Q: What is the design principle behind data collection in Insights?</strong><br /> <strong>A</strong>: The design principle with Insights is simple: collect only the minimum data that is needed for analysis and issue identification. Complete volumes of system information such as core dumps or full log files are avoided. Insights, by default, does not collect personal information.</p> <p><strong>Q: What information does Red Hat Insights collect?</strong><br /> <strong>A</strong>: Red Hat Insights collects metadata about the runtime configuration of a system. The data collected is a fraction of what would be collected through an sosreport during a support case. Examples of information that may be collected includes a line of a log file matching a rule, host configuration metadata, and runtime information.</p> <p><strong>Q: Is the data collected by Insights static or dynamic?</strong><br /> <strong>A</strong>: As new Insights rules are identified, there may be a need for additional metadata collection to meet the information requirements of the rule, so it is dynamic. The Red Hat Insights client, upon running, downloads the json configuration file <a href="https://api.access.redhat.com/r/insights/v1/static/uploader.json" target="_blank">here</a> to determine what new metadata is needed for rules. This process can be disabled and instead manually updated via rpm version; however, this may cause you to miss out on new health checks which depend on recently added rules and information required for that rule until you perform a manual update.</p> <p><strong>Q: How can I see what information has been collected?</strong><br /> <strong>A</strong>: Before any data is sent, you have the option to inspect and redact data. The insights-client -- no-upload command lets you view the metadata that has been collected. This will let you look at the exact information that Insights is sending to Red Hat. Details are available in these two articles: <a href="https://access.redhat.com/articles/1598863" target="_blank"> System Information Collected by Red Hat Insights - Red Hat Customer Portal</a> and <a href="https://access.redhat.com/solutions/3947481" target="_blank">How can I see what data is collected by Red Hat Insights</a>.</p> <p><strong>Q: Can some information be excluded from collection?</strong><br /> <strong>A</strong>: Yes; see the article on <a href="https://access.redhat.com/articles/2025273" target="_blank">Opting out of sending metadata from Red Hat Insights Client</a>. You can remove host names and IP addresses from the data file using specific <a href="https://access.redhat.com/articles/2025273" target="_blank">commands</a> and you can also <a href="https://access.redhat.com/blogs/2184921/posts/3462651" target="_blank">blacklist</a> certain capabilities, patterns, keywords and more.</p> <p>The Insights client also provides a way to <a href="https://access.redhat.com/articles/2047593" target="_blank">Obfuscate hostname and IP information</a>. The actual hostname and IP information is replaced with consistent obfuscated names sufficient for rule analysis.</p> <p><strong>Q: How does Red Hat Insights secure my data?</strong><br /> <strong>A</strong>: Your data is encrypted in three key ways: on your host system at the point of collection; in transit across the network; and when it is at rest on Red Hat infrastructure that supports the Insights service. In addition, you may also choose to alter the name chosen to represent the system (eg, apache01.prod instead of a fully qualified domain name). A few other points to note:</p> <blockquote><ul> <li>All communication with Red Hat occurs over encrypted channels using Transport Layer Security (TLS).</li> <li>All TLS traffic with Red Hat servers is verified with a trusted certificate that is bundled with the application, ensuring that communications can not be intercepted, such as by a “man in the middle” attack.</li> <li>The default communication model from client systems to Red Hat servers occurs with mutual TLS or two-way authentication using digital certificates. </li> </ul> </blockquote> <p><strong>Q: Can Ansible Playbooks be run if the hostname is obfuscated?</strong><br /> <strong>A</strong>: Playbooks rely on the hostname. If the hostname is obfuscated, you will be unable to use the generated playbooks without manual intervention.</p> <p><strong>Q: How long does Red Hat retain the data collected by Red Hat Insights?</strong><br /> <strong>A</strong>: By default, the Red Hat Insights client collects and uploads the data once a day. Hence, the collected data will normally be kept for 24 hours. Data uploaded by previous runs will be deleted when the same client uploads new data as part of the daily run. Data from Insights clients that no longer upload new data will be deleted after 14 days from the date of the last data upload.</p> <p>When Red Hat processes the upload, there may be certain “rules hits” or issues identified. These rules hits are retained for historical reporting purposes and may be used by Red Hat as input into feature enhancements.</p> <p><strong>Q: What is the impact of the Insights agent and the data collection process on my systems?</strong><br /> <strong>A</strong>: The Insights agent is designed to be lightweight. It runs as a daily cron job that installs with a default schedule. It also has capabilities that let you customize the schedule for when the data collection agent runs and when the data is uploaded to the Insights service to minimize impacts on your networks and workloads. Note, however, that the collection process is lightweight and the data sets are small.</p> <p><strong>Q: Are there options to help deploy Insights to a large number of servers?</strong><br /> <strong>A</strong>: Yes. Insights has scripts available in <a href="https://forge.puppet.com/lphiri/access_insights_client" target="_blank">Puppet</a>, and <a href="https://galaxy.ansible.com/redhataccess/redhat-access-insights-client#readme" target="_blank">Ansible</a> to use along with our <a href="https://access.redhat.com/products/red-hat-insights#direct" target="_blank">Getting Started page</a>. If you happen to be managing these systems via a version of Satellite with Insights integration, mass registration of Insights is built in via the bootstrap script provided with Satellite. More information is available <a href="https://access.redhat.com/blogs/2184921/posts/3606531" target="_blank">here</a>.</p> <p><strong>Q: How does remediation with Ansible work?</strong><br /> <strong>A</strong>: When Red Hat Insights identifies an issue, an Ansible playbook is often included. You can optionally execute this playbook to remediate the issue, or you can use the provided remediation guidance to resolve an issue manually or to create your own playbook to execute with Ansible Tower. If you use Insights inside of Satellite, you can use Satellite to generate the playbook and run it.</p> <p><strong>Q: Can I remediate Insights issues from within Satellite?</strong><br /> <strong>A</strong>: Yes. Insights is deeply integrated with Red Hat Satellite allowing you to see and remediate issues that Insights found from within Satellite. Either using optional dashboard widgets or by using the Insights menu item on the left hand navigation bar, you can review the identified risks and create a playbook to perform remediation. If you are resolving a rule for which Insights has an Ansible playbook that can be dynamically generated, the playbook can be generated and run from within the Satellite user interface. This allows you to find and fix the issue inside of Satellite. Satellite uses built-in Ansible technology to perform the remediation. The <a href="https://access.redhat.com/documentation/en-us/red_hat_satellite/6.5/html/administering_red_hat_satellite/chap-red_hat_satellite-administering_red_hat_satellite-maintaining_a_red_hat_satellite_server#using_red_hat_insights_with_satellite_server" target="_blank">Red Hat Satellite documentation</a>has additional information on this topic, or you can watch a <a href="https://www.youtube.com/watch?v=mCBhUuxRCgA&amp;feature=youtu.be" target="_blank">video</a>.</p> <p><strong>Q: Can Red Hat Insights support a Docker or Kubernetes environment?</strong><br /> <strong>A</strong>: Yes. Insights can analyze RHEL, even if it’s within a container.</p> <p><strong>Q: Is Red Hat Insights available for Red Hat OpenShift?</strong><br /> <strong>A</strong>: Is this available on Red Hat Openshift?<br /> Today, Insights monitors Red Hat Enterprise Linix configurations and the workloads running on top of it. So, it monitors for a variety of database workloads running on this platform. In the same way, it monitors OpenShift 3 workloads running on top of Red Hat Enterprise Linux. Typically it takes a bit of time for the knowledge base that drives the rules to be developed once the product is in the market. We\'re planning to provide similar capabilities for Openshift 4.x in the future.</p> <p><strong>Q: Does Insights have hardware specific rules?</strong><br /> <strong>A</strong>: Yes. There is a series of rules designed to analyze the interaction between Red Hat Enterprise Linux and hardware including server, network and storage devices as well as cloud platforms. Here are a few examples:</p> <blockquote><ul> <li>Network interface card is not operating at maximum speed due to faulty cable, network interface card, switchport, SFP, etc.</li> <li>Unsupported kernel version on Intel Purley Platform with Intel Skylake CPU</li> <li>Kdump Does Not Work Due To XEN/AWS\'s Limitation</li> </ul> </blockquote> <p><strong>Q: Does Insights support Red Hat Enterprise Linux running on IBM Power Systems and IBM Z systems?</strong><br /> <strong>A:</strong>Yes, Insights works on these hardware platforms and provides analysis of general RHEL operations on these platforms.</p> <p><strong>Q: Where can I get additional information about Red Hat Insights?</strong><br /> <strong>A</strong>: There are a range of internal and external resources on Red Hat Insights:<br /> - <a href="http://redhat.com/insights" target="_blank">Red Hat Insights product web page</a><br /> - <a href="https://access.redhat.com/products/red-hat-insights" target="_blank">Red Hat Insights Customer Portal page</a><br /> - <a href="https://www.youtube.com/user/RedHatVideos/search?query=insights" target="_blank">Video Channel: Red Hat Insights</a><br /> - <a href="https://www.redhat.com/en/blog/channel/red-hat-insights" target="_blank">Blog: Red Hat Insights</a></p> '
    }
});
