import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        email,
        setEmail,
        category,
        setCategory,
        token,
        setToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
