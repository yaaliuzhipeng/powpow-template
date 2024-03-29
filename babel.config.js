module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffic: './',
            rootPathPrefix: '!',
          }
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
