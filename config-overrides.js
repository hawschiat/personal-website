/* config-overrides.js */

const rewireYAML = require("./scripts/rewire-yaml-override");

module.exports = function override(config, env) {
  config = rewireYAML(config, env);
  return config;
};
