import React, {useContext} from 'react';

import AuthContext from '../contexts/AuthContexts.tsx';

import AuthRoutes from './auth.routes.tsx';
import AppRoutes from './app.routes.tsx';

import Loading from '../components/Loading/index.tsx';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
