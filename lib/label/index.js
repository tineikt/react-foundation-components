'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = (0, _createWrapperComponent2.default)({
  displayName: 'Label',
  styles: _styles2.default,
  propTypes: {
    color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS)
  },
  mapProps: function mapProps(_ref) {
    var color = _ref.color,
        props = (0, _objectWithoutProperties3.default)(_ref, ['color']);
    return {
      props: props,
      classNames: ['label', (0, _defineProperty3.default)({}, color, (0, _includes2.default)(_constants.COMPONENT_ALTERNATIVE_COLORS, color))]
    };
  }
});

exports.Label = Label;
exports.default = Label;