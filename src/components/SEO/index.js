import React from 'react';
import Helmet from 'react-helmet';

function SEO({ lang, title, description, keywords, meta, children }) {

    return (
        <Helmet
            htmlAttributes={{
                lang: lang || 'en',
            }}
            title={`React Pizza${title ? ` | ${title}` : ''}`}
            meta={[
                {name: 'description', content: description || 'Pizza in React'},
                {name: 'description', content: keywords || 'pizza, react'},
            ].concat(meta || [])}
        >
            {children}
        </Helmet>
    );
}

export default SEO;