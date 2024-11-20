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

export const theme = {
  breakpoints,
};
