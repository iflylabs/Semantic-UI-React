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

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('transition_group');

/**
 * A Transition.Group animates children as they mount and unmount.
 */

var TransitionGroup = function (_React$Component) {
  (0, _inherits3.default)(TransitionGroup, _React$Component);

  function TransitionGroup() {
    var _ref;

    (0, _classCallCheck3.default)(this, TransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionGroup.__proto__ || Object.getPrototypeOf(TransitionGroup)).call.apply(_ref, [this].concat(args)));

    _this.handleOnHide = function () {
      return _this.__handleOnHide__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.wrapChild = function () {
      return _this.__wrapChild__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    var children = _this.props.children;

    _this.state = { children: (0, _mapValues3.default)((0, _lib.getChildMapping)(children), function (child) {
        return _this.wrapChild(child);
      }) };
    return _this;
  }

  (0, _createClass3.default)(TransitionGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      debug('componentWillReceiveProps()');

      var prevMapping = this.state.children;

      var nextMapping = (0, _lib.getChildMapping)(nextProps.children);
      var children = (0, _lib.mergeChildMappings)(prevMapping, nextMapping);

      (0, _forEach3.default)(children, function (child, key) {
        var hasPrev = (0, _has3.default)(prevMapping, key);
        var hasNext = (0, _has3.default)(nextMapping, key);
        var prevChild = prevMapping[key];

        var isLeaving = !(0, _get3.default)(prevChild, 'props.visible');

        // item is new (entering), should be wrapped
        if (hasNext && (!hasPrev || isLeaving)) {
          children[key] = _this2.wrapChild(child, true);
          return;
        }

        // item is old (exiting), should be updated
        if (!hasNext && hasPrev && !isLeaving) {
          children[key] = (0, _react.cloneElement)(prevChild, { visible: false });
          return;
        }

        // item hasn't changed transition states, copy over the last transition props;
        var _prevChild$props = prevChild.props,
            visible = _prevChild$props.visible,
            transitionOnMount = _prevChild$props.transitionOnMount;


        children[key] = (0, _react.cloneElement)(child, { visible: visible, transitionOnMount: transitionOnMount });
      });

      this.setState({ children: children });
    }
  }, {
    key: '__handleOnHide__REACT_HOT_LOADER__',
    value: function __handleOnHide__REACT_HOT_LOADER__(nothing, childProps) {
      debug('handleOnHide', childProps);
      var reactKey = childProps.reactKey;


      this.setState(function (state) {
        var children = (0, _extends3.default)({}, state.children);
        delete children[reactKey];

        return { children: children };
      });
    }
  }, {
    key: '__wrapChild__REACT_HOT_LOADER__',
    value: function __wrapChild__REACT_HOT_LOADER__(child) {
      var transitionOnMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _props = this.props,
          animation = _props.animation,
          duration = _props.duration;
      var key = child.key;


      return _react2.default.createElement(
        _Transition2.default,
        {
          animation: animation,
          duration: duration,
          key: key,
          onHide: this.handleOnHide,
          reactKey: key,
          transitionOnMount: transitionOnMount
        },
        child
      );
    }
  }, {
    key: 'render',
    value: function render() {
      debug('render');
      debug('props', this.props);
      debug('state', this.state);

      var children = this.state.children;

      var ElementType = (0, _lib.getElementType)(TransitionGroup, this.props);
      var rest = (0, _lib.getUnhandledProps)(TransitionGroup, this.props);

      return _react2.default.createElement(
        ElementType,
        rest,
        (0, _values3.default)(children)
      );
    }
  }]);
  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.defaultProps = {
  animation: 'fade',
  duration: 500
};
TransitionGroup._meta = {
  name: 'TransitionGroup',
  parent: 'Transition',
  type: _lib.META.TYPES.MODULE
};
TransitionGroup.handledProps = ['animation', 'as', 'children', 'duration'];
var _default = TransitionGroup;
exports.default = _default;
process.env.NODE_ENV !== "production" ? TransitionGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Named animation event to used. Must be defined in CSS. */
  animation: _propTypes2.default.oneOf(_lib.SUI.TRANSITIONS),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: _propTypes2.default.number
} : void 0;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Transition/TransitionGroup.js');

  __REACT_HOT_LOADER__.register(TransitionGroup, 'TransitionGroup', 'src/modules/Transition/TransitionGroup.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Transition/TransitionGroup.js');
}();

;