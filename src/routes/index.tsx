import React, {useContext} from 'react';

import AuthContext from '../contexts/AuthContexts';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Loading from '../components/Loading/index';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
