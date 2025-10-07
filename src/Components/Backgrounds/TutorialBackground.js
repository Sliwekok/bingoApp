import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../Assets/Color";
import AuthHeader from "../Headers/AuthHeader";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import UserFooter from "../Footers/UserFooter";
import UserContext from "../../Contexts/UserContext";
import TraderFooter from "../Footers/TraderFooter";
import { useFocusEffect, useRoute } from "@react-navigation/native";

const TutorialBackground = (props) => {
  const route = useRoute();
  const { userType } = useContext(UserContext);
  const scrollRef = useRef();

  

  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: colors.brightGray, zIndex: 100 }}
      />
      <AuthHeader />
        {props.children}
      {userType == "user" && <UserFooter />}
      {userType == "trader" && <TraderFooter />}

      <SafeAreaView
        edges={["bottom"]}
        style={{ flex: 0, backgroundColor: colors.white }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.white,
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

export default TutorialBackground;
