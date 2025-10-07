import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import NoAuthHeader from "../Headers/NoAuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../Assets/Color";
import { ScrollView } from "react-native-gesture-handler";
import RegularText from "../Text/RegularText";
import i18n from "../../../I18n";
import ConctactFormSvg from "../../Assets/Icons/contact_form.svg";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { ScreenHeight } from "@rneui/base";

const LoginBackground = (props) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const scrollRef = useRef();
    const route = useRoute();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: colors.white }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // dopasuj offset jeśli masz header
      >
        <ScrollView style={styles.contentContainer} ref={scrollRef}>
          <NoAuthHeader />
          {props.children}
          {keyboardVisible && (
                <View style={{ height: ScreenHeight * 0.25, backgroundColor: colors.brightGray }} />
          )}
        </ScrollView>
      </KeyboardAvoidingView>

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
    backgroundColor: colors.grayDarker,
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

export default LoginBackground;
