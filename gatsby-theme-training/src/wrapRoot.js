const React = require('react');
const AuthProvider = require('./components/training/auth').AuthProvider;

module.exports = function wrapRoot({ element }) {
  return React.createElement(AuthProvider, null, element);
};
