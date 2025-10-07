import { View, Text, Platform } from "react-native";
import React, { useCallback, useState } from "react";
import UserBackground from "../../Components/Backgrounds/UserBackground";
import ScreenTitle from "../../Components/Elements/ScreenTitle";
import RegularText from "../../Components/Text/RegularText";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import UseFetch from "../../Hooks/useFetch";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";
import * as Device from 'expo-device';

const PageScreen = () => {
  const route = useRoute();
  const { fetchData } = UseFetch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useFocusEffect(
    useCallback(() => {
      let response = fetchData((res) => {
        setContent(res.data.content);
        setTitle(res.data.title);
      }, "page/" + route.params.page);
    }, [route.params])
  );

  const getHeightElement = () => {
    if (Device.deviceType == Device.DeviceType.TABLET) {
      return ScreenHeight * 0.8;
    }

    return Platform.OS == 'ios' ? ScreenHeight - (ScreenHeight * 0.35) : ScreenHeight - (ScreenHeight * 0.25);
  }


  return (
    <UserBackground noPadding={true} scroll={false}>
      <ScreenTitle title={title} withBack={true} />
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: getHeightElement(),
        }}
      >
        <WebView
          originWhitelist={["*"]}
          source={{ html: content }}
          javaScriptEnabled={true}
          style={{ flex: 1 }}
        />
      </View>
    </UserBackground>
  );
};

export default PageScreen;
