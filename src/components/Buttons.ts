import styled, {css} from 'styled-components/native';

interface PropStyles {
  avanca?: boolean;
  disabled?: boolean;
  colorPicker?: boolean;
  transparent?: boolean;
  shape?: boolean;
}

export const Button = styled.TouchableOpacity<PropStyles>`
  width: 70%;
  padding: 20px;
  border-radius: 4px;

  ${({avanca, theme}) =>
    avanca &&
    css`
      margin-top: 10px;
      background: ${theme.colors.primary.main};
      align-self: center;
    `};

  ${({colorPicker, theme}) =>
    colorPicker &&
    css`
      width: 200px;
      margin: 20px 0px;
      padding: 10px;
      align-self: center;
      background: ${theme.colors.greens.main};
    `};

  ${({shape, theme}) =>
    shape &&
    css`
      width: 125px;
      background: ${theme.colors.primary.dark};
    `};

  ${({transparent}) =>
    transparent &&
    css`
      background: transparent;
      align-self: center;
    `};

  ${({disabled, theme}) =>
    disabled &&
    css`
      background: ${theme.colors.grays.disabled};
    `};
`;
