import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RegularText from "../Text/RegularText";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../Assets/Color";
import { Eye, EyeSlash } from "phosphor-react-native";

const DefaultInputWithoutLabel = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(
    props.secureTextEntry ?? false
  );

  return (
    <View style={[styles.inputContainer, props.style]}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          autoCapitalize={props.autoCapitalize ?? "none"}
          secureTextEntry={secureTextEntry}
          keyboardType={props.keyboardType ?? "default"}
          maxLength={props.maxLength ?? undefined}
          value={props.value}
        />
        {props.type == "password" && (
          <TouchableOpacity
            style={styles.passwordToggleIcon}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            {secureTextEntry && <EyeSlash size={32} color={colors.onyx} />}
            {!secureTextEntry && <Eye size={32} color={colors.onyx} />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 2,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    textAlign: "center",
    fontSize: 15,
    height: "100%",
    width: "100%",
    color: colors.blackOlive,
  },
});

export default DefaultInputWithoutLabel;
