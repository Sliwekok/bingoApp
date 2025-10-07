import { Log } from "phosphor-react-native";
import React, { createContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = (props) => {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
    const defaultError = { code: "", message: "" };
    const [error, setError] = useState(defaultError);

    const clearError = () => {
        setErrorModalVisible(false);
        setError(defaultError);
    };

  const showError = (error) => {
    setErrorModalVisible(true);
    setError(error);
  };

  return (
    <ErrorContext.Provider
      value={{
        errorModalVisible,
        setErrorModalVisible,
        error,
        setError,
        clearError,
        showError,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
