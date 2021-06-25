import {css} from 'lit';

/**
 * Global Styles - can be imported in Lit components and referenced in your style definition.
 */
export default css`
  :host {
    --theme-primary: #4287f5;
    --theme-secondary: #f7a240;
    --theme-text: #0f0f0f;
    --theme-bg: #fafafa;

    --shadow-sm: 0px 1px 4px 0px rgba(0, 0, 0, 0.175);
    --shadow-md: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
    --shadow-lg: 0px 2px 8px 4px rgba(0, 0, 0, 0.175);
  }
`;
