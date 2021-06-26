import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import {loremIpsum} from '../utils/storybook';
import './UIModal';

type UIModalArgs = {
  active: boolean;
  rounded: boolean;
  size: string;
  title: string;
  sentences: number;
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
      options: ['small', 'medium', 'large', 'full'],
      defaultValue: 'small',
    },
    sentences: {
      control: 'number',
      defaultValue: 1,
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
    <p>${loremIpsum(props.sentences)}</p>
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
  sentences: 1,
};

export const Medium = Template.bind({});
Medium.args = {
  active: true,
  size: 'medium',
  sentences: 4,
};

export const Large = Template.bind({});
Large.args = {
  active: true,
  size: 'large',
  sentences: 12,
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  active: true,
  size: 'full',
  sentences: 12,
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
