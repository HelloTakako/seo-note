import React from 'react';

import './text.styles.scss';

const Text = () => (
    <div>
        <p>
            
        </p>

        <dl>
            <dt>On-Page</dt>
            <dd>range: each single HTML page.<br />
            For...<br />
            meta title: 50-60(max.75). e.g. Your page title | Your brand name <br />
            meta description: 135-160. Avoid duplicated description over pages.(Google can penalize your site for it.)<br />
            For each content-oriented page, minimum 400 words of content to be indexed correctly. <br />
        But 1000+ is recommended.<br />
        For URL...less than 90 characters are recommended.<br />
        Dynamic URL is not recommended for SEO. Consider using perma-links. e.g. Apache: mod_rewrite 
            </dd>
            <dt>On-Site</dt>
            <dd>range: The structure of the webpage. Avoid duplicated pages, clear structure for crawlers, internal linking.
            </dd>
            <dt>Off-Site</dt>
            <dd>range: Outside of the webpage. Third parties, other webpages, Social medias, etc
            </dd>
        </dl>

    </div>
);

export default Text;