'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _IconGroup = require('./IconGroup');

var _IconGroup2 = _interopRequireDefault(_IconGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */
function Icon(props) {
  var bordered = props.bordered,
      circular = props.circular,
      className = props.className,
      color = props.color,
      corner = props.corner,
      disabled = props.disabled,
      fitted = props.fitted,
      flipped = props.flipped,
      inverted = props.inverted,
      link = props.link,
      loading = props.loading,
      name = props.name,
      rotated = props.rotated,
      size = props.size;


  var classes = (0, _classnames2.default)(color, name, size, (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(corner, 'corner'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(flipped, 'flipped'), (0, _lib.useValueAndKey)(rotated, 'rotated'), 'icon', className);
  var rest = (0, _lib.getUnhandledProps)(Icon, props);
  var ElementType = (0, _lib.getElementType)(Icon, props);

  return _react2.default.createElement(ElementType, (0, _extends3.default)({}, rest, { 'aria-hidden': 'true', className: classes }));
}

Icon.handledProps = ['as', 'bordered', 'circular', 'className', 'color', 'corner', 'disabled', 'fitted', 'flipped', 'inverted', 'link', 'loading', 'name', 'rotated', 'size'];
Icon.Group = _IconGroup2.default;

Icon._meta = {
  name: 'Icon',
  type: _lib.META.TYPES.ELEMENT
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Formatted to appear bordered. */
  bordered: _propTypes2.default.bool,

  /** Icon can formatted to appear circular. */
  circular: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Color of the icon. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: _propTypes2.default.bool,

  /** Show that the icon is inactive. */
  disabled: _propTypes2.default.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: _propTypes2.default.bool,

  /** Icon can flipped. */
  flipped: _propTypes2.default.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: _propTypes2.default.bool,

  /** Icon can be formatted as a link. */
  link: _propTypes2.default.bool,

  /** Icon can be used as a simple loader. */
  loading: _propTypes2.default.bool,

  /** Name of the icon. */
  name: _lib.customPropTypes.suggest(_lib.SUI.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: _propTypes2.default.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium'))
} : void 0;

Icon.defaultProps = {
  as: 'i'
};

Icon.create = (0, _lib.createShorthandFactory)(Icon, function (value) {
  return { name: value };
});

var _default = Icon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Icon, 'Icon', 'src/elements/Icon/Icon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/elements/Icon/Icon.js');
}();

;