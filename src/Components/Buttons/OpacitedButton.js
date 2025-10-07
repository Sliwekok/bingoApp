import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../Assets/Color";
import BoldText from "../Text/BoldText";

const OpacitedButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style]}
      onPress={props.onPress}
    >
      <BoldText style={[styles.buttonText, props.textStyle ?? {}]}>
        {props.children}
      </BoldText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
    borderColor: colors.blackOlive,
  },
  buttonText: {
    color: colors.blackOlive,
    fontSize: 12,
  },
});

export default OpacitedButton;
