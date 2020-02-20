import React from "react";
import Hyphenated from "react-hyphen";
import de from "hyphenated-de";

const Hyphen = ({ children }) => (
  <Hyphenated language={de}>
    {children}
  </Hyphenated>
);

export default Hyphen;
