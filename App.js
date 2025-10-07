import { StyleSheet, View} from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { ApiProvider } from "./src/Contexts/ApiContext";
import { ErrorProvider } from "./src/Contexts/ErrorContext";
import { UserProvider } from "./src/Contexts/UserContext";
import * as SplashScreen from "expo-splash-screen";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./src/Contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./src/Stacks/AuthStack";
import NoAuthStack from "./src/Stacks/NoAuthStack";
import {ErrorModal} from "./src/Components/Modals/CustomModal";

// SplashScreen.preventAutoHideAsync();
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });



function RootNavigator() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn:", isLoggedIn);

  return isLoggedIn ? <AuthStack /> : <NoAuthStack />;

}


export default function App() {
  // fonty
  const [fontsLoaded] = useFonts({
    Montserrat: require("./src/Assets/Fonts/Montserrat_Regular.ttf"),
    "Montserrat Bold": require("./src/Assets/Fonts/Montserrat_Bold.ttf"),
    "Montserrat Bold Italic": require("./src/Assets/Fonts/Montserrat_Bold_Italic.ttf"),
  });
  // splashscreen
  const [appIsReady, setAppIsReady] = useState(false);

  // splashscreen
  useEffect(() => {
    const prepareApp = async () => {
      console.log("Fonts loaded:", fontsLoaded);
      if (fontsLoaded) {
        setAppIsReady(true);
        await SplashScreen.hide();
      }
    };

    prepareApp().catch((error) => {
      console.error("Error preparing app:", error);
    });
  }, [fontsLoaded]);


  const onLayoutRootView = useCallback(async () => {
    console.log('ready');
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
      <NavigationContainer>
        <AuthProvider>
          <ErrorProvider>
            <View style={StyleSheet.absoluteFill} pointerEvents={"box-none"}>
              <ErrorModal />
            </View>
            <ApiProvider>
              <UserProvider>
                <RootNavigator />
              </UserProvider>
            </ApiProvider>
          </ErrorProvider>
        </AuthProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
