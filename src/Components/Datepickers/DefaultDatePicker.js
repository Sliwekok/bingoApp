import React, { useState } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RegularText from "../Text/RegularText";
import colors from "../../Assets/Color";
import i18n from "../../../I18n";

const DefaultDatePicker = ({
  label,
  setValue,
  value,
  placeholder = i18n.t('EXTR_datepicker_placeholder'),
  minDate,
  maxDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
      if (event?.type === "dismissed") return;
    }
    if (selectedDate) setValue(selectedDate);
  };

  const showDatePicker = () => setShowPicker(true);

  const formatDate = (d) => {
    if (!d) return "";
    const dateObj = d instanceof Date ? d : new Date(d);
    const yyyy = dateObj.getFullYear();
    const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
    const dd = String(dateObj.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const hasValue = !!value;

  return (
    <TouchableOpacity style={styles.container} onPress={showDatePicker} activeOpacity={0.8}>
      <RegularText style={styles.label}>{label}</RegularText>

      <RegularText style={hasValue ? styles.valueText : styles.placeholderText}>
        {hasValue ? formatDate(value) : placeholder}
      </RegularText>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.darkSilver,
    paddingBottom: 10,
    paddingHorizontal: 15,
    gap: 5,
    paddingTop: 10,
  },
  label: {
    fontSize: 10,
    color: colors.onyx,
  },
  valueText: {
    fontSize: 16,
    color: colors.black || "#000",
  },
  placeholderText: {
    fontSize: 16,
    color: colors.darkSilver,
  },
});

export default DefaultDatePicker;
