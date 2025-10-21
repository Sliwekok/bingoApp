import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { StyleSheet } from "react-native";
import colors from "../../Assets/Color";

const styles = StyleSheet.create({
  category: {
    paddingHorizontal: ScreenWidth * 0.05,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rankingRow: {
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.grayDarker,
    },
    cell: {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 5,
      fontSize: 14,
    },
    colPos: {
      flex: 0.2, // smaller column
    },
    colUser: {
      flex: 0.8, // wider for usernames
      alignItems: "flex-start",
    },
    colPoints: {
      flex: 0.4,
    },
    colGames: {
      flex: 0.4,
    },
    posText: {
      color: colors.grayDarker,
      fontSize: 14,
    },
    posTextTop3: {
      color: colors.golden,
    },
    posTextCurrentUser: {
      fontWeight: "bold",
      color: colors.golden,
    },
    cellText: {
      fontSize: 12,
    }
  },
  tableHeader: {
    paddingHorizontal: ScreenWidth * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.golden,
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
});

export default styles;
