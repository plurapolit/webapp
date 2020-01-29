import React from 'react';
import { withRouter } from 'react-router-dom';

import StoreContext from '../../layouts/Store/StoreContext';
import SignInComponent from '../../components/SignInComponent/SignInComponent';

const SignIn = ({ history }) => {
  const routeBack = () => {
    history.push('/');
  };

  return (
    <StoreContext.Consumer>
      {(data) => (
        <SignInComponent setUser={data.setUser} routeBack={routeBack} />
      )}
    </StoreContext.Consumer>
  );
};

export default withRouter(SignIn);
