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

export const theme = {
  breakpoints,
  color,
};
