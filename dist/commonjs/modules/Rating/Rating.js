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

var _times2 = require('lodash/times');

var _times3 = _interopRequireDefault(_times2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _RatingIcon = require('./RatingIcon');

var _RatingIcon2 = _interopRequireDefault(_RatingIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A rating indicates user interest in content.
 */
var Rating = function (_Component) {
  (0, _inherits3.default)(Rating, _Component);

  function Rating() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Rating);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Rating.__proto__ || Object.getPrototypeOf(Rating)).call.apply(_ref, [this].concat(args))), _this), _this.handleIconClick = function () {
      var _this2;

      return (_this2 = _this).__handleIconClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleIconMouseEnter = function () {
      var _this3;

      return (_this3 = _this).__handleIconMouseEnter__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleMouseLeave = function () {
      var _this4;

      return (_this4 = _this).__handleMouseLeave__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Rating, [{
    key: '__handleIconClick__REACT_HOT_LOADER__',
    value: function __handleIconClick__REACT_HOT_LOADER__(e, _ref2) {
      var index = _ref2.index;
      var _props = this.props,
          clearable = _props.clearable,
          disabled = _props.disabled,
          maxRating = _props.maxRating,
          onRate = _props.onRate;
      var rating = this.state.rating;

      if (disabled) return;

      // default newRating is the clicked icon
      // allow toggling a binary rating
      // allow clearing ratings
      var newRating = index + 1;
      if (clearable === 'auto' && maxRating === 1) {
        newRating = +!rating;
      } else if (clearable === true && newRating === rating) {
        newRating = 0;
      }

      // set rating
      this.trySetState({ rating: newRating }, { isSelecting: false });
      if (onRate) onRate(e, (0, _extends3.default)({}, this.props, { rating: newRating }));
    }
  }, {
    key: '__handleIconMouseEnter__REACT_HOT_LOADER__',
    value: function __handleIconMouseEnter__REACT_HOT_LOADER__(e, _ref3) {
      var index = _ref3.index;

      if (this.props.disabled) return;

      this.setState({ selectedIndex: index, isSelecting: true });
    }
  }, {
    key: '__handleMouseLeave__REACT_HOT_LOADER__',
    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _invoke3.default.apply(undefined, [this.props, 'onMouseLeave'].concat(args));

      if (this.props.disabled) return;

      this.setState({ selectedIndex: -1, isSelecting: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          className = _props2.className,
          disabled = _props2.disabled,
          icon = _props2.icon,
          maxRating = _props2.maxRating,
          size = _props2.size;
      var _state = this.state,
          rating = _state.rating,
          selectedIndex = _state.selectedIndex,
          isSelecting = _state.isSelecting;


      var classes = (0, _classnames2.default)('ui', icon, size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
      var rest = (0, _lib.getUnhandledProps)(Rating, this.props);
      var ElementType = (0, _lib.getElementType)(Rating, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, role: 'radiogroup', onMouseLeave: this.handleMouseLeave }),
        (0, _times3.default)(maxRating, function (i) {
          return _react2.default.createElement(_RatingIcon2.default, {
            active: rating >= i + 1,
            'aria-checked': rating === i + 1,
            'aria-posinset': i + 1,
            'aria-setsize': maxRating,
            index: i,
            key: i,
            onClick: _this5.handleIconClick,
            onMouseEnter: _this5.handleIconMouseEnter,
            selected: selectedIndex >= i && isSelecting
          });
        })
      );
    }
  }]);
  return Rating;
}(_lib.AutoControlledComponent);

Rating.autoControlledProps = ['rating'];
Rating.defaultProps = {
  clearable: 'auto',
  maxRating: 1
};
Rating._meta = {
  name: 'Rating',
  type: _lib.META.TYPES.MODULE
};
Rating.Icon = _RatingIcon2.default;
Rating.handledProps = ['as', 'className', 'clearable', 'defaultRating', 'disabled', 'icon', 'maxRating', 'onRate', 'rating', 'size'];
var _default = Rating;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Rating.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['auto'])]),

  /** The initial rating value. */
  defaultRating: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: _propTypes2.default.bool,

  /** A rating can use a set of star or heart icons. */
  icon: _propTypes2.default.oneOf(['star', 'heart']),

  /** The total number of icons. */
  maxRating: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: _propTypes2.default.func,

  /** The current number of active icons. */
  rating: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** A progress bar can vary in size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big'))
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Rating, 'Rating', 'src/modules/Rating/Rating.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Rating/Rating.js');
}();

;