/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import * as UiContext from './contexts/ui';
import Routes from './routes';

export default function App() {
  const [applicationState, setApplicationState] =
React.useState(UiContext.createApplicationInitialState());
  return (
    <UiContext.Context.Provider value={{ applicationState,
    setApplicationState}}>
      <Routes />
    </UiContext.Context.Provider>
  );
}
