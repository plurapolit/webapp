import React from "react";
import MetaTags from "react-meta-tags";

const HomePageMetaTags = () => (
  <MetaTags>
    <meta charSet="utf-8" />
    <title>PluraPolit | Informieren & Diskutieren</title>
    <link rel="canonical" href="https://plurapolit.de" />
    <meta
      name="description"
      content="PluraPolit ist eine Plattform zur politischen Meinungsbildung und Diskussion"
    />
    <meta
      property="og:title"
      content="PluraPolit | Informieren & Diskutieren"
    />
    <meta
      property="og:description"
      content="PluraPolit ist eine Plattform zur politischen Meinungsbildung und Diskussion"
    />
    <meta
      property="og:image"
      content="https://plurapolit-webapi-prod-media.s3.eu-central-1.amazonaws.com/i61j2i6hnix6dnkneo3oywv81fnu"
    />
    <meta property="og:url" content="https://plurapolit.de" />
    <meta
      name="twitter:title"
      content="PluraPolit | Informieren & Diskutieren"
    />
    <meta
      name="twitter:description"
      content=" PluraPolit ist eine Plattform zur politischen Meinungsbildung und Diskussion"
    />
    <meta
      name="twitter:image"
      content=" https://plurapolit-webapi-prod-media.s3.eu-central-1.amazonaws.com/i61j2i6hnix6dnkneo3oywv81fnu"
    />
  </MetaTags>
);

export default HomePageMetaTags;
