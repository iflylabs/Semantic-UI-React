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
    }, _this.update = function () {
      var _this2;

      return (_this2 = _this).__update__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleUpdate = function () {
      var _this3;

      return (_this3 = _this).__handleUpdate__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.assignRects = function () {
      var _this4;

      return (_this4 = _this).__assignRects__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.isOversized = function () {
      var _this5;

      return (_this5 = _this).__isOversized__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.didReachContextBottom = function () {
      var _this6;

      return (_this6 = _this).__didReachContextBottom__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.didReachStartingPoint = function () {
      var _this7;

      return (_this7 = _this).__didReachStartingPoint__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.didTouchScreenTop = function () {
      var _this8;

      return (_this8 = _this).__didTouchScreenTop__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.didTouchScreenBottom = function () {
      var _this9;

      return (_this9 = _this).__didTouchScreenBottom__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.pushing = function () {
      var _this10;

      return (_this10 = _this).__pushing__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _this.stick = function () {
      var _this11;

      return (_this11 = _this).__stick__REACT_HOT_LOADER__.apply(_this11, arguments);
    }, _this.unstick = function () {
      var _this12;

      return (_this12 = _this).__unstick__REACT_HOT_LOADER__.apply(_this12, arguments);
    }, _this.stickToContextBottom = function () {
      var _this13;

      return (_this13 = _this).__stickToContextBottom__REACT_HOT_LOADER__.apply(_this13, arguments);
    }, _this.stickToContextTop = function () {
      var _this14;

      return (_this14 = _this).__stickToContextTop__REACT_HOT_LOADER__.apply(_this14, arguments);
    }, _this.stickToScreenBottom = function () {
      var _this15;

      return (_this15 = _this).__stickToScreenBottom__REACT_HOT_LOADER__.apply(_this15, arguments);
    }, _this.stickToScreenTop = function () {
      var _this16;

      return (_this16 = _this).__stickToScreenTop__REACT_HOT_LOADER__.apply(_this16, arguments);
    }, _this.handleStickyRef = function () {
      var _this17;

      return (_this17 = _this).__handleStickyRef__REACT_HOT_LOADER__.apply(_this17, arguments);
    }, _this.handleTriggerRef = function () {
      var _this18;

      return (_this18 = _this).__handleTriggerRef__REACT_HOT_LOADER__.apply(_this18, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Sticky, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleUpdate();
      window.addEventListener('scroll', this.handleUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleUpdate);
    }

    // ----------------------------------------
    // Handlers
    // ----------------------------------------

  }, {
    key: '__update__REACT_HOT_LOADER__',
    value: function __update__REACT_HOT_LOADER__(e) {
      var pushing = this.state.pushing;


      this.ticking = false;

      this.assignRects();

      if (pushing) {
        if (this.didReachStartingPoint()) return this.stickToContextTop(e);
        if (this.didTouchScreenBottom()) return this.stickToScreenBottom(e);
        return this.stickToContextBottom(e);
      }

      if (this.isOversized()) {
        if (this.contextRect.top > 0) return this.stickToContextTop(e);
        if (this.contextRect.bottom < window.innerHeight) return this.stickToContextBottom(e);
      }

      if (this.didTouchScreenTop()) {
        if (this.didReachContextBottom()) return this.stickToContextBottom(e);
        return this.stickToScreenTop(e);
      }

      return this.stickToContextTop(e);
    }
  }, {
    key: '__handleUpdate__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    value: function __handleUpdate__REACT_HOT_LOADER__(e) {
      var _this19 = this;

      if (!this.ticking) {
        this.ticking = true;
        requestAnimationFrame(function () {
          return _this19.update(e);
        });
      }
    }
  }, {
    key: '__assignRects__REACT_HOT_LOADER__',
    value: function __assignRects__REACT_HOT_LOADER__() {
      var context = this.props.context;


      this.triggerRect = this.triggerRef.getBoundingClientRect();
      this.contextRect = (context || document.body).getBoundingClientRect();
      this.stickyRect = this.stickyRef.getBoundingClientRect();
    }
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

    // Return true if the height of the component is higher than the window

  }, {
    key: '__isOversized__REACT_HOT_LOADER__',


    // Return true when the component reached the bottom of the context
    value: function __isOversized__REACT_HOT_LOADER__() {
      return this.stickyRect.height > window.innerHeight;
    }
  }, {
    key: '__didReachContextBottom__REACT_HOT_LOADER__',


    // Return true when the component reached the starting point
    value: function __didReachContextBottom__REACT_HOT_LOADER__() {
      var offset = this.props.offset;


      return this.stickyRect.height + offset >= this.contextRect.bottom;
    }
  }, {
    key: '__didReachStartingPoint__REACT_HOT_LOADER__',


    // Return true when the top of the screen overpasses the Sticky component
    value: function __didReachStartingPoint__REACT_HOT_LOADER__() {
      return this.stickyRect.top <= this.triggerRect.top;
    }
  }, {
    key: '__didTouchScreenTop__REACT_HOT_LOADER__',


    // Return true when the bottom of the screen overpasses the Sticky component
    value: function __didTouchScreenTop__REACT_HOT_LOADER__() {
      return this.triggerRect.top < this.props.offset;
    }
  }, {
    key: '__didTouchScreenBottom__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Stick helpers
    // ----------------------------------------

    // If true, the component will stick to the bottom of the screen instead of the top
    value: function __didTouchScreenBottom__REACT_HOT_LOADER__() {
      var bottomOffset = this.props.bottomOffset;


      return this.contextRect.bottom + bottomOffset > window.innerHeight;
    }
  }, {
    key: '__pushing__REACT_HOT_LOADER__',
    value: function __pushing__REACT_HOT_LOADER__(pushing) {
      var possible = this.props.pushing;


      if (possible) this.setState({ pushing: pushing });
    }
  }, {
    key: '__stick__REACT_HOT_LOADER__',
    value: function __stick__REACT_HOT_LOADER__(e) {
      this.setState({ sticky: true });
      (0, _invoke3.default)(this.props, 'onStick', e, this.props);
    }
  }, {
    key: '__unstick__REACT_HOT_LOADER__',
    value: function __unstick__REACT_HOT_LOADER__(e) {
      this.setState({ sticky: false });
      (0, _invoke3.default)(this.props, 'onUnstick', e, this.props);
    }
  }, {
    key: '__stickToContextBottom__REACT_HOT_LOADER__',
    value: function __stickToContextBottom__REACT_HOT_LOADER__(e) {
      var top = this.contextRect.bottom - this.stickyRect.height;

      (0, _invoke3.default)(this.props, 'onBottom', e, this.props);

      this.stick(e);
      this.setState({ top: top, bottom: null });
      this.pushing(true);
    }
  }, {
    key: '__stickToContextTop__REACT_HOT_LOADER__',
    value: function __stickToContextTop__REACT_HOT_LOADER__(e) {
      (0, _invoke3.default)(this.props, 'onTop', e, this.props);

      this.unstick(e);
      this.pushing(false);
    }
  }, {
    key: '__stickToScreenBottom__REACT_HOT_LOADER__',
    value: function __stickToScreenBottom__REACT_HOT_LOADER__(e) {
      var bottom = this.props.bottomOffset;


      this.stick(e);
      this.setState({ bottom: bottom, top: null });
    }
  }, {
    key: '__stickToScreenTop__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Refs
    // ----------------------------------------

    value: function __stickToScreenTop__REACT_HOT_LOADER__(e) {
      var top = this.props.offset;


      this.stick(e);
      this.setState({ top: top, bottom: null });
    }
  }, {
    key: '__handleStickyRef__REACT_HOT_LOADER__',
    value: function __handleStickyRef__REACT_HOT_LOADER__(c) {
      return this.stickyRef = c;
    }
  }, {
    key: '__handleTriggerRef__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function __handleTriggerRef__REACT_HOT_LOADER__(c) {
      return this.triggerRef = c;
    }
  }, {
    key: 'render',
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
  bottomOffset: 0,
  offset: 0
};
Sticky._meta = {
  name: 'Sticky',
  type: _lib.META.TYPES.MODULE
};
Sticky.handledProps = ['as', 'bottomOffset', 'children', 'className', 'context', 'offset', 'onBottom', 'onStick', 'onTop', 'onUnstick', 'pushing'];
var _default = Sticky;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Sticky.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

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
  pushing: _propTypes2.default.bool
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Sticky, 'Sticky', 'src/modules/Sticky/Sticky.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Sticky/Sticky.js');
}();

;