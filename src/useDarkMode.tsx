import { useEffect, useState } from "react";

export function useDarkMode() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(media.matches);

  function setModeCallback() {
    setMode(media.matches);
  }
  media.addEventListener("change", setModeCallback);

  useEffect(() => {
    return () => {
      media.removeEventListener("change", setModeCallback);
    };
  });

  return mode;
}
