import styled, {css, DefaultTheme} from 'styled-components/native';

interface PropStyles {
  color?: string;
  error?: boolean;
  theme: DefaultTheme;
}

export const Input = styled.TextInput`
  padding: 20px;
  background: ${({theme}) => theme.colors.grays.lighter};
  color: ${({theme}) => theme.colors.grays.light};
  text-align: center;
  border-radius: 4px;

  ${({error, theme}: PropStyles) =>
    error &&
    css`
      border-width: 2px;
      border-color: ${theme.colors.danger.light};
    `};

  ${({color}) => color && css`
    color: ${color}
  `}
`;
