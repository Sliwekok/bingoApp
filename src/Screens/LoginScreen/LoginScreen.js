import { View, Text, Platform } from "react-native";
import LoginBackground from "../../Components/Backgrounds/LoginBackground";
import styles from "./LoginScreen.style";
import BoldText from "../../Components/Text/BoldText";
import i18n from "./../../../I18n.js";
import DefaultInput from "../../Components/Inputs/DefaultInput.js";
import DefaultButton from "../../Components/Buttons/DefaultButton.js";
import RegularText from "../../Components/Text/RegularText.js";
import OpacitedButton from "../../Components/Buttons/OpacitedButton.js";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../Contexts/AuthContext.js";
import UseFetch from "../../Hooks/useFetch.js";
import UserContext from "../../Contexts/UserContext.js";
import ErrorContext from "../../Contexts/ErrorContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const {
    setName,
    setSurname,
    setEmail,
    setCategory,
    setToken
  } = useContext(UserContext);
  const { fetchData } = UseFetch();
  const { showError } = useContext(ErrorContext);

  const [loginField, setLoginField] = useState(__DEV__ ? "" : "");
  const [password, setPassword] = useState(__DEV__ ? "" : "");

  useEffect(() => {}, []);

  const handleLogin = () => {
    if (loginField == "" || password == "") {
      showError({
        message: i18n.t("AUTH_ERROR_FIELDS_REQUIRED"),
      });
    }

    let loginData = {
      login: loginField,
      password: password,
    };

    let response = fetchData(
      (res) => {
        setName(res.user.name);
        setSurname(res.user.surname);
        setEmail(res.user.email);
        setCategory(res.user.category);

        AsyncStorage.setItem("name", res.user.name);
        AsyncStorage.setItem("surname", res.user.surname);
        AsyncStorage.setItem("email", res.user.email);
        AsyncStorage.setItem("category", res.user.category);
        AsyncStorage.setItem("token", res.user.token);

        login(
          res.user.token,
          res.user.update
        );
      },
      "login",
      null,
      loginData
    );
  };

  return (
    <LoginBackground>
      <View style={styles.titleContainer}>
        <BoldText style={styles.titleText}>{i18n.t("AUTH_LOGIN_SCREEN")}</BoldText>
      </View>
      <View style={styles.inputsContainer}>
        <DefaultInput
          label={i18n.t("AUTH_LOGIN_ID")}
          onChangeText={(text) => setLoginField(text)}
          maxLength={9}
        />
        <DefaultInput
          label={i18n.t("AUTH_LOGIN_PASSWORD")}
          type={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <DefaultButton onPress={() => handleLogin()}>
          {i18n.t("AUTH_LOG_IN")}
        </DefaultButton>
      </View>
      <View style={styles.registerContainer}>
        <BoldText>{i18n.t("AUTH_LOGIN_BINGO_ONLY")}</BoldText>
        <RegularText style={styles.registerSmallText}>
          {i18n.t("AUTH_ERROR_NO_ACCOUNT")}
        </RegularText>
        <OpacitedButton
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          {i18n.t("AUTH_REGISTER_SCREEN")}
        </OpacitedButton>
      </View>
    </LoginBackground>
  );
};

export default LoginScreen;
