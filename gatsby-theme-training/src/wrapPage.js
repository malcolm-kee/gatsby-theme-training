const React = require('react');
const Layout = require('./components/training/layout').default;

module.exports = function wrapPage({ element, props }) {
  return React.createElement(Layout, props, element);
};
