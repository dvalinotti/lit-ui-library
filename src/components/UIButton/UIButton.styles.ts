import {css} from 'lit';

export default css`
  :host {
    display: block;
  }
  :host button {
    color: white;
    border: none;
    background-color: var(--theme-primary); /* default */
    border-radius: 0.5rem;
    transition: all 0.25s;
  }
  :host([color='primary']) button {
    background-color: var(--theme-primary);
  }
  :host([color='secondary']) button {
    background-color: var(--theme-secondary);
  }
  :host([color='success']) button {
    background-color: var(--theme-success);
  }
  :host([color='warn']) button {
    background-color: var(--theme-warn);
  }
  :host([color='error']) button {
    background-color: var(--theme-error);
  }
  :host button[size='small'] {
    padding: 0.125rem 0.5rem;
    font-size: 0.875rem;
  }
  :host button[size='medium'] {
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
  }
  :host button[size='large'] {
    padding: 0.5rem 1.25rem;
    font-size: 1.125rem;
  }
  :host button:hover {
    cursor: pointer;
    box-shadow: var(--shadow-sm);
    background-color: var(--theme-primary-hv);
  }
  :host([color='primary']) button:hover {
    background-color: var(--theme-primary-hv);
  }
  :host([color='secondary']) button:hover {
    background-color: var(--theme-secondary-hv);
  }
  :host([color='success']) button:hover {
    background-color: var(--theme-success-hv);
  }
  :host([color='warn']) button:hover {
    background-color: var(--theme-warn-hv);
  }
  :host([color='error']) button:hover {
    background-color: var(--theme-error-hv);
  }
`;
