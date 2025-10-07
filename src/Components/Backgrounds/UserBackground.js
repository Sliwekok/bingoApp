import { View } from "react-native";
import React from "react";
import colors from "../../Assets/Color";
import AuthHeader from "../Headers/AuthHeader";

const UserBackground = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <AuthHeader />
            {props.children}
        </View>
    );
};

export default UserBackground;
