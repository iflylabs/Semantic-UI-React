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

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

var _ModalActions = require('./ModalActions');

var _ModalActions2 = _interopRequireDefault(_ModalActions);

var _ModalDescription = require('./ModalDescription');

var _ModalDescription2 = _interopRequireDefault(_ModalDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('modal');

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.getMountNode = function () {
      var _this2;

      return (_this2 = _this).__getMountNode__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleActionsOverrides = function () {
      var _this3;

      return (_this3 = _this).__handleActionsOverrides__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleClose = function () {
      var _this4;

      return (_this4 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleIconOverrides = function () {
      var _this5;

      return (_this5 = _this).__handleIconOverrides__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleOpen = function () {
      var _this6;

      return (_this6 = _this).__handleOpen__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handlePortalMount = function () {
      var _this7;

      return (_this7 = _this).__handlePortalMount__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.handlePortalUnmount = function () {
      var _this8;

      return (_this8 = _this).__handlePortalUnmount__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.handleRef = function () {
      var _this9;

      return (_this9 = _this).__handleRef__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.setPosition = function () {
      var _this10;

      return (_this10 = _this).__setPosition__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _this.renderContent = function () {
      var _this11;

      return (_this11 = _this).__renderContent__REACT_HOT_LOADER__.apply(_this11, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');
      this.handlePortalUnmount();
    }

    // Do not access document when server side rendering

  }, {
    key: '__getMountNode__REACT_HOT_LOADER__',
    value: function __getMountNode__REACT_HOT_LOADER__() {
      return _lib.isBrowser ? this.props.mountNode || document.body : null;
    }
  }, {
    key: '__handleActionsOverrides__REACT_HOT_LOADER__',
    value: function __handleActionsOverrides__REACT_HOT_LOADER__(predefinedProps) {
      var _this12 = this;

      return {
        onActionClick: function onActionClick(e, actionProps) {
          var triggerClose = actionProps.triggerClose;


          (0, _invoke3.default)(predefinedProps, 'onActionClick', e, actionProps);
          if (triggerClose) _this12.handleClose(e);
        }
      };
    }
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__(e) {
      debug('close()');

      var onClose = this.props.onClose;

      if (onClose) onClose(e, this.props);

      this.trySetState({ open: false });
    }
  }, {
    key: '__handleIconOverrides__REACT_HOT_LOADER__',
    value: function __handleIconOverrides__REACT_HOT_LOADER__(predefinedProps) {
      var _this13 = this;

      return {
        onClick: function onClick(e) {
          (0, _invoke3.default)(predefinedProps, 'onClick', e);
          _this13.handleClose(e);
        }
      };
    }
  }, {
    key: '__handleOpen__REACT_HOT_LOADER__',
    value: function __handleOpen__REACT_HOT_LOADER__(e) {
      debug('open()');

      var onOpen = this.props.onOpen;

      if (onOpen) onOpen(e, this.props);

      this.trySetState({ open: true });
    }
  }, {
    key: '__handlePortalMount__REACT_HOT_LOADER__',
    value: function __handlePortalMount__REACT_HOT_LOADER__(e) {
      debug('handlePortalMount()');
      var dimmer = this.props.dimmer;

      var mountNode = this.getMountNode();

      if (dimmer) {
        debug('adding dimmer');
        mountNode.classList.add('dimmable');
        mountNode.classList.add('dimmed');

        if (dimmer === 'blurring') {
          debug('adding blurred dimmer');
          mountNode.classList.add('blurring');
        }
      }

      this.setPosition();

      var onMount = this.props.onMount;

      if (onMount) onMount(e, this.props);
    }
  }, {
    key: '__handlePortalUnmount__REACT_HOT_LOADER__',
    value: function __handlePortalUnmount__REACT_HOT_LOADER__(e) {
      debug('handlePortalUnmount()');

      // Always remove all dimmer classes.
      // If the dimmer value changes while the modal is open, then removing its
      // current value could leave cruft classes previously added.
      var mountNode = this.getMountNode();

      // Heads up, IE doesn't support second argument in remove()
      mountNode.classList.remove('blurring');
      mountNode.classList.remove('dimmable');
      mountNode.classList.remove('dimmed');
      mountNode.classList.remove('scrollable');

      cancelAnimationFrame(this.animationRequestId);

      var onUnmount = this.props.onUnmount;

      if (onUnmount) onUnmount(e, this.props);
    }
  }, {
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__(c) {
      return this.ref = c;
    }
  }, {
    key: '__setPosition__REACT_HOT_LOADER__',
    value: function __setPosition__REACT_HOT_LOADER__() {
      if (this.ref) {
        var mountNode = this.getMountNode();

        var _ref$getBoundingClien = this.ref.getBoundingClientRect(),
            height = _ref$getBoundingClien.height;

        var marginTop = -Math.round(height / 2);
        var scrolling = height >= window.innerHeight;

        var newState = {};

        if (this.state.marginTop !== marginTop) {
          newState.marginTop = marginTop;
        }

        if (this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;

          if (scrolling) {
            mountNode.classList.add('scrolling');
          } else {
            mountNode.classList.remove('scrolling');
          }
        }

        if (Object.keys(newState).length > 0) this.setState(newState);
      }

      this.animationRequestId = requestAnimationFrame(this.setPosition);
    }
  }, {
    key: '__renderContent__REACT_HOT_LOADER__',
    value: function __renderContent__REACT_HOT_LOADER__(rest) {
      var _props = this.props,
          actions = _props.actions,
          basic = _props.basic,
          children = _props.children,
          className = _props.className,
          closeIcon = _props.closeIcon,
          content = _props.content,
          header = _props.header,
          size = _props.size,
          style = _props.style;
      var _state = this.state,
          marginTop = _state.marginTop,
          scrolling = _state.scrolling;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = (0, _lib.getElementType)(Modal, this.props);

      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = _Icon2.default.create(closeIconName, { overrideProps: this.handleIconOverrides });

      if (!_lib.childrenUtils.isNil(children)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes, style: (0, _extends3.default)({ marginTop: marginTop }, style), ref: this.handleRef }),
          closeIconJSX,
          children
        );
      }

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, style: (0, _extends3.default)({ marginTop: marginTop }, style), ref: this.handleRef }),
        closeIconJSX,
        _ModalHeader2.default.create(header),
        _ModalContent2.default.create(content),
        _ModalActions2.default.create(actions, { overrideProps: this.handleActionsOverrides })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var open = this.state.open;
      var _props2 = this.props,
          closeOnDimmerClick = _props2.closeOnDimmerClick,
          closeOnDocumentClick = _props2.closeOnDocumentClick,
          dimmer = _props2.dimmer;

      var mountNode = this.getMountNode();

      // Short circuit when server side rendering
      if (!_lib.isBrowser) return null;

      var unhandled = (0, _lib.getUnhandledProps)(Modal, this.props);
      var portalPropNames = _Portal2.default.handledProps;

      var rest = (0, _omit3.default)(unhandled, portalPropNames);
      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);

      // wrap dimmer modals
      var dimmerClasses = !dimmer ? null : (0, _classnames2.default)('ui', dimmer === 'inverted' && 'inverted', 'page modals dimmer transition visible active');

      // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return _react2.default.createElement(
        _Portal2.default,
        (0, _extends3.default)({
          closeOnDocumentClick: closeOnDocumentClick,
          closeOnRootNodeClick: closeOnDimmerClick
        }, portalProps, {
          className: dimmerClasses,
          mountNode: mountNode,
          open: open,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        this.renderContent(rest)
      );
    }
  }]);
  return Modal;
}(_lib.AutoControlledComponent);

Modal.defaultProps = {
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false
};
Modal.autoControlledProps = ['open'];
Modal._meta = {
  name: 'Modal',
  type: _lib.META.TYPES.MODULE
};
Modal.Header = _ModalHeader2.default;
Modal.Content = _ModalContent2.default;
Modal.Description = _ModalDescription2.default;
Modal.Actions = _ModalActions2.default;
Modal.handledProps = ['actions', 'as', 'basic', 'children', 'className', 'closeIcon', 'closeOnDimmerClick', 'closeOnDocumentClick', 'content', 'defaultOpen', 'dimmer', 'header', 'mountNode', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'size', 'style'];
process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Elements to render as Modal action buttons. */
  actions: _propTypes2.default.arrayOf(_lib.customPropTypes.itemShorthand),

  /** A modal can reduce its complexity */
  basic: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Icon. */
  closeIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object, _propTypes2.default.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: _propTypes2.default.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: _propTypes2.default.bool,

  /** Simple text content for the Modal. */
  content: _lib.customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['inverted', 'blurring'])]),

  /** Modal displayed above the content in bold. */
  header: _lib.customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: _propTypes2.default.any,

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

  /** Controls whether or not the Modal is displayed. */
  open: _propTypes2.default.bool,

  /** A modal can vary in size */
  size: _propTypes2.default.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),

  /** Custom styles. */
  style: _propTypes2.default.object

  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */
} : void 0;
var _default = Modal;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Modal/Modal.js');

  __REACT_HOT_LOADER__.register(Modal, 'Modal', 'src/modules/Modal/Modal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Modal/Modal.js');
}();

;