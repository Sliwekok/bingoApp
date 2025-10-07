import { StyleSheet } from "react-native";
import colors from "../../Assets/Color";
import { ScreenWidth } from "@rneui/base";

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ScreenWidth * 0.05,
    marginTop: 10,
  },
  titleText: {
    color: colors.internationalOrange,
  },
  sideTitleContainers: {
    flex: 0.05,
  },
  centerTitleContainer: {
    flex: 0.9,
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 50,
    marginHorizontal: ScreenWidth * 0.05,
    gap: 20,
    paddingVertical: 20,
    borderBottomColor: colors.blackOlive,
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textContainerContent: {
    fontSize: 13,
    textAlign: "center",
  },
  formContainer: {
    marginTop: 40,
    marginHorizontal: ScreenWidth * 0.05,
    gap: 30,
    marginBottom: 20,
  },
});

export default styles;
