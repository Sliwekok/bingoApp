import "dotenv/config";
import path from "path";


  const env = process.env.ENV || "local";
  const envPath = path.resolve(__dirname, `env/.env.${env}`);
  const dotenvResult = require("dotenv").config({ path: envPath });
  if (dotenvResult.error) {
    throw dotenvResult.error;
  }


export default ({ config }) => {
  return {
    ...config,
    android: {
      ...config.android,
      localization: {
        defaultLocale: "pl",
      },
    },
    extra: {
      ...config.extra,
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
      apiKey: process.env.EXPO_API_KEY,
    },
  };
};
