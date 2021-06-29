import {fixture, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

async function renderElement() {
  return fixture(html`
    <ui-card>
      <img slot="img" src="https://via.placeholder.com/320x180" alt="text" />
      <h2 slot="title">Card title</h2>
      <p>Card content.</p>
      <div slot="footer">
        <ui-button>Info</ui-button>
      </div>
    </ui-card>
  `);
}

describe('UIButton tests', () => {
  it('Renders correctly', async () => {
    const el = await renderElement();

    expect(el.tagName.toLowerCase()).to.equal('ui-card');
  });

  it('Passes a11y audit', async () => {
    const el = await renderElement();

    expect(el).shadowDom.to.be.accessible();
  });
});
