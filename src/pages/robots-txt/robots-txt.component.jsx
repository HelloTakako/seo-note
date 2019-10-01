import React from 'react';

import '../../components/meta-tags/meta-tags.styles.scss';

const RobotsTxt = () => (
    <div>
        <h3>robots.txt</h3>
        <h4>Prevent search engines to index your site</h4>
        <pre>{`
User-agent: *
Disallow: /
        `}
        </pre>
    </div>
);

export default RobotsTxt;