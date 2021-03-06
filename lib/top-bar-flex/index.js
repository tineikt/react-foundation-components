'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopBar = exports.TopBarTitle = exports.TopBarItem = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var IS_FLEX_MODE = true;

var TopBarItem = function TopBarItem(_ref) {
  var className = _ref.className,
      position = _ref.position,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position']);

  var classNames = (0, _classnames2.default)(className, cxStyles((0, _defineProperty3.default)({}, 'top-bar-' + position, (0, _includes2.default)(_constants.TOP_BAR_POSITIONS, position))));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.TopBarItem = TopBarItem;
TopBarItem.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.TOP_BAR_POSITIONS).isRequired
};

var TopBarTitle = function TopBarTitle(_ref2) {
  var className = _ref2.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('top-bar-title'));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.TopBarTitle = TopBarTitle;
TopBarTitle.propTypes = {
  className: _react.PropTypes.string
};

var TopBar = function TopBar(_ref3) {
  var className = _ref3.className,
      stack = _ref3.stack,
      restProps = (0, _objectWithoutProperties3.default)(_ref3, ['className', 'stack']);

  var classNames = (0, _classnames2.default)(className, cxStyles('top-bar', (0, _defineProperty3.default)({}, 'stacked-for-' + stack, (0, _includes2.default)(_constants.SCREEN_SIZES, stack))));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.TopBar = TopBar;
TopBar.propTypes = {
  className: _react.PropTypes.string,
  stack: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
};
TopBar.defaultProps = {
  stack: _constants.SCREEN_SIZE_SMALL
};

TopBar.Item = TopBarItem;
TopBar.Title = TopBarTitle;

exports.default = TopBar;