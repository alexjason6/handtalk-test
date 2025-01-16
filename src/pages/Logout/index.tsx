import React, {useContext, useEffect} from 'react';
import AuthContext from '../../contexts/AuthContexts';

const Logout = () => {
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    signOut();
  }, [signOut]);

  return null;
};

export default Logout;
