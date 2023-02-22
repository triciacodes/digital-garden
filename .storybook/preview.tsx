import React from "react";
import "../src/styles/global/global.css";
import "../src/styles/global/theme.css";

import { COLORS } from "../src/styles";

export const parameters = {
  backgrounds: {
    default: "White",
    values: [
      {
        name: "White",
        value: COLORS.white,
      },
      {
        name: "Light Gray",
        value: COLORS.lightGray,
      },
      {
        name: "Gray",
        value: COLORS.gray,
      },
    ],
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Components",
        ["SVGWrapper", "SVGWrapperOverlapping", "FloralGroup", "Ground"],
        "Composites",
        "Pages",
      ],
    },
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    toolbar: {
      icon: "photo",
      items: [
        {
          value: "none",
          title: "None",
          left: "🚫",
        },
        {
          value: "day",
          title: "Day",
          left: "🌞",
        },
        {
          value: "night",
          title: "Night",
          left: "🌒",
        },
      ],
    },
  },
};

const backgroundColorsByTheme = {
  none: "transparent",
  day: "#e8f4f1",
  night: "#333",
};

const withBackground = (Story, context) => {
  const theme = context.globals.theme;

  const backgroundColor = backgroundColorsByTheme[theme];
  document.documentElement.style.background = backgroundColor;

  return <div className={`theme-${theme}`}>{Story()}</div>;
};

export const decorators = [withBackground];
