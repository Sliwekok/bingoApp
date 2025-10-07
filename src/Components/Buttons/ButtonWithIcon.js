import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../Assets/Color";
import BoldText from "../Text/BoldText";

const ButtonWithIcon = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style]}
      onPress={props.onPress}
    >
      {props.iconSide === "left" && props.icon}
      <BoldText
        style={[
          styles.buttonText,
          props.textColor ? { color: props.textColor } : {},
        ]}
      >
        {props.children}
      </BoldText>
      {props.iconSide === "right" && props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.internationalOrange,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
  },
});

export default ButtonWithIcon;
