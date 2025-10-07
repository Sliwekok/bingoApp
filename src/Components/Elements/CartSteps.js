import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RegularText from "../Text/RegularText";
import i18n from "../../../I18n";
import colors from "../../Assets/Color";

const CartSteps = ({ step, style }) => {
  return (
    <View style={style ?? {}}>
      <View style={styles.stepsContainer}>
        <View
          style={[styles.stepPoint, step >= 1 ? styles.stepPointChecked : {}]}
        ></View>
        <View style={styles.lineBetween}></View>
        <View
          style={[styles.stepPoint, step >= 2 ? styles.stepPointChecked : {}]}
        ></View>
        <View style={styles.lineBetween}></View>
        <View
          style={[styles.stepPoint, step >= 3 ? styles.stepPointChecked : {}]}
        ></View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.pointTextContainer}>
          <RegularText style={styles.pointText}>
            {i18n.t("CART_Cart_step")}
          </RegularText>
        </View>
        <View style={styles.pointTextContainer}>
          <RegularText style={styles.pointText}>
            {i18n.t("CART_Delivery_step")}
          </RegularText>
        </View>
        <View style={styles.pointTextContainer}>
          <RegularText style={styles.pointText}>
            {i18n.t("Cart_Summary_step")}
          </RegularText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pointText: {
    fontSize: 10,
  },
  pointTextContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 5,
  },
  stepPoint: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderColor: colors.blackOlive,
    borderWidth: 1,
  },
  lineBetween: {
    height: 2,
    backgroundColor: colors.internationalOrange,
    flex: 1,
  },
  stepPointChecked: {
    backgroundColor: colors.blackOlive,
  },
});

export default CartSteps;
