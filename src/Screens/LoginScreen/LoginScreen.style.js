import { ScreenWidth } from "@rneui/base";
import { StyleSheet } from "react-native";
import colors from "../../Assets/Color";

const styles = StyleSheet.create({
  titleContainer: {
    width: ScreenWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
  },
  titleText: {
    color: colors.white,
  },
  inputsContainer: {
    display: "flex",
    gap: 30,
    padding: ScreenWidth * 0.05,
  },
  registerContainer: {
    marginHorizontal: ScreenWidth * 0.05,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    borderTopColor: colors.grayDarker,
    borderTopWidth: 1,
    paddingVertical: 30,
  },
  registerButton: {
    width: "100%",
  },
  registerSmallText: {
    fontSize: 10,
  },
});

export default styles;
