import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import '../src/index.scss';

export const decorators = [withRouter];

const preview: Preview = {
  parameters: {
    // backgrounds: {
    //   default: 'grey',
    //   values: [
    //     {
    //       name: 'grey',
    //       value: '#DCDCDC',
    //     },
    //     {
    //       name: 'white',
    //       value: '#fff',
    //     },
    //     {
    //       name: 'black',
    //       value: '#000',
    //     },
    //   ],
    // },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactRouter: {
      routePath: '/',
    },
  },
};

export default preview;
