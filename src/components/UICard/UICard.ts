import {html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {UIComponent} from '../../lib/UIComponent';
import styles from './UICard.styles';

@customElement('ui-card')
export default class UICard extends UIComponent {
  static get styles() {
    return [super.styles, styles];
  }

  @property({type: String, reflect: true})
  size = 'medium';

  @property({type: Boolean, reflect: true})
  hoverable = true;

  @state()
  hasImage = false;

  firstUpdated() {
    const imgSlot = this.shadowRoot?.querySelector('img');
    if (imgSlot !== null) this.hasImage = true;
  }

  render() {
    return html`
      <article class="card">
        <div class="card-img ${this.hasImage ? 'has-img' : ''}">
          <slot name="img"></slot>
        </div>
        <header class="card-title"><slot name="title"></slot></header>
        <section class="card-body">
          <slot></slot>
        </section>
        <footer class="card-footer">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
  }
}
