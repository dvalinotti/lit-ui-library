import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import './UIModal';

type UIModalArgs = {
  active: boolean;
  size: string;
};

export default {
  title: 'Modal',
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: true,
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
    },
  },
} as Meta;

const Template: Story<UIModalArgs> = (props: UIModalArgs) => html`
  <ui-modal .active=${props.active} size=${props.size}>
    <h1>Storybook</h1>
  </ui-modal>
`;

export const Small = Template.bind({});
Small.args = {
  active: true,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  active: true,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  active: true,
  size: 'large',
};
