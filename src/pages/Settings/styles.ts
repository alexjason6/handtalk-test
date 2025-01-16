import styled, {DefaultTheme, css} from 'styled-components/native';
import ColorPicker from 'reanimated-color-picker';

interface ThemeProps {
  theme: DefaultTheme;
  color?: boolean;
  shapes?: boolean;
  reset?: boolean;
}

export const SafeArea = styled.SafeAreaView`
  background: ${({theme}) => theme.colors.white};
  flex: 1;
`;

export const View = styled.View`
  padding: 10px;

  ${({color}: ThemeProps) => color && css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}

  ${({shapes}: ThemeProps) => shapes && css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `}
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.grays.main};
  margin-bottom: 10px;
`;

export const Color = styled(ColorPicker)`
  width: 90%;
  align-self: center;
  margin-top: 50px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  text-align: center;

  ${({reset, theme}: ThemeProps) => reset && css`
    color: ${theme.colors.danger.main};
    font-weight: normal;
  `}
`;
