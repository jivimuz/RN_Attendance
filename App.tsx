/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Route from './src/routes';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;
