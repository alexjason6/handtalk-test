import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;

      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      grays: {
        disabled: string;
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      alerts: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      greens: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      danger: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      white: string;
    };
  }
}
