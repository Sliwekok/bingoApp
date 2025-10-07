import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";

import LoginBackground from "../../Components/Backgrounds/LoginBackground";
import styles from "./RegisterScreen.style";
import BoldText from "../../Components/Text/BoldText";
import RegularText from "../../Components/Text/RegularText";
import BorderInput from "../../Components/Inputs/BorderInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import colors from "../../Assets/Color";
import i18n from "../../../I18n";
import UseFetch from "../../Hooks/useFetch";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { fetchData } = UseFetch();
  const registerUser = () => {
    setIsLoading(true);
    fetchData(
        (res) => {
          console.log("Registration successful:", res);
          navigation.navigate("Login");
        },
        "register",
        {},
        {name: name, login: login, email: email, password: password},
        null,
    ).then(r => {
      setIsLoading(false);
    });
  };

  return (
      <LoginBackground>
        <View style={styles.titleContainer}>
          <TouchableOpacity
              style={styles.sideTitleContainers}
              onPress={() => navigation.navigate("Login")}
          >
            <ArrowLeft size={32} color={colors.grayDarker} />
          </TouchableOpacity>

          <View style={styles.centerTitleContainer}>
            <BoldText style={styles.titleText}>
              {i18n.t("AUTH_REGISTER_NOW")}
            </BoldText>
          </View>

          <View style={styles.sideTitleContainers} />
        </View>

        <View style={styles.inputsContainer}>
          <View style={[styles.darkSection, styles.introTextContainer]}>
            <RegularText
                style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
            >
              {i18n.t("AUTH_REGISTER_INTO_TEXT")}
            </RegularText>
          </View>

          <View style={styles.darkSection}>
            <BorderInput
                label="Imię"
                value={name}
                onChangeText={setName}
                type="RegisterForm"
            />
            <View style={{ height: 10 }} />

            <BorderInput
                label="Login"
                value={login}
                onChangeText={setLogin}
                type="RegisterForm"
            />
            <View style={{ height: 10 }} />

            <BorderInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                type="RegisterForm"
                keyboardType="email-address"
            />
            <View style={{ height: 10 }} />

            <BorderInput
                label="Hasło"
                value={password}
                onChangeText={setPassword}
                type="RegisterForm"
                secureTextEntry
            />
          </View>

          <View style={styles.lightSection}>
            <DefaultButton
                style={styles.registerButton}
                onPress={registerUser}
                disabled={isLoading}
            >
              {i18n.t("AUTH_REGISTER")}
            </DefaultButton>
          </View>
        </View>
      </LoginBackground>
  );
};

export default RegisterScreen;
