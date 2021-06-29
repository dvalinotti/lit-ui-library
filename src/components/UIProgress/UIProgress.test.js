import {fixture, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

const getTestElement = async () => {
  return fixture(
    html`<ui-progress label="UIProgress" value="0"></ui-progress>`
  );
};

describe('UIProgress tests', () => {
  it('renders correctly', async () => {
    const el = await getTestElement();

    expect(el.tagName.toLowerCase()).to.equal('ui-progress');
  });

  // it('update progress value', async () => {
  //   const el = await getTestElement();

  //   el.setAttribute('value', '25');

  //   console.log(el);

  //   let barFill = el.shadowRoot;
  //   console.log(el.shadowRoot);
  //   expect(barFill.clientWidth).to.be.greaterThan(0);
  // });
});
