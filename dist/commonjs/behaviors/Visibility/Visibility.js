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

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */
var Visibility = function (_Component) {
  (0, _inherits3.default)(Visibility, _Component);

  function Visibility() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Visibility);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call.apply(_ref, [this].concat(args))), _this), _this.calculations = {
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    }, _this.firedCallbacks = [], _this.execute = function () {
      var _this2;

      return (_this2 = _this).__execute__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.fireOnPassed = function () {
      var _this3;

      return (_this3 = _this).__fireOnPassed__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRef = function () {
      var _this4;

      return (_this4 = _this).__handleRef__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleScroll = function () {
      var _this5;

      return (_this5 = _this).__handleScroll__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Visibility, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var continuous = _ref2.continuous,
          once = _ref2.once;

      var cleanOut = continuous !== this.props.continuous || once !== this.props.once;
      if (cleanOut) this.firedCallbacks = [];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: '__execute__REACT_HOT_LOADER__',
    value: function __execute__REACT_HOT_LOADER__(callback, name) {
      var _props = this.props,
          continuous = _props.continuous,
          once = _props.once;


      if (!callback) return;
      // Reverse callbacks aren't fired continuously
      if (this.calculations[name] === false) return;

      // Always fire callback if continuous = true
      if (continuous) {
        callback(null, (0, _extends3.default)({}, this.props, { calculations: this.calculations }));
        return;
      }

      // If once = true, fire callback only if it wasn't fired before
      if (once) {
        if (!(0, _includes3.default)(this.firedCallbacks, name)) {
          this.firedCallbacks.push(name);
          callback(null, (0, _extends3.default)({}, this.props, { calculations: this.calculations }));
        }

        return;
      }

      // Fire callback only if the value changed
      if (this.calculations[name] !== this.oldCalculations[name]) {
        callback(null, (0, _extends3.default)({}, this.props, { calculations: this.calculations }));
      }
    }
  }, {
    key: 'fireCallbacks',
    value: function fireCallbacks() {
      var _this6 = this;

      var _props2 = this.props,
          onBottomPassed = _props2.onBottomPassed,
          onBottomPassedReverse = _props2.onBottomPassedReverse,
          onBottomVisible = _props2.onBottomVisible,
          onBottomVisibleReverse = _props2.onBottomVisibleReverse,
          onPassing = _props2.onPassing,
          onPassingReverse = _props2.onPassingReverse,
          onTopPassed = _props2.onTopPassed,
          onTopPassedReverse = _props2.onTopPassedReverse,
          onTopVisible = _props2.onTopVisible,
          onTopVisibleReverse = _props2.onTopVisibleReverse,
          onOffScreen = _props2.onOffScreen,
          onOnScreen = _props2.onOnScreen;

      var callbacks = {
        bottomPassed: onBottomPassed,
        bottomVisible: onBottomVisible,
        passing: onPassing,
        offScreen: onOffScreen,
        onScreen: onOnScreen,
        topPassed: onTopPassed,
        topVisible: onTopVisible
      };
      var reverse = {
        bottomPassed: onBottomPassedReverse,
        bottomVisible: onBottomVisibleReverse,
        passing: onPassingReverse,
        topPassed: onTopPassedReverse,
        topVisible: onTopVisibleReverse
      };

      (0, _invoke3.default)(this.props, 'onUpdate', null, (0, _extends3.default)({}, this.props, { calculations: this.calculations }));
      this.fireOnPassed();

      (0, _forEach3.default)(callbacks, function (callback, name) {
        return _this6.execute(callback, name);
      });
      (0, _forEach3.default)(reverse, function (callback, name) {
        return _this6.execute(callback, name);
      });
    }
  }, {
    key: '__fireOnPassed__REACT_HOT_LOADER__',
    value: function __fireOnPassed__REACT_HOT_LOADER__() {
      var _this7 = this;

      var _calculations = this.calculations,
          percentagePassed = _calculations.percentagePassed,
          pixelsPassed = _calculations.pixelsPassed;
      var onPassed = this.props.onPassed;


      (0, _forEach3.default)(onPassed, function (callback, passed) {
        var pixelsValue = Number(passed);

        if (pixelsValue && pixelsPassed >= pixelsValue) {
          _this7.execute(callback, passed);
          return;
        }

        var matchPercentage = ('' + passed).match(/^(\d+)%$/);
        if (!matchPercentage) return;

        var percentageValue = Number(matchPercentage[1]) / 100;
        if (percentagePassed >= percentageValue) _this7.execute(callback, passed);
      });
    }
  }, {
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__(c) {
      return this.ref = c;
    }
  }, {
    key: '__handleScroll__REACT_HOT_LOADER__',
    value: function __handleScroll__REACT_HOT_LOADER__() {
      var _ref$getBoundingClien = this.ref.getBoundingClientRect(),
          bottom = _ref$getBoundingClien.bottom,
          height = _ref$getBoundingClien.height,
          top = _ref$getBoundingClien.top,
          width = _ref$getBoundingClien.width;

      var topPassed = top < 0;
      var bottomPassed = bottom < 0;

      var pixelsPassed = bottomPassed ? 0 : Math.max(top * -1, 0);
      var percentagePassed = pixelsPassed / height;

      var bottomVisible = bottom >= 0 && bottom <= window.innerHeight;
      var topVisible = top >= 0 && top <= window.innerHeight;

      var fits = topVisible && bottomVisible;
      var passing = topPassed && !bottomPassed;

      var onScreen = (topVisible || topPassed) && !bottomPassed;
      var offScreen = !onScreen;

      this.oldCalculations = this.calculations;
      this.calculations = {
        bottomPassed: bottomPassed,
        bottomVisible: bottomVisible,
        fits: fits,
        height: height,
        passing: passing,
        percentagePassed: percentagePassed,
        pixelsPassed: pixelsPassed,
        offScreen: offScreen,
        onScreen: onScreen,
        topPassed: topPassed,
        topVisible: topVisible,
        width: width
      };

      this.fireCallbacks();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var ElementType = (0, _lib.getElementType)(Visibility, this.props);
      var rest = (0, _lib.getUnhandledProps)(Visibility, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { ref: this.handleRef }),
        children
      );
    }
  }]);
  return Visibility;
}(_react.Component);

