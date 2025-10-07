import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../Assets/Color";
import PresentWithStarSVG from "../../Assets/Icons/present_with_star.svg";
import BookSvg from "../../Assets/Icons/book.svg";
import ScanQrSvg from "../../Assets/Icons/scan_qr.svg";
import LightbulbSvg from "../../Assets/Icons/lightbulb.svg";
import PresentSvg from "../../Assets/Icons/present.svg";
import i18n from "../../../I18n";
import RegularText from "../Text/RegularText";
import icons from "../../Assets/Icons";
import { useNavigation } from "@react-navigation/native";

const UserFooter = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.footerContainer,
        { marginBottom: Platform.OS == "ios" ? 0 : insets.bottom },
      ]}
    >
      <View style={styles.menuIconsContainer}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("Products")}
        >
          <PresentWithStarSVG width={48} height={48} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("Knowledge")}
        >
          <BookSvg width={26} height={31} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("QrScanner", {refreshKey: Date.now()})}
        >
          <ScanQrSvg height={56} width={56} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate("News")}
        >
          <LightbulbSvg width={28} height={32} />
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
          onPress={() => navigation.navigate("Products")}
        >
          <RegularText style={styles.footerText}>
            {i18n.t("FOOT_products")}
          </RegularText>
        </TouchableOpacity>
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
          onPress={() => navigation.navigate("QrScanner", {refreshKey: Date.now()})}
        >
          <RegularText style={styles.footerText}>
            {i18n.t("FOOT_Scan_qr")}
          </RegularText>
        </TouchableOpacity>
        <View style={styles.menuText}>
          <RegularText style={styles.footerText}>
            {i18n.t("FOOT_News")}
          </RegularText>
        </View>
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
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
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

export default UserFooter;
