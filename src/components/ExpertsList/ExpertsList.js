import React from 'react';

import ExpertsCard from '../ExpertsCard/ExpertsCard';

import styles from './ExpertsList.module.scss';

const ExpertsList = ({ experts }) => (
  <>
    {experts.map((avatar, index) => (
      <ExpertsCard key={index} experts={avatar} />
    ))}
  </>
);

export default ExpertsList;
