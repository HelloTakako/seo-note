import React from 'react';

import './htaccess.styles.scss';

const HtaccessPage = () => (
    <div>
    <h2>Apache .htaccess file</h2>
    <section>
    <h3>Basics</h3>
    <pre>{`RewriteEngine on //Redirect requests to a different URL
    # CORE
    Options -Indexes //Disable all directory views(recommended for better security)
    Options -MultiViews //Disable multi-views (recommended for canonical URIs) //Enable symlinks (required for permalinks/rewrites, e.g., index.php → index.html)
    Options +FollowSymlinks //Specify the default character set for any file served text/plain or text/html (recommended for usability)
    AddDefaultCharset UTF-8 //Disables the server signature (recommended for better security)
    ServerSignature Off //Disables the ETag Header (recommended for performance)
    FileETag none
    `}</pre>
    
    </section>
        <section>
            <h3>.htaccess password protection</h3>
            To enable .htaccecc password protection, use .htaccess. A .htpasswd file.
            <a href="htaccess-demo" target="_blank">Demo page(password: pass)</a>
            <pre>AuthType Basic<br />
            AuthName "Password Protected Area"<br />
            AuthUserFile /path/to/.htpasswd<br />
            Require valid-user
            </pre>
            In the "/path/to/.htpaswwd" file, add password.
            <pre>
            test:dGRkPurkuWmW2
            </pre>
        </section>
        <section>
            <h3>Blocking users based on IP</h3>
            Blocking and allowing users are done by a firewall.
            <pre>{`order allow,deny
deny from 255.x.x.x
deny from 123.x.x.x
allow from all

RewriteCond %{REMOTE_ADDR} 192\.168\.121\. //Redirect specific user to another link
RewriteRule .* https://google.com [R,L]`}</pre>

<p>Allow only specific IP</p>
<pre>{`order deny,allow
Deny from all
# whitelist IP Address 1
allow from xx.xxx.xx.xx
# whitelist IP Address 2
allow from xx.xxx.xx.xx`}</pre>

        </section>
        <section>
            <h3>Browser Caching</h3>
            <pre>{`<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access 1 year"
    ExpiresByType image/jpeg "access 1 year"
    ExpiresByType image/gif "access 1 year"
    ExpiresByType image/png "access 1 year"
    ExpiresByType text/css "access 1 month"
    ExpiresByType text/html "access 1 month"
    ExpiresByType application/pdf "access 1 month"
    ExpiresByType text/x-javascript "access 1 month"
    ExpiresByType image/x-icon "access 1 year"
    ExpiresDefault "access 1 month"
</IfModule>`}</pre>
        </section>

        <section>
            <h3>Enable gzip</h3>
            <pre>{`# compress text, html, javascript, css, xml:
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript

# Or, compress certain file types by extension:
<files *.html>
SetOutputFilter DEFLATE
</files>`}</pre>
        </section>

        <section>
            <h3>301 Redirects</h3>
            <pre>{`Redirect 301 https://yourwebsite.com/old-page https://yourwebsite.com/new-page`}</pre>
        </section>
        <section>
        <h3>Hide directory listing</h3>
        When your website doesn't have index.html in your root folder, the index listing can be displayed. From security persprective, it's not good users can see all of files of your website. To hide the directory listing, use code below.
        <pre>{`Options -Indexes`}</pre>
        </section>
        <section>
        <h3>Redirect to custom 404 page when a page is not found</h3>
        <pre>{`ErrorDocument 404 http://www.yoursite.com/404page.html`}</pre>
        </section>
      
    </div>
);

export default HtaccessPage;