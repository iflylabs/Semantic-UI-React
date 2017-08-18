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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An internal icon sub-component for Rating component
 */
var RatingIcon = function (_Component) {
  (0, _inherits3.default)(RatingIcon, _Component);

  function RatingIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RatingIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RatingIcon.__proto__ || Object.getPrototypeOf(RatingIcon)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
      as: 'i'
    }, _this.handleClick = function () {
      var _this2;

      return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleKeyUp = function () {
      var _this3;

      return (_this3 = _this).__handleKeyUp__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleMouseEnter = function () {
      var _this4;

      return (_this4 = _this).__handleMouseEnter__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RatingIcon, [{
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      var onClick = this.props.onClick;


      if (onClick) onClick(e, this.props);
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onClick = _props.onClick,
          onKeyUp = _props.onKeyUp;


      if (onKeyUp) onKeyUp(e, this.props);

      if (onClick) {
        switch (_lib.keyboardKey.getCode(e)) {
          case _lib.keyboardKey.Enter:
          case _lib.keyboardKey.Spacebar:
            e.preventDefault();
            onClick(e, this.props);
            break;
          default:
        }
      }
    }
  }, {
    key: '__handleMouseEnter__REACT_HOT_LOADER__',
    value: function __handleMouseEnter__REACT_HOT_LOADER__(e) {
      var onMouseEnter = this.props.onMouseEnter;


      if (onMouseEnter) onMouseEnter(e, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          active = _props2.active,
          className = _props2.className,
          selected = _props2.selected;

      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(selected, 'selected'), 'icon', className);
      var rest = (0, _lib.getUnhandledProps)(RatingIcon, this.props);
      var ElementType = (0, _lib.getElementType)(RatingIcon, this.props);

      return _react2.default.createElement(ElementType, (0, _extends3.default)({}, rest, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        onMouseEnter: this.handleMouseEnter,
        tabIndex: 0,
        role: 'radio'
      }));
    }
  }]);
  return RatingIcon;
}(_react.Component);

RatingIcon._meta = {
  name: 'RatingIcon',
  parent: 'Rating',
  type: _lib.META.TYPES.MODULE
};
RatingIcon.handledProps = ['active', 'as', 'className', 'index', 'onClick', 'onKeyUp', 'onMouseEnter', 'selected'];
var _default = RatingIcon;
exports.default = _default;
process.env.NODE_ENV !== "production" ? RatingIcon.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Indicates activity of an icon. */
  active: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** An index of icon inside Rating. */
  index: _propTypes2.default.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: _propTypes2.default.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: _propTypes2.default.func,

  /** Indicates selection of an icon. */
  selected: _propTypes2.default.bool
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RatingIcon, 'RatingIcon', 'src/modules/Rating/RatingIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Rating/RatingIcon.js');
}();

;