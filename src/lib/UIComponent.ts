import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import theme from '../styles/theme';

@customElement('ui-component')
export class UIComponent extends LitElement {
  static styles = theme;
}
