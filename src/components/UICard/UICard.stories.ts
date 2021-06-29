import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit-html';
import {loremIpsum} from '../utils/storybook';
import './UICard';

type UICardArgs = {
  size: string;
  hoverable: boolean;
  imageSrc: string;
  imageAlt: string;
};

export default {
  title: 'Card',
  argTypes: {
    size: {
      type: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    hoverable: {
      type: 'boolean',
      default: true,
    },
    imageSrc: {
      type: 'text',
      defaultValue: '',
    },
    imageAlt: {
      type: 'text',
      defaultValue: '',
    },
  },
} as Meta;

const Template: Story<UICardArgs> = (props: UICardArgs) => html`
  <ui-card size=${props.size} ?hoverable=${props.hoverable}>
    ${props.imageSrc !== ''
      ? html`<img slot="img" src=${props.imageSrc} alt=${props.imageAlt} />`
      : html``}
    <h2 slot="title">UICard</h2>
    <p>${loremIpsum(2)}</p>
    <div slot="footer" style="display: flex; gap: 0.5rem;">
      <ui-button>More info</ui-button>
      <ui-button color="error">Close</ui-button>
    </div>
  </ui-card>
`;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  hoverable: true,
};

export const NotHoverable = Template.bind({});
NotHoverable.args = {
  hoverable: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  imageSrc: 'https://via.placeholder.com/320x180',
  imageAlt: 'Image alt text',
};

export const SmallWithImage = Template.bind({});
SmallWithImage.args = {
  size: 'small',
  imageSrc: 'https://via.placeholder.com/320x180',
  imageAlt: 'Image alt text',
};

export const LargeWithImage = Template.bind({});
LargeWithImage.args = {
  size: 'large',
  imageSrc: 'https://via.placeholder.com/320x180',
  imageAlt: 'Image alt text',
};
