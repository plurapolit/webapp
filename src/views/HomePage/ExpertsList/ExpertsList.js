import React from "react";

import ExpertsCard from "../ExpertsCard/ExpertsCard";

const ExpertsList = ({ experts }) => (
  <>
    {experts.map((avatar, index) => (
      /* eslint-disable react/no-array-index-key */
      <ExpertsCard key={index} experts={avatar} />
      /* eslint-enable react/no-array-index-key */
    ))}
  </>
);

export default ExpertsList;
