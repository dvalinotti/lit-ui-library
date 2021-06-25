import { Story, Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { ExampleElementProps } from './ExampleElement';
import './ExampleElement';

export default {
  title: 'Example/ExampleElement',
  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'ExampleElement'
    }
  },
} as Meta;

export const Primary = (props: ExampleElementProps): TemplateResult<1> => html`<example-element name=${props.name}></example-element>`