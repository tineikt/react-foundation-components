'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.Menu = undefined;

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

var _flexMock = require('../flex');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var IS_FLEX_MODE = true;

var Menu = function Menu(_ref) {
  var _cxStyles;

  var centerContainerClassName = _ref.centerContainerClassName,
      centerContainerStyle = _ref.centerContainerStyle,
      className = _ref.className,
      expanded = _ref.expanded,
      horizontal = _ref.horizontal,
      horizontalAlignment = _ref.horizontalAlignment,
      iconTop = _ref.iconTop,
      nested = _ref.nested,
      simple = _ref.simple,
      vertical = _ref.vertical,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['centerContainerClassName', 'centerContainerStyle', 'className', 'expanded', 'horizontal', 'horizontalAlignment', 'iconTop', 'nested', 'simple', 'vertical']);

  var classNames = (0, _classnames2.default)(className, cxStyles('menu', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, 'align-' + horizontalAlignment, !IS_FLEX_MODE && horizontalAlignment !== _constants.CENTER_POSITION && (0, _includes2.default)(_constants.MENU_ALIGNMENTS, horizontalAlignment)), (0, _defineProperty3.default)(_cxStyles, 'expanded', expanded), (0, _defineProperty3.default)(_cxStyles, horizontal + '-horizontal', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, horizontal)), (0, _defineProperty3.default)(_cxStyles, 'icon-top', iconTop), (0, _defineProperty3.default)(_cxStyles, 'nested', nested), (0, _defineProperty3.default)(_cxStyles, 'simple', simple), (0, _defineProperty3.default)(_cxStyles, 'vertical', vertical && !(0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, vertical)), (0, _defineProperty3.default)(_cxStyles, vertical + '-vertical', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, vertical)), _cxStyles)));
  var flexProps = {};

  if (IS_FLEX_MODE) {
    flexProps.horizontalAlignment = horizontalAlignment;
  }

  var content = _react2.default.createElement(_flexMock.FlexParent, (0, _extends3.default)({}, restProps, {
    className: classNames,
    componentClass: 'ul'
  }, flexProps));

  if (!IS_FLEX_MODE && horizontalAlignment === _constants.CENTER_POSITION) {
    var centerContainerClassNames = (0, _classnames2.default)(centerContainerClassName, cxStyles('menu-centered'));

    return _react2.default.createElement(
      'div',
      { className: centerContainerClassNames, style: centerContainerStyle },
      content
    );
  }

  return content;
};

exports.Menu = Menu;
Menu.propTypes = {
  centerContainerClassName: _react.PropTypes.string,
  centerContainerStyle: _react.PropTypes.shape({}),
  className: _react.PropTypes.string,
  expanded: _react.PropTypes.bool,
  horizontal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.SCREEN_SIZES)]),
  horizontalAlignment: _react.PropTypes.oneOf(IS_FLEX_MODE ? _constants.FLEX_HORIZONTAL_ALIGNMENTS : _constants.MENU_ALIGNMENTS),
  iconTop: _react.PropTypes.bool,
  nested: _react.PropTypes.bool,
  simple: _react.PropTypes.bool,
  vertical: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.SCREEN_SIZES)])
};

var MenuItem = function MenuItem(_ref2) {
  var active = _ref2.active,
      className = _ref2.className,
      text = _ref2.text,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['active', 'className', 'text']);

  var classNames = (0, _classnames2.default)(className, cxStyles({ active: active, 'menu-text': text }));

  return _react2.default.createElement(_flexMock.FlexChild, (0, _extends3.default)({}, restProps, { className: classNames, componentClass: 'li' }));
};

exports.MenuItem = MenuItem;
MenuItem.propTypes = {
  active: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  text: _react.PropTypes.bool
};

Menu.Item = MenuItem;

exports.default = Menu;