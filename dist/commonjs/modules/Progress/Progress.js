'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _round2 = require('lodash/round');

var _round3 = _interopRequireDefault(_round2);

var _clamp2 = require('lodash/clamp');

var _clamp3 = _interopRequireDefault(_clamp2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A progress bar shows the progression of a task.
 */
var Progress = function (_Component) {
  (0, _inherits3.default)(Progress, _Component);

  function Progress() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Progress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Progress.__proto__ || Object.getPrototypeOf(Progress)).call.apply(_ref, [this].concat(args))), _this), _this.calculatePercent = function () {
      var _this2;

      return (_this2 = _this).__calculatePercent__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.getPercent = function () {
      var _this3;

      return (_this3 = _this).__getPercent__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.isAutoSuccess = function () {
      var _this4;

      return (_this4 = _this).__isAutoSuccess__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.renderLabel = function () {
      var _this5;

      return (_this5 = _this).__renderLabel__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.renderProgress = function () {
      var _this6;

      return (_this6 = _this).__renderProgress__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Progress, [{
    key: '__calculatePercent__REACT_HOT_LOADER__',
    value: function __calculatePercent__REACT_HOT_LOADER__() {
      var _props = this.props,
          percent = _props.percent,
          total = _props.total,
          value = _props.value;


      if (!(0, _isUndefined3.default)(percent)) return percent;
      if (!(0, _isUndefined3.default)(total) && !(0, _isUndefined3.default)(value)) return value / total * 100;
    }
  }, {
    key: '__getPercent__REACT_HOT_LOADER__',
    value: function __getPercent__REACT_HOT_LOADER__() {
      var precision = this.props.precision;

      var percent = (0, _clamp3.default)(this.calculatePercent(), 0, 100);

      if ((0, _isUndefined3.default)(precision)) return percent;
      return (0, _round3.default)(percent, precision);
    }
  }, {
    key: '__isAutoSuccess__REACT_HOT_LOADER__',
    value: function __isAutoSuccess__REACT_HOT_LOADER__() {
      var _props2 = this.props,
          autoSuccess = _props2.autoSuccess,
          percent = _props2.percent,
          total = _props2.total,
          value = _props2.value;


      return autoSuccess && (percent >= 100 || value >= total);
    }
  }, {
    key: '__renderLabel__REACT_HOT_LOADER__',
    value: function __renderLabel__REACT_HOT_LOADER__() {
      var _props3 = this.props,
          children = _props3.children,
          label = _props3.label;


      if (!_lib.childrenUtils.isNil(children)) return _react2.default.createElement(
        'div',
        { className: 'label' },
        children
      );
      return (0, _lib.createHTMLDivision)(label, { defaultProps: { className: 'label' } });
    }
  }, {
    key: '__renderProgress__REACT_HOT_LOADER__',
    value: function __renderProgress__REACT_HOT_LOADER__(percent) {
      var _props4 = this.props,
          precision = _props4.precision,
          progress = _props4.progress,
          total = _props4.total,
          value = _props4.value;


      if (!progress && (0, _isUndefined3.default)(precision)) return;
      return _react2.default.createElement(
        'div',
        { className: 'progress' },
        progress !== 'ratio' ? percent + '%' : value + '/' + total
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          active = _props5.active,
          attached = _props5.attached,
          className = _props5.className,
          color = _props5.color,
          disabled = _props5.disabled,
          error = _props5.error,
          indicating = _props5.indicating,
          inverted = _props5.inverted,
          size = _props5.size,
          success = _props5.success,
          warning = _props5.warning;


      var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(active || indicating, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(indicating, 'indicating'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(success || this.isAutoSuccess(), 'success'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useValueAndKey)(attached, 'attached'), 'progress', className);
      var rest = (0, _lib.getUnhandledProps)(Progress, this.props);
      var ElementType = (0, _lib.getElementType)(Progress, this.props);
      var percent = this.getPercent();

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, 'data-percent': Math.floor(percent) }),
        _react2.default.createElement(
          'div',
          { className: 'bar', style: { width: percent + '%' } },
          this.renderProgress(percent)
        ),
        this.renderLabel()
      );
    }
  }]);
  return Progress;
}(_react.Component);

Progress._meta = {
  name: 'Progress',
  type: _lib.META.TYPES.MODULE
};
Progress.handledProps = ['active', 'as', 'attached', 'autoSuccess', 'children', 'className', 'color', 'disabled', 'error', 'indicating', 'inverted', 'label', 'percent', 'precision', 'progress', 'size', 'success', 'total', 'value', 'warning'];
process.env.NODE_ENV !== "production" ? Progress.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A progress bar can show activity. */
  active: _propTypes2.default.bool,

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: _propTypes2.default.oneOf(['top', 'bottom']),

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A progress bar can have different colors. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** A progress bar be disabled. */
  disabled: _propTypes2.default.bool,

  /** A progress bar can show a error state. */
  error: _propTypes2.default.bool,

  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating: _propTypes2.default.bool,

  /** A progress bar can have its colors inverted. */
  inverted: _propTypes2.default.bool,

  /** Can be set to either to display progress as percent or ratio. */
  label: _lib.customPropTypes.itemShorthand,

  /** Current percent complete. */
  percent: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['total', 'value']), _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])]),

  /** Decimal point precision for calculated progress. */
  precision: _propTypes2.default.number,

  /** A progress bar can contain a text value indicating current progress. */
  progress: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['percent', 'ratio'])]),

  /** A progress bar can vary in size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'mini', 'huge', 'massive')),

  /** A progress bar can show a success state. */
  success: _propTypes2.default.bool,

  /** For use with value. Together, these will calculate the percent. Mutually excludes percent. */
  total: _lib.customPropTypes.every([_lib.customPropTypes.demand(['value']), _lib.customPropTypes.disallow(['percent']), _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])]),

  /** For use with total. Together, these will calculate the percent. Mutually excludes percent. */
  value: _lib.customPropTypes.every([_lib.customPropTypes.demand(['total']), _lib.customPropTypes.disallow(['percent']), _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])]),

  /** A progress bar can show a warning state. */
  warning: _propTypes2.default.bool
} : void 0;
var _default = Progress;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Progress, 'Progress', 'src/modules/Progress/Progress.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Progress/Progress.js');
}();

;