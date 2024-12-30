'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

require('./index.css');

_reactDom2['default'].createRoot(document.getElementById('root')).render(_react2['default'].createElement(
  _react2['default'].StrictMode,
  null,
  _react2['default'].createElement(_App2['default'], null)
));
