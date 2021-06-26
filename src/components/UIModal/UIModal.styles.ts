import {css} from 'lit';

export default css`
  :host {
    display: block;
  }
  .ui-modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s;
  }
  .ui-modal[active] {
    opacity: 1;
    visibility: visible;
  }
  .ui-modal[size='small'] .ui-modal-window {
    max-width: 320px;
    max-height: 160px;
  }
  .ui-modal[size='medium'] .ui-modal-window {
    max-width: 425px;
    max-height: 240px;
  }
  .ui-modal-window {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    background: var(--theme-bg);
    padding: 1rem;
    border-radius: var(--theme-rounded-md);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .ui-modal-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ui-modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
  .ui-modal-content {
    width: 100%;
    height: 100%;
  }
`;
