import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
  Pressable,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { CaretDown } from "phosphor-react-native";
import colors from "../../Assets/Color";

const DefaultPicker = ({
  selected,
  onValueChange,
  items = [],
  placeholder = "Wybierz...",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedLabel =
    items.find((item) => item.type === selected)?.name || placeholder;

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  const handleSelect = (value) => {
    onValueChange(value);
    setSearchTerm("");
    setModalVisible(false);
  };

  if (!items || items.length === 0) {
    return <Text style={styles.fallbackText}>Brak opcji do wyboru</Text>;
  }

  return (
    <>
      <TouchableOpacity
        style={styles.iosPickerButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.iosPickerText}>{selectedLabel}</Text>
        <CaretDown size={13} color={colors.blackOlive} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Szukaj..."
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.searchInput}
                placeholderTextColor="#999"
              />

              <FlatList
                data={filteredItems}
                keyExtractor={(item, index) => index.toString()}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.option}
                    onPress={() => handleSelect(item.type)}
                  >
                    <Text style={styles.optionText}>{item.name}</Text>
                  </Pressable>
                )}
                ListEmptyComponent={
                  <Text style={styles.noResultsText}>Brak wyników</Text>
                }
              />

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setModalVisible(false);
                  setSearchTerm("");
                }}
              >
                <Text style={styles.cancelButtonText}>Anuluj</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fallbackText: {
    color: colors.brightGray,
    fontSize: 16,
    paddingVertical: 10,
  },
  iosPickerButton: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: colors.grey,
    // borderRadius: 6,

  },
  iosPickerText: {
    color: colors.blackOlive,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    maxHeight: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
    fontSize: 13,
    color: "#000",
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionText: {
    fontSize: 14,
    color: colors.blackOlive,
  },
  noResultsText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 13,
    color: "#666",
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 14,
    color: "red",
  },
});

export default DefaultPicker;
