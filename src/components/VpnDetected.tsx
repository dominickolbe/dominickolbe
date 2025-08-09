import { css } from "@emotion/css";

export const VpnDetected = () => {
  return (
    <div
      className={css`
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        `}
      >
        <h1
          className={css`
            font-size: clamp(2rem, 6vw, 3rem);
            font-weight: 800;
            letter-spacing: 1.05px;
            text-transform: uppercase;
          `}
        >
          vpn detected
        </h1>
        <button
          type="button"
          onClick={() => {}}
          className={css`
            font-family: "Fira Code", "Monaco", "Consolas", monospace;
            font-size: clamp(1rem, 3vw, 1.125rem);
            font-weight: 700;
            letter-spacing: 0.5px;
            padding: 0.85rem 1.25rem;
            color: #0b0a1e;
            background: #64ffda;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition:
              transform 0.15s ease,
              opacity 0.2s ease;

            &:hover {
              transform: translateY(-1px);
              opacity: 0.95;
            }

            &:active {
              transform: translateY(0);
              opacity: 0.9;
            }
          `}
          aria-label="Show more info"
        >
          show more info
        </button>
      </div>
    </div>
  );
};
