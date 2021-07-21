import { css } from "@emotion/css";
import React from "react";
import content from "./assets/content.json";

export const App = () => (
  <div
    className={css`
      min-height: 100vh;
      padding: 2em;
      width: 100%;
    `}
  >
    <h2
      className={css`
        font-size: 3em;
        font-weight: bold;
        line-height: 1.05;
        margin-bottom: 1.5rem;
        max-width: 690px;
      `}
    >
      {content.headline}
    </h2>
    <p
      className={css`
        font-size: 1.5em;
        line-height: 1.3;
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
