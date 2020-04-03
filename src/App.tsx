import { css } from "emotion";
import React from "react";

import content from "./assets/content.json";
import { useDarkMode } from "./useDarkMode";

const ThemeLight = css`
  background: #fff;
  h2,
  p,
  a {
    color: #1b262c;
  }
`;

const ThemeDark = css`
  background: #1b262c;
  h2,
  p,
  a {
    color: #fff;
  }
`;

export const App = () => {
  const isDarkMode = useDarkMode();

  return (
    <div
      className={css`
        ${isDarkMode ? ThemeDark : ThemeLight};
        min-height: 100vh;
        padding: 2em;
        width: 100%;
      `}
    >
      <h2
        className={css`
          font-size: 3em;
          font-weight: 700;
          letter-spacing: 0.03rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          max-width: 690px;
        `}
      >
        {content.headline}
      </h2>
      <p
        className={css`
          font-size: 1.5em;
          margin-bottom: 1.5rem;
          max-width: 680px;
        `}
        dangerouslySetInnerHTML={{ __html: content.paragraph }}
      />
      <a
        className={css`
          font-size: 1.5em;
        `}
        href={`mailto:${content.email}?subject=Hello.`}
      >
        {content.email}
      </a>
    </div>
  );
};
