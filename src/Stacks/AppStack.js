import { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NoAuthStack from "./NoAuthStack";
import AuthStack from "./AuthStack";
import { ErrorModal } from "../Components/Modals/CustomModal";
import AuthContext from "../Contexts/AuthContext";
import Activity from "../Components/Elements/Activity";
import UserContext from "../Contexts/UserContext";
import { Stack } from "phosphor-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStacks = () => {
  const { isLoggedIn, isLoading, setIsUpdate, setIsLoggedIn, login, setToken } =
    useContext(AuthContext);
  const { userType, setUserType, setName, setSurname, setEmail } =
    useContext(UserContext);

  useEffect(() => {
    const setup = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      const token = await AsyncStorage.getItem("token");
      // const rulesFile = await AsyncStorage.getItem("rulesFile");
      const isUpdate = await AsyncStorage.getItem("isUpdate");
      const name = await AsyncStorage.getItem("name");
      const surname = await AsyncStorage.getItem("surname");
      const avatar = await AsyncStorage.getItem("avatar");
      const email = await AsyncStorage.getItem("email");
      const userType = await AsyncStorage.getItem("userType");

      if (isLoggedIn != "1") {
        setIsSettingUp(false);
      } else {
        await setIsUpdate(isUpdate);
        await setName(name);
        await setSurname(surname);
        await setEmail(email);
        await setIsLoggedIn(isLoggedIn);
        await setUserType(userType);
        await setToken(token);

        login(token, isUpdate);

        await setIsSettingUp(false);
      }
    };
    setup();
  }, []);

  if (isLoggedIn) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          {isLoggedIn}
          <ErrorModal />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ zIndex: 2 }}>
        <>
          <NavigationContainer>
            {!isLoggedIn && <NoAuthStack />}
            {isLoggedIn && <AuthStack />}
            {isLoggedIn && <AuthTraderStack />}
          </NavigationContainer>
        </>
        {isLoading && <Activity />}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppStacks;
