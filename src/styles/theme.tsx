// src/styles/Theme.ts
import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

// const colors = {
//   primary: "#0066CC",
//   secondary: "#2E7D32",
//   background: "#FFFFFF",
//   text: "#333333",
//   success: "#43A047",
//   error: "#E53935",
// };

export default theme;
