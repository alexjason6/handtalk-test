import styled from 'styled-components/native';

export const Content = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const TextError = styled.Text`
  font-size: 11px;
  margin-top: 5px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.danger.main};
  text-align: center;
`;
