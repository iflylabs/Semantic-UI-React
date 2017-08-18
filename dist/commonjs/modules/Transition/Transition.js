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

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _lib = require('../../lib');

var _TransitionGroup = require('./TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('transition');

/**
 * A transition is an animation usually used to move content in or out of view.
 */

var Transition = function (_Component) {
  (0, _inherits3.default)(Transition, _Component);

  function Transition() {
    var _ref;

    (0, _classCallCheck3.default)(this, Transition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Transition.__proto__ || Object.getPrototypeOf(Transition)).call.apply(_ref, [this].concat(args)));

    _this.handleStart = function () {
      return _this.__handleStart__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleComplete = function () {
      return _this.__handleComplete__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.updateStatus = function () {
      return _this.__updateStatus__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.computeClasses = function () {
      return _this.__computeClasses__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.computeCompletedStatus = function () {
      return _this.__computeCompletedStatus__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.computeInitialStatuses = function () {
      return _this.__computeInitialStatuses__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.computeNextStatus = function () {
      return _this.__computeNextStatus__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.computeStatuses = function () {
      return _this.__computeStatuses__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.computeStyle = function () {
      return _this.__computeStyle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    var _this$computeInitialS = _this.computeInitialStatuses(),
        status = _this$computeInitialS.initial,
        next = _this$computeInitialS.next;

    _this.nextStatus = next;
    _this.state = { status: status };
    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  (0, _createClass3.default)(Transition, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      debug('componentDidMount()');

      this.updateStatus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      debug('componentWillReceiveProps()');

      var _computeStatuses = this.computeStatuses(nextProps),
          status = _computeStatuses.current,
          next = _computeStatuses.next;

      this.nextStatus = next;
      if (status) this.setState({ status: status });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      debug('componentDidUpdate()');

      this.updateStatus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');
    }

    // ----------------------------------------
    // Callback handling
    // ----------------------------------------

  }, {
    key: '__handleStart__REACT_HOT_LOADER__',
    value: function __handleStart__REACT_HOT_LOADER__() {
      var _this2 = this;

      var duration = this.props.duration;

      var status = this.nextStatus;

      this.nextStatus = null;
      this.setState({ status: status, animating: true }, function () {
        (0, _invoke3.default)(_this2.props, 'onStart', null, (0, _extends3.default)({}, _this2.props, { status: status }));
        setTimeout(_this2.handleComplete, duration);
      });
    }
  }, {
    key: '__handleComplete__REACT_HOT_LOADER__',
    value: function __handleComplete__REACT_HOT_LOADER__() {
      var _this3 = this;

      var current = this.state.status;


      (0, _invoke3.default)(this.props, 'onComplete', null, (0, _extends3.default)({}, this.props, { status: current }));

      if (this.nextStatus) {
        this.handleStart();
        return;
      }

      var status = this.computeCompletedStatus();
      var callback = current === Transition.ENTERING ? 'onShow' : 'onHide';

      this.setState({ status: status, animating: false }, function () {
        (0, _invoke3.default)(_this3.props, callback, null, (0, _extends3.default)({}, _this3.props, { status: status }));
      });
    }
  }, {
    key: '__updateStatus__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    value: function __updateStatus__REACT_HOT_LOADER__() {
      var animating = this.state.animating;


      if (this.nextStatus) {
        this.nextStatus = this.computeNextStatus();
        if (!animating) this.handleStart();
      }
    }
  }, {
    key: '__computeClasses__REACT_HOT_LOADER__',
    value: function __computeClasses__REACT_HOT_LOADER__() {
      var _props = this.props,
          animation = _props.animation,
          children = _props.children;
      var _state = this.state,
          animating = _state.animating,
          status = _state.status;


      var childClasses = (0, _get3.default)(children, 'props.className');
      var directional = (0, _includes3.default)(_lib.SUI.DIRECTIONAL_TRANSITIONS, animation);

      if (directional) {
        return (0, _classnames2.default)(animation, childClasses, (0, _lib.useKeyOnly)(animating, 'animating'), (0, _lib.useKeyOnly)(status === Transition.ENTERING, 'in'), (0, _lib.useKeyOnly)(status === Transition.EXITING, 'out'), (0, _lib.useKeyOnly)(status === Transition.EXITED, 'hidden'), (0, _lib.useKeyOnly)(status !== Transition.EXITED, 'visible'), 'transition');
      }

      return (0, _classnames2.default)(animation, childClasses, (0, _lib.useKeyOnly)(animating, 'animating transition'));
    }
  }, {
    key: '__computeCompletedStatus__REACT_HOT_LOADER__',
    value: function __computeCompletedStatus__REACT_HOT_LOADER__() {
      var unmountOnHide = this.props.unmountOnHide;
      var status = this.state.status;


      if (status === Transition.ENTERING) return Transition.ENTERED;
      return unmountOnHide ? Transition.UNMOUNTED : Transition.EXITED;
    }
  }, {
    key: '__computeInitialStatuses__REACT_HOT_LOADER__',
    value: function __computeInitialStatuses__REACT_HOT_LOADER__() {
      var _props2 = this.props,
          visible = _props2.visible,
          mountOnShow = _props2.mountOnShow,
          transitionOnMount = _props2.transitionOnMount,
          unmountOnHide = _props2.unmountOnHide;


      if (visible) {
        if (transitionOnMount) {
          return {
            initial: Transition.EXITED,
            next: Transition.ENTERING
          };
        }
        return { initial: Transition.ENTERED };
      }

      if (mountOnShow || unmountOnHide) return { initial: Transition.UNMOUNTED };
      return { initial: Transition.EXITED };
    }
  }, {
    key: '__computeNextStatus__REACT_HOT_LOADER__',
    value: function __computeNextStatus__REACT_HOT_LOADER__() {
      var _state2 = this.state,
          animating = _state2.animating,
          status = _state2.status;


      if (animating) return status === Transition.ENTERING ? Transition.EXITING : Transition.ENTERING;
      return status === Transition.ENTERED ? Transition.EXITING : Transition.ENTERING;
    }
  }, {
    key: '__computeStatuses__REACT_HOT_LOADER__',
    value: function __computeStatuses__REACT_HOT_LOADER__(props) {
      var status = this.state.status;
      var visible = props.visible;


      if (visible) {
        return {
          current: status === Transition.UNMOUNTED && Transition.EXITED,
          next: status !== Transition.ENTERING && status !== Transition.ENTERED && Transition.ENTERING
        };
      }

      return {
        next: (status === Transition.ENTERING || status === Transition.ENTERED) && Transition.EXITING
      };
    }
  }, {
    key: '__computeStyle__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function __computeStyle__REACT_HOT_LOADER__() {
      var _props3 = this.props,
          children = _props3.children,
          duration = _props3.duration;

      var childStyle = (0, _get3.default)(children, 'props.style');

      return (0, _extends3.default)({}, childStyle, { animationDuration: duration + 'ms' });
    }
  }, {
    key: 'render',
    value: function render() {
      debug('render()');
      debug('props', this.props);
      debug('state', this.state);

      var children = this.props.children;
      var status = this.state.status;


      if (status === Transition.UNMOUNTED) return null;
      return (0, _react.cloneElement)(children, {
        className: this.computeClasses(),
        style: this.computeStyle()
      });
    }
  }]);
  return Transition;
}(_react.Component);

Transition.defaultProps = {
  animation: 'fade',
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false
};
Transition._meta = {
  name: 'Transition',
  type: _lib.META.TYPES.MODULE
};
Transition.ENTERED = 'ENTERED';
Transition.ENTERING = 'ENTERING';
Transition.EXITED = 'EXITED';
Transition.EXITING = 'EXITING';
Transition.UNMOUNTED = 'UNMOUNTED';
Transition.Group = _TransitionGroup2.default;
Transition.handledProps = ['animation', 'children', 'duration', 'mountOnShow', 'onComplete', 'onHide', 'onShow', 'onStart', 'reactKey', 'transitionOnMount', 'unmountOnHide', 'visible'];
var _default = Transition;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Transition.propTypes = {
  /** Named animation event to used. Must be defined in CSS. */
  animation: _propTypes2.default.oneOf(_lib.SUI.TRANSITIONS),

  /** Primary content. */
  children: _propTypes2.default.element.isRequired,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: _propTypes2.default.number,

  /** Show the component; triggers the enter or exit animation. */
  visible: _propTypes2.default.bool,

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: _propTypes2.default.bool,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: _propTypes2.default.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: _propTypes2.default.func,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: _propTypes2.default.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: _propTypes2.default.func,

  /** React's key of the element. */
  reactKey: _propTypes2.default.string,

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: _propTypes2.default.bool,

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: _propTypes2.default.bool
} : void 0;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Transition/Transition.js');

  __REACT_HOT_LOADER__.register(Transition, 'Transition', 'src/modules/Transition/Transition.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Transition/Transition.js');
}();

;