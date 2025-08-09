import { Suspense, lazy } from "react";

import { LoadingSpinner } from "./components/LoadingSpinner";

// Lazy load components for better performance
const VpnDetected = lazy(() =>
  import("./components/VpnDetected").then((module) => ({
    default: module.VpnDetected,
  }))
);

export const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VpnDetected />
    </Suspense>
  );
};
