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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A section sub-component for Breadcrumb component.
 */
var BreadcrumbSection = function (_Component) {
  (0, _inherits3.default)(BreadcrumbSection, _Component);

  function BreadcrumbSection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BreadcrumbSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BreadcrumbSection.__proto__ || Object.getPrototypeOf(BreadcrumbSection)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      var _this2;

      return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BreadcrumbSection, [{
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
          content = _props.content,
          href = _props.href,
          link = _props.link,
          onClick = _props.onClick;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'section', className);
      var rest = (0, _lib.getUnhandledProps)(BreadcrumbSection, this.props);
      var ElementType = (0, _lib.getElementType)(BreadcrumbSection, this.props, function () {
        if (link || onClick) return 'a';
      });

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, href: href, onClick: this.handleClick }),
        _lib.childrenUtils.isNil(children) ? content : children
      );
    }
  }]);
  return BreadcrumbSection;
}(_react.Component);

BreadcrumbSection._meta = {
  name: 'BreadcrumbSection',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Breadcrumb'
};
BreadcrumbSection.handledProps = ['active', 'as', 'children', 'className', 'content', 'href', 'link', 'onClick'];
var _default = BreadcrumbSection;
exports.default = _default;
process.env.NODE_ENV !== "production" ? BreadcrumbSection.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Style as the currently active section. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['link']), _propTypes2.default.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['href']), _propTypes2.default.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func
} : void 0;


BreadcrumbSection.create = (0, _lib.createShorthandFactory)(BreadcrumbSection, function (content) {
  return { content: content, link: true };
});
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BreadcrumbSection, 'BreadcrumbSection', 'src/collections/Breadcrumb/BreadcrumbSection.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/collections/Breadcrumb/BreadcrumbSection.js');
}();

;