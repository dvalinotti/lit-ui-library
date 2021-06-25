import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import './UIButton';

type UIButtonArgs = {
  text: string;
  color: string;
  size: string;
  disabled: boolean;
};

export default {
  title: 'Button',
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warn', 'error'],
      defaultValue: 'primary',
    },
    text: {
      control: 'text',
      defaultValue: 'Button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta;

const Template: Story<UIButtonArgs> = (props: UIButtonArgs) => html`
  <ui-button
    color=${props.color}
    size=${props.size}
    ?disabled=${props.disabled}
  >
    ${props.text}
  </ui-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  text: 'Secondary',
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  text: 'Success',
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warn',
  text: 'Warning',
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  text: 'Error',
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  text: 'Small',
  size: 'small',
  disabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  color: 'primary',
  text: 'Medium',
  size: 'medium',
  disabled: false,
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  text: 'Large',
  size: 'large',
  disabled: false,
};
