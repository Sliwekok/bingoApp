import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BoldText from "../Text/BoldText";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../Assets/Color";

const TextAreaInput = (props) => {
  return (
    <View>
      <BoldText style={styles.label}>{props.label}</BoldText>
      <TextInput
        placeholder={props.placeholder}
        numberOfLines={10}
        style={styles.textarea}
        multiline={true}
        onChangeText={props.onChangeText}
        value={props.value ?? ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.blackOliveOpacited,
    fontSize: 11,
  },
  textarea: {
    borderColor: colors.darkSilver,
    borderWidth: 1,
    height: 120,
    color: colors.blackOlive,
  },
});

export default TextAreaInput;
