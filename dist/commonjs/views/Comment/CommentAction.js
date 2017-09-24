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
 * A comment can contain an action.
 */
function CommentAction(props) {
  var active = props.active,
      className = props.className,
      children = props.children;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), className);
  var rest = (0, _lib.getUnhandledProps)(CommentAction, props);
  var ElementType = (0, _lib.getElementType)(CommentAction, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

CommentAction.handledProps = ['active', 'as', 'children', 'className'];
CommentAction._meta = {
  name: 'CommentAction',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

CommentAction.defaultProps = {
  as: 'a'
};

CommentAction.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Style as the currently active action. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string
} : {};

exports.default = CommentAction;