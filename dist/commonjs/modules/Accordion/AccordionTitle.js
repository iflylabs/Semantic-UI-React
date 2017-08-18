'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A title sub-component for Accordion component.
 */
var AccordionTitle = function (_Component) {
  (0, _inherits3.default)(AccordionTitle, _Component);

  function AccordionTitle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AccordionTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AccordionTitle.__proto__ || Object.getPrototypeOf(AccordionTitle)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      var _this2;

      return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AccordionTitle, [{
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      var onClick = this.props.onClick;


      if (onClick) onClick(e, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'title', className);
      var rest = (0, _lib.getUnhandledProps)(AccordionTitle, this.props);
      var ElementType = (0, _lib.getElementType)(AccordionTitle, this.props);

      if ((0, _isNil3.default)(content)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, onClick: this.handleClick }),
        _react2.default.createElement(_Icon2.default, { name: 'dropdown' }),
        content
      );
    }
  }]);
  return AccordionTitle;
}(_react.Component);

AccordionTitle._meta = {
  name: 'AccordionTitle',
  type: _lib.META.TYPES.MODULE,
  parent: 'Accordion'
};
AccordionTitle.handledProps = ['active', 'as', 'children', 'className', 'content', 'onClick'];
var _default = AccordionTitle;
exports.default = _default;
process.env.NODE_ENV !== "production" ? AccordionTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Whether or not the title is in the open state. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func
} : void 0;


AccordionTitle.create = (0, _lib.createShorthandFactory)(AccordionTitle, function (content) {
  return { content: content };
});
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AccordionTitle, 'AccordionTitle', 'src/modules/Accordion/AccordionTitle.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Accordion/AccordionTitle.js');
}();

;