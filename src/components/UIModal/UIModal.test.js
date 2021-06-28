import {fixture, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

const getTestElement = async () => {
  return fixture(html`<ui-modal><p>Test Modal</p></ui-modal>`);
};

const createCustomEvent = type => {
  return new CustomEvent(type, {bubbles: true, composed: true});
};

describe('UIModal tests', () => {
  it('Renders correctly', async () => {
    const el = await getTestElement();

    expect(el.tagName.toLowerCase()).to.equal('ui-modal');
    expect(el.innerHTML).to.equal('<p>Test Modal</p>');
  });

  it('Listen and dispatch "closed" event', async () => {
    const el = await getTestElement();
    let result = false;

    el.addEventListener('closed', () => {
      result = true;
    });

    el.dispatchEvent(createCustomEvent('closed'));

    expect(result).to.equal(true);
  });

  it('Listen and dispatch "opened" event', async () => {
    const el = await getTestElement();
    let result = false;

    el.addEventListener('opened', () => {
      result = true;
    });

    el.dispatchEvent(createCustomEvent('opened'));

    expect(result).to.equal(true);
  });

  it('Passes a11y audit', async () => {
    const el = await getTestElement();

    expect(el).shadowDom.to.be.accessible();
  });
});
