import React, { forwardRef, useContext } from "react";
import Modal from "react-native-modal";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { Image, TouchableOpacity, View } from "react-native";
import icons from "../../Assets/Icons";
import styles from "./CustomModal.style";
import ErrorContext from "../../Contexts/ErrorContext";
import RenderHTML from "react-native-render-html";
import { isTextHTML } from "../../Helpers/isTextHTML";
import RegularText from "../Text/RegularText";
import DefaultButton from "../Buttons/DefaultButton";
import { useNavigation } from "@react-navigation/native";

const CustomModal = () => {
  return <View />;
};

export const ErrorModal = (props) => {
  const { errorModalVisible, error, clearError } = useContext(ErrorContext);

  const handleClearError = () => {
    clearError()
  };

  return (
    <BaseModal
      isVisible={errorModalVisible}
      onBackdropPress={() => clearError()}
    >
      <View style={styles.errorModal.mainView}>
        <View style={styles.errorModal.textContainer}>
          {Array.isArray(error?.message) ? (
            error.message.map((item, idx) =>
              isTextHTML(item) ? (
                <RenderHTML
                  key={idx}
                  contentWidth={ScreenWidth}
                  source={{ html: item }}
                  style={{ paddingVertical: 10, textAlign: "center" }}
                />
              ) : (
                <RegularText
                  key={idx}
                  style={{ paddingVertical: 10, textAlign: "center" }}
                >
                  {item}
                </RegularText>
              )
            )
          ) : isTextHTML(error?.message ?? '') ? (
            <RenderHTML
              contentWidth={ScreenWidth}
              source={{ html: error?.message }}
              style={{ paddingVertical: 10, textAlign: "center" }}
            />
          ) : (
            <RegularText style={{ paddingVertical: 10, textAlign: "center" }}>
              {error?.message}
            </RegularText>
          )}
        </View>
        <View style={styles.errorModal.buttonContainer}>
          <DefaultButton onPress={() => handleClearError()}>OK</DefaultButton>
        </View>
      </View>
    </BaseModal>
  );
};


const BaseModal = ({ isVisible, onBackdropPress, ...props }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      deviceHeight={ScreenHeight}
      deviceWidth={ScreenWidth}
      style={styles.baseModal.overView}
      animationIn="slideInLeft"
      animationOut="fadeOutRight"
      animationInTiming={500}
      useNativeDriver={true}
    >
      <View style={[styles.baseModal.mainView, props.style]}>
        {props.children}
      </View>
    </Modal>
  );
};

export default CustomModal;
