import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import '../../src/app/styles/index.scss';

const preview: Preview = {
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],

    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
