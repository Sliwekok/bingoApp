import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../Assets/Color";

const RegularText = (props) => {
  return (
    <Text
      style={[styles.defaultTextStyle, props.style]}
      ellipsizeMode={props.ellipsizeMode ?? "tail"}
      numberOfLines={props.numberOfLines ?? 0}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: "Montserrat",
    color: colors.black,
  },
});

export default RegularText;
