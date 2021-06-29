import {css} from 'lit';

export default css`
  :host {
    display: block;
  }
  :host([size='small']) .card {
    padding: 0.75rem;
    max-width: 325px;
  }
  :host([size='medium']) .card {
    padding: 1rem;
    max-width: 475px;
  }
  :host([size='large']) .card {
    padding: 1.25rem;
    max-width: 100%;
  }
  :host([hoverable='true']) .card:hover,
  :host([hoverable='']) .card:hover {
    cursor: pointer;
    box-shadow: var(--shadow-sm);
  }
  .card {
    padding: 1rem;
    border: 1px solid var(--theme-lightgray);
    border-radius: var(--theme-rounded-md);
    transition: all 250ms;
  }
  .card-img {
    width: 100%;
    overflow: hidden;
  }
  ::slotted(img) {
    aspect-ratio: 16 / 6;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;
