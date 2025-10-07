import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoldText = (props) => {
  return (
    <Text style={[styles.defaultTextStyle, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: "Montserrat Bold",
  },
});

export default BoldText;
