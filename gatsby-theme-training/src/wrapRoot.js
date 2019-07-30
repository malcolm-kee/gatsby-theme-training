const React = require('react');
const Providers = require('./components/training/providers').default;

module.exports = function wrapRoot({ element }) {
  return React.createElement(Providers, null, element);
};
