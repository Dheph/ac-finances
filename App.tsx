import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from '@theme/index';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from '@pages/Home';

export default function App() {
  useEffect(() => {
    async function checkAvailableUpdatesAndUpdate() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    checkAvailableUpdatesAndUpdate();
  }, []);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Home />
    </ThemeProvider>
  );
}
