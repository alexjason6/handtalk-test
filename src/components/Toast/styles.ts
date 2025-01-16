
import styled, {css} from 'styled-components/native';

interface PropStyles {
  title?: boolean;
  type: string;
}

export const ToastContainer = styled.TouchableOpacity`
  width: 90%;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px;
  display: flex;
  background: ${({theme}) => theme.colors.alerts.main};
  position: absolute;
  bottom: 0;
  z-index: 9999999;

  ${({type, theme}) => type && css`
    background: ${type === 'alerts' ? theme.colors.alerts.main : type === 'danger' ? theme.colors.danger.light : theme.colors.greens.main}
  `}
`;

export const Text = styled.Text<PropStyles>`
  width: 100%;
  padding-left: 15px;
  color: ${({theme}) => theme.colors.white};

  ${({title}) =>
    title &&
    css`
      font-weight: bold;
      margin-bottom: 5px;
    `}
`;
