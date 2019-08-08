import React from 'react';

import './text.styles.scss';

const Text = () => (
    <div>
        <dl>
            <dt>On-Page</dt>
            <dd>range: each single HTML page.<br />
            For...<br />
            - meta title: 50-60(max.75). e.g. Your page title | Your brand name <br />
            - meta description: 135-160(For mobile, &lt;130). Avoid duplicated description over pages.(Google can penalize your site for it.)<br />
            - each content-oriented page, minimum 400 words of content to be indexed correctly.
        But 1000+ is recommended.<br />
        - URL...less than 90 characters are recommended.<br />
        Dynamic URL is not recommended for SEO. Consider using perma-links. e.g. Apache: mod_rewrite 
            </dd>
            <dt>On-Site</dt>
            <dd>range: The structure of the webpage. Avoid duplicated pages, clear structure for crawlers, internal linking.<br />
            robots.txt<br />
            sitemap.xml
            </dd>
            <dt>Off-Site</dt>
            <dd>range: Outside of the webpage. Third parties, other webpages, Social medias, etc.<br />
            Google Analytics, Google Search Console.
            </dd>
        </dl>
<p>
<h3>Code Snippets</h3>

add canonical tag:<br />
<pre>
&lt;link rel="canonical" href="https://www.#yoursite#.com/" /&gt;
</pre>
</p>

<h4>Basic Meta tags</h4>
<pre>

</pre>

<h4>OG meta tags</h4>
<pre>
&lt;meta property=”og:type” content=”article” /> <br />
&lt;meta property=”og:title” content=”title of the page” /><br />
&lt;meta property=”og:description” content=”description of the page” /><br />
&lt;meta property=”og:image” content=”image thmbnail” /><br />
&lt;meta property=”og:url” content=”your url” /><br />
&lt;meta property=”og:site_name” content=”site name” />
</pre>

<h4>Twitter card meta tags</h4>
<pre>
&lt;meta name=”twitter:title” content=”title of the page”><br />
&lt;meta name=”twitter:description” content=”description of the page”><br />
&lt;meta name=”twitter:image” content=”image thumbnail”><br />
&lt;meta name=”twitter:site” content=”@username”><br />
&lt;meta name=”twitter:creator” content=”@username”>
</pre>
<div>
<p>SDM...Structured Data Markup</p>
<p>Microdata...https://en.wikipedia.org/wiki/Microdata_(HTML)<br />
Google's Rich Snippet Testing Tool<br />
JSON-LD...https://en.wikipedia.org/wiki/JSON-LD<br/>
</p>

<h4>JSON-LD</h4>
<pre>{`
<script type="application/ld+json">
{
    "@context": {
      "name": "http://xmlns.com/foaf/0.1/name",
      "homepage": {
        "@id": "http://xmlns.com/foaf/0.1/workplaceHomepage",
        "@type": "@id"
      },
      "Person": "http://xmlns.com/foaf/0.1/Person"
    },
    "@id": "https://me.example.com",
    "@type": "Person",
    "name": "John Smith",
    "homepage": "https://www.example.com/"
  }
</script>
`}
</pre>
</div>
    </div>
);

export default Text;