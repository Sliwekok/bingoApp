import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import RegularText from "../Text/RegularText";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../Assets/Color";
import { EyeSlash } from "phosphor-react-native";

const BorderInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <RegularText style={styles.inputLabel}>{props.label}</RegularText>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          onChange={props.onChange}
          autoCapitalize={props.autoCapitalize ?? "none"}
          secureTextEntry={props.secureTextEntry ?? false}
          keyboardType={props.keyboardType ?? "default"}
          maxLength={props.maxLength ?? undefined}
          value={props.value}
          editable={props.editable ?? true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    height: 50,
    borderColor: colors.darkSilver,
    borderWidth: 1,
  },
  inputLabel: {
    fontSize: 9,
    color: colors.onyx,
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    fontSize: 13,
    height: 40,
    width: "90%",
    color: colors.blackOlive,
  },
});

export default BorderInput;
