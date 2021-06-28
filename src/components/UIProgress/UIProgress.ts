import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import theme from '../../styles/theme';
import styles from './UIProgress.styles';

@customElement('ui-progress')
export default class UIProgress extends LitElement {
  static styles = [theme, styles];

  @property({type: String})
  label = '';

  @property({type: Number})
  value = 0;

  render() {
    return html`
      <div class="progress">
        <p class="progress-label">${this.label}</p>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${this.value}%"></div>
        </div>
      </div>
    `;
  }
}
