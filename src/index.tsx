import "./styles/global.css";

import { App } from "./App";
import { createRoot } from "react-dom/client";
import { initializeAnalytics } from "./utils/analytics";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);
root.render(<App />);

// Initialize analytics
initializeAnalytics();
