import React from "react";

import ExpertsCard from "../ExpertsCard/ExpertsCard";

const ExpertsList = ({
  experts,
  panelShortTitle,
  slug,
}) => (
  <>
    {experts.map((avatar, index) => (
      /* eslint-disable react/no-array-index-key */
      <ExpertsCard key={index} experts={avatar} panelTitle={panelShortTitle} slug={slug} />
      /* eslint-enable react/no-array-index-key */
    ))}
  </>
);

export default ExpertsList;
