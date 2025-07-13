import { AppConfig } from "../types";
import { useMemo } from "react";

export const useAppConfig = (): AppConfig => {
  return useMemo(
    () => ({
      version: process.env.REACT_APP_VERSION || "undefined",
      buildTime: process.env.REACT_APP_BUILD_TIME || "undefined",
      isProduction: process.env.NODE_ENV === "production",
      environment: process.env.NODE_ENV || "development",
    }),
    [],
  );
};
