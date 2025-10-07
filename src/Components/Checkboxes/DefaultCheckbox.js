import React from "react";
import { CheckBoxIcon } from "@rneui/base/dist/CheckBox/components/CheckBoxIcon";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { CheckSquare, Square } from "phosphor-react-native";
import RegularText from "../Text/RegularText";
import icons from "../../Assets/Icons";
import RenderHTML from "react-native-render-html";
import { ScreenWidth } from "@rneui/base";
import colors from "../../Assets/Color";

const DefaultCheckbox = ({ text, checked, onPress, disabled, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.checkbox_container, props.style]}
      disabled={disabled ?? false}
    >
      <CheckBoxIcon
        center
        checkedIcon={<Image source={icons.checked} />}
        uncheckedIcon={<Image source={icons.unchecked} />}
        checked={checked ?? false}
        disabled={disabled ?? false}
        style={styles.checkbox}
      />
      <RenderHTML
        source={{ html: text }}
        contentWidth={ScreenWidth * 0.7}
        baseStyle={{
          fontFamily: "Montserrat",
          fontSize: 12,
          color: colors.blackOlive,
        }}
        tagsStyles={{a: {color: colors.internationalOrange, textDecorationLine: "underline"}}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox_container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    maxWidth: ScreenWidth * 0.8,
  },
});

export default DefaultCheckbox;
