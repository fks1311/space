import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset, { Reset } from "styled-reset";
import { router } from "utils/router";
import { theme } from "utils/style";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Global = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
`;

root.render(
  <ThemeProvider theme={theme}>
    {/* <Reset /> */}
    <Global />
    <RouterProvider router={router} />
  </ThemeProvider>
);
