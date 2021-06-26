import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import './UIModal';

type UIModalArgs = {
  active: boolean;
  rounded: boolean;
  size: string;
  title: string;
};

export default {
  title: 'Modal',
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: true,
    },
    rounded: {
      control: 'boolean',
      defaultValue: true,
    },
    title: {
      control: 'text',
      defaultValue: 'UIModal',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
    },
  },
} as Meta;

const Template: Story<UIModalArgs> = (props: UIModalArgs) => html`
  <ui-modal
    .active=${props.active}
    .rounded=${props.rounded}
    size=${props.size}
    title=${props.title}
  >
    <h1>Storybook</h1>
  </ui-modal>
`;

export const Visible = Template.bind({});
Visible.args = {
  active: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  active: false,
};

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

export const Rounded = Template.bind({});
Rounded.args = {
  active: true,
  rounded: true,
};

export const Squared = Template.bind({});
Squared.args = {
  active: true,
  rounded: false,
};
