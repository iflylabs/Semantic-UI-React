import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';

import PropTypes from 'prop-types';
import { Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';

import { AutoControlledComponent as Component, isBrowser, keyboardKey, makeDebugger, META } from '../../lib';

var debug = makeDebugger('portal');

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.handleDocumentClick = function (e) {
      var _this$props = _this.props,
          closeOnDocumentClick = _this$props.closeOnDocumentClick,
          closeOnRootNodeClick = _this$props.closeOnRootNodeClick;


      if (!_this.rootNode // not mounted
      || !_this.portalNode // no portal
      || _invoke(_this, 'triggerNode.contains', e.target) // event happened in trigger (delegate to trigger handlers)
      || _invoke(_this, 'portalNode.contains', e.target) // event happened in the portal
      ) return; // ignore the click

      var didClickInRootNode = _this.rootNode.contains(e.target);

      if (closeOnDocumentClick && !didClickInRootNode || closeOnRootNodeClick && didClickInRootNode) {
        debug('handleDocumentClick()');

        _this.close(e);
      }
    }, _this.handleEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboardKey.getCode(e) !== keyboardKey.Escape) return;

      debug('handleEscape()');

      _this.close(e);
    }, _this.handlePortalMouseLeave = function (e) {
      var _this$props2 = _this.props,
          closeOnPortalMouseLeave = _this$props2.closeOnPortalMouseLeave,
          mouseLeaveDelay = _this$props2.mouseLeaveDelay;


      if (!closeOnPortalMouseLeave) return;

      debug('handlePortalMouseLeave()');
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    }, _this.handlePortalMouseEnter = function () {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;


      if (!closeOnPortalMouseLeave) return;

      debug('handlePortalMouseEnter()');
      clearTimeout(_this.mouseLeaveTimer);
    }, _this.handleTriggerBlur = function (e) {
      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeOnTriggerBlur = _this$props3.closeOnTriggerBlur;

      // Call original event handler

      _invoke(trigger, 'props.onBlur', e);

      // do not close if focus is given to the portal
      var didFocusPortal = _invoke(_this, 'rootNode.contains', e.relatedTarget);

      if (!closeOnTriggerBlur || didFocusPortal) return;

      debug('handleTriggerBlur()');
      _this.close(e);
    }, _this.handleTriggerClick = function (e) {
      var _this$props4 = _this.props,
          trigger = _this$props4.trigger,
          closeOnTriggerClick = _this$props4.closeOnTriggerClick,
          openOnTriggerClick = _this$props4.openOnTriggerClick;
      var open = _this.state.open;

      // Call original event handler

      _invoke(trigger, 'props.onClick', e);

      if (open && closeOnTriggerClick) {
        debug('handleTriggerClick() - close');

        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        debug('handleTriggerClick() - open');

        _this.open(e);
      }
    }, _this.handleTriggerFocus = function (e) {
      var _this$props5 = _this.props,
          trigger = _this$props5.trigger,
          openOnTriggerFocus = _this$props5.openOnTriggerFocus;

      // Call original event handler

      _invoke(trigger, 'props.onFocus', e);

      if (!openOnTriggerFocus) return;

      debug('handleTriggerFocus()');
      _this.open(e);
    }, _this.handleTriggerMouseLeave = function (e) {
      clearTimeout(_this.mouseEnterTimer);

      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          closeOnTriggerMouseLeave = _this$props6.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _this$props6.mouseLeaveDelay;

      // Call original event handler

      _invoke(trigger, 'props.onMouseLeave', e);

      if (!closeOnTriggerMouseLeave) return;

      debug('handleTriggerMouseLeave()');
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    }, _this.handleTriggerMouseEnter = function (e) {
      clearTimeout(_this.mouseLeaveTimer);

      var _this$props7 = _this.props,
          trigger = _this$props7.trigger,
          mouseEnterDelay = _this$props7.mouseEnterDelay,
          openOnTriggerMouseEnter = _this$props7.openOnTriggerMouseEnter;

      // Call original event handler

      _invoke(trigger, 'props.onMouseEnter', _this.handleTriggerMouseEnter);

      if (!openOnTriggerMouseEnter) return;

      debug('handleTriggerMouseEnter()');
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    }, _this.open = function (e) {
      debug('open()');

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
    }, _this.openWithTimeout = function (e, delay) {
      debug('openWithTimeout()', delay);
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = _extends({}, e);
      return setTimeout(function () {
        return _this.open(eventClone);
      }, delay || 0);
    }, _this.close = function (e) {
      debug('close()');

      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.closeWithTimeout = function (e, delay) {
      debug('closeWithTimeout()', delay);
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = _extends({}, e);
      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    }, _this.mountPortal = function () {
      if (!isBrowser || _this.rootNode) return;

      debug('mountPortal()');
      var iframeId = "ifc-chat-window-" + _this.props.frame;
      var frameContext = document.getElementById(iframeId);
      var frameContextBody = frameContext.contentDocument || frameContext.contentWindow.document;
      console.log(frameContext);
      console.log(frameContextBody);

      var _this$props8 = _this.props,
          _this$props8$mountNod = _this$props8.mountNode,
          mountNode = _this$props8$mountNod === undefined ? isBrowser ? frameContextBody : null : _this$props8$mountNod,
          prepend = _this$props8.prepend;


      _this.rootNode = document.createElement('div');

      if (prepend) {
        mountNode.insertBefore(_this.rootNode, mountNode.firstElementChild);
      } else {
        console.log("print mountNode");
        console.log(mountNode);
        mountNode.appendChild(_this.rootNode);
      }

      document.addEventListener('click', _this.handleDocumentClick);
      document.addEventListener('keydown', _this.handleEscape);

      var onMount = _this.props.onMount;

      if (onMount) onMount(null, _this.props);
    }, _this.unmountPortal = function () {
      if (!isBrowser || !_this.rootNode) return;

      debug('unmountPortal()');

      ReactDOM.unmountComponentAtNode(_this.rootNode);
      _this.rootNode.parentNode.removeChild(_this.rootNode);

      _this.portalNode.removeEventListener('mouseleave', _this.handlePortalMouseLeave);
      _this.portalNode.removeEventListener('mouseenter', _this.handlePortalMouseEnter);

      _this.rootNode = null;
      _this.portalNode = null;

      document.removeEventListener('click', _this.handleDocumentClick);
      document.removeEventListener('keydown', _this.handleEscape);

      var onUnmount = _this.props.onUnmount;

      if (onUnmount) onUnmount(null, _this.props);
    }, _this.handleRef = function (c) {
      // TODO: Replace findDOMNode with Ref component when it will be merged
      _this.triggerNode = ReactDOM.findDOMNode(c); // eslint-disable-line react/no-find-dom-node
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Portal, [{
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

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      var _this2 = this;

      if (!this.state.open) return;
      debug('renderPortal()');

      var _props = this.props,
          children = _props.children,
          className = _props.className;


      this.mountPortal();

      // Server side rendering
      if (!isBrowser) return null;

      this.rootNode.className = className || '';

      // when re-rendering, first remove listeners before re-adding them to the new node
      if (this.portalNode) {
        this.portalNode.removeEventListener('mouseleave', this.handlePortalMouseLeave);
        this.portalNode.removeEventListener('mouseenter', this.handlePortalMouseEnter);
      }

      ReactDOM.unstable_renderSubtreeIntoContainer(this, Children.only(children), this.rootNode, function () {
        _this2.portalNode = _this2.rootNode.firstElementChild;

        _this2.portalNode.addEventListener('mouseleave', _this2.handlePortalMouseLeave);
        _this2.portalNode.addEventListener('mouseenter', _this2.handlePortalMouseEnter);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = this.props.trigger;


      if (!trigger) return null;

      return cloneElement(trigger, {
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
}(Component);

Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  openOnTriggerClick: true
};
Portal.autoControlledProps = ['open'];
Portal._meta = {
  name: 'Portal',
  type: META.TYPES.ADDON
};
Portal.handledProps = ['children', 'className', 'closeOnDocumentClick', 'closeOnEscape', 'closeOnPortalMouseLeave', 'closeOnRootNodeClick', 'closeOnTriggerBlur', 'closeOnTriggerClick', 'closeOnTriggerMouseLeave', 'defaultOpen', 'frame', 'mountNode', 'mouseEnterDelay', 'mouseLeaveDelay', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'openOnTriggerClick', 'openOnTriggerFocus', 'openOnTriggerMouseEnter', 'prepend', 'trigger'];
process.env.NODE_ENV !== "production" ? Portal.propTypes = {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** Additional classes. */
  className: PropTypes.string,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: PropTypes.bool,

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: PropTypes.bool,

  /**
   * Controls whether or not the portal should close on a click on the portal background.
   * NOTE: This differs from closeOnDocumentClick:
   * - DocumentClick - any click not within the portal
   * - RootNodeClick - a click not within the portal but within the portal's wrapper
   */
  closeOnRootNodeClick: PropTypes.bool,

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: PropTypes.bool,

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: PropTypes.bool,

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: PropTypes.bool,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** The node where the portal should mount. */
  mountNode: PropTypes.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: PropTypes.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: PropTypes.number,

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: PropTypes.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: PropTypes.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: PropTypes.bool,

  /** Controls whether the portal should be prepended to the mountNode instead of appended. */
  prepend: PropTypes.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node,

  /**iFly Custom **/
  frame: PropTypes.string
} : void 0;


export default Portal;