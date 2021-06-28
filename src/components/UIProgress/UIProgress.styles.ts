import {css} from 'lit';

export default css`
  :host {
    display: block;
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
  }
  .progress-bar-fill {
    height: 100%;
    background-color: var(--theme-primary);
    transition: width 2.5s;
  }
`;
