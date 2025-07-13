import { ContentData } from "../types";
import { css } from "@emotion/css";

interface PortfolioProps {
  content: ContentData;
  version: string;
  buildTime: string;
}

export const Portfolio = ({ content, version, buildTime }: PortfolioProps) => (
  <div
    className={css`
      min-height: 100vh;
      padding: 2em 2em 1em;
      width: 100%;
      display: flex;
      flex-direction: column;
      max-width: 1200px;
      margin: 0 auto;
    `}
  >
    <h2
      className={css`
        font-size: clamp(2rem, 5vw, 2.5rem);
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
        font-size: clamp(1.1rem, 3vw, 1.4rem);
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
        font-size: clamp(1.2rem, 3vw, 1.5rem);
        font-weight: 900;
        letter-spacing: 1.025px;
        display: inline-block;
        margin-bottom: 2rem;
      `}
      href={`mailto:${content.email}?subject=Hello.`}
      aria-label={`Send email to ${content.email}`}
    >
      {content.email}
    </a>

    <footer
      className={css`
        font-size: 0.75em;
        margin-top: auto;
        text-align: center;
        padding-top: 2em;
        opacity: 0.7;
      `}
    >
      {buildTime} |{" "}
      <span
        className={css`
          font-weight: bold;
        `}
      >
        v{version}
      </span>
    </footer>
  </div>
);
