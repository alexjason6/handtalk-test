import React from 'react';

import {Text, ToastContainer} from './styles';

interface Message {
  title?: string;
  message?: string;
  type?: string;
  closeMessage?: () => void
}

const Toast: React.FC<Message> = ({message, title, type, closeMessage}) => {
  return (
    <ToastContainer onPress={closeMessage} type={type}>
      <Text title>{title}</Text>
      <Text>{message}</Text>
    </ToastContainer>
  );
};

export default Toast;
