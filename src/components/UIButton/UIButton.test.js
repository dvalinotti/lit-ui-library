import {fixture, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

describe('UIButton tests', () => {
  it('Renders correctly', async () => {
    const el = await fixture(html`<ui-button>Test Button</ui-button>`);

    expect(el.tagName.toLowerCase()).to.equal('ui-button');
    expect(el.innerHTML).to.equal('Test Button');
  });

  it('Passes a11y audit', async () => {
    const el = await fixture(html`<ui-button>a11y</ui-button>`);

    expect(el).shadowDom.to.be.accessible();
  });
});
