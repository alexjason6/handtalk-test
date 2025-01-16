/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'styled-components';

import App from './src/App';
import { theme } from './src/assets/styles/themes/theme';

import {name as appName} from './app.json';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Main;

AppRegistry.registerComponent(appName, () => Main);
