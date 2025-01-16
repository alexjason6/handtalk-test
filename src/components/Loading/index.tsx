import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Text} from './styles';

interface PropsElement {
  message?: string
}

const Loading: React.FC = ({message}: PropsElement) => {
  return (
    <Container>
      <ActivityIndicator color={'#7248d0'} />
      <Text>{message || 'Buscando dados...'}</Text>
    </Container>
  );
};

export default Loading;
