import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../Assets/Color";
import BoldText from "../Text/BoldText";

const DefaultButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style]}
      onPress={props.onPress}
      disabled={props.disabled ?? false}
    >
      <BoldText
        style={[
          styles.buttonText,
          props.textColor ? { color: props.textColor } : {},
        ]}
      >
        {props.children}
      </BoldText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.golden,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
  },
});

export default DefaultButton;
