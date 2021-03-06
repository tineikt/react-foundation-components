'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.createScreenSizeProps = createScreenSizeProps;
exports.createScreenSizePropTypes = createScreenSizePropTypes;
exports.createScreenSizeClassNames = createScreenSizeClassNames;

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _decapitalize = require('underscore.string/decapitalize');

var _decapitalize2 = _interopRequireDefault(_decapitalize);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createScreenSizeProps() {
  var classNameMapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return classNameMapping.reduce(function (columnAgg, _ref) {
    var baseClassName = _ref.baseClassName,
        basePropName = _ref.basePropName,
        flattenSmall = _ref.flattenSmall,
        column = (0, _objectWithoutProperties3.default)(_ref, ['baseClassName', 'basePropName', 'flattenSmall']);

    var props = _constants.SCREEN_SIZES.reduce(function (sizeAgg, size) {
      var className = '';
      var propName = '';

      if (flattenSmall && size === _constants.SCREEN_SIZE_SMALL) {
        className = baseClassName;
        propName = (0, _decapitalize2.default)(basePropName);
      } else {
        className = size + (baseClassName ? '-' + baseClassName : '');
        propName = '' + size + basePropName;
      }

      return (0, _extends4.default)({}, sizeAgg, (0, _defineProperty3.default)({}, propName, (0, _extends4.default)({}, column, {
        className: className
      })));
    }, {});

    return (0, _extends4.default)({}, columnAgg, props);
  }, {});
}

function createScreenSizePropTypes() {
  var screenSizeProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _mapValues2.default)(screenSizeProps, function (_ref2) {
    var type = _ref2.type,
        values = _ref2.values;

    if (type === _constants.CLASS_NAME_TYPES.RANGE) {
      return _react.PropTypes.number;
    } else if (type === _constants.CLASS_NAME_TYPES.ENUM) {
      return _react.PropTypes.oneOf(values);
    }

    return _react.PropTypes.bool;
  });
}

function createScreenSizeClassNames() {
  var screenSizeProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var classNames = {};
  var remainingProps = {};

  (0, _keys2.default)(props).forEach(function (prop) {
    var propValue = props[prop];

    if (screenSizeProps[prop]) {
      var _screenSizeProps$prop = screenSizeProps[prop],
          className = _screenSizeProps$prop.className,
          type = _screenSizeProps$prop.type,
          min = _screenSizeProps$prop.min,
          max = _screenSizeProps$prop.max,
          values = _screenSizeProps$prop.values;


      if (type === _constants.CLASS_NAME_TYPES.RANGE) {
        classNames[className + '-' + propValue] = (0, _isInteger2.default)(propValue) && propValue >= min && propValue <= max;
      } else if (type === _constants.CLASS_NAME_TYPES.ENUM) {
        classNames[className + '-' + propValue] = (0, _includes2.default)(values, propValue);
      } else {
        classNames[className] = propValue;
      }
    } else {
      remainingProps[prop] = propValue;
    }
  });

  return { classNames: classNames, props: remainingProps };
}