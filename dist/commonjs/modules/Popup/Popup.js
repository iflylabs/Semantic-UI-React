'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSITIONS = undefined;

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

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _PopupContent = require('./PopupContent');

var _PopupContent2 = _interopRequireDefault(_PopupContent);

var _PopupHeader = require('./PopupHeader');

var _PopupHeader2 = _interopRequireDefault(_PopupHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('popup');

var POSITIONS = exports.POSITIONS = ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'];

/**
 * A Popup displays additional information on top of a page.
 */

var Popup = function (_Component) {
  (0, _inherits3.default)(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideOnScroll = function () {
      var _this2;

      return (_this2 = _this).__hideOnScroll__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleClose = function () {
      var _this3;

      return (_this3 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleOpen = function () {
      var _this4;

      return (_this4 = _this).__handleOpen__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handlePortalMount = function () {
      var _this5;

      return (_this5 = _this).__handlePortalMount__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handlePortalUnmount = function () {
      var _this6;

      return (_this6 = _this).__handlePortalUnmount__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handlePopupRef = function () {
      var _this7;

      return (_this7 = _this).__handlePopupRef__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popup, [{
    key: 'getContext',


    /** iFly Custom Code**/
    value: function getContext() {
      var iframeId = void 0;
      var frameContext = void 0;
      var frame = {};

      if (this.props.frame) {
        iframeId = "ifc-chat-window-" + this.props.frame;
        frameContext = document.getElementById(iframeId);
        frame.contextDoc = frameContext.contentDocument;
        frame.contextWin = frameContext.contentWindow;
      } else {
        frame.contextWin = window;
        frame.contextDoc = document;
      }
      return frame;
    }
  }, {
    key: 'computePopupStyle',
    value: function computePopupStyle(positions) {

      var style = { position: 'absolute'
        // Do not access window/document when server side rendering
      };if (!_lib.isBrowser) return style;
      var frame = getContext();
      var offset = this.props.offset;
      var _frame$contextWin = frame.contextWin,
          pageYOffset = _frame$contextWin.pageYOffset,
          pageXOffset = _frame$contextWin.pageXOffset;
      var _frame$contextDoc$doc = frame.contextDoc.documentElement,
          clientWidth = _frame$contextDoc$doc.clientWidth,
          clientHeight = _frame$contextDoc$doc.clientHeight;


      if ((0, _includes3.default)(positions, 'right')) {
        style.right = Math.round(clientWidth - (this.coords.right + pageXOffset));
        style.left = 'auto';
      } else if ((0, _includes3.default)(positions, 'left')) {
        style.left = Math.round(this.coords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        var xOffset = (this.coords.width - this.popupCoords.width) / 2;
        style.left = Math.round(this.coords.left + xOffset + pageXOffset);
        style.right = 'auto';
      }

      if ((0, _includes3.default)(positions, 'top')) {
        style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset));
        style.top = 'auto';
      } else if ((0, _includes3.default)(positions, 'bottom')) {
        style.top = Math.round(this.coords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        var yOffset = (this.coords.height + this.popupCoords.height) / 2;
        style.top = Math.round(this.coords.bottom + pageYOffset - yOffset);
        style.bottom = 'auto';

        var _xOffset = this.popupCoords.width + 8;
        if ((0, _includes3.default)(positions, 'right')) {
          style.right -= _xOffset;
        } else {
          style.left -= _xOffset;
        }
      }

      if (offset) {
        if ((0, _isNumber3.default)(style.right)) {
          style.right -= offset;
        } else {
          style.left -= offset;
        }
      }

      return style;
    }

    // check if the style would display
    // the popup outside of the view port

  }, {
    key: 'isStyleInViewport',
    value: function isStyleInViewport(style) {
      var frame = getContext();
      var _frame$contextWin2 = frame.contextWin,
          pageYOffset = _frame$contextWin2.pageYOffset,
          pageXOffset = _frame$contextWin2.pageXOffset;
      var _frame$contextDoc$doc2 = frame.contextDoc.documentElement,
          clientWidth = _frame$contextDoc$doc2.clientWidth,
          clientHeight = _frame$contextDoc$doc2.clientHeight;


      var element = {
        top: style.top,
        left: style.left,
        width: this.popupCoords.width,
        height: this.popupCoords.height
      };
      if ((0, _isNumber3.default)(style.right)) {
        element.left = clientWidth - style.right - element.width;
      }
      if ((0, _isNumber3.default)(style.bottom)) {
        element.top = clientHeight - style.bottom - element.height;
      }

      // hidden on top
      if (element.top < pageYOffset) return false;
      // hidden on the bottom
      if (element.top + element.height > pageYOffset + clientHeight) return false;
      // hidden the left
      if (element.left < pageXOffset) return false;
      // hidden on the right
      if (element.left + element.width > pageXOffset + clientWidth) return false;

      return true;
    }
  }, {
    key: 'setPopupStyle',
    value: function setPopupStyle() {
      if (!this.coords || !this.popupCoords) return;
      var position = this.props.position;
      var style = this.computePopupStyle(position);

      // Lets detect if the popup is out of the viewport and adjust
      // the position accordingly
      var positions = (0, _without3.default)(POSITIONS, position).concat([position]);
      for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i += 1) {
        style = this.computePopupStyle(positions[i]);
        position = positions[i];
      }

      // Append 'px' to every numerical values in the style
      style = (0, _mapValues3.default)(style, function (value) {
        return (0, _isNumber3.default)(value) ? value + 'px' : value;
      });
      this.setState({ style: style, position: position });
    }
  }, {
    key: 'getPortalProps',
    value: function getPortalProps() {
      var portalProps = {};

      var _props = this.props,
          on = _props.on,
          hoverable = _props.hoverable;


      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (on === 'click') {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      } else if (on === 'focus') {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      } else if (on === 'hover') {
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true;
        // Taken from SUI: https://git.io/vPmCm
        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      return portalProps;
    }
  }, {
    key: '__hideOnScroll__REACT_HOT_LOADER__',
    value: function __hideOnScroll__REACT_HOT_LOADER__() {
      var _this8 = this;

      this.setState({ closed: true });
      var frame = getContext();
      frame.contextWin.removeEventListener('scroll', this.hideOnScroll);
      setTimeout(function () {
        return _this8.setState({ closed: false });
      }, 50);
    }
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__(e) {
      debug('handleClose()');
      var onClose = this.props.onClose;

      if (onClose) onClose(e, this.props);
    }
  }, {
    key: '__handleOpen__REACT_HOT_LOADER__',
    value: function __handleOpen__REACT_HOT_LOADER__(e) {
      debug('handleOpen()');
      this.coords = e.currentTarget.getBoundingClientRect();

      var onOpen = this.props.onOpen;

      if (onOpen) onOpen(e, this.props);
    }
  }, {
    key: '__handlePortalMount__REACT_HOT_LOADER__',
    value: function __handlePortalMount__REACT_HOT_LOADER__(e) {
      debug('handlePortalMount()');
      var frame = getContext();
      if (this.props.hideOnScroll) {
        frame.contextWin.addEventListener('scroll', this.hideOnScroll);
      }

      var onMount = this.props.onMount;

      if (onMount) onMount(e, this.props);
    }
  }, {
    key: '__handlePortalUnmount__REACT_HOT_LOADER__',
    value: function __handlePortalUnmount__REACT_HOT_LOADER__(e) {
      debug('handlePortalUnmount()');
      var onUnmount = this.props.onUnmount;

      if (onUnmount) onUnmount(e, this.props);
    }
  }, {
    key: '__handlePopupRef__REACT_HOT_LOADER__',
    value: function __handlePopupRef__REACT_HOT_LOADER__(popupRef) {
      debug('popupMounted()');
      this.popupCoords = popupRef ? popupRef.getBoundingClientRect() : null;
      this.setPopupStyle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          basic = _props2.basic,
          children = _props2.children,
          className = _props2.className,
          content = _props2.content,
          flowing = _props2.flowing,
          header = _props2.header,
          inverted = _props2.inverted,
          size = _props2.size,
          trigger = _props2.trigger,
          wide = _props2.wide,
          frame = _props2.frame;
      var _state = this.state,
          position = _state.position,
          closed = _state.closed;

      var style = (0, _assign3.default)({}, this.state.style, this.props.style);
      var classes = (0, _classnames2.default)('ui', position, size, (0, _lib.useKeyOrValueAndKey)(wide, 'wide'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(flowing, 'flowing'), (0, _lib.useKeyOnly)(inverted, 'inverted'), 'popup transition visible', className);

      if (closed) return trigger;

      var unhandled = (0, _lib.getUnhandledProps)(Popup, this.props);
      var portalPropNames = _Portal2.default.handledProps;

      var rest = (0, _omit3.default)(unhandled, portalPropNames);
      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);
      var ElementType = (0, _lib.getElementType)(Popup, this.props);

      var popupJSX = _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, style: style, ref: this.handlePopupRef }),
        children,
        _lib.childrenUtils.isNil(children) && _PopupHeader2.default.create(header),
        _lib.childrenUtils.isNil(children) && _PopupContent2.default.create(content)
      );

      var mergedPortalProps = (0, _extends3.default)({}, this.getPortalProps(), portalProps);
      debug('portal props:', mergedPortalProps);

      return _react2.default.createElement(
        _Portal2.default,
        (0, _extends3.default)({}, mergedPortalProps, {
          frame: this.props.frame,
          trigger: trigger,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        popupJSX
      );
    }
  }]);
  return Popup;
}(_react.Component);

Popup.defaultProps = {
  position: 'top left',
  on: 'hover'
};
Popup._meta = {
  name: 'Popup',
  type: _lib.META.TYPES.MODULE
};
Popup.Content = _PopupContent2.default;
Popup.Header = _PopupHeader2.default;
Popup.handledProps = ['basic', 'children', 'className', 'content', 'flowing', 'frame', 'header', 'hideOnScroll', 'hoverable', 'inverted', 'offset', 'on', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'position', 'size', 'style', 'trigger', 'wide'];
var _default = Popup;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Popup.propTypes = {
  /** Display the popup without the pointing arrow. */
  basic: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Simple text content for the popover. */
  content: _lib.customPropTypes.itemShorthand,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: _propTypes2.default.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: _lib.customPropTypes.itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: _propTypes2.default.bool,

  /** Whether the popup should not close on hover. */
  hoverable: _propTypes2.default.bool,

  /** Invert the colors of the Popup. */
  inverted: _propTypes2.default.bool,

  /** Horizontal offset in pixels to be applied to the Popup. */
  offset: _propTypes2.default.number,

  /** Event triggering the popup. */
  on: _propTypes2.default.oneOf(['hover', 'click', 'focus']),

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes2.default.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _propTypes2.default.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes2.default.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _propTypes2.default.func,

  /** Position for the popover. */
  position: _propTypes2.default.oneOf(POSITIONS),

  /** Popup size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: _propTypes2.default.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: _propTypes2.default.node,

  /** Popup width. */
  wide: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['very'])]),

  /**iFly Custom **/
  frame: _propTypes2.default.string
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Popup/Popup.js');

  __REACT_HOT_LOADER__.register(POSITIONS, 'POSITIONS', 'src/modules/Popup/Popup.js');

  __REACT_HOT_LOADER__.register(Popup, 'Popup', 'src/modules/Popup/Popup.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Popup/Popup.js');
}();

;