import React from 'react';
import { Helmet } from 'react-helmet';

const PanelMetaTags = ({ panel, imageUrl }) => (
  <Helmet>
    <title>{`PluraPolit | ${panel.short_title}`}</title>
    <link rel="canonical" href={`https://plurapolit.de/${panel.slug}`} />
    <meta name="description" content={panel.title} />
    <meta property="og:title" content={`PluraPolit | ${panel.short_title}`} />
    <meta property="og:description" content={panel.title} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={`https://plurapolit.de/${panel.slug}`} />
    <meta name="twitter:title" content={`PluraPolit | ${panel.short_title}`} />
    <meta name="twitter:description" content={panel.title} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:card" content={imageUrl} />
  </Helmet>
);

export default PanelMetaTags;
