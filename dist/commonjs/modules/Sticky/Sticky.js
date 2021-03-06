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

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sticky content stays fixed to the browser viewport while another column of content is visible on the page.
 */
var Sticky = function (_Component) {
  (0, _inherits3.default)(Sticky, _Component);

  function Sticky() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Sticky);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sticky: false
    }, _this.addListeners = function (props) {
      var scrollContext = props.scrollContext;


      _lib.eventStack.sub('resize', _this.handleUpdate, { target: scrollContext });
      _lib.eventStack.sub('scroll', _this.handleUpdate, { target: scrollContext });
    }, _this.removeListeners = function () {
      var scrollContext = _this.props.scrollContext;


      _lib.eventStack.unsub('resize', _this.handleUpdate, { target: scrollContext });
      _lib.eventStack.unsub('scroll', _this.handleUpdate, { target: scrollContext });
    }, _this.update = function (e) {
      var pushing = _this.state.pushing;


      _this.ticking = false;
      _this.assignRects();

      if (pushing) {
        if (_this.didReachStartingPoint()) return _this.stickToContextTop(e);
        if (_this.didTouchScreenBottom()) return _this.stickToScreenBottom(e);
        return _this.stickToContextBottom(e);
      }

      if (_this.isOversized()) {
        if (_this.contextRect.top > 0) return _this.stickToContextTop(e);
        if (_this.contextRect.bottom < window.innerHeight) return _this.stickToContextBottom(e);
      }

      if (_this.didTouchScreenTop()) {
        if (_this.didReachContextBottom()) return _this.stickToContextBottom(e);
        return _this.stickToScreenTop(e);
      }

      return _this.stickToContextTop(e);
    }, _this.handleUpdate = function (e) {
      if (!_this.ticking) {
        _this.ticking = true;
        requestAnimationFrame(function () {
          return _this.update(e);
        });
      }
    }, _this.assignRects = function () {
      var context = _this.props.context;


      _this.triggerRect = _this.triggerRef.getBoundingClientRect();
      _this.contextRect = (context || document.body).getBoundingClientRect();
      _this.stickyRect = _this.stickyRef.getBoundingClientRect();
    }, _this.didReachContextBottom = function () {
      var offset = _this.props.offset;


      return _this.stickyRect.height + offset >= _this.contextRect.bottom;
    }, _this.didReachStartingPoint = function () {
      return _this.stickyRect.top <= _this.triggerRect.top;
    }, _this.didTouchScreenTop = function () {
      return _this.triggerRect.top < _this.props.offset;
    }, _this.didTouchScreenBottom = function () {
      var bottomOffset = _this.props.bottomOffset;


      return _this.contextRect.bottom + bottomOffset > window.innerHeight;
    }, _this.isOversized = function () {
      return _this.stickyRect.height > window.innerHeight;
    }, _this.pushing = function (pushing) {
      var possible = _this.props.pushing;


      if (possible) _this.setState({ pushing: pushing });
    }, _this.stick = function (e) {
      _this.setState({ sticky: true });
      (0, _invoke3.default)(_this.props, 'onStick', e, _this.props);
    }, _this.unstick = function (e) {
      _this.setState({ sticky: false });
      (0, _invoke3.default)(_this.props, 'onUnstick', e, _this.props);
    }, _this.stickToContextBottom = function (e) {
      var top = _this.contextRect.bottom - _this.stickyRect.height;

      (0, _invoke3.default)(_this.props, 'onBottom', e, _this.props);

      _this.stick(e);
      _this.setState({ top: top, bottom: null });
      _this.pushing(true);
    }, _this.stickToContextTop = function (e) {
      (0, _invoke3.default)(_this.props, 'onTop', e, _this.props);

      _this.unstick(e);
      _this.pushing(false);
    }, _this.stickToScreenBottom = function (e) {
      var bottom = _this.props.bottomOffset;


      _this.stick(e);
      _this.setState({ bottom: bottom, top: null });
    }, _this.stickToScreenTop = function (e) {
      var top = _this.props.offset;


      _this.stick(e);
      _this.setState({ top: top, bottom: null });
    }, _this.handleStickyRef = function (c) {
      return _this.stickyRef = c;
    }, _this.handleTriggerRef = function (c) {
      return _this.triggerRef = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Sticky, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!_lib.isBrowser) return;
      var active = this.props.active;


      if (active) {
        this.handleUpdate();
        this.addListeners(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var current = this.props.active;
      var next = nextProps.active;


      if (current === next) return;
      if (next) {
        this.handleUpdate();
        this.addListeners(nextProps);
        return;
      }
      this.removeListeners();
      this.setState({ sticky: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!_lib.isBrowser) return;
      var active = this.props.active;


      if (active) this.removeListeners();
    }

    // ----------------------------------------
    // Events
    // ----------------------------------------

    // ----------------------------------------
    // Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

  }, {
    key: 'computeStyle',
    value: function computeStyle() {
      var _state = this.state,
          bottom = _state.bottom,
          sticky = _state.sticky,
          top = _state.top;


      if (!sticky) return {};
      return {
        bottom: bottom,
        top: top,
        position: 'fixed',
        width: this.triggerRect.width
      };
    }

    // Return true when the component reached the bottom of the context


    // Return true when the component reached the starting point


    // Return true when the top of the screen overpasses the Sticky component


    // Return true when the bottom of the screen overpasses the Sticky component


    // Return true if the height of the component is higher than the window


    // ----------------------------------------
    // Stick helpers
    // ----------------------------------------

    // If true, the component will stick to the bottom of the screen instead of the top


    // ----------------------------------------
    // Refs
    // ----------------------------------------

  }, {
    key: 'render',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;

      var rest = (0, _lib.getUnhandledProps)(Sticky, this.props);
      var ElementType = (0, _lib.getElementType)(Sticky, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: className }),
        _react2.default.createElement('div', { ref: this.handleTriggerRef }),
        _react2.default.createElement(
          'div',
          { ref: this.handleStickyRef, style: this.computeStyle() },
          children
        )
      );
    }
  }]);
  return Sticky;
}(_react.Component);

Sticky.defaultProps = {
  active: true,
  bottomOffset: 0,
  offset: 0,
  scrollContext: _lib.isBrowser ? window : null
};
Sticky._meta = {
  name: 'Sticky',
  type: _lib.META.TYPES.MODULE
};
Sticky.handledProps = ['active', 'as', 'bottomOffset', 'children', 'className', 'context', 'offset', 'onBottom', 'onStick', 'onTop', 'onUnstick', 'pushing', 'scrollContext'];
exports.default = Sticky;
Sticky.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A Sticky can be active. */
  active: _propTypes2.default.bool,

  /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
  bottomOffset: _propTypes2.default.number,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Context which sticky element should stick to. */
  context: _propTypes2.default.object,

  /** Offset in pixels from the top of the screen when fixing element to viewport. */
  offset: _propTypes2.default.number,

  /**
   * Callback when element is bound to bottom of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBottom: _propTypes2.default.func,

  /**
   * Callback when element is fixed to page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onStick: _propTypes2.default.func,

  /**
   * Callback when element is bound to top of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onTop: _propTypes2.default.func,

  /**
   * Callback when element is unfixed from page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onUnstick: _propTypes2.default.func,

  /** Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up. */
  pushing: _propTypes2.default.bool,

  /** Context which sticky should attach onscroll events. */
  scrollContext: _propTypes2.default.object
} : {};