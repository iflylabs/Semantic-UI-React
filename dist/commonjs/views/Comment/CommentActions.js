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
 * A comment can contain an list of actions a user may perform related to this comment.
 */
function CommentActions(props) {
  var className = props.className,
      children = props.children;

  var classes = (0, _classnames2.default)('actions', className);
  var rest = (0, _lib.getUnhandledProps)(CommentActions, props);
  var ElementType = (0, _lib.getElementType)(CommentActions, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

CommentActions.handledProps = ['as', 'children', 'className'];
CommentActions._meta = {
  name: 'CommentActions',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

process.env.NODE_ENV !== "production" ? CommentActions.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string
} : void 0;

var _default = CommentActions;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CommentActions, 'CommentActions', 'src/views/Comment/CommentActions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/views/Comment/CommentActions.js');
}();

;