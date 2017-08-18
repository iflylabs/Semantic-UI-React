'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A table can have a footer.
 */
function TableFooter(props) {
  var as = props.as;

  var rest = (0, _lib.getUnhandledProps)(TableFooter, props);

  return _react2.default.createElement(_TableHeader2.default, (0, _extends3.default)({}, rest, { as: as }));
}

TableFooter.handledProps = ['as'];
TableFooter._meta = {
  name: 'TableFooter',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table'
};

process.env.NODE_ENV !== "production" ? TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as
} : void 0;

TableFooter.defaultProps = {
  as: 'tfoot'
};

var _default = TableFooter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableFooter, 'TableFooter', 'src/collections/Table/TableFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/collections/Table/TableFooter.js');
}();

;