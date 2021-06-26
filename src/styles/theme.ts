import {css} from 'lit';

/**
 * Global Styles - can be imported in Lit components and referenced in your style definition.
 */
export default css`
  :host {
    --theme-primary: #1082a8;
    --theme-primary-hv: #0c6583;
    --theme-secondary: #eb1e7a;
    --theme-secondary-hv: #ce1267;
    --theme-success: #05c793;
    --theme-success-hv: #05b384;
    --theme-warn: #ffc847;
    --theme-warn-hv: #ffbc1f;
    --theme-error: #f15555;
    --theme-error-hv: #f04242;
    --theme-text: #0f0f0f;
    --theme-text-white: #ffffff;
    --theme-bg: #fafafa;
    --theme-lightgray: #d0d0d0;

    --theme-rounded-sm: 0.25rem;
    --theme-rounded-md: 0.5rem;
    --theme-rounded-lg: 1rem;

    --shadow-sm: 0px 1px 4px 0px rgba(0, 0, 0, 0.175);
    --shadow-md: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
    --shadow-lg: 0px 2px 8px 4px rgba(0, 0, 0, 0.175);
  }
`;
