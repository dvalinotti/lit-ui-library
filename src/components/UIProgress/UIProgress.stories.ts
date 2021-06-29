import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import './UIProgress';

type UIProgressArgs = {
  label: string;
  value: number;
  color: string;
};

export default {
  title: 'Progress Bar',
  argTypes: {
    label: {
      type: 'text',
      defaultValue: 'UIProgress',
    },
    value: {
      type: 'number',
      defaultValue: 25,
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warn', 'error'],
      defaultValue: 'primary',
    },
  },
} as Meta;

const Template: Story<UIProgressArgs> = (props: UIProgressArgs) => html`
  <ui-progress
    label=${props.label}
    value=${props.value}
    color=${props.color}
  ></ui-progress>
`;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Green = Template.bind({});
Green.args = {
  color: 'success',
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: 'warn',
};

export const Red = Template.bind({});
Red.args = {
  color: 'error',
};

export const Empty = Template.bind({});
Empty.args = {
  value: 0,
};

export const Full = Template.bind({});
Full.args = {
  value: 100,
};
