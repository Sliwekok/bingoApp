import { ScreenHeight, ScreenWidth } from "@rneui/base";
import {Dimensions, StyleSheet} from "react-native";
import colors from "../../Assets/Color";

const { width } = Dimensions.get("window");
const BOX_SIZE = width / 5 - 8;

const styles = StyleSheet.create({
    showWin: {
        fontSize: 14,
        color: colors.grayDarker,
        fontWeight: "bolder",
        textAlign: "center",
        marginVertical: 10,
        paddingVertical: 10
    },
    board: {
        table: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 10,
        },
        row: {
            flexDirection: "row",
            justifyContent: "center",
        },
        cell: {
            width: BOX_SIZE,
            height: BOX_SIZE,
            borderWidth: 1,
            borderColor: colors.grayDarker,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.white,
        },
        text: {
            textAlign: "center",
            fontSize: 10,
            color: colors.black,
        },
        free: {
            backgroundColor: colors.golden,
        },
        selected: {
            backgroundColor: colors.golden,
        },
        disabled: {
            opacity: 0.5,
        },
    },
    category: {
        container: {
            width: ScreenWidth,
            marginVertical: 10
        },
        header: {
            fontSize: 16,
            color: colors.grayDarker,
            fontWeight: "bolder",
            textAlign: "center",
            width: "100%",
        }
    }
});

export default styles;
