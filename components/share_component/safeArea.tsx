import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function SafeArea({ children }: { children: JSX.Element }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top + 50,
        paddingBottom: insets.bottom + 90,
        width: '100%',
        height: '100%',
        backgroundColor:'gray'
      }}>
      {children}
    </View>
  );
}
