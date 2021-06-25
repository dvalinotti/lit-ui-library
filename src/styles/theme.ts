import {css} from 'lit';

/**
 * Global Styles - can be imported in Lit components and referenced in your style definition.
 */
export default css`
  :host {
    --theme-primary: #1082a8;
    --theme-primary-hv: #0c6583;
    --theme-secondary: #ff6333;
    --theme-secondary-hv: #dc562e;
    --theme-success: #05c793;
    --theme-success-hv: #05b384;
    --theme-warn: #ffd166;
    --theme-warn-hv: #ffc847;
    --theme-error: #f15555;
    --theme-error-hv: #f04242;
    --theme-text: #0f0f0f;
    --theme-text-white: #ffffff;
    --theme-bg: #fafafa;

    --shadow-sm: 0px 1px 4px 0px rgba(0, 0, 0, 0.175);
    --shadow-md: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
    --shadow-lg: 0px 2px 8px 4px rgba(0, 0, 0, 0.175);
  }
`;
