'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A dimmable sub-component for Dimmer.
 */
function DimmerDimmable(props) {
  var blurring = props.blurring,
      className = props.className,
      children = props.children,
      dimmed = props.dimmed;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(blurring, 'blurring'), (0, _lib.useKeyOnly)(dimmed, 'dimmed'), 'dimmable', className);
  var rest = (0, _lib.getUnhandledProps)(DimmerDimmable, props);
  var ElementType = (0, _lib.getElementType)(DimmerDimmable, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

DimmerDimmable.handledProps = ['as', 'blurring', 'children', 'className', 'dimmed'];
DimmerDimmable._meta = {
  name: 'DimmerDimmable',
  type: _lib.META.TYPES.MODULE,
  parent: 'Dimmer'
};

DimmerDimmable.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A dimmable element can blur its contents. */
  blurring: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Controls whether or not the dim is displayed. */
  dimmed: _propTypes2.default.bool
} : {};

exports.default = DimmerDimmable;