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

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('checkbox');

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.canToggle = function () {
      var _this2;

      return (_this2 = _this).__canToggle__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.computeTabIndex = function () {
      var _this3;

      return (_this3 = _this).__computeTabIndex__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleInputRef = function () {
      var _this4;

      return (_this4 = _this).__handleInputRef__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleClick = function () {
      var _this5;

      return (_this5 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleMouseDown = function () {
      var _this6;

      return (_this6 = _this).__handleMouseDown__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.setIndeterminate = function () {
      var _this7;

      return (_this7 = _this).__setIndeterminate__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setIndeterminate();
    }
  }, {
    key: '__canToggle__REACT_HOT_LOADER__',
    value: function __canToggle__REACT_HOT_LOADER__() {
      var _props = this.props,
          disabled = _props.disabled,
          radio = _props.radio,
          readOnly = _props.readOnly;
      var checked = this.state.checked;


      return !disabled && !readOnly && !(radio && checked);
    }
  }, {
    key: '__computeTabIndex__REACT_HOT_LOADER__',
    value: function __computeTabIndex__REACT_HOT_LOADER__() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          tabIndex = _props2.tabIndex;


      if (!(0, _isNil3.default)(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }
  }, {
    key: '__handleInputRef__REACT_HOT_LOADER__',
    value: function __handleInputRef__REACT_HOT_LOADER__(c) {
      return this.inputRef = c;
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      debug('handleClick()');
      var _state = this.state,
          checked = _state.checked,
          indeterminate = _state.indeterminate;


      if (!this.canToggle()) return;

      (0, _invoke3.default)(this.props, 'onClick', e, (0, _extends3.default)({}, this.props, { checked: !!checked, indeterminate: !!indeterminate }));
      (0, _invoke3.default)(this.props, 'onChange', e, (0, _extends3.default)({}, this.props, { checked: !checked, indeterminate: false }));

      this.trySetState({ checked: !checked, indeterminate: false });
    }
  }, {
    key: '__handleMouseDown__REACT_HOT_LOADER__',


    // Note: You can't directly set the indeterminate prop on the input, so we
    // need to maintain a ref to the input and set it manually whenever the
    // component updates.
    value: function __handleMouseDown__REACT_HOT_LOADER__(e) {
      debug('handleMouseDown()');
      var _state2 = this.state,
          checked = _state2.checked,
          indeterminate = _state2.indeterminate;


      (0, _invoke3.default)(this.props, 'onMouseDown', e, (0, _extends3.default)({}, this.props, { checked: !!checked, indeterminate: !!indeterminate }));
      (0, _invoke3.default)(this.inputRef, 'focus');

      e.preventDefault();
    }
  }, {
    key: '__setIndeterminate__REACT_HOT_LOADER__',
    value: function __setIndeterminate__REACT_HOT_LOADER__() {
      var indeterminate = this.state.indeterminate;


      if (this.inputRef) this.inputRef.indeterminate = !!indeterminate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          disabled = _props3.disabled,
          label = _props3.label,
          name = _props3.name,
          radio = _props3.radio,
          readOnly = _props3.readOnly,
          slider = _props3.slider,
          toggle = _props3.toggle,
          type = _props3.type,
          value = _props3.value;
      var _state3 = this.state,
          checked = _state3.checked,
          indeterminate = _state3.indeterminate;


      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(checked, 'checked'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(indeterminate, 'indeterminate'),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      (0, _lib.useKeyOnly)(!label, 'fitted'), (0, _lib.useKeyOnly)(radio, 'radio'), (0, _lib.useKeyOnly)(readOnly, 'read-only'), (0, _lib.useKeyOnly)(slider, 'slider'), (0, _lib.useKeyOnly)(toggle, 'toggle'), 'checkbox', className);
      var unhandled = (0, _lib.getUnhandledProps)(Checkbox, this.props);
      var ElementType = (0, _lib.getElementType)(Checkbox, this.props);

      var _partitionHTMLInputPr = (0, _lib.partitionHTMLInputProps)(unhandled, { htmlProps: [] }),
          _partitionHTMLInputPr2 = (0, _slicedToArray3.default)(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, {
          className: classes,
          onChange: this.handleClick,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown
        }),
        _react2.default.createElement('input', (0, _extends3.default)({}, htmlInputProps, {
          checked: checked,
          className: 'hidden',
          name: name,
          readOnly: true,
          ref: this.handleInputRef,
          tabIndex: this.computeTabIndex(),
          type: type,
          value: value
        })),
        (0, _lib.createHTMLLabel)(label) || _react2.default.createElement('label', null)
      );
    }
  }]);
  return Checkbox;
}(_lib.AutoControlledComponent);

Checkbox.defaultProps = {
  type: 'checkbox'
};
Checkbox.autoControlledProps = ['checked', 'indeterminate'];
Checkbox._meta = {
  name: 'Checkbox',
  type: _lib.META.TYPES.MODULE
};
Checkbox.handledProps = ['as', 'checked', 'className', 'defaultChecked', 'defaultIndeterminate', 'disabled', 'fitted', 'indeterminate', 'label', 'name', 'onChange', 'onClick', 'onMouseDown', 'radio', 'readOnly', 'slider', 'tabIndex', 'toggle', 'type', 'value'];
var _default = Checkbox;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Whether or not checkbox is checked. */
  checked: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** The initial value of checked. */
  defaultChecked: _propTypes2.default.bool,

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: _propTypes2.default.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: _propTypes2.default.bool,

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: _propTypes2.default.bool,

  /** Whether or not checkbox is indeterminate. */
  indeterminate: _propTypes2.default.bool,

  /** The text of the associated label element. */
  label: _lib.customPropTypes.itemShorthand,

  /** The HTML input name. */
  name: _propTypes2.default.string,

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: _propTypes2.default.func,

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: _propTypes2.default.func,

  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: _propTypes2.default.func,

  /** Format as a radio element. This means it is an exclusive option. */
  radio: _lib.customPropTypes.every([_propTypes2.default.bool, _lib.customPropTypes.disallow(['slider', 'toggle'])]),

  /** A checkbox can be read-only and unable to change states. */
  readOnly: _propTypes2.default.bool,

  /** Format to emphasize the current selection state. */
  slider: _lib.customPropTypes.every([_propTypes2.default.bool, _lib.customPropTypes.disallow(['radio', 'toggle'])]),

  /** A checkbox can receive focus. */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Format to show an on or off choice. */
  toggle: _lib.customPropTypes.every([_propTypes2.default.bool, _lib.customPropTypes.disallow(['radio', 'slider'])]),

  /** HTML input type, either checkbox or radio. */
  type: _propTypes2.default.oneOf(['checkbox', 'radio']),

  /** The HTML input value. */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Checkbox/Checkbox.js');

  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', 'src/modules/Checkbox/Checkbox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Checkbox/Checkbox.js');
}();

;