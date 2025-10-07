import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../Assets/Color";
import BoldText from "../Text/BoldText";

const IconButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style]}
      onPress={props.onPress}
      disabled={props.disabled ?? false}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.internationalOrange,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});

export default IconButton;
