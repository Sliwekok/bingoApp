import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import React from "react";
import NoAuthHeader from "../Headers/NoAuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../Assets/Color";
import RegularText from "../Text/RegularText";
import i18n from "../../../I18n";
import ConctactFormSvg from "../../Assets/Icons/contact_form.svg";
import { useNavigation } from "@react-navigation/native";

const UpdateFormBackground = (props) => {
  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: colors.white }}
      />
      <NoAuthHeader />
      <ScrollView style={styles.contentContainer}>
        {props.children}
      </ScrollView>

      <SafeAreaView
        edges={["bottom"]}
        style={{ flex: 0, backgroundColor: colors.white }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.brightGray,
  },
  footerContainer: {
    backgroundColor: colors.blackOlive,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  footerText: {
    color: colors.brightGray,
    fontSize: 10,
  },
});

export default UpdateFormBackground;
