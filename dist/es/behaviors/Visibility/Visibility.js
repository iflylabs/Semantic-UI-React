import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _forEach from 'lodash/forEach';
import _invoke from 'lodash/invoke';
import _includes from 'lodash/includes';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */

var Visibility = function (_Component) {
  _inherits(Visibility, _Component);

  function Visibility() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Visibility);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call.apply(_ref, [this].concat(args))), _this), _this.calculations = {
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    }, _this.firedCallbacks = [], _this.execute = function (callback, name) {
      var _this$props = _this.props,
          continuous = _this$props.continuous,
          once = _this$props.once;


      if (!callback) return;
      // Reverse callbacks aren't fired continuously
      if (_this.calculations[name] === false) return;

      // Always fire callback if continuous = true
      if (continuous) {
        callback(null, _extends({}, _this.props, { calculations: _this.calculations }));
        return;
      }

      // If once = true, fire callback only if it wasn't fired before
      if (once) {
        if (!_includes(_this.firedCallbacks, name)) {
          _this.firedCallbacks.push(name);
          callback(null, _extends({}, _this.props, { calculations: _this.calculations }));
        }

        return;
      }

      // Fire callback only if the value changed
      if (_this.calculations[name] !== _this.oldCalculations[name]) {
        callback(null, _extends({}, _this.props, { calculations: _this.calculations }));
      }
    }, _this.fireOnPassed = function () {
      var _this$calculations = _this.calculations,
          percentagePassed = _this$calculations.percentagePassed,
          pixelsPassed = _this$calculations.pixelsPassed;
      var onPassed = _this.props.onPassed;


      _forEach(onPassed, function (callback, passed) {
        var pixelsValue = Number(passed);

        if (pixelsValue && pixelsPassed >= pixelsValue) {
          _this.execute(callback, passed);
          return;
        }

        var matchPercentage = ('' + passed).match(/^(\d+)%$/);
        if (!matchPercentage) return;

        var percentageValue = Number(matchPercentage[1]) / 100;
        if (percentagePassed >= percentageValue) _this.execute(callback, passed);
      });
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.handleScroll = function () {
      var _this$ref$getBounding = _this.ref.getBoundingClientRect(),
          bottom = _this$ref$getBounding.bottom,
          height = _this$ref$getBounding.height,
          top = _this$ref$getBounding.top,
          width = _this$ref$getBounding.width;

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

      _this.oldCalculations = _this.calculations;
      _this.calculations = {
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

      _this.fireCallbacks();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Visibility, [{
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
    key: 'fireCallbacks',
    value: function fireCallbacks() {
      var _this2 = this;

      var _props = this.props,
          onBottomPassed = _props.onBottomPassed,
          onBottomPassedReverse = _props.onBottomPassedReverse,
          onBottomVisible = _props.onBottomVisible,
          onBottomVisibleReverse = _props.onBottomVisibleReverse,
          onPassing = _props.onPassing,
          onPassingReverse = _props.onPassingReverse,
          onTopPassed = _props.onTopPassed,
          onTopPassedReverse = _props.onTopPassedReverse,
          onTopVisible = _props.onTopVisible,
          onTopVisibleReverse = _props.onTopVisibleReverse,
          onOffScreen = _props.onOffScreen,
          onOnScreen = _props.onOnScreen;

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

      _invoke(this.props, 'onUpdate', null, _extends({}, this.props, { calculations: this.calculations }));
      this.fireOnPassed();

      _forEach(callbacks, function (callback, name) {
        return _this2.execute(callback, name);
      });
      _forEach(reverse, function (callback, name) {
        return _this2.execute(callback, name);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var ElementType = getElementType(Visibility, this.props);
      var rest = getUnhandledProps(Visibility, this.props);

      return React.createElement(
        ElementType,
        _extends({}, rest, { ref: this.handleRef }),
        children
      );
    }
  }]);

  return Visibility;
}(Component);

Visibility.defaultProps = {
  continuous: false,
  once: true
};
Visibility._meta = {
  name: 'Visibility',
  type: META.TYPES.BEHAVIOR
};
Visibility.handledProps = ['as', 'children', 'continuous', 'onBottomPassed', 'onBottomPassedReverse', 'onBottomVisible', 'onBottomVisibleReverse', 'onOffScreen', 'onOnScreen', 'onPassed', 'onPassing', 'onPassingReverse', 'onTopPassed', 'onTopPassedReverse', 'onTopVisible', 'onTopVisibleReverse', 'onUpdate', 'once'];
export default Visibility;
process.env.NODE_ENV !== "production" ? Visibility.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /**
   * When set to true a callback will occur anytime an element passes a condition not just immediately after the
   * threshold is met.
   */
  continuous: PropTypes.bool,

  /**
   * Element's bottom edge has passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassed: PropTypes.func,

  /**
   * Element's bottom edge has not passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassedReverse: PropTypes.func,

  /**
   * Element's bottom edge has passed bottom of screen
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisible: PropTypes.func,

  /**
   * Element's bottom edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisibleReverse: PropTypes.func,

  /** When set to false a callback will occur each time an element passes the threshold for a condition. */
  once: PropTypes.bool,

  /** Element is not visible on the screen. */
  onPassed: PropTypes.object,

  /**
   * Any part of an element is visible on screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassing: PropTypes.func,

  /**
   * Element's top has not passed top of screen but bottom has.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassingReverse: PropTypes.func,

  /**
   * Element is not visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOffScreen: PropTypes.func,

  /**
   * Element is visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOnScreen: PropTypes.func,

  /**
   * Element's top edge has passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassed: PropTypes.func,

  /**
   * Element's top edge has not passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassedReverse: PropTypes.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisible: PropTypes.func,

  /**
   * Element's top edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisibleReverse: PropTypes.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUpdate: PropTypes.func
} : void 0;