import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import theme from '../../styles/theme';
import styles from './UIButton.styles';

function isValidColor(value: string | null) {
  return (
    value !== null &&
    ['primary', 'secondary', 'success', 'warn', 'error'].includes(value)
  );
}

function isValidSize(value: string | null) {
  return value !== null && ['small', 'medium', 'large'].includes(value);
}

@customElement('ui-button')
export default class UIButton extends LitElement {
  static styles = [theme, styles];

  @property({
    type: String,
    converter: (value, type) => {
      return isValidColor(value) ? value : 'primary';
    },
  })
  color = 'primary';

  @property({
    type: String,
    converter: (value, type) => {
      return isValidSize(value) ? value : 'medium';
    },
  })
  size = 'medium';

  @property({type: Boolean, reflect: true})
  disabled = false;

  render() {
    return html`
      <button ?disabled=${this.disabled} size=${this.size}>
        <slot></slot>
      </button>
    `;
  }
}
