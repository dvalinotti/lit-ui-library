import { Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { UIButtonProps } from './UIButton';
import './UIButton';

export default {
  title: 'Button',
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'StoryBook'
    }
  }
} as Meta;

export const Primary = (props: UIButtonProps): TemplateResult<1> => html`
  <ui-button text=${props.text}></ui-button>
`;

export const Secondary = (props: UIButtonProps): TemplateResult<1> => html`
  <ui-button color="secondary" text=${props.text}></ui-button>
`;