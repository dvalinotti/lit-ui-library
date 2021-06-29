import {legacyPlugin} from '@web/dev-server-legacy';

export default {
  rootDir: '.',
  files: ['./tests/**/*.spec.{js,ts}'],
  nodeResolve: true,
  preserveSymlinks: true,
  plugins: [
    legacyPlugin({
      ts: true,
      polyfills: {
        webcomponents: true,
        custom: [
          {
            name: 'lit-polyfill-support',
            path: 'node_modules/lit/polyfill-support.js',
            test:
              "!('attachShadow' in Element.prototype) || !('getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force",
            module: false,
          },
        ],
      },
    }),
  ],
};
