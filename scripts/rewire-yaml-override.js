// Refactored https://github.com/hsz/react-app-rewire-yaml to work with PNP

function rewireYAML(config) {
  const yamlLoader = {
    test: /\.ya?ml$/,
    use: 'yaml-loader',
  };

  // hack to insert yaml loader to react-script's default webpack config
  config.module.rules[1].oneOf.splice(0, 0, yamlLoader);

  return config;
}

module.exports = rewireYAML;
