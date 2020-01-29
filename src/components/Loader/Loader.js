import React from 'react';
import { ScaleLoader } from 'react-spinners';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles["container"]}>
    <ScaleLoader
      height={140}
      width={20}
      color={"#123abc"}
      loading={true}
    />
  </div>
);

export default Loader;
