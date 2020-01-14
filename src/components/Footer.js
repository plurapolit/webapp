import React from 'react';
import colors from '../styles/Colors';
import { css } from 'glamor';

const styles = {
  footerWrapper: css({
    backgroundColor: colors.darkGrey,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 100,
  }),
};

const Footer = () => {
  return (
    <div {...styles.footerWrapper}>
      Footer
    </div>
  );
};

export default Footer;
