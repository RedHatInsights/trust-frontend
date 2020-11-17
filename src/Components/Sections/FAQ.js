import '../../App.scss';

import React, { useEffect, useState } from 'react';

import API from '../../Utilities/Api';
import { Card, CardBody } from '@patternfly/react-core/dist/esm/components';
import Loading from '../Loading/Loading';
import ReactMarkdown from 'react-markdown/with-html';

const FAQ = () => {
    const [content, setContent] = useState({ status: 'pending', content: '' });

    useEffect(() => {
        (async () => {
            try {
                const kcsArticleJson = (await API.get('https://access.redhat.com/hydra/rest/drupal/articles/4602981')).data;
                setContent({ status: 'fulfilled', content: kcsArticleJson.body.html });
            } catch (error) {
                setContent({ status: 'error', content: '' });
                throw `${error}`;
            }
        })();
    }, []);

    return <React.Fragment>
        {content.status === 'pending' || content.status === 'error' && <Loading />}
        {content.status === 'fulfilled' && <Card className='faq-card'>
            <CardBody>
                <ReactMarkdown source={content.content} escapeHtml={false} />
            </CardBody>
        </Card>}
    </React.Fragment>;
};

export default FAQ;
