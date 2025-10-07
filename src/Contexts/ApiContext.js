import React, { createContext, useState } from "react";
import Constants from "expo-constants";

const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [apiUrl, setApiUrl] = useState(() => {
    // if (__DEV__) {
    //     return 'https://buyplay.dev-verbum.pl/api/';
    // } else {
    //     return 'https://buyplay.dev-verbum.pl/api/';
    // }
    return Constants.expoConfig.extra.apiUrl;
  });
  const [siteUrl, setSiteUrl] = useState(() => {
    // if (__DEV__) {
    //     return 'https://buyplay.dev-verbum.pl/';
    // } else {
    //     return 'https://buyplay.dev-verbum.pl/';
    // }
    return Constants.expoConfig.extra.baseUrl;
  });
  const [apiKey, setApiKey] = useState(Constants.expoConfig.extra.apiKey);

  return (
    <ApiContext.Provider
      value={{
        apiUrl,
        apiKey,
        siteUrl,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
