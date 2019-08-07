const React = require('react');
const Providers = require('./components/training/providers').default;

module.exports = function wrapRoot({ element }, { disableAuth }) {
  return React.createElement(Providers, { disableAuth }, element);
};
