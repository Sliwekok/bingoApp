import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { StyleSheet } from "react-native";
import colors from "../../Assets/Color";

const styles = StyleSheet.create({
  rankingContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.black,
    borderTopWidth: 1,
    borderTopColor: colors.golden,
  },
  gamesContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.black,
  },
  textRight: {
    textAlign: "right",
    width: "50%",
  },
  textLeft: {
    textAlign: "left",
    width: "50%",
  },
});

export default styles;
