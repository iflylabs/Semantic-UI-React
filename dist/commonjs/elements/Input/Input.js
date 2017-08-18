'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.computeIcon = function () {
      var _this2;

      return (_this2 = _this).__computeIcon__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.computeTabIndex = function () {
      var _this3;

      return (_this3 = _this).__computeTabIndex__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.focus = function () {
      var _this4;

      return (_this4 = _this).__focus__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleChange = function () {
      var _this5;

      return (_this5 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleChildOverrides = function () {
      var _this6;

      return (_this6 = _this).__handleChildOverrides__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handleInputRef = function () {
      var _this7;

      return (_this7 = _this).__handleInputRef__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.partitionProps = function () {
      var _this8;

      return (_this8 = _this).__partitionProps__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: '__computeIcon__REACT_HOT_LOADER__',
    value: function __computeIcon__REACT_HOT_LOADER__() {
      var _props = this.props,
          loading = _props.loading,
          icon = _props.icon;


      if (!(0, _isNil3.default)(icon)) return icon;
      if (loading) return 'spinner';
    }
  }, {
    key: '__computeTabIndex__REACT_HOT_LOADER__',
    value: function __computeTabIndex__REACT_HOT_LOADER__() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          tabIndex = _props2.tabIndex;


      if (!(0, _isNil3.default)(tabIndex)) return tabIndex;
      if (disabled) return -1;
    }
  }, {
    key: '__focus__REACT_HOT_LOADER__',
    value: function __focus__REACT_HOT_LOADER__() {
      return this.inputRef.focus();
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(e) {
      var value = (0, _get3.default)(e, 'target.value');

      (0, _invoke3.default)(this.props, 'onChange', e, (0, _extends3.default)({}, this.props, { value: value }));
    }
  }, {
    key: '__handleChildOverrides__REACT_HOT_LOADER__',
    value: function __handleChildOverrides__REACT_HOT_LOADER__(child, defaultProps) {
      var _this9 = this;

      return (0, _extends3.default)({}, defaultProps, child.props, {
        ref: function ref(c) {
          (0, _invoke3.default)(child, 'ref', c);
          _this9.handleInputRef(c);
        }
      });
    }
  }, {
    key: '__handleInputRef__REACT_HOT_LOADER__',
    value: function __handleInputRef__REACT_HOT_LOADER__(c) {
      return this.inputRef = c;
    }
  }, {
    key: '__partitionProps__REACT_HOT_LOADER__',
    value: function __partitionProps__REACT_HOT_LOADER__() {
      var _props3 = this.props,
          disabled = _props3.disabled,
          type = _props3.type;


      var tabIndex = this.computeTabIndex();
      var unhandled = (0, _lib.getUnhandledProps)(Input, this.props);

      var _partitionHTMLInputPr = (0, _lib.partitionHTMLInputProps)(unhandled),
          _partitionHTMLInputPr2 = (0, _slicedToArray3.default)(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return [(0, _extends3.default)({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: this.handleChange,
        ref: this.handleInputRef
      }), rest];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      var _props4 = this.props,
          action = _props4.action,
          actionPosition = _props4.actionPosition,
          children = _props4.children,
          className = _props4.className,
          disabled = _props4.disabled,
          error = _props4.error,
          fluid = _props4.fluid,
          focus = _props4.focus,
          icon = _props4.icon,
          iconPosition = _props4.iconPosition,
          input = _props4.input,
          inverted = _props4.inverted,
          label = _props4.label,
          labelPosition = _props4.labelPosition,
          loading = _props4.loading,
          size = _props4.size,
          transparent = _props4.transparent,
          type = _props4.type;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon || loading, 'icon'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), 'input', className);
      var ElementType = (0, _lib.getElementType)(Input, this.props);

      var _partitionProps = this.partitionProps(),
          _partitionProps2 = (0, _slicedToArray3.default)(_partitionProps, 2),
          htmlInputProps = _partitionProps2[0],
          rest = _partitionProps2[1];

      // Render with children
      // ----------------------------------------


      if (!_lib.childrenUtils.isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = (0, _map3.default)(_react.Children.toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return (0, _react.cloneElement)(child, _this10.handleChildOverrides(child, htmlInputProps));
        });

        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes }),
          childElements
        );
      }

      // Render Shorthand
      // ----------------------------------------
      var actionElement = _Button2.default.create(action);
      var iconElement = _Icon2.default.create(this.computeIcon());
      var labelElement = _Label2.default.create(label, {
        defaultProps: {
          className: (0, _classnames2.default)('label',
          // add 'left|right corner'
          (0, _includes3.default)(labelPosition, 'corner') && labelPosition)
        }
      });

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes }),
        actionPosition === 'left' && actionElement,
        iconPosition === 'left' && iconElement,
        labelPosition !== 'right' && labelElement,
        (0, _lib.createHTMLInput)(input || type, { defaultProps: htmlInputProps }),
        actionPosition !== 'left' && actionElement,
        iconPosition !== 'left' && iconElement,
        labelPosition === 'right' && labelElement
      );
    }
  }]);
  return Input;
}(_react.Component);

Input.defaultProps = {
  type: 'text'
};
Input._meta = {
  name: 'Input',
  type: _lib.META.TYPES.ELEMENT
};
Input.handledProps = ['action', 'actionPosition', 'as', 'children', 'className', 'disabled', 'error', 'fluid', 'focus', 'icon', 'iconPosition', 'input', 'inverted', 'label', 'labelPosition', 'loading', 'onChange', 'size', 'tabIndex', 'transparent', 'type'];
process.env.NODE_ENV !== "production" ? Input.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: _propTypes2.default.oneOfType([_propTypes2.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: _propTypes2.default.oneOf(['left']),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** An Input field can show that it is disabled. */
  disabled: _propTypes2.default.bool,

  /** An Input field can show the data contains errors. */
  error: _propTypes2.default.bool,

  /** Take on the size of it's container. */
  fluid: _propTypes2.default.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: _propTypes2.default.bool,

  /** Optional Icon to display inside the Input. */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: _propTypes2.default.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: _lib.customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: _propTypes2.default.bool,

  /** Optional Label to display along side the Input. */
  label: _lib.customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: _propTypes2.default.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: _propTypes2.default.bool,

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: _propTypes2.default.func,

  /** An Input can vary in size. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** An Input can receive focus. */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Transparent Input has no background. */
  transparent: _propTypes2.default.bool,

  /** The HTML input type. */
  type: _propTypes2.default.string
} : void 0;


Input.create = (0, _lib.createShorthandFactory)(Input, function (type) {
  return { type: type };
});

var _default = Input;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Input, 'Input', 'src/elements/Input/Input.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/elements/Input/Input.js');
}();

;