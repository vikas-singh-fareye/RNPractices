module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './App/assets',
          '@components': './App/components',
          '@containers': './App/containers',
          '@config': './App/config',
          '@database': './App/database',
          '@redux': './App/redux',
          '@styles': './App/styles',
          '@utils': './App/utils',
        },
      },
    ],
  ]
};


/*
    ‘root’ specifies your project main directory. Usually, it is called ‘src’.
    ‘extensions’ allow you to limit the plugin to specific file types.
    ‘alias’ lets you specify all the folders you need shortcuts for your module imports.
    NOTE: You should use full paths for your alias folders otherwise the plugin won’t be able to locate the folders you specified.

*/