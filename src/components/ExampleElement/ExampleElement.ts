import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import theme from '../../styles/theme';
import styles from './ExampleElement.styles';

export type ExampleElementProps = {
  name: string;
}

@customElement('example-element')
export default class ExampleElement extends LitElement {
  static styles = [theme, styles];

  @property() name = 'Lit Ui Library';

  render() {
    return html`<h1>Hello, ${this.name}</h1>`;
  }
}
