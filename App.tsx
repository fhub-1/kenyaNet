import { SafeAreaView } from "react-native";
import MainApp from "./src/main";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/styles/theme";
import HomeScreen from "./src/main";

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}
