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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('portal');

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */

var Portal = function (_Component) {
  (0, _inherits3.default)(Portal, _Component);

  function Portal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.handleDocumentClick = function () {
      var _this2;

      return (_this2 = _this).__handleDocumentClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleEscape = function () {
      var _this3;

      return (_this3 = _this).__handleEscape__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlePortalMouseLeave = function () {
      var _this4;

      return (_this4 = _this).__handlePortalMouseLeave__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handlePortalMouseEnter = function () {
      var _this5;

      return (_this5 = _this).__handlePortalMouseEnter__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleTriggerBlur = function () {
      var _this6;

      return (_this6 = _this).__handleTriggerBlur__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handleTriggerClick = function () {
      var _this7;

      return (_this7 = _this).__handleTriggerClick__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.handleTriggerFocus = function () {
      var _this8;

      return (_this8 = _this).__handleTriggerFocus__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.handleTriggerMouseLeave = function () {
      var _this9;

      return (_this9 = _this).__handleTriggerMouseLeave__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.handleTriggerMouseEnter = function () {
      var _this10;

      return (_this10 = _this).__handleTriggerMouseEnter__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _this.open = function () {
      var _this11;

      return (_this11 = _this).__open__REACT_HOT_LOADER__.apply(_this11, arguments);
    }, _this.openWithTimeout = function () {
      var _this12;

      return (_this12 = _this).__openWithTimeout__REACT_HOT_LOADER__.apply(_this12, arguments);
    }, _this.close = function () {
      var _this13;

      return (_this13 = _this).__close__REACT_HOT_LOADER__.apply(_this13, arguments);
    }, _this.closeWithTimeout = function () {
      var _this14;

      return (_this14 = _this).__closeWithTimeout__REACT_HOT_LOADER__.apply(_this14, arguments);
    }, _this.mountPortal = function () {
      var _this15;

      return (_this15 = _this).__mountPortal__REACT_HOT_LOADER__.apply(_this15, arguments);
    }, _this.unmountPortal = function () {
      var _this16;

      return (_this16 = _this).__unmountPortal__REACT_HOT_LOADER__.apply(_this16, arguments);
    }, _this.handleRef = function () {
      var _this17;

      return (_this17 = _this).__handleRef__REACT_HOT_LOADER__.apply(_this17, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      debug('componentDidMount()');
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      debug('componentDidUpdate()');
      // NOTE: Ideally the portal rendering would happen in the render() function
      // but React gives a warning about not being pure and suggests doing it
      // within this method.

      // If the portal is open, render (or re-render) the portal and child.
      this.renderPortal();

      if (prevState.open && !this.state.open) {
        debug('portal closed');
        this.unmountPortal();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unmountPortal();

      // Clean up timers
      clearTimeout(this.mouseEnterTimer);
      clearTimeout(this.mouseLeaveTimer);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

  }, {
    key: '__handleDocumentClick__REACT_HOT_LOADER__',
    value: function __handleDocumentClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          closeOnDocumentClick = _props.closeOnDocumentClick,
          closeOnRootNodeClick = _props.closeOnRootNodeClick;


      if (!this.rootNode // not mounted
      || !this.portalNode // no portal
      || (0, _invoke3.default)(this, 'triggerNode.contains', e.target) // event happened in trigger (delegate to trigger handlers)
      || (0, _invoke3.default)(this, 'portalNode.contains', e.target) // event happened in the portal
      ) return; // ignore the click

      var didClickInRootNode = this.rootNode.contains(e.target);

      if (closeOnDocumentClick && !didClickInRootNode || closeOnRootNodeClick && didClickInRootNode) {
        debug('handleDocumentClick()');

        this.close(e);
      }
    }
  }, {
    key: '__handleEscape__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    value: function __handleEscape__REACT_HOT_LOADER__(e) {
      if (!this.props.closeOnEscape) return;
      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;

      debug('handleEscape()');

      this.close(e);
    }
  }, {
    key: '__handlePortalMouseLeave__REACT_HOT_LOADER__',
    value: function __handlePortalMouseLeave__REACT_HOT_LOADER__(e) {
      var _props2 = this.props,
          closeOnPortalMouseLeave = _props2.closeOnPortalMouseLeave,
          mouseLeaveDelay = _props2.mouseLeaveDelay;


      if (!closeOnPortalMouseLeave) return;

      debug('handlePortalMouseLeave()');
      this.mouseLeaveTimer = this.closeWithTimeout(e, mouseLeaveDelay);
    }
  }, {
    key: '__handlePortalMouseEnter__REACT_HOT_LOADER__',
    value: function __handlePortalMouseEnter__REACT_HOT_LOADER__() {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = this.props.closeOnPortalMouseLeave;


      if (!closeOnPortalMouseLeave) return;

      debug('handlePortalMouseEnter()');
      clearTimeout(this.mouseLeaveTimer);
    }
  }, {
    key: '__handleTriggerBlur__REACT_HOT_LOADER__',
    value: function __handleTriggerBlur__REACT_HOT_LOADER__(e) {
      var _props3 = this.props,
          trigger = _props3.trigger,
          closeOnTriggerBlur = _props3.closeOnTriggerBlur;

      // Call original event handler

      (0, _invoke3.default)(trigger, 'props.onBlur', e);

      // do not close if focus is given to the portal
      var didFocusPortal = (0, _invoke3.default)(this, 'rootNode.contains', e.relatedTarget);

      if (!closeOnTriggerBlur || didFocusPortal) return;

      debug('handleTriggerBlur()');
      this.close(e);
    }
  }, {
    key: '__handleTriggerClick__REACT_HOT_LOADER__',
    value: function __handleTriggerClick__REACT_HOT_LOADER__(e) {
      var _props4 = this.props,
          trigger = _props4.trigger,
          closeOnTriggerClick = _props4.closeOnTriggerClick,
          openOnTriggerClick = _props4.openOnTriggerClick;
      var open = this.state.open;

      // Call original event handler

      (0, _invoke3.default)(trigger, 'props.onClick', e);

      if (open && closeOnTriggerClick) {
        debug('handleTriggerClick() - close');

        this.close(e);
      } else if (!open && openOnTriggerClick) {
        debug('handleTriggerClick() - open');

        this.open(e);
      }
    }
  }, {
    key: '__handleTriggerFocus__REACT_HOT_LOADER__',
    value: function __handleTriggerFocus__REACT_HOT_LOADER__(e) {
      var _props5 = this.props,
          trigger = _props5.trigger,
          openOnTriggerFocus = _props5.openOnTriggerFocus;

      // Call original event handler

      (0, _invoke3.default)(trigger, 'props.onFocus', e);

      if (!openOnTriggerFocus) return;

      debug('handleTriggerFocus()');
      this.open(e);
    }
  }, {
    key: '__handleTriggerMouseLeave__REACT_HOT_LOADER__',
    value: function __handleTriggerMouseLeave__REACT_HOT_LOADER__(e) {
      clearTimeout(this.mouseEnterTimer);

      var _props6 = this.props,
          trigger = _props6.trigger,
          closeOnTriggerMouseLeave = _props6.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _props6.mouseLeaveDelay;

      // Call original event handler

      (0, _invoke3.default)(trigger, 'props.onMouseLeave', e);

      if (!closeOnTriggerMouseLeave) return;

      debug('handleTriggerMouseLeave()');
      this.mouseLeaveTimer = this.closeWithTimeout(e, mouseLeaveDelay);
    }
  }, {
    key: '__handleTriggerMouseEnter__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    value: function __handleTriggerMouseEnter__REACT_HOT_LOADER__(e) {
      clearTimeout(this.mouseLeaveTimer);

      var _props7 = this.props,
          trigger = _props7.trigger,
          mouseEnterDelay = _props7.mouseEnterDelay,
          openOnTriggerMouseEnter = _props7.openOnTriggerMouseEnter;

      // Call original event handler

      (0, _invoke3.default)(trigger, 'props.onMouseEnter', this.handleTriggerMouseEnter);

      if (!openOnTriggerMouseEnter) return;

      debug('handleTriggerMouseEnter()');
      this.mouseEnterTimer = this.openWithTimeout(e, mouseEnterDelay);
    }
  }, {
    key: '__open__REACT_HOT_LOADER__',
    value: function __open__REACT_HOT_LOADER__(e) {
      debug('open()');

      var onOpen = this.props.onOpen;

      if (onOpen) onOpen(e, this.props);

      this.trySetState({ open: true });
    }
  }, {
    key: '__openWithTimeout__REACT_HOT_LOADER__',
    value: function __openWithTimeout__REACT_HOT_LOADER__(e, delay) {
      var _this18 = this;

      debug('openWithTimeout()', delay);
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0, _extends3.default)({}, e);
      return setTimeout(function () {
        return _this18.open(eventClone);
      }, delay || 0);
    }
  }, {
    key: '__close__REACT_HOT_LOADER__',
    value: function __close__REACT_HOT_LOADER__(e) {
      debug('close()');

      var onClose = this.props.onClose;

      if (onClose) onClose(e, this.props);

      this.trySetState({ open: false });
    }
  }, {
    key: '__closeWithTimeout__REACT_HOT_LOADER__',
    value: function __closeWithTimeout__REACT_HOT_LOADER__(e, delay) {
      var _this19 = this;

      debug('closeWithTimeout()', delay);
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0, _extends3.default)({}, e);
      return setTimeout(function () {
        return _this19.close(eventClone);
      }, delay || 0);
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      var _this20 = this;

      if (!this.state.open) return;
      debug('renderPortal()');

      var _props8 = this.props,
          children = _props8.children,
          className = _props8.className;


      this.mountPortal();

      // Server side rendering
      if (!_lib.isBrowser) return null;

      this.rootNode.className = className || '';

      // when re-rendering, first remove listeners before re-adding them to the new node
      if (this.portalNode) {
        this.portalNode.removeEventListener('mouseleave', this.handlePortalMouseLeave);
        this.portalNode.removeEventListener('mouseenter', this.handlePortalMouseEnter);
      }

      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react.Children.only(children), this.rootNode, function () {
        _this20.portalNode = _this20.rootNode.firstElementChild;

        _this20.portalNode.addEventListener('mouseleave', _this20.handlePortalMouseLeave);
        _this20.portalNode.addEventListener('mouseenter', _this20.handlePortalMouseEnter);
      });
    }
  }, {
    key: '__mountPortal__REACT_HOT_LOADER__',
    value: function __mountPortal__REACT_HOT_LOADER__() {
      if (!_lib.isBrowser || this.rootNode) return;

      debug('mountPortal()');
      var iframeId = void 0;
      var frameContext = void 0;
      var frameContextBody = void 0;

      /** iFly Custom Code **/
      if (this.props.frame) {
        iframeId = "ifc-chat-window-" + this.props.frame;
        frameContext = document.getElementById(iframeId);
        frameContextBody = frameContext.contentDocument || frameContext.contentWindow.document;
      } else {
        frameContextBody = document;
      }

      var _props9 = this.props,
          _props9$mountNode = _props9.mountNode,
          mountNode = _props9$mountNode === undefined ? _lib.isBrowser ? frameContextBody.body : null : _props9$mountNode,
          prepend = _props9.prepend;


      this.rootNode = document.createElement('div');

      if (prepend) {
        mountNode.insertBefore(this.rootNode, mountNode.firstElementChild);
      } else {
        mountNode.appendChild(this.rootNode);
      }

      document.addEventListener('click', this.handleDocumentClick);
      document.addEventListener('keydown', this.handleEscape);

      var onMount = this.props.onMount;

      if (onMount) onMount(null, this.props);
    }
  }, {
    key: '__unmountPortal__REACT_HOT_LOADER__',
    value: function __unmountPortal__REACT_HOT_LOADER__() {
      if (!_lib.isBrowser || !this.rootNode) return;

      debug('unmountPortal()');

      _reactDom2.default.unmountComponentAtNode(this.rootNode);
      this.rootNode.parentNode.removeChild(this.rootNode);

      this.portalNode.removeEventListener('mouseleave', this.handlePortalMouseLeave);
      this.portalNode.removeEventListener('mouseenter', this.handlePortalMouseEnter);

      this.rootNode = null;
      this.portalNode = null;

      document.removeEventListener('click', this.handleDocumentClick);
      document.removeEventListener('keydown', this.handleEscape);

      var onUnmount = this.props.onUnmount;

      if (onUnmount) onUnmount(null, this.props);
    }
  }, {
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__(c) {
      // TODO: Replace findDOMNode with Ref component when it will be merged
      this.triggerNode = _reactDom2.default.findDOMNode(c); // eslint-disable-line react/no-find-dom-node
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = this.props.trigger;


      if (!trigger) return null;

      return (0, _react.cloneElement)(trigger, {
        ref: this.handleRef,
        onBlur: this.handleTriggerBlur,
        onClick: this.handleTriggerClick,
        onFocus: this.handleTriggerFocus,
        onMouseLeave: this.handleTriggerMouseLeave,
        onMouseEnter: this.handleTriggerMouseEnter
      });
    }
  }]);
  return Portal;
}(_lib.AutoControlledComponent);

Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  openOnTriggerClick: true
};
Portal.autoControlledProps = ['open'];
Portal._meta = {
  name: 'Portal',
  type: _lib.META.TYPES.ADDON
};
Portal.handledProps = ['children', 'className', 'closeOnDocumentClick', 'closeOnEscape', 'closeOnPortalMouseLeave', 'closeOnRootNodeClick', 'closeOnTriggerBlur', 'closeOnTriggerClick', 'closeOnTriggerMouseLeave', 'defaultOpen', 'frame', 'mountNode', 'mouseEnterDelay', 'mouseLeaveDelay', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'openOnTriggerClick', 'openOnTriggerFocus', 'openOnTriggerMouseEnter', 'prepend', 'trigger'];
process.env.NODE_ENV !== "production" ? Portal.propTypes = {
  /** Primary content. */
  children: _propTypes2.default.node.isRequired,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: _propTypes2.default.bool,

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: _propTypes2.default.bool,

  /**
   * Controls whether or not the portal should close on a click on the portal background.
   * NOTE: This differs from closeOnDocumentClick:
   * - DocumentClick - any click not within the portal
   * - RootNodeClick - a click not within the portal but within the portal's wrapper
   */
  closeOnRootNodeClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: _propTypes2.default.bool,

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: _propTypes2.default.bool,

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** The node where the portal should mount. */
  mountNode: _propTypes2.default.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: _propTypes2.default.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: _propTypes2.default.number,

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes2.default.func,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _propTypes2.default.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes2.default.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _propTypes2.default.func,

  /** Controls whether or not the portal is displayed. */
  open: _propTypes2.default.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: _propTypes2.default.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: _propTypes2.default.bool,

  /** Controls whether the portal should be prepended to the mountNode instead of appended. */
  prepend: _propTypes2.default.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: _propTypes2.default.node,

  /**iFly Custom **/
  frame: _propTypes2.default.string
} : void 0;
var _default = Portal;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/addons/Portal/Portal.js');

  __REACT_HOT_LOADER__.register(Portal, 'Portal', 'src/addons/Portal/Portal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/addons/Portal/Portal.js');
}();

;