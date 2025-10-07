import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import colors from "../../Assets/Color";

const SearchablePicker = ({
  items = [],
  selected,
  onValueChange,
  placeholder = "Wybierz...",
  labelField = "name",
  valueField = "type",
}) => {
  const [isFocus, setIsFocus] = useState(false);

  if (!items || items.length === 0) {
    return <Text style={styles.fallbackText}>Brak opcji do wyboru</Text>;
  }

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && styles.dropdownFocus]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={items}
        search
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Szukaj..."
        value={selected}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onValueChange(item[valueField]);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  dropdown: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  dropdownFocus: {
    borderColor: colors.primary || "#007AFF",
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors.blackOlive,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: colors.blackOlive,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: colors.blackOlive,
  },
  fallbackText: {
    color: colors.brightGray,
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default SearchablePicker;