Visibility.defaultProps = {
  continuous: false,
  once: true
};
Visibility._meta = {
  name: 'Visibility',
  type: _lib.META.TYPES.BEHAVIOR
};
Visibility.handledProps = ['as', 'children', 'continuous', 'onBottomPassed', 'onBottomPassedReverse', 'onBottomVisible', 'onBottomVisibleReverse', 'onOffScreen', 'onOnScreen', 'onPassed', 'onPassing', 'onPassingReverse', 'onTopPassed', 'onTopPassedReverse', 'onTopVisible', 'onTopVisibleReverse', 'onUpdate', 'once'];
var _default = Visibility;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Visibility.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /**
   * When set to true a callback will occur anytime an element passes a condition not just immediately after the
   * threshold is met.
   */
  continuous: _propTypes2.default.bool,

  /**
   * Element's bottom edge has passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassed: _propTypes2.default.func,

  /**
   * Element's bottom edge has not passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassedReverse: _propTypes2.default.func,

  /**
   * Element's bottom edge has passed bottom of screen
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisible: _propTypes2.default.func,

  /**
   * Element's bottom edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisibleReverse: _propTypes2.default.func,

  /** When set to false a callback will occur each time an element passes the threshold for a condition. */
  once: _propTypes2.default.bool,

  /** Element is not visible on the screen. */
  onPassed: _propTypes2.default.object,

  /**
   * Any part of an element is visible on screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassing: _propTypes2.default.func,

  /**
   * Element's top has not passed top of screen but bottom has.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassingReverse: _propTypes2.default.func,

  /**
   * Element is not visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOffScreen: _propTypes2.default.func,

  /**
   * Element is visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOnScreen: _propTypes2.default.func,

  /**
   * Element's top edge has passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassed: _propTypes2.default.func,

  /**
   * Element's top edge has not passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassedReverse: _propTypes2.default.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisible: _propTypes2.default.func,

  /**
   * Element's top edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisibleReverse: _propTypes2.default.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUpdate: _propTypes2.default.func
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Visibility, 'Visibility', 'src/behaviors/Visibility/Visibility.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/behaviors/Visibility/Visibility.js');
}();

;