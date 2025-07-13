import { Suspense, lazy } from "react";

import { ContentData } from "./types";
import content from "./assets/content.json";
import { useAppConfig } from "./hooks/useAppConfig";

// Lazy load the Portfolio component for better performance
const Portfolio = lazy(() =>
  import("./components/Portfolio").then((module) => ({
    default: module.Portfolio,
  })),
);

export const App = () => {
  const config = useAppConfig();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Portfolio
        content={content as ContentData}
        version={config.version}
        buildTime={config.buildTime}
      />
    </Suspense>
  );
};
