import React from 'react';
import {LogBox, Text, StatusBar, TextInput} from 'react-native';

import MainNavigator from './src/navigation/mainNavigator';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

/**disable warnings */
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <MainNavigator />
    </>
  );
};

export default App;
