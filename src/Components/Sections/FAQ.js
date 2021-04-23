import { Card, CardBody } from '@patternfly/react-core/dist/esm/components';
import React, { useEffect, useState } from 'react';

import API from '../../Utilities/Api';
import Loading from '../Loading/Loading';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

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
        {(content.status === 'pending' || content.status === 'error') && <Loading />}
        {content.status === 'fulfilled' && <Card className='faq-card'>
            <CardBody>
                <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{content.content}</Markdown>
            </CardBody>
        </Card>}
    </React.Fragment>;
};

export default FAQ;
