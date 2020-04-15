import React from "react";
import MetaTags from "react-meta-tags";
import { usePanelContext } from "../../contexts/PanelStoreContext/PanelStoreContext";

const PanelMetaTags = ({ imageUrl }) => {
  const { shortTitle, slug, title } = usePanelContext();
  return (
    <MetaTags>
      <title>{`PluraPolit | ${shortTitle}`}</title>
      <link rel="canonical" href={`https://plurapolit.de/${slug}`} />
      <meta name="description" content={title} />
      <meta property="og:title" content={`PluraPolit | ${shortTitle}`} />
      <meta property="og:description" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={`https://plurapolit.de/${slug}`} />
      <meta name="twitter:title" content={`PluraPolit | ${shortTitle}`} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content={imageUrl} />
    </MetaTags>
  );
};

export default PanelMetaTags;
