import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import theme from '../../styles/theme';
import styles from './UIModal.styles';

@customElement('ui-modal')
export class UIModal extends LitElement {
  static styles = [theme, styles];

  @property({type: Boolean, reflect: true})
  active = false;

  @property({type: String})
  size = 'small';

  @property({type: String})
  title = 'Modal';

  _toggleActive(e: MouseEvent) {
    e.preventDefault();
    this.active = !this.active;
  }

  _handleClickInside(e: MouseEvent) {
    e.stopPropagation();
  }

  render() {
    return html`
      <div
        class="ui-modal"
        ?active=${this.active}
        size=${this.size}
        @click="${this._toggleActive}"
      >
        <div class="ui-modal-window" @click="${this._handleClickInside}">
          <div class="ui-modal-nav">
            <p class="ui-modal-title">${this.title}</p>
            <ui-button
              color="white"
              class="ui-modal-close"
              @click="${this._toggleActive}"
              >&times;</ui-button
            >
          </div>
          <div class="ui-modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
