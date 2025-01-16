import {useContext, useState} from 'react';

import AuthContext from '../../contexts/AuthContexts';

import WellcomeMessage from '../../utils/wellcomeMessage';
import isEmailValid from '../../utils/isEmailValid';

import useErrors from '../../hooks/useErrors';

const useLogin = () => {
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();
  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginIsValid = isEmailValid(email) && password.length >= 3 && errors.length === 0;
  const wellcomeMessage = WellcomeMessage();

  const handleChangeEmail = (value: string) => {
    setEmail(value.toLowerCase());

    if (!value || !isEmailValid(value)) {
      setError({
        field: 'login',
        message: 'Digite um e-mail válido para entrar.',
      });
    } else {
      removeError('login');
    }
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);

    if (!value) {
      setError({
        field: 'password',
        message: 'Digite uma senha válida para entrar.',
      });
    } else {
      removeError('password');
    }
  };

  const handleLogin = () => {
    try {
      signIn(email, password);
    } catch {
      setError({
        field: 'login',
        message: 'Email ou senha inválidos.',
      });
    }
  };

  return ({
    email,
    password,
    loginIsValid,
    wellcomeMessage,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    getErrorMessageByFieldName,
  });
};

export default useLogin;
