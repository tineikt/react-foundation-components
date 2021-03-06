'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Column = exports.Row = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

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

var _screenSize = require('../util/screen-size');

var _flex = require('../flex');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var rowProps = (0, _screenSize.createScreenSizeProps)(_constants.FLEX_GRID_ROW_CLASS_NAMES);
var columnProps = (0, _screenSize.createScreenSizeProps)(_constants.FLEX_GRID_COLUMN_CLASS_NAMES);

var Row = function Row(_ref) {
  var className = _ref.className,
      collapse = _ref.collapse,
      expanded = _ref.expanded,
      unstack = _ref.unstack,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'collapse', 'expanded', 'unstack']);

  var _createScreenSizeClas = (0, _screenSize.createScreenSizeClassNames)(rowProps, restProps),
      screenSizeClassNames = _createScreenSizeClas.classNames,
      props = _createScreenSizeClas.props;

  var classNames = (0, _classnames2.default)(className, cxStyles('row', (0, _extends5.default)({}, screenSizeClassNames, (0, _defineProperty3.default)({
    collapse: collapse,
    expanded: expanded
  }, unstack + '-unstack', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, unstack)))));

  return _react2.default.createElement(_flex.FlexParent, (0, _extends5.default)({}, props, { className: classNames }));
};

exports.Row = Row;
Row.propTypes = (0, _extends5.default)({}, (0, _screenSize.createScreenSizePropTypes)(rowProps), {
  className: _react.PropTypes.string,
  collapse: _react.PropTypes.bool,
  expanded: _react.PropTypes.bool,
  unstack: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
});

var Column = function Column(_ref2) {
  var _extends3;

  var className = _ref2.className,
      expand = _ref2.expand,
      shrink = _ref2.shrink,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'expand', 'shrink']);

  var _createScreenSizeClas2 = (0, _screenSize.createScreenSizeClassNames)(columnProps, restProps),
      screenSizeClassNames = _createScreenSizeClas2.classNames,
      props = _createScreenSizeClas2.props;

  var classNames = (0, _classnames2.default)(className, cxStyles('column', (0, _extends5.default)({}, screenSizeClassNames, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, expand + '-expand', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, expand)), (0, _defineProperty3.default)(_extends3, 'shrink', shrink), _extends3))));

  return _react2.default.createElement(_flex.FlexChild, (0, _extends5.default)({}, props, { className: classNames }));
};

exports.Column = Column;
Column.propTypes = (0, _extends5.default)({}, (0, _screenSize.createScreenSizePropTypes)(columnProps), {
  className: _react.PropTypes.string,
  shrink: _react.PropTypes.bool,
  expand: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
});

var Grid = exports.Grid = { Row: Row, Column: Column };

exports.default = Grid;