import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen/RegisterScreen";

const Drawer = createDrawerNavigator();

const NoAuthDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
            }}
        >
            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Login" }}
            />
            <Drawer.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: "Register" }}
            />
        </Drawer.Navigator>
    );
};

export default NoAuthDrawer;
