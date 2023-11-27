import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts, Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand';
import React, { useLayoutEffect, useRef } from 'react';
import AnimatedStyleUpdateExample from './components/animate_open';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <div ref={(node) =>
          node?.style.setProperty("font-family", "Quicksand_400Regular", "important")
        }>
          <Text style={{ fontFamily: 'Quicksand_400Regular' }}>Open up App.tsx to start working on your app!</Text>
          {/* <AnimatedStyleUpdateExample></AnimatedStyleUpdateExample> */}
          <StatusBar style="auto" />
        </div>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
