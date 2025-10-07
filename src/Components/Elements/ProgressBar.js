import { View, Text, StyleSheet } from "react-native";
import React from "react";
import i18n from "../../../I18n";
import BoldText from "../Text/BoldText";
import colors from "../../Assets/Color";
import RegularText from "../Text/RegularText";

const ProgressBar = ({ percent }) => {
  return (
    <View>
      <View style={styles.levelContainer}>
        <View style={[styles.levelSmallContainer]}>
          <BoldText>{i18n.t("PROGBAR_Entry")}</BoldText>
        </View>
        <View style={[styles.levelSmallContainer, styles.levelCenterContainer]}>
          <BoldText>{i18n.t("PROGBAR_Silver")}</BoldText>
        </View>
        <View style={[styles.levelSmallContainer]}>
          <BoldText>{i18n.t("PROGBAR_Gold")}</BoldText>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.prograssBarBump, { left: "32%" }]}>
            <RegularText>{""}</RegularText>
          </View>
          <View style={[styles.prograssBarBump, { left: "65.5%" }]}>
            <RegularText>{""}</RegularText>
          </View>
          <View style={[styles.progress, { width: percent + "%" }]}>
            <RegularText>{""}</RegularText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  levelContainer: {
    display: "flex",
    flexDirection: "row",
  },
  levelSmallContainer: {
    flex: 0.33,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  levelCenterContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.blackOlive,
  },
  progressBarContainer: {
    paddingVertical: 10,
    borderColor: colors.blackOlive,
    borderWidth: 1,
  },
  progressBar: {
    backgroundColor: colors.brightGray,
    height: 30,
  },
  progress: {
    height: 30,
    backgroundColor: colors.internationalOrange,
  },
  prograssBarBump: {
    backgroundColor: colors.white,
    width: 5,
    position: "absolute",
    zIndex: 100,
    height: 30,
  },
});

export default ProgressBar;
