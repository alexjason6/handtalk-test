import React from 'react';

import FormGroup from '../../components/FormGroup';
import {Button} from '../../components/Buttons';
import { Input } from '../../components/Inputs';

import useLogin from './useLogin';

import {Container, Content, Texto} from './styles';

export const Login: React.FC = () => {
  const {
    email,
    password,
    loginIsValid,
    wellcomeMessage,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    getErrorMessageByFieldName,
   } = useLogin();

  return (
    <Container>
      <Content>
        <Texto saudacao>{wellcomeMessage}!</Texto>

        <Texto>
          Por favor, digite os dados abaixo para entrar e ter acesso ao aplicativo.
        </Texto>

        <FormGroup error={getErrorMessageByFieldName('login')}>
          <Input
            testID="email-input"
            placeholder="Digite seu email"
            placeholderTextColor={'#999999'}
            LoginPage
            onChangeText={handleChangeEmail}
            value={email}
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
            returnKeyLabel="Próximo"
            returnKeyType="next"
            error={!!getErrorMessageByFieldName('login')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('password')}>
          <Input
            testID="password-input"
            secureTextEntry
            placeholder="Digite sua senha"
            placeholderTextColor={'#999999'}
            LoginPage
            onChangeText={handleChangePassword}
            returnKeyLabel="Enviar"
            returnKeyType="go"
            value={password}
            error={!!getErrorMessageByFieldName('password')}
          />
        </FormGroup>

        <Button avanca onPress={handleLogin} disabled={!loginIsValid}>
          <Texto avanca>Entrar</Texto>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
