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

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _DimmerDimmable = require('./DimmerDimmable');

var _DimmerDimmable2 = _interopRequireDefault(_DimmerDimmable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
var Dimmer = function (_Component) {
  (0, _inherits3.default)(Dimmer, _Component);

  function Dimmer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dimmer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dimmer.__proto__ || Object.getPrototypeOf(Dimmer)).call.apply(_ref, [this].concat(args))), _this), _this.handlePortalMount = function () {
      var _this2;

      return (_this2 = _this).__handlePortalMount__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handlePortalUnmount = function () {
      var _this3;

      return (_this3 = _this).__handlePortalUnmount__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleClick = function () {
      var _this4;

      return (_this4 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleCenterRef = function () {
      var _this5;

      return (_this5 = _this).__handleCenterRef__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dimmer, [{
    key: '__handlePortalMount__REACT_HOT_LOADER__',
    value: function __handlePortalMount__REACT_HOT_LOADER__() {
      if (!_lib.isBrowser) return;

      // Heads up, IE doesn't support second argument in add()
      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    }
  }, {
    key: '__handlePortalUnmount__REACT_HOT_LOADER__',
    value: function __handlePortalUnmount__REACT_HOT_LOADER__() {
      if (!_lib.isBrowser) return;

      // Heads up, IE doesn't support second argument in add()
      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onClick = _props.onClick,
          onClickOutside = _props.onClickOutside;


      if (onClick) onClick(e, this.props);
      if (this.centerRef && this.centerRef !== e.target && this.centerRef.contains(e.target)) return;
      if (onClickOutside) onClickOutside(e, this.props);
    }
  }, {
    key: '__handleCenterRef__REACT_HOT_LOADER__',
    value: function __handleCenterRef__REACT_HOT_LOADER__(c) {
      return this.centerRef = c;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          active = _props2.active,
          children = _props2.children,
          className = _props2.className,
          content = _props2.content,
          disabled = _props2.disabled,
          inverted = _props2.inverted,
          page = _props2.page,
          simple = _props2.simple;


      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(active, 'active transition visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(page, 'page'), (0, _lib.useKeyOnly)(simple, 'simple'), 'dimmer', className);
      var rest = (0, _lib.getUnhandledProps)(Dimmer, this.props);
      var ElementType = (0, _lib.getElementType)(Dimmer, this.props);

      var childrenContent = _lib.childrenUtils.isNil(children) ? content : children;

      var dimmerElement = _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, onClick: this.handleClick }),
        childrenContent && _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'center', ref: this.handleCenterRef },
            childrenContent
          )
        )
      );

      if (page) {
        return _react2.default.createElement(
          _Portal2.default,
          {
            closeOnEscape: false,
            closeOnDocumentClick: false,
            onMount: this.handlePortalMount,
            onUnmount: this.handlePortalUnmount,
            open: active,
            openOnTriggerClick: false
          },
          dimmerElement
        );
      }

      return dimmerElement;
    }
  }]);
  return Dimmer;
}(_react.Component);

Dimmer._meta = {
  name: 'Dimmer',
  type: _lib.META.TYPES.MODULE
};
Dimmer.Dimmable = _DimmerDimmable2.default;
Dimmer.handledProps = ['active', 'as', 'children', 'className', 'content', 'disabled', 'inverted', 'onClick', 'onClickOutside', 'page', 'simple'];
var _default = Dimmer;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Dimmer.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An active dimmer will dim its parent container. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: _propTypes2.default.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: _propTypes2.default.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: _propTypes2.default.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: _propTypes2.default.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: _propTypes2.default.bool
} : void 0;


Dimmer.create = (0, _lib.createShorthandFactory)(Dimmer, function (value) {
  return { content: value };
});
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dimmer, 'Dimmer', 'src/modules/Dimmer/Dimmer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Dimmer/Dimmer.js');
}();

;