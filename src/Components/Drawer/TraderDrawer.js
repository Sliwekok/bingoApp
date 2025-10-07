import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import colors from "../../Assets/Color";
import { ScreenHeight } from "@rneui/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BoldText from "../Text/BoldText";
import i18n from "../../../I18n";
import { ArrowRight, X } from "phosphor-react-native";
import RegularText from "../Text/RegularText";
import icons from "../../Assets/Icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../Contexts/UserContext";
import AuthContext from "../../Contexts/AuthContext";
import CartContext from "../../Contexts/CartContext";

const TraderDrawer = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { name, surname, avatar, email, traderType } = useContext(UserContext);
  const { logout } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);

  const logoutHandler = () => {
    clearCart();
    logout();
  };

  return (
    <View style={[styles.drawerContainer, { paddingTop: insets.top }]}>
      <View style={styles.userContainer}>
        <View style={styles.userTypeContainer}>
          <BoldText style={styles.userTypeTitle}>
            {i18n.t("DR_Trader")}
          </BoldText>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <X size={30} color={colors.blackOlive} />
          </TouchableOpacity>
        </View>
        <View style={styles.userAvatarContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangeAvatar")}
            style={styles.userAvatarImage}
          >
            <Image source={{ uri: avatar }} style={styles.avatarImage} />
            <View style={styles.userEditContainer}>
              <Image source={icons.editAvatar} />
            </View>
          </TouchableOpacity>
          <View style={styles.userDataContainer}>
            <BoldText style={styles.userNameText}>
              {name} {surname}
            </BoldText>
            <RegularText
              style={[
                styles.userEmailText,
                email.length > 35 ? { fontSize: 7 } : {},
              ]}
            >
              {email}
            </RegularText>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <View>
          <MenuItem
            label={i18n.t("DR_Home")}
            onPress={() => navigation.navigate("TraderDashboard")}
          />
          <MenuItem
            label={i18n.t("DR_About")}
            onPress={() => navigation.navigate("Page", { page: "about" })}
          />
          <MenuItem
            label={i18n.t("DR_News")}
            onPress={() => navigation.navigate("News")}
          />
          <MenuItem
            label={i18n.t("DR_Knowledge")}
            onPress={() => navigation.navigate("Knowledge")}
          />{" "}
          <MenuItem
            label={i18n.t("DR_Products")}
            onPress={() => navigation.navigate("Products")}
          />
          <MenuItem
            label={i18n.t("DR_Awards")}
            onPress={() => navigation.navigate("AwardCategories")}
          />
          <MenuItem
            label={i18n.t("DR_My_account")}
            onPress={() => navigation.navigate("MyAccount")}
          />
          <MenuItem
            label={i18n.t("DR_Contact")}
            onPress={() => navigation.navigate("ContactForm")}
          />
          <MenuItem
            label={i18n.t("DR_Tutorial")}
            onPress={() => navigation.navigate("Tutorial")}
          />
          {traderType == "manager" && (
            <MenuItem
              label={i18n.t("DR_Invite_trader")}
              onPress={() => navigation.navigate("InviteTrader")}
            />
          )}
        </View>

        <View>
          <DarkMenuItem
            label={i18n.t("DR_Logout")}
            important={true}
            onPress={() => logoutHandler()}
          />
        </View>
      </View>
    </View>
  );
};

const MenuItem = (props) => {
  return (
    <TouchableOpacity style={styles.menuItem.container} onPress={props.onPress}>
      <RegularText style={styles.menuItem.text}>{props.label}</RegularText>
      <ArrowRight size={20} color={colors.blackOliveOpacited} />
    </TouchableOpacity>
  );
};

const DarkMenuItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.darkMenuItem.container}
      onPress={props.onPress}
    >
      <RegularText style={styles.darkMenuItem.text}>{props.label}</RegularText>
      {props.important == true && (
        <View style={styles.darkMenuItem.importantArrowContainer}>
          <ArrowRight size={20} color={colors.internationalOrange} />
        </View>
      )}
      {props.important != true && (
        <View style={styles.darkMenuItem.notImportantArrowContainer}>
          <ArrowRight size={20} color={colors.blackOliveOpacited} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: colors.white,
    height: ScreenHeight + 35,
  },
  userContainer: {
    marginRight: 5,
    borderBottomColor: colors.internationalOrange,
    borderBottomWidth: 1,
  },
  userTypeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
  },
  userTypeTitle: {
    fontSize: 21,
    color: colors.internationalOrange,
  },
  userAvatarContainer: {
    paddingLeft: 25,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    marginVertical: 10,
  },
  userEditContainer: {
    borderWidth: 1,
    borderColor: colors.internationalOrange,
    borderRadius: 50,
    position: "absolute",
    padding: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
  },
  userDataContainer: {
    display: "flex",
    justifyContent: "center",
  },
  userNameText: {
    fontSize: 11,
  },
  userEmailText: {
    fontSize: 9,
  },
  menuContainer: {
    height: ScreenHeight - 175,
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomColor: colors.blackOliveOpacited,
      borderBottomWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 5,
      height: 45,
    },
    text: {
      fontSize: 12,
      color: colors.blackOlive,
    },
  },
  darkMenuItem: {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 5,
      height: 45,
      backgroundColor: colors.brightGray,
      marginTop: 10,
    },
    text: {
      fontSize: 12,
      color: colors.blackOlive,
    },
    importantArrowContainer: {
      borderColor: colors.blackOlive,
      padding: 5,
      borderWidth: 1,
      borderRadius: 50,
    },
    notImportantArrowContainer: {
      borderColor: colors.brightGray,
      padding: 5,
      borderWidth: 1,
      borderRadius: 50,
    },
  },
  avatarImage: {
    height: 75,
    aspectRatio: 1,
  },
});

export default TraderDrawer;
