'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Dimmer = require('../../modules/Dimmer');

var _Dimmer2 = _interopRequireDefault(_Dimmer);

var _Label = require('../Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _ImageGroup = require('./ImageGroup');

var _ImageGroup2 = _interopRequireDefault(_ImageGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An image is a graphic representation of something.
 * @see Icon
 */
function Image(props) {
  var alt = props.alt,
      avatar = props.avatar,
      bordered = props.bordered,
      centered = props.centered,
      children = props.children,
      className = props.className,
      dimmer = props.dimmer,
      disabled = props.disabled,
      floated = props.floated,
      fluid = props.fluid,
      height = props.height,
      hidden = props.hidden,
      href = props.href,
      inline = props.inline,
      label = props.label,
      shape = props.shape,
      size = props.size,
      spaced = props.spaced,
      src = props.src,
      verticalAlign = props.verticalAlign,
      width = props.width,
      wrapped = props.wrapped,
      ui = props.ui;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(ui, 'ui'), size, shape, (0, _lib.useKeyOnly)(avatar, 'avatar'), (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOrValueAndKey)(spaced, 'spaced'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign, 'aligned'), 'image', className);
  var rest = (0, _lib.getUnhandledProps)(Image, props);
  var ElementType = (0, _lib.getElementType)(Image, props, function () {
    if (!(0, _isNil3.default)(dimmer) || !(0, _isNil3.default)(label) || !(0, _isNil3.default)(wrapped) || !_lib.childrenUtils.isNil(children)) return 'div';
  });

  if (!_lib.childrenUtils.isNil(children)) {
    return _react2.default.createElement(
      ElementType,
      (0, _extends3.default)({}, rest, { className: classes }),
      children
    );
  }

  var rootProps = (0, _extends3.default)({}, rest, { className: classes });
  var imgTagProps = { alt: alt, src: src, height: height, width: width };

  if (ElementType === 'img') return _react2.default.createElement(ElementType, (0, _extends3.default)({}, rootProps, imgTagProps));

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rootProps, { href: href }),
    _Dimmer2.default.create(dimmer),
    _Label2.default.create(label),
    _react2.default.createElement('img', imgTagProps)
  );
}

Image.handledProps = ['alt', 'as', 'avatar', 'bordered', 'centered', 'children', 'className', 'dimmer', 'disabled', 'floated', 'fluid', 'height', 'hidden', 'href', 'inline', 'label', 'shape', 'size', 'spaced', 'src', 'ui', 'verticalAlign', 'width', 'wrapped'];
Image.Group = _ImageGroup2.default;

Image._meta = {
  name: 'Image',
  type: _lib.META.TYPES.ELEMENT
};

Image.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Alternate text for the image specified. */
  alt: _propTypes2.default.string,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: _propTypes2.default.bool,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: _propTypes2.default.bool,

  /** An image can appear centered in a content block. */
  centered: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: _propTypes2.default.bool,

  /** Shorthand for Dimmer. */
  dimmer: _lib.customPropTypes.itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: _propTypes2.default.oneOf(_lib.SUI.FLOATS),

  /** An image can take up the width of its container. */
  fluid: _lib.customPropTypes.every([_propTypes2.default.bool, _lib.customPropTypes.disallow(['size'])]),

  /** The img element height attribute. */
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** An image can be hidden. */
  hidden: _propTypes2.default.bool,

  /** Renders the Image as an <a> tag with this href. */
  href: _propTypes2.default.string,

  /** An image may appear inline. */
  inline: _propTypes2.default.bool,

  /** Shorthand for Label. */
  label: _lib.customPropTypes.itemShorthand,

  /** An image may appear rounded or circular. */
  shape: _propTypes2.default.oneOf(['rounded', 'circular']),

  /** An image may appear at different sizes. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['left', 'right'])]),

  /** Specifies the URL of the image. */
  src: _propTypes2.default.string,

  /** Whether or not to add the ui className. */
  ui: _propTypes2.default.bool,

  /** An image can specify its vertical alignment. */
  verticalAlign: _propTypes2.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS),

  /** The img element width attribute. */
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: _propTypes2.default.bool
} : {};

Image.defaultProps = {
  as: 'img',
  ui: true
};

Image.create = (0, _lib.createShorthandFactory)(Image, function (value) {
  return { src: value };
});

exports.default = Image;