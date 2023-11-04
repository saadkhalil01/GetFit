module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module-resolver", {
      "alias": {
        "@images": "./src/assets/images",
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@constants": "./src/constants",
      }
    }]
  ]
};
