import { View, TouchableOpacity, StyleSheet } from "react-native";
import RegularText from "../Text/RegularText";
import { color } from "@rneui/base";
import colors from "../../Assets/Color";
import BoldText from "../Text/BoldText";

const BoldTextButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <BoldText style={styles.text}>{props.children}</BoldText>
      {props.icon && props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 12,
    color: colors.internationalOrange,
  },
});

export default BoldTextButton;
