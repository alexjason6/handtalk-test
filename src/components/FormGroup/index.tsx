import React, {ReactNode} from 'react';

import {Content, TextError} from './styles';

interface PropStyles {
  children: ReactNode;
  error: string;
}

const FormGroup = ({children, error}: PropStyles) => {
  return (
    <Content>
      {children}
      {error && <TextError>{error}</TextError>}
    </Content>
  );
};

export default FormGroup;
