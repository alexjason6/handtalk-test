import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${({theme}) => theme.colors.grays.main};
  margin-top: 20px;
`;
