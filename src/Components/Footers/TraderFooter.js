import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../Assets/Color";
import BookSvg from "../../Assets/Icons/book.svg";
import ScanQrSvg from "../../Assets/Icons/scan_qr.svg";
import PresentSvg from "../../Assets/Icons/present.svg";
import InviteUserSvg from "../../Assets/Icons/invite-user.svg";
import i18n from "../../../I18n";
import RegularText from "../Text/RegularText";
import icons from "../../Assets/Icons";
import { useNavigation } from "@react-navigation/native";

const TraderFooter = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.footerContainer, {  marginBottom: Platform.OS == 'ios' ? 0 : insets.bottom }]}>
      <View style={styles.menuIconsContainer}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("Knowledge")}
        >
          <BookSvg width={26} height={31} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("InviteInstaller")}
        >
          <InviteUserSvg height={56} width={56} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("AwardCategories")}
        >
          <PresentSvg width={32} height={32} />
        </TouchableOpacity>
      </View>
      <View style={styles.menuTextContainer}>
        <TouchableOpacity
          style={styles.menuText}
          onPress={() => navigation.navigate("Knowledge")}
        >
          <RegularText style={styles.footerText}>
            {i18n.t("FOOT_knowledge")}
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuText}
          onPress={() => navigation.navigate("InviteInstaller")}
        >
          <RegularText style={styles.footerText}>
            {i18n.t("FOOT_Recommend")}
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuText}
          onPress={() => navigation.navigate("AwardCategories")}
        >
          <RegularText style={styles.footerText}>
            {i18n.t("FOOT_Awards")}
          </RegularText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: colors.blackOlive,
    paddingVertical: 10,
  },
  menuIconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  menuIcon: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  menuText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 20,
  },
  footerText: {
    color: colors.white,
    fontSize: 6,
    textAlign: "center",
  },
});

export default TraderFooter;
