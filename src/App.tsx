import { css } from "@emotion/css";
import content from "./assets/content.json";
import { APP_BUILD_TIME, APP_VERSION } from "./constants";

export const App = () => (
  <div
    className={css`
      min-height: 100vh;
      padding: 2em 2em 1em;
      width: 100%;
      display: flex;
      flex-direction: column;
    `}
  >
    <h2
      className={css`
        font-size: 2.5em;
        font-weight: 700;
        line-height: 1.05;
        margin-bottom: 1.5rem;
        max-width: 700px;
        letter-spacing: 1.05px;
      `}
    >
      {content.headline}
    </h2>
    <p
      className={css`
        font-size: 1.4em;
        font-weight: 500;
        line-height: 1.3;
        margin-bottom: 1.5rem;
        max-width: 777px;
        letter-spacing: 1.05px;
      `}
      dangerouslySetInnerHTML={{ __html: content.paragraph }}
    />
    <a
      className={css`
        font-size: 1.5em;
        font-weight: 900;
        letter-spacing: 1.025px;
      `}
      href={`mailto:${content.email}?subject=Hello.`}
    >
      {content.email}
    </a>

    <div
      className={css`
        font-size: 0.75em;
        margin-top: auto;
        text-align: center;
        padding-top: 2em;
      `}
    >
      {APP_BUILD_TIME} |{" "}
      <div
        className={css`
          display: inline-block;
          font-weight: bold;
        `}
      >
        v{APP_VERSION}
      </div>
    </div>
  </div>
);
