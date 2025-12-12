import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
        // 👇 Add your own
        challengeBackground: { name: "Challenge Background", value: "#141414" },
      },
    },
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: "challengeBackground" },
    },
  },
};

export default preview;
