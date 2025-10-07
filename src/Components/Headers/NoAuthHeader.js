import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ScreenWidth } from "@rneui/base";
import colors from "../../Assets/Color";
import logo from "../../Assets/Icons/logo.png";

const NoAuthHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={logo} alt="logo"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: ScreenWidth,
    backgroundColor: colors.white,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: ScreenWidth * 0.85,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.golden,
  },
    image: {
        width: 200,
        height: 60,
        resizeMode: "contain",
    },
});

export default NoAuthHeader;
