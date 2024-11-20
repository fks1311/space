import { css } from "styled-components";
import "utils/font.css";

const devices = {
  mobile: `375px`,
  tablet: `768px`,
  desktop: `1440px`,
};

const breakpoints = {
  mobile: `screen and (max-width: ${devices.mobile})`,
  tablet: `screen and (max-width: ${devices.tablet})`,
  desktop: `screen and (max-width: ${devices.desktop})`,
};

const color = {
  BLUE_900: `#0B0D17`,
  BLUE_300: `#D0D6F9`,
  WHITE: `#FFFFFF`,
};

const baseStyles = {
  text1: css`
    font-family: Bellefair;
    font-size: 144px;
  `,
  text2: css`
    font-family: Bellefair;
    font-size: 100px;
  `,
  text3: css`
    font-family: Bellefair;
    font-size: 56px;
  `,
  text4: css`
    font-family: Bellefair;
    font-size: 32px;
  `,
  text5: css`
    font-family: BarlowCondensed;
    font-size: 28px;
    letter-spacing: 4px;
  `,
  text6: css`
    font-family: Bellefair;
    font-size: 28px;
  `,
  text7: css`
    font-family: BarlowCondensed;
    font-size: 14px;
    letter-spacing: 2px;
  `,
  text8: css`
    font-family: BarlowCondensed;
    font-size: 16px;
    letter-spacing: 2px;
  `,
  text9: css`
    font-family: BarlowCondensed;
    font-size: 18px;
  `,
};

export const theme = {
  breakpoints,
  color,
  baseStyles,
};
