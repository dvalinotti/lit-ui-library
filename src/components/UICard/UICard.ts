import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import theme from '../../styles/theme';
import styles from './UICard.styles';

@customElement('ui-card')
export default class UICard extends LitElement {
  static styles = [theme, styles];

  @property({type: String, reflect: true})
  size = 'medium';

  @property({type: Boolean, reflect: true})
  hoverable = true;

  render() {
    return html`
      <article class="card">
        <div class="card-img">
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
