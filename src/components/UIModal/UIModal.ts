import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {UIComponent} from '../../lib/UIComponent';
import styles from './UIModal.styles';

@customElement('ui-modal')
export default class UIModal extends UIComponent {
  static get styles() {
    return [super.styles, styles];
  }

  @property({type: Boolean, reflect: true})
  active: boolean = false;

  @property({type: Boolean, reflect: true})
  rounded: boolean = true;

  @property({type: String})
  size = 'small';

  @property({type: String})
  title = '';

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ) {
    super.attributeChangedCallback(name, _old, value);
    if (name === 'active') {
      this._dispatchActiveEvent(value);
    }
  }

  _toggleActive(e: MouseEvent) {
    e.preventDefault();
    this.active = !this.active;
  }

  _dispatchActiveEvent(isActive: string | null) {
    const eventType =
      isActive === '' || isActive === 'true' ? 'opened' : 'closed';
    const activeEvent = new CustomEvent(eventType, {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(activeEvent);
  }

  _handleClickInside(e: MouseEvent) {
    e.stopPropagation();
  }

  render() {
    return html`
      <div class="ui-modal" size=${this.size} @click="${this._toggleActive}">
        <div class="ui-modal-window" @click="${this._handleClickInside}">
          <div class="ui-modal-nav">
            <p class="ui-modal-title">${this.title}</p>
            <ui-button
              color="white"
              class="ui-modal-close"
              @click="${this._toggleActive}"
            >
              <span>&times;</span>
            </ui-button>
          </div>
          <div class="ui-modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
