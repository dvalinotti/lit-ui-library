import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import theme from '../../styles/theme';
import styles from './UIButton.styles';

export type UIButtonProps = {
  text: string;
}

@customElement('ui-button')
export default class UIButton extends LitElement {
  static styles = [theme, styles];

  @property({ type: String }) text = 'UIButton';
  @property({ type: String }) color = 'primary';

  render() {
    return html`
      <button>
        ${this.text}
      </button>
    `;
  }
}
