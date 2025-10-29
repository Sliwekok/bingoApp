import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";
import {AuthContext} from "../Contexts/AuthContext";

const UseFetch = () => {
  const { apiUrl, apiKey } = useContext(ApiContext);
  const { token, logout } = useContext(AuthContext);
  const defaultError = {
    code: "1",
    message: "Wystąpił niespodziewany błąd",
  };
  const { showError } = useContext(ErrorContext);

  const objToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join("&");
  };

  const queryString = (data) =>
    objToQueryString({ ...data, key: apiKey, token: token });

  const fetchData = async (
    callback,
    endPoint,
    getData,
    postData = null,
    headers = null,
    onError = null
  ) => {
    let body = JSON.stringify(postData);
    let url = `${apiUrl}${endPoint}?${queryString(getData)}`;
    console.log("URL: ", url);
    let options;
    if (postData === null) {
      options = {
        method: "GET",
        headers: headers ?? {
          "Content-Type": "application/json",
        },
      };
    } else {
      options = {
        method: "POST",
        headers: headers ?? {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: body,
      };
    }
    try {
      let response = await fetch(url, options);
      let responseJson = await response.json();
      console.log(responseJson, postData);
      if (responseJson.status !== 'success') {
        if (onError) {
          await onError();
        }
        if (typeof responseJson.message === 'string') {
          showError({code: "1", message: responseJson.message});
        } else {
          let firstKey = Object.keys(responseJson.message)[0];
          showError({code: "1", message: responseJson.message[firstKey]});
        }
      } else {
        callback(responseJson);
      }
    } catch (e) {
      console.log(e);
      if (onError) {
        await onError();
      }
      showError(defaultError);
    }
    return null;
  };

  return { fetchData };
};

export default UseFetch;
