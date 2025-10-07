import { StyleSheet } from "react-native";
import colors from "../../Assets/Color";

const styles = StyleSheet.create({
  baseModal: {
    overView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    mainView: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.white,
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      width: "90%",
    },
  },
  addInvoiceModal: {
    chooseOption: {
      mainView: {
        width: "100%",
        padding: 0,
      },
      rowView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
      },
      image: {
        height: 30,
        width: 30,
        marginRight: 20,
      },
      rowText: {
        flex: 1,
      },
      closeText: {
        color: colors.celadonBlue,
        textDecoration: "underline",
        textAlign: "center",
        marginTop: 30,
      },
    },
    waitOption: {
      mainView: {
        width: "100%",
        padding: 0,
        alignItems: "center",
        gap: 20,
      },
      image: {
        height: 40,
        width: 40,
      },
      headerText: {
        textAlign: "center",
      },
      infoText: {
        textAlign: "center",
      },
      patienceText: {
        textAlign: "center",
        color: colors.celadonBlue,
      },
    },
  },
  errorModal: {
    mainView: {
      width: "100%",
      padding: 0,
    },
    textContainer: {
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      width: "100%",
      marginTop: 15,
    },
    closeContainer: {
      position: "absolute",
      right: 5,
      top: 5,
      backgroundColor: colors.red,
    },
  },
});

export default styles;
