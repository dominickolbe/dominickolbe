import { useEffect, useState } from "react";

import { css } from "@emotion/css";

export const LoadingSpinner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
      `}
    >
      <div
        className={css`
          font-size: 1.5rem;
          font-weight: 600;
          color: rgb(99 98 115);
          letter-spacing: 1px;
          font-family: "Fira Code", "Monaco", "Consolas", monospace;
        `}
      >
        dominickolbe.dk
      </div>
    </div>
  );
};
