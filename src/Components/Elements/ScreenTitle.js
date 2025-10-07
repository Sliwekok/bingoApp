import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BoldText from "../Text/BoldText";
import colors from "../../Assets/Color";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

const ScreenTitle = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.titleContainer, props.style ?? {}]}>
      {props.withBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowBack}
        >
          <ArrowLeft />
        </TouchableOpacity>
      )}
      <BoldText style={[styles.titleText, { fontSize: props.fontSize ?? 14 }]}>
        {props.title}
      </BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  titleText: {
    color: colors.golden,
    fontSize: 14,
  },
  arrowBack: {
    position: "absolute",
    left: 10,
  },
});

export default ScreenTitle;
