import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import './UIProgress';

type UIProgressArgs = {
  label: string;
  value: number;
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
  },
} as Meta;

const Template: Story<UIProgressArgs> = (props: UIProgressArgs) => html`
  <ui-progress label=${props.label} value=${props.value}></ui-progress>
`;

export const Basic = Template.bind({});
Basic.args = {};
