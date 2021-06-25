import { css, unsafeCSS } from 'lit';

export function getButtonStyles(color: string = 'primary') {
  const colorName = ['primary', 'seconary'].includes(color) ? color : 'primary';
  const colorVar = css`var(--theme-${unsafeCSS(colorName)})`;

  return css`
    :host {
      display: block;
    }
    :host button {
      color: white;
      background-color: ${colorVar};
      border: none;
      border-radius: 0.5rem;
      padding: 0.25rem 0.75rem;
      transition: all 0.25s;
    }
    :host button:hover {
      cursor: pointer;
      box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.125);
    }
  `;
}

export default css`
  :host {
    display: block;
  }
  :host button {
    color: white;
    border: none;
    background-color: var(--theme-primary); /* default */
    border-radius: 0.5rem;
    padding: 0.25rem 0.75rem;
    transition: all 0.25s;
  }
  :host([color="primary"]) button {
    background-color: var(--theme-primary);
  }
  :host([color="secondary"]) button {
    background-color: var(--theme-secondary);
  }
  :host button:hover {
    cursor: pointer;
    box-shadow: var(--shadow-sm);
  }
`;