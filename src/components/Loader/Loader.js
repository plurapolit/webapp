import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => (
  <ScaleLoader
    size={150}
    color={"#123abc"}
    loading={true}
  />
);

export default Loader;
