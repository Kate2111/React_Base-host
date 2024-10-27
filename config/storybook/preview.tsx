import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator";
import '../../src/app/styles/index.scss'

const preview: Preview = {
    decorators: [
        Story => {
            return (
                <div>
                    <Story />
                </div>
            );
        },
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
