import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../../Assets/Color";

const Activity = () => {
  return (
    <View style={styles.mainView}>
      <ActivityIndicator size={70} color={colors.internationalOrange} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    flex: 1,
    opacity: 0.7,
  },
});

export default Activity;
