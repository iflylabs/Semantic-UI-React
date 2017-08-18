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
 * A list can contain a sub list.
 */
function ListList(props) {
  var children = props.children,
      className = props.className;


  var rest = (0, _lib.getUnhandledProps)(ListList, props);
  var ElementType = (0, _lib.getElementType)(ListList, props);
  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

ListList.handledProps = ['as', 'children', 'className'];
ListList._meta = {
  name: 'ListList',
  parent: 'List',
  type: _lib.META.TYPES.ELEMENT
};

process.env.NODE_ENV !== "production" ? ListList.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string
} : void 0;

var _default = ListList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ListList, 'ListList', 'src/elements/List/ListList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/elements/List/ListList.js');
}();

;