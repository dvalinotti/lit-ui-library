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
  :host([active='true']) .ui-modal,
  :host([active='']) .ui-modal {
    opacity: 1;
    visibility: visible;
  }
  :host([rounded]) .ui-modal .ui-modal-window {
    border-radius: var(--theme-rounded-md);
  }
  .ui-modal-window {
    width: calc(100% - 45px);
    height: calc(100% - 45px);
    background: var(--theme-bg);
    padding: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :host([size='small']) .ui-modal .ui-modal-window {
    max-width: 320px;
    max-height: 160px;
  }
  :host([size='medium']) .ui-modal .ui-modal-window {
    max-width: 425px;
    max-height: 240px;
  }
  :host([size='large']) .ui-modal .ui-modal-window {
    max-width: 500px;
    max-height: 500px;
  }
  :host([size='full']) .ui-modal .ui-modal-window {
    max-width: unset;
    max-height: unset;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    border-radius: 0;
  }
  .ui-modal-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ui-modal-close span {
    line-height: 1.125;
    font-weight: bold;
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
