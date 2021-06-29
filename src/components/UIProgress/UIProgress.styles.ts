import {css} from 'lit';

export default css`
  :host {
    display: block;
  }
  :host([color='primary']) .progress-bar-fill {
    background-color: var(--theme-primary);
  }
  :host([color='secondary']) .progress-bar-fill {
    background-color: var(--theme-secondary);
  }
  :host([color='success']) .progress-bar-fill {
    background-color: var(--theme-success);
  }
  :host([color='warn']) .progress-bar-fill {
    background-color: var(--theme-warn);
  }
  :host([color='error']) .progress-bar-fill {
    background-color: var(--theme-error);
  }
  .progress {
    width: min-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .progress-label {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .progress-bar {
    width: 100%;
    min-width: 240px;
    height: 18px;
    border: 1px solid var(--theme-lightgray);
    border-radius: var(--theme-rounded-sm);
    overflow: hidden;
  }
  .progress-bar-fill {
    height: 100%;
    transition: width 500ms, color 250ms;
  }
`;
