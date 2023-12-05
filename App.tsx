import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Layout from './pages/_layout';
const theme = createTheme({});
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Layout></Layout>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
