import React from 'react';

import Login from '../pages/auth/Login';

interface Props {
  component: React.FunctionComponent;
}

const PrivateRoute = (props: Props) => {
  const isAuthentication = true;
  const Component = props.component;

  if (!isAuthentication) {
  }
  return <Component />;
};

export default PrivateRoute;
