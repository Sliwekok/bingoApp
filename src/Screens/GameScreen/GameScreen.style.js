import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { StyleSheet } from "react-native";
import colors from "../../Assets/Color";

const styles = StyleSheet.create({
  introContainer: {
    paddingHorizontal: ScreenHeight * 0.05,
    backgroundColor: colors.davyGray,
  },
  myPosConatiner: {
    borderRadius: 50,
    backgroundColor: colors.tuscany,
    display: "flex",
    flexDirection: "row",
    height: 75,
    marginTop: 20,
    overflow: "hidden",
  },
  myPostContainerLeftPart: {
    flex: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  myPostContainerLeftText: {
    color: colors.brightGray,
    fontSize: 11,
  },
  myPostContainerRightPart: {
    flex: 0.5,
  },
  currPostContainer: {
    height: 75,
    width: 75,
    backgroundColor: colors.internationalOrange,
    borderColor: colors.brightGray,
    borderWidth: 1,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  myPosText: {
    fontSize: 16,
    color: colors.brightGray,
  },
  introText: {
    color: colors.brightGray,
    textAlign: "center",
    fontSize: 12,
    marginVertical: 20,
  },
  tableHeader: {
    paddingHorizontal: ScreenWidth * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.blackOlive,
    display: "flex",
    flexDirection: "row",
  },
  headerCell: {
    flex: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  headerCellText: {
    fontSize: 11,
  },
  tableData: {
    paddingHorizontal: ScreenWidth * 0.05,
  },
  rankingRow: {
    container: {
      display: "flex",
      flexDirection: "row",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.philippineSilver,
    },
    left: {
      flex: 0.5,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    posText: {
      color: colors.internationalOrange,
      fontSize: 16,
    },
    right: {
      flex: 0.5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  backgroundImageContainer: {
    borderRadius: 50,
  },
});

export default styles;
