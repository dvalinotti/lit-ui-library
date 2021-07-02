import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {isValidColor} from '../utils/colors';
import styles from './UIProgress.styles';
import {UIComponent} from '../../lib/UIComponent';

@customElement('ui-progress')
export default class UIProgress extends UIComponent {
  static get styles() {
    return [super.styles, styles];
  }

  @property({type: String})
  label = '';

  @property({
    type: Number,
    reflect: true,
    converter: (value, type) => {
      if (!value) return 0;

      let num = parseInt(value);
      if (num > 100) return 100;
      if (num < 0) return 0;
      return num;
    },
  })
  value = 0;

  @property({
    type: String,
    reflect: true,
    converter: (value, type) => {
      return isValidColor(value) ? value : 'primary';
    },
  })
  color = 'primary';

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
