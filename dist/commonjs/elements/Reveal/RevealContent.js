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
 * A content sub-component for the Reveal.
 */
function RevealContent(props) {
  var children = props.children,
      className = props.className,
      hidden = props.hidden,
      visible = props.visible;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(visible, 'visible'), 'content', className);
  var rest = (0, _lib.getUnhandledProps)(RevealContent, props);
  var ElementType = (0, _lib.getElementType)(RevealContent, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

RevealContent.handledProps = ['as', 'children', 'className', 'hidden', 'visible'];
RevealContent._meta = {
  name: 'RevealContent',
  parent: 'Reveal',
  type: _lib.META.TYPES.ELEMENT
};

process.env.NODE_ENV !== "production" ? RevealContent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A reveal may contain content that is visible before interaction. */
  hidden: _propTypes2.default.bool,

  /** A reveal may contain content that is hidden before user interaction. */
  visible: _propTypes2.default.bool
} : void 0;

var _default = RevealContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RevealContent, 'RevealContent', 'src/elements/Reveal/RevealContent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/elements/Reveal/RevealContent.js');
}();

;