import styled, {css} from 'styled-components/native';

interface PropStyles {
  saudacao?: boolean;
  avanca?: boolean;
}

export const Container = styled.SafeAreaView`
  background: ${({theme}) => theme.colors.white};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  background: ${({theme}) => theme.colors.white};
`;

export const Texto = styled.Text`
  width: 100%;
  color: ${({theme}) => theme.colors.grays?.main};
  text-align: left;
  margin-bottom: 40px;

  ${({saudacao}: PropStyles) =>
    saudacao &&
    css`
      font-size: 40px;
      font-weight: 100 || normal;
      margin-top: 40px;
      margin-bottom: 20px;
    `}

  ${({avanca}: PropStyles) =>
    avanca &&
    css`
      color: ${({theme}) => theme.colors.white};
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 0px;
    `}
`;

