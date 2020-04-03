import { useEffect, useState } from "react";

export function useDarkMode() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(media.matches);

  function setModeCallback() {
    setMode(media.matches);
  }
  try {
    media.addEventListener("change", setModeCallback);
  } catch {
    // safari - no fallback needed
  }

  useEffect(() => {
    return () => {
      try {
        media.removeEventListener("change", setModeCallback);
      } catch {
        // safari - no fallback needed
      }
    };
  });

  return mode;
}
