import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import PhoneWrapper from './src/components/PhoneWrapper';

export default function App() {
  return (
    <SafeAreaProvider>
      <PhoneWrapper> 
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PhoneWrapper>
    </SafeAreaProvider>
  );
}