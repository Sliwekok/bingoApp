import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import LoginBackground from "../../Components/Backgrounds/LoginBackground";
import styles from "./RemindPasswordScreen.style";
import colors from "../../Assets/Color";
import { ArrowLeft } from "phosphor-react-native";
import BoldText from "../../Components/Text/BoldText";
import i18n from "../../../I18n";
import RegularText from "../../Components/Text/RegularText";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import OpacitedButton from "../../Components/Buttons/OpacitedButton";
import { useNavigation } from "@react-navigation/native";
import UseFetch from "../../Hooks/useFetch";

const RemindPasswordScreen = () => {
  const navigation = useNavigation();
  const { fetchData } = UseFetch();

  const [phone, setPhone] = useState("");

  const handleRemindPassword = () => {
    let postData = {
      phone: phone,
    };

    let responseFetch = fetchData(
      (res) => {
        setPhone("");
      },
      "remind",
      null,
      postData
    );
  };

  return (
    <LoginBackground>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.sideTitleContainers}
          onPress={() => navigation.navigate("Login")}
        >
          <ArrowLeft size={32} color={colors.davyGray} />
        </TouchableOpacity>

        <View style={styles.centerTitleContainer}>
          <BoldText style={styles.titleText}>
            {i18n.t("RP_Reset_password")}
          </BoldText>
        </View>

        <View style={styles.sideTitleContainers}>
          <RegularText>{""}</RegularText>
        </View>
      </View>
      <View style={styles.textContainer}>
        <RegularText style={styles.textContainerContent}>
          {i18n.t("RP_Forget_password")}
        </RegularText>
        <RegularText style={styles.textContainerContent}>
          {i18n.t("RP_Content")}
        </RegularText>
      </View>
      <View style={styles.formContainer}>
        <DefaultInput
          label={i18n.t("RP_Phone")}
          onChangeText={(text) => setPhone(text)}
          value={phone}
          keyboardType={"numeric"}
        />
        <OpacitedButton onPress={() => handleRemindPassword()}>
          {i18n.t("RP_Send_link")}
        </OpacitedButton>
      </View>
    </LoginBackground>
  );
};

export default RemindPasswordScreen;
