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
 * A comment can contain an author.
 */
function CommentAuthor(props) {
  var className = props.className,
      children = props.children;

  var classes = (0, _classnames2.default)('author', className);
  var rest = (0, _lib.getUnhandledProps)(CommentAuthor, props);
  var ElementType = (0, _lib.getElementType)(CommentAuthor, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

CommentAuthor.handledProps = ['as', 'children', 'className'];
CommentAuthor._meta = {
  name: 'CommentAuthor',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

process.env.NODE_ENV !== "production" ? CommentAuthor.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string
} : void 0;

var _default = CommentAuthor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CommentAuthor, 'CommentAuthor', 'src/views/Comment/CommentAuthor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/views/Comment/CommentAuthor.js');
}();

;