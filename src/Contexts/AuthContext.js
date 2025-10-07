import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        console.log(`TOKEN: ${token}`);
    }, [token]);

    const logout = async () => {
        await AsyncStorage.setItem("isLoggedIn", "0");
        await AsyncStorage.setItem("token", "");
        await AsyncStorage.setItem("isUpdate", "0");

        setToken("");
        setIsLoggedIn(false);
    };

    const login = async (token) => {
        console.log("inLogin");
        console.log(token);

        await AsyncStorage.setItem("isLoggedIn", "1");
        await AsyncStorage.setItem("token", token);

        setToken(token);
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                isLoggedIn,
                setIsLoggedIn,
                isUpdate,
                setIsUpdate,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
