require('babel-polyfill');
require('jest-styled-components');

const isThemeObject = val => Boolean(val && val.themeName && val.fontfaces && val.typography);
const themeSnapshotSerializer = {
  // We want to definitively identify the theme object - hence checking for theme-specific properties
  test: isThemeObject,
  print: () => '[ThemeObject]',
};
expect.addSnapshotSerializer(themeSnapshotSerializer);
