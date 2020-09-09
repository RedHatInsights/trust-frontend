import '../../App.scss';

// import API from '../../Utilities/Api';
import { Card } from '@patternfly/react-core/dist/esm/components';
import messages from '../../Messages';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { useIntl } from 'react-intl';

const FAQ = () => {
    const [content, setContent] = useState();
    const intl = useIntl();

    useEffect(() => {
        // Not currently working. Article is behind paywall and needs auth to access, or the auth removed.
        // Hopefully hydra-dev team can help us out.
        // (async() => {
        //     const kcsArticleJson = (await API.get('https://access.redhat.com/hydra/rest/drupal/articles/4602981')).data;
        //     setContent(kcsArticleJson.response.docs[0].body[0]);
        // })();

        // In the meantime, the content is hardcoded into the app
        setContent(intl.formatMessage(messages.faqBody));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className='ins-c-flex-center'>
        <Card className='faq-card'>
            <ReactMarkdown source={content} escapeHtml={false} />
        </Card>
    </div>;
};

export default FAQ;
