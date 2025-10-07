import { ScreenWidth } from "@rneui/base";
import colors from "../../Assets/Color";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ScreenWidth * 0.05,
    marginTop: 10,
    backgroundColor: colors.brightGray,
  },
  titleText: {
    color: colors.golden,
  },
  sideTitleContainers: {
    flex: 0.05,
  },
  centerTitleContainer: {
    flex: 0.9,
    display: "flex",
    alignItems: "center",
  },
  inputsContainer: {},
  registerButton: {
    marginVertical: 20,
  },
  darkSection: {
    backgroundColor: colors.brightGray,
    paddingHorizontal: ScreenWidth * 0.05,
    paddingBottom: 10,
    paddingTop: 20,
  },
  lightSection: {
    backgroundColor: colors.white,
    paddingHorizontal: ScreenWidth * 0.05,
    paddingBottom: 10,
    paddingTop: 20,
  },
  titleTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTopColor: colors.grayDarker,
    borderTopWidth: 1,
    width: "100%",
  },
  subTitleText: {
    fontSize: 16,
  },
  introTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  passwordRequirementsText: {
    fontSize: 10,
  },
  correctRequirement: {
    color: colors.golden,
  },
  agreeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  defaultcheckbox: {
    marginTop: 10,
  },
  gusDataButton: {
    backgroundColor: colors.white,
    borderColor: colors.golden,
    borderWidth: 1,
  },
  showMoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    marginTop: 20,
  },
});

export default styles;
