import { View, TouchableOpacity, StyleSheet } from "react-native";
import RegularText from "../Text/RegularText";

const TextButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <RegularText style={styles.text}>{props.children}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    textDecorationLine: "underline",
  },
});

export default TextButton;
