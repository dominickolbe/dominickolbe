import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

// Vercel Web Analytics
try {
  import("@vercel/analytics").then((vercel) => vercel.inject());
} catch (error) {
  console.error(error);
}
