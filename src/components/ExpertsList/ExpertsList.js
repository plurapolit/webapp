import React from 'react';

import ExpertsCard from '../ExpertsCard/ExpertsCard';

import styles from './ExpertsList.module.scss';

const ExpertsList = ({ experts }) => {
  return (
    <>
      {experts.map((avatar, index) => {
        return(
          <ExpertsCard key={index} experts={avatar} />
        );
      })}
    </>
  );
}

export default ExpertsList;