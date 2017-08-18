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
 * An item can contain content metadata.
 */
function ItemMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = (0, _classnames2.default)('meta', className);
  var rest = (0, _lib.getUnhandledProps)(ItemMeta, props);
  var ElementType = (0, _lib.getElementType)(ItemMeta, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

ItemMeta.handledProps = ['as', 'children', 'className', 'content'];
ItemMeta._meta = {
  name: 'ItemMeta',
  parent: 'Item',
  type: _lib.META.TYPES.VIEW
};

process.env.NODE_ENV !== "production" ? ItemMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : void 0;

ItemMeta.create = (0, _lib.createShorthandFactory)(ItemMeta, function (content) {
  return { content: content };
});

var _default = ItemMeta;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ItemMeta, 'ItemMeta', 'src/views/Item/ItemMeta.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/views/Item/ItemMeta.js');
}();

;