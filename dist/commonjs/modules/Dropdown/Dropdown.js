'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _compact2 = require('lodash/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _every2 = require('lodash/every');

var _every3 = _interopRequireDefault(_every2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _some2 = require('lodash/some');

var _some3 = _interopRequireDefault(_some2);

var _escapeRegExp2 = require('lodash/escapeRegExp');

var _escapeRegExp3 = _interopRequireDefault(_escapeRegExp2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _dropRight2 = require('lodash/dropRight');

var _dropRight3 = _interopRequireDefault(_dropRight2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _union2 = require('lodash/union');

var _union3 = _interopRequireDefault(_union2);

var _get5 = require('lodash/get');

var _get6 = _interopRequireDefault(_get5);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

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

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

var _DropdownDivider = require('./DropdownDivider');

var _DropdownDivider2 = _interopRequireDefault(_DropdownDivider);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownHeader = require('./DropdownHeader');

var _DropdownHeader2 = _interopRequireDefault(_DropdownHeader);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownSearchInput = require('./DropdownSearchInput');

var _DropdownSearchInput2 = _interopRequireDefault(_DropdownSearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('dropdown');

var getKeyOrValue = function getKeyOrValue(key, value) {
  return (0, _isNil3.default)(key) ? value : key;
};

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.closeOnChange = function () {
      var _this3;

      return (_this3 = _this).__closeOnChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.closeOnEscape = function () {
      var _this4;

      return (_this4 = _this).__closeOnEscape__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.moveSelectionOnKeyDown = function () {
      var _this5;

      return (_this5 = _this).__moveSelectionOnKeyDown__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.openOnSpace = function () {
      var _this6;

      return (_this6 = _this).__openOnSpace__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.openOnArrow = function () {
      var _this7;

      return (_this7 = _this).__openOnArrow__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.makeSelectedItemActive = function () {
      var _this8;

      return (_this8 = _this).__makeSelectedItemActive__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.selectItemOnEnter = function () {
      var _this9;

      return (_this9 = _this).__selectItemOnEnter__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.removeItemOnBackspace = function () {
      var _this10;

      return (_this10 = _this).__removeItemOnBackspace__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _this.closeOnDocumentClick = function () {
      var _this11;

      return (_this11 = _this).__closeOnDocumentClick__REACT_HOT_LOADER__.apply(_this11, arguments);
    }, _this.handleMouseDown = function () {
      var _this12;

      return (_this12 = _this).__handleMouseDown__REACT_HOT_LOADER__.apply(_this12, arguments);
    }, _this.handleDocumentMouseUp = function () {
      var _this13;

      return (_this13 = _this).__handleDocumentMouseUp__REACT_HOT_LOADER__.apply(_this13, arguments);
    }, _this.handleClick = function () {
      var _this14;

      return (_this14 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this14, arguments);
    }, _this.handleIconClick = function () {
      var _this15;

      return (_this15 = _this).__handleIconClick__REACT_HOT_LOADER__.apply(_this15, arguments);
    }, _this.handleItemClick = function () {
      var _this16;

      return (_this16 = _this).__handleItemClick__REACT_HOT_LOADER__.apply(_this16, arguments);
    }, _this.handleFocus = function () {
      var _this17;

      return (_this17 = _this).__handleFocus__REACT_HOT_LOADER__.apply(_this17, arguments);
    }, _this.handleBlur = function () {
      var _this18;

      return (_this18 = _this).__handleBlur__REACT_HOT_LOADER__.apply(_this18, arguments);
    }, _this.handleSearchChange = function () {
      var _this19;

      return (_this19 = _this).__handleSearchChange__REACT_HOT_LOADER__.apply(_this19, arguments);
    }, _this.getMenuOptions = function () {
      var _this20;

      return (_this20 = _this).__getMenuOptions__REACT_HOT_LOADER__.apply(_this20, arguments);
    }, _this.getSelectedItem = function () {
      var _this21;

      return (_this21 = _this).__getSelectedItem__REACT_HOT_LOADER__.apply(_this21, arguments);
    }, _this.getEnabledIndices = function () {
      var _this22;

      return (_this22 = _this).__getEnabledIndices__REACT_HOT_LOADER__.apply(_this22, arguments);
    }, _this.getItemByValue = function () {
      var _this23;

      return (_this23 = _this).__getItemByValue__REACT_HOT_LOADER__.apply(_this23, arguments);
    }, _this.getMenuItemIndexByValue = function () {
      var _this24;

      return (_this24 = _this).__getMenuItemIndexByValue__REACT_HOT_LOADER__.apply(_this24, arguments);
    }, _this.getDropdownAriaOptions = function () {
      var _this25;

      return (_this25 = _this).__getDropdownAriaOptions__REACT_HOT_LOADER__.apply(_this25, arguments);
    }, _this.clearSearchQuery = function () {
      var _this26;

      return (_this26 = _this).__clearSearchQuery__REACT_HOT_LOADER__.apply(_this26, arguments);
    }, _this.setValue = function () {
      var _this27;

      return (_this27 = _this).__setValue__REACT_HOT_LOADER__.apply(_this27, arguments);
    }, _this.setSelectedIndex = function () {
      var _this28;

      return (_this28 = _this).__setSelectedIndex__REACT_HOT_LOADER__.apply(_this28, arguments);
    }, _this.handleLabelClick = function () {
      var _this29;

      return (_this29 = _this).__handleLabelClick__REACT_HOT_LOADER__.apply(_this29, arguments);
    }, _this.handleLabelRemove = function () {
      var _this30;

      return (_this30 = _this).__handleLabelRemove__REACT_HOT_LOADER__.apply(_this30, arguments);
    }, _this.moveSelectionBy = function () {
      var _this31;

      return (_this31 = _this).__moveSelectionBy__REACT_HOT_LOADER__.apply(_this31, arguments);
    }, _this.handleIconOverrides = function () {
      var _this32;

      return (_this32 = _this).__handleIconOverrides__REACT_HOT_LOADER__.apply(_this32, arguments);
    }, _this.handleSearchRef = function () {
      var _this33;

      return (_this33 = _this).__handleSearchRef__REACT_HOT_LOADER__.apply(_this33, arguments);
    }, _this.handleSizerRef = function () {
      var _this34;

      return (_this34 = _this).__handleSizerRef__REACT_HOT_LOADER__.apply(_this34, arguments);
    }, _this.handleRef = function () {
      var _this35;

      return (_this35 = _this).__handleRef__REACT_HOT_LOADER__.apply(_this35, arguments);
    }, _this.computeSearchInputTabIndex = function () {
      var _this36;

      return (_this36 = _this).__computeSearchInputTabIndex__REACT_HOT_LOADER__.apply(_this36, arguments);
    }, _this.computeSearchInputWidth = function () {
      var _this37;

      return (_this37 = _this).__computeSearchInputWidth__REACT_HOT_LOADER__.apply(_this37, arguments);
    }, _this.computeTabIndex = function () {
      var _this38;

      return (_this38 = _this).__computeTabIndex__REACT_HOT_LOADER__.apply(_this38, arguments);
    }, _this.scrollSelectedItemIntoView = function () {
      var _this39;

      return (_this39 = _this).__scrollSelectedItemIntoView__REACT_HOT_LOADER__.apply(_this39, arguments);
    }, _this.open = function () {
      var _this40;

      return (_this40 = _this).__open__REACT_HOT_LOADER__.apply(_this40, arguments);
    }, _this.close = function () {
      var _this41;

      return (_this41 = _this).__close__REACT_HOT_LOADER__.apply(_this41, arguments);
    }, _this.handleClose = function () {
      var _this42;

      return (_this42 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this42, arguments);
    }, _this.toggle = function () {
      var _this43;

      return (_this43 = _this).__toggle__REACT_HOT_LOADER__.apply(_this43, arguments);
    }, _this.renderText = function () {
      var _this44;

      return (_this44 = _this).__renderText__REACT_HOT_LOADER__.apply(_this44, arguments);
    }, _this.renderSearchInput = function () {
      var _this45;

      return (_this45 = _this).__renderSearchInput__REACT_HOT_LOADER__.apply(_this45, arguments);
    }, _this.renderSearchSizer = function () {
      var _this46;

      return (_this46 = _this).__renderSearchSizer__REACT_HOT_LOADER__.apply(_this46, arguments);
    }, _this.renderLabels = function () {
      var _this47;

      return (_this47 = _this).__renderLabels__REACT_HOT_LOADER__.apply(_this47, arguments);
    }, _this.renderOptions = function () {
      var _this48;

      return (_this48 = _this).__renderOptions__REACT_HOT_LOADER__.apply(_this48, arguments);
    }, _this.renderMenu = function () {
      var _this49;

      return (_this49 = _this).__renderMenu__REACT_HOT_LOADER__.apply(_this49, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'getInitialAutoControlledState',
    value: function getInitialAutoControlledState() {
      return { searchQuery: '' };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      this.setSelectedIndex(value);

      if (open) this.open();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _isEqual3.default)(nextProps, this.props) || !(0, _isEqual3.default)(nextState, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      (0, _get4.default)(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      debug('to props:', (0, _lib.objectDiff)(this.props, nextProps));

      /* eslint-disable no-console */
      if (process.env.NODE_ENV !== 'production') {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);
        var hasValue = (0, _has3.default)(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + (' Received type: `' + Object.prototype.toString.call(nextProps.value) + '`.'));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */

      if (!(0, _isEqual3.default)(nextProps.value, this.props.value)) {
        debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
        this.setSelectedIndex(nextProps.value);
      }

      if (!(0, _isEqual3.default)(nextProps.options, this.props.options)) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      debug('componentDidUpdate()');
      // TODO objectDiff still runs in prod, stop it
      debug('to state:', (0, _lib.objectDiff)(prevState, this.state));

      // Do not access document when server side rendering
      if (!_lib.isBrowser) return;

      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        debug('dropdown focused');
        if (!this.isMouseDown) {
          var _props = this.props,
              minCharacters = _props.minCharacters,
              openOnFocus = _props.openOnFocus,
              search = _props.search;

          var openable = !search || search && minCharacters === 1;

          debug('mouse is not down, opening');
          if (openOnFocus && openable) this.open();
        }
        if (!this.state.open) {
          document.addEventListener('keydown', this.openOnArrow);
          document.addEventListener('keydown', this.openOnSpace);
        } else {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
        document.addEventListener('keydown', this.removeItemOnBackspace);
      } else if (prevState.focus && !this.state.focus) {
        debug('dropdown blurred');
        var closeOnBlur = this.props.closeOnBlur;

        if (!this.isMouseDown && closeOnBlur) {
          debug('mouse is not down and closeOnBlur=true, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.openOnArrow);
        document.removeEventListener('keydown', this.openOnSpace);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('keydown', this.removeItemOnBackspace);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        debug('dropdown opened');
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('keydown', this.removeItemOnBackspace);
        document.addEventListener('click', this.closeOnDocumentClick);
        document.removeEventListener('keydown', this.openOnArrow);
        document.removeEventListener('keydown', this.openOnSpace);
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
        debug('dropdown closed');
        this.handleClose();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
        if (!this.state.focus) {
          document.removeEventListener('keydown', this.removeItemOnBackspace);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!_lib.isBrowser) return;

      document.removeEventListener('keydown', this.openOnArrow);
      document.removeEventListener('keydown', this.openOnSpace);
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.removeItemOnBackspace);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // onChange needs to receive a value
    // can't rely on props.value if we are controlled

  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(e, value) {
      debug('handleChange()', value);
      (0, _invoke3.default)(this.props, 'onChange', e, (0, _extends3.default)({}, this.props, { value: value }));
    }
  }, {
    key: '__closeOnChange__REACT_HOT_LOADER__',
    value: function __closeOnChange__REACT_HOT_LOADER__(e) {
      var _props2 = this.props,
          closeOnChange = _props2.closeOnChange,
          multiple = _props2.multiple;

      var shouldClose = (0, _isUndefined3.default)(closeOnChange) ? !multiple : closeOnChange;

      if (shouldClose) this.close(e);
    }
  }, {
    key: '__closeOnEscape__REACT_HOT_LOADER__',
    value: function __closeOnEscape__REACT_HOT_LOADER__(e) {
      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;
      e.preventDefault();
      this.close();
    }
  }, {
    key: '__moveSelectionOnKeyDown__REACT_HOT_LOADER__',
    value: function __moveSelectionOnKeyDown__REACT_HOT_LOADER__(e) {
      var _moves;

      debug('moveSelectionOnKeyDown()', _lib.keyboardKey.getName(e));

      var multiple = this.props.multiple;

      var moves = (_moves = {}, (0, _defineProperty3.default)(_moves, _lib.keyboardKey.ArrowDown, 1), (0, _defineProperty3.default)(_moves, _lib.keyboardKey.ArrowUp, -1), _moves);
      var move = moves[_lib.keyboardKey.getCode(e)];

      if (move === undefined) return;
      e.preventDefault();
      this.moveSelectionBy(move);
      if (!multiple) this.makeSelectedItemActive(e);
    }
  }, {
    key: '__openOnSpace__REACT_HOT_LOADER__',
    value: function __openOnSpace__REACT_HOT_LOADER__(e) {
      debug('openOnSpace()');

      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Spacebar) return;
      if (this.state.open) return;

      e.preventDefault();

      this.open(e);
    }
  }, {
    key: '__openOnArrow__REACT_HOT_LOADER__',
    value: function __openOnArrow__REACT_HOT_LOADER__(e) {
      debug('openOnArrow()');

      var code = _lib.keyboardKey.getCode(e);
      if (!(0, _includes3.default)([_lib.keyboardKey.ArrowDown, _lib.keyboardKey.ArrowUp], code)) return;
      if (this.state.open) return;

      e.preventDefault();

      this.open(e);
    }
  }, {
    key: '__makeSelectedItemActive__REACT_HOT_LOADER__',
    value: function __makeSelectedItemActive__REACT_HOT_LOADER__(e) {
      var open = this.state.open;
      var _props3 = this.props,
          multiple = _props3.multiple,
          onAddItem = _props3.onAddItem;


      var item = this.getSelectedItem();
      var value = (0, _get6.default)(item, 'value');

      // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed
      if (!value || !open) return;

      // notify the onAddItem prop if this is a new value
      if (onAddItem && item['data-additional']) onAddItem(e, (0, _extends3.default)({}, this.props, { value: value }));

      // state value may be undefined
      var newValue = multiple ? (0, _union3.default)(this.state.value, [value]) : value;

      // notify the onChange prop that the user is trying to change value
      this.setValue(newValue);
      this.setSelectedIndex(newValue);
      this.handleChange(e, newValue);
    }
  }, {
    key: '__selectItemOnEnter__REACT_HOT_LOADER__',
    value: function __selectItemOnEnter__REACT_HOT_LOADER__(e) {
      debug('selectItemOnEnter()', _lib.keyboardKey.getName(e));
      var _props4 = this.props,
          multiple = _props4.multiple,
          search = _props4.search;


      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Enter) return;
      e.preventDefault();

      if (search && (0, _isEmpty3.default)(this.getMenuOptions())) return;

      this.makeSelectedItemActive(e);
      this.closeOnChange(e);

      if (!multiple) this.clearSearchQuery();
      if (search && this.searchRef) this.searchRef.focus();
    }
  }, {
    key: '__removeItemOnBackspace__REACT_HOT_LOADER__',
    value: function __removeItemOnBackspace__REACT_HOT_LOADER__(e) {
      debug('removeItemOnBackspace()', _lib.keyboardKey.getName(e));

      var _props5 = this.props,
          multiple = _props5.multiple,
          search = _props5.search;
      var _state2 = this.state,
          searchQuery = _state2.searchQuery,
          value = _state2.value;


      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Backspace) return;
      if (searchQuery || !search || !multiple || (0, _isEmpty3.default)(value)) return;
      e.preventDefault();

      // remove most recent value
      var newValue = (0, _dropRight3.default)(value);

      this.setValue(newValue);
      this.setSelectedIndex(newValue);
      this.handleChange(e, newValue);
    }
  }, {
    key: '__closeOnDocumentClick__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    value: function __closeOnDocumentClick__REACT_HOT_LOADER__(e) {
      debug('closeOnDocumentClick()');
      debug(e);

      // If event happened in the dropdown, ignore it
      if (this.ref && (0, _isFunction3.default)(this.ref.contains) && this.ref.contains(e.target)) return;

      this.close();
    }
  }, {
    key: '__handleMouseDown__REACT_HOT_LOADER__',
    value: function __handleMouseDown__REACT_HOT_LOADER__(e) {
      debug('handleMouseDown()');

      this.isMouseDown = true;
      (0, _invoke3.default)(this.props, 'onMouseDown', e, this.props);
      // Do not access document when server side rendering
      if (_lib.isBrowser) document.addEventListener('mouseup', this.handleDocumentMouseUp);
    }
  }, {
    key: '__handleDocumentMouseUp__REACT_HOT_LOADER__',
    value: function __handleDocumentMouseUp__REACT_HOT_LOADER__() {
      debug('handleDocumentMouseUp()');

      this.isMouseDown = false;
      // Do not access document when server side rendering
      if (_lib.isBrowser) document.removeEventListener('mouseup', this.handleDocumentMouseUp);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      debug('handleClick()', e);

      var _props6 = this.props,
          minCharacters = _props6.minCharacters,
          search = _props6.search;
      var _state3 = this.state,
          open = _state3.open,
          searchQuery = _state3.searchQuery;


      (0, _invoke3.default)(this.props, 'onClick', e, this.props);
      // prevent closeOnDocumentClick()
      e.stopPropagation();

      if (!search) return this.toggle(e);
      if (open) return;
      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        this.open(e);
        return;
      }
      if (this.searchRef) this.searchRef.focus();
    }
  }, {
    key: '__handleIconClick__REACT_HOT_LOADER__',
    value: function __handleIconClick__REACT_HOT_LOADER__(e) {
      debug('handleIconClick()', e);

      (0, _invoke3.default)(this.props, 'onClick', e, this.props);
      // prevent handleClick()
      e.stopPropagation();
      this.toggle(e);
    }
  }, {
    key: '__handleItemClick__REACT_HOT_LOADER__',
    value: function __handleItemClick__REACT_HOT_LOADER__(e, item) {
      debug('handleItemClick()', item);

      var _props7 = this.props,
          multiple = _props7.multiple,
          onAddItem = _props7.onAddItem,
          search = _props7.search;
      var value = item.value;

      // prevent toggle() in handleClick()

      e.stopPropagation();
      // prevent closeOnDocumentClick() if multiple or item is disabled
      if (multiple || item.disabled) e.nativeEvent.stopImmediatePropagation();
      if (item.disabled) return;

      // notify the onAddItem prop if this is a new value
      if (onAddItem && item['data-additional']) onAddItem(e, (0, _extends3.default)({}, this.props, { value: value }));

      var newValue = multiple ? (0, _union3.default)(this.state.value, [value]) : value;

      // notify the onChange prop that the user is trying to change value
      this.setValue(newValue);
      this.setSelectedIndex(value);
      if (!multiple) this.clearSearchQuery();

      this.handleChange(e, newValue);
      this.closeOnChange(e);

      if (multiple && search && this.searchRef) this.searchRef.focus();
    }
  }, {
    key: '__handleFocus__REACT_HOT_LOADER__',
    value: function __handleFocus__REACT_HOT_LOADER__(e) {
      debug('handleFocus()');
      var focus = this.state.focus;


      if (focus) return;

      (0, _invoke3.default)(this.props, 'onFocus', e, this.props);
      this.setState({ focus: true });
    }
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function __handleBlur__REACT_HOT_LOADER__(e) {
      debug('handleBlur()');

      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = (0, _get6.default)(e, 'currentTarget');
      if (currentTarget && currentTarget.contains(document.activeElement)) return;

      var _props8 = this.props,
          closeOnBlur = _props8.closeOnBlur,
          multiple = _props8.multiple,
          onBlur = _props8.onBlur,
          selectOnBlur = _props8.selectOnBlur;
      // do not "blur" when the mouse is down inside of the Dropdown

      if (this.isMouseDown) return;
      if (onBlur) onBlur(e, this.props);
      if (selectOnBlur && !multiple) {
        this.makeSelectedItemActive(e);
        if (closeOnBlur) this.close();
      }
      this.setState({ focus: false });
      this.clearSearchQuery();
    }
  }, {
    key: '__handleSearchChange__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // There are times when we need to calculate the options based on a value
    // that hasn't yet been persisted to state.
    value: function __handleSearchChange__REACT_HOT_LOADER__(e, _ref2) {
      var value = _ref2.value;

      debug('handleSearchChange()');
      debug(value);

      // prevent propagating to this.props.onChange()
      e.stopPropagation();

      var minCharacters = this.props.minCharacters;
      var open = this.state.open;

      var newQuery = value;

      (0, _invoke3.default)(this.props, 'onSearchChange', e, newQuery);
      this.setState({
        selectedIndex: 0,
        searchQuery: newQuery
      });

      // open search dropdown on search query
      if (!open && newQuery.length >= minCharacters) {
        this.open();
        return;
      }
      // close search dropdown if search query is too small
      if (open && minCharacters !== 1 && newQuery.length < minCharacters) this.close();
    }
  }, {
    key: '__getMenuOptions__REACT_HOT_LOADER__',
    value: function __getMenuOptions__REACT_HOT_LOADER__() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.options;
      var _props9 = this.props,
          multiple = _props9.multiple,
          search = _props9.search,
          allowAdditions = _props9.allowAdditions,
          additionPosition = _props9.additionPosition,
          additionLabel = _props9.additionLabel;
      var searchQuery = this.state.searchQuery;


      var filteredOptions = options;

      // filter out active options
      if (multiple) {
        filteredOptions = (0, _filter3.default)(filteredOptions, function (opt) {
          return !(0, _includes3.default)(value, opt.value);
        });
      }

      // filter by search query
      if (search && searchQuery) {
        if ((0, _isFunction3.default)(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          var re = new RegExp((0, _escapeRegExp3.default)(searchQuery), 'i');
          filteredOptions = (0, _filter3.default)(filteredOptions, function (opt) {
            return re.test(opt.text);
          });
        }
      }

      // insert the "add" item
      if (allowAdditions && search && searchQuery && !(0, _some3.default)(filteredOptions, { text: searchQuery })) {
        var additionLabelElement = _react2.default.isValidElement(additionLabel) ? _react2.default.cloneElement(additionLabel, { key: 'addition-label' }) : additionLabel || '';

        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, _react2.default.createElement(
            'b',
            { key: 'addition-query' },
            searchQuery
          )],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    }
  }, {
    key: '__getSelectedItem__REACT_HOT_LOADER__',
    value: function __getSelectedItem__REACT_HOT_LOADER__() {
      var selectedIndex = this.state.selectedIndex;

      var options = this.getMenuOptions();

      return (0, _get6.default)(options, '[' + selectedIndex + ']');
    }
  }, {
    key: '__getEnabledIndices__REACT_HOT_LOADER__',
    value: function __getEnabledIndices__REACT_HOT_LOADER__(givenOptions) {
      var options = givenOptions || this.getMenuOptions();

      return (0, _reduce3.default)(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    }
  }, {
    key: '__getItemByValue__REACT_HOT_LOADER__',
    value: function __getItemByValue__REACT_HOT_LOADER__(value) {
      var options = this.props.options;


      return (0, _find3.default)(options, { value: value });
    }
  }, {
    key: '__getMenuItemIndexByValue__REACT_HOT_LOADER__',
    value: function __getMenuItemIndexByValue__REACT_HOT_LOADER__(value, givenOptions) {
      var options = givenOptions || this.getMenuOptions();

      return (0, _findIndex3.default)(options, ['value', value]);
    }
  }, {
    key: '__getDropdownAriaOptions__REACT_HOT_LOADER__',
    value: function __getDropdownAriaOptions__REACT_HOT_LOADER__() {
      var _props10 = this.props,
          loading = _props10.loading,
          disabled = _props10.disabled,
          search = _props10.search,
          multiple = _props10.multiple;
      var open = this.state.open;

      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };
      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }
      return ariaOptions;
    }
  }, {
    key: 'getDropdownMenuAriaOptions',
    value: function getDropdownMenuAriaOptions() {
      var _props11 = this.props,
          search = _props11.search,
          multiple = _props11.multiple;

      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }
      return ariaOptions;
    }

    // ----------------------------------------
    // Setters
    // ----------------------------------------

  }, {
    key: '__clearSearchQuery__REACT_HOT_LOADER__',
    value: function __clearSearchQuery__REACT_HOT_LOADER__() {
      debug('clearSearchQuery()');
      this.setState({ searchQuery: '' });
    }
  }, {
    key: '__setValue__REACT_HOT_LOADER__',
    value: function __setValue__REACT_HOT_LOADER__(value) {
      debug('setValue()', value);
      this.trySetState({ value: value });
    }
  }, {
    key: '__setSelectedIndex__REACT_HOT_LOADER__',
    value: function __setSelectedIndex__REACT_HOT_LOADER__() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.options;
      var multiple = this.props.multiple;
      var selectedIndex = this.state.selectedIndex;

      var options = this.getMenuOptions(value, optionsProps);
      var enabledIndicies = this.getEnabledIndices(options);

      var newSelectedIndex = void 0;

      // update the selected index
      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0];

        // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.
        newSelectedIndex = multiple ? firstIndex : this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = this.getMenuItemIndexByValue(value, options);

        // regular selects can only have one active item
        // set the selected index to the currently active item
        newSelectedIndex = (0, _includes3.default)(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      this.setState({ selectedIndex: newSelectedIndex });
    }
  }, {
    key: '__handleLabelClick__REACT_HOT_LOADER__',
    value: function __handleLabelClick__REACT_HOT_LOADER__(e, labelProps) {
      debug('handleLabelClick()');
      // prevent focusing search input on click
      e.stopPropagation();

      this.setState({ selectedLabel: labelProps.value });

      var onLabelClick = this.props.onLabelClick;

      if (onLabelClick) onLabelClick(e, labelProps);
    }
  }, {
    key: '__handleLabelRemove__REACT_HOT_LOADER__',
    value: function __handleLabelRemove__REACT_HOT_LOADER__(e, labelProps) {
      debug('handleLabelRemove()');
      // prevent focusing search input on click
      e.stopPropagation();
      var value = this.state.value;

      var newValue = (0, _without3.default)(value, labelProps.value);
      debug('label props:', labelProps);
      debug('current value:', value);
      debug('remove value:', labelProps.value);
      debug('new value:', newValue);

      this.setValue(newValue);
      this.setSelectedIndex(newValue);
      this.handleChange(e, newValue);
    }
  }, {
    key: '__moveSelectionBy__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Overrides
    // ----------------------------------------

    value: function __moveSelectionBy__REACT_HOT_LOADER__(offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.selectedIndex;

      debug('moveSelectionBy()');
      debug('offset: ' + offset);

      var options = this.getMenuOptions();
      var lastIndex = options.length - 1;

      // Prevent infinite loop
      if ((0, _every3.default)(options, 'disabled')) return;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = startIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) {
        this.moveSelectionBy(offset, nextIndex);
        return;
      }

      this.setState({ selectedIndex: nextIndex });
      this.scrollSelectedItemIntoView();
    }
  }, {
    key: '__handleIconOverrides__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Refs
    // ----------------------------------------

    value: function __handleIconOverrides__REACT_HOT_LOADER__(predefinedProps) {
      var _this50 = this;

      return {
        onClick: function onClick(e) {
          (0, _invoke3.default)(predefinedProps, 'onClick', e, predefinedProps);
          _this50.handleIconClick(e);
        }
      };
    }
  }, {
    key: '__handleSearchRef__REACT_HOT_LOADER__',
    value: function __handleSearchRef__REACT_HOT_LOADER__(c) {
      return this.searchRef = c;
    }
  }, {
    key: '__handleSizerRef__REACT_HOT_LOADER__',
    value: function __handleSizerRef__REACT_HOT_LOADER__(c) {
      return this.sizerRef = c;
    }
  }, {
    key: '__handleRef__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    value: function __handleRef__REACT_HOT_LOADER__(c) {
      return this.ref = c;
    }
  }, {
    key: '__computeSearchInputTabIndex__REACT_HOT_LOADER__',
    value: function __computeSearchInputTabIndex__REACT_HOT_LOADER__() {
      var _props12 = this.props,
          disabled = _props12.disabled,
          tabIndex = _props12.tabIndex;


      if (!(0, _isNil3.default)(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }
  }, {
    key: '__computeSearchInputWidth__REACT_HOT_LOADER__',
    value: function __computeSearchInputWidth__REACT_HOT_LOADER__() {
      var searchQuery = this.state.searchQuery;


      if (this.sizerRef && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it

        this.sizerRef.style.display = 'inline';
        this.sizerRef.textContent = searchQuery;
        var searchWidth = Math.ceil(this.sizerRef.getBoundingClientRect().width);
        this.sizerRef.style.removeProperty('display');

        return searchWidth;
      }
    }
  }, {
    key: '__computeTabIndex__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    value: function __computeTabIndex__REACT_HOT_LOADER__() {
      var _props13 = this.props,
          disabled = _props13.disabled,
          search = _props13.search,
          tabIndex = _props13.tabIndex;


      if (!(0, _isNil3.default)(tabIndex)) return tabIndex;
      // don't set a root node tabIndex as the search input has its own tabIndex
      if (!search) return disabled ? -1 : 0;
    }
  }, {
    key: '__scrollSelectedItemIntoView__REACT_HOT_LOADER__',
    value: function __scrollSelectedItemIntoView__REACT_HOT_LOADER__() {
      debug('scrollSelectedItemIntoView()');
      if (!this.ref) return;
      var menu = this.ref.querySelector('.menu.visible');
      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      debug('menu: ' + menu);
      debug('item: ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }
  }, {
    key: '__open__REACT_HOT_LOADER__',
    value: function __open__REACT_HOT_LOADER__(e) {
      debug('open()');

      var _props14 = this.props,
          disabled = _props14.disabled,
          onOpen = _props14.onOpen,
          search = _props14.search;

      if (disabled) return;
      if (search && this.searchRef) this.searchRef.focus();
      if (onOpen) onOpen(e, this.props);

      this.trySetState({ open: true });
      this.scrollSelectedItemIntoView();
    }
  }, {
    key: '__close__REACT_HOT_LOADER__',
    value: function __close__REACT_HOT_LOADER__(e) {
      debug('close()');

      var onClose = this.props.onClose;

      if (onClose) onClose(e, this.props);

      this.trySetState({ open: false });
    }
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__() {
      debug('handleClose()');
      var hasSearchFocus = document.activeElement === this.searchRef;
      var hasDropdownFocus = document.activeElement === this.ref;
      var hasFocus = hasSearchFocus || hasDropdownFocus;
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.
      if (!hasSearchFocus) {
        this.ref.blur();
      }

      // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
      this.setState({ focus: hasFocus });
    }
  }, {
    key: '__toggle__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function __toggle__REACT_HOT_LOADER__(e) {
      return this.state.open ? this.close(e) : this.open(e);
    }
  }, {
    key: '__renderText__REACT_HOT_LOADER__',
    value: function __renderText__REACT_HOT_LOADER__() {
      var _props15 = this.props,
          multiple = _props15.multiple,
          placeholder = _props15.placeholder,
          search = _props15.search,
          text = _props15.text;
      var _state4 = this.state,
          searchQuery = _state4.searchQuery,
          value = _state4.value,
          open = _state4.open;

      var hasValue = multiple ? !(0, _isEmpty3.default)(value) : !(0, _isNil3.default)(value) && value !== '';

      var classes = (0, _classnames2.default)(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;
      if (searchQuery) {
        _text = null;
      } else if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = (0, _get6.default)(this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = (0, _get6.default)(this.getItemByValue(value), 'text');
      }

      return _react2.default.createElement(
        'div',
        { className: classes, role: 'alert', 'aria-live': 'polite' },
        _text
      );
    }
  }, {
    key: '__renderSearchInput__REACT_HOT_LOADER__',
    value: function __renderSearchInput__REACT_HOT_LOADER__() {
      var _props16 = this.props,
          search = _props16.search,
          searchInput = _props16.searchInput;
      var searchQuery = this.state.searchQuery;


      if (!search) return null;
      return _DropdownSearchInput2.default.create(searchInput, { defaultProps: {
          inputRef: this.handleSearchRef,
          onChange: this.handleSearchChange,
          style: { width: this.computeSearchInputWidth() },
          tabIndex: this.computeSearchInputTabIndex(),
          value: searchQuery
        } });
    }
  }, {
    key: '__renderSearchSizer__REACT_HOT_LOADER__',
    value: function __renderSearchSizer__REACT_HOT_LOADER__() {
      var _props17 = this.props,
          search = _props17.search,
          multiple = _props17.multiple;


      if (!(search && multiple)) return null;
      return _react2.default.createElement('span', { className: 'sizer', ref: this.handleSizerRef });
    }
  }, {
    key: '__renderLabels__REACT_HOT_LOADER__',
    value: function __renderLabels__REACT_HOT_LOADER__() {
      var _this51 = this;

      debug('renderLabels()');
      var _props18 = this.props,
          multiple = _props18.multiple,
          renderLabel = _props18.renderLabel;
      var _state5 = this.state,
          selectedLabel = _state5.selectedLabel,
          value = _state5.value;

      if (!multiple || (0, _isEmpty3.default)(value)) {
        return;
      }
      var selectedItems = (0, _map3.default)(value, this.getItemByValue);
      debug('selectedItems', selectedItems);

      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return (0, _map3.default)((0, _compact3.default)(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this51.handleLabelClick,
          onRemove: _this51.handleLabelRemove,
          value: item.value
        };

        return _Label2.default.create(renderLabel(item, index, defaultProps), { defaultProps: defaultProps });
      });
    }
  }, {
    key: '__renderOptions__REACT_HOT_LOADER__',
    value: function __renderOptions__REACT_HOT_LOADER__() {
      var _this52 = this;

      var _props19 = this.props,
          multiple = _props19.multiple,
          search = _props19.search,
          noResultsMessage = _props19.noResultsMessage;
      var _state6 = this.state,
          selectedIndex = _state6.selectedIndex,
          value = _state6.value;

      var options = this.getMenuOptions();

      if (noResultsMessage !== null && search && (0, _isEmpty3.default)(options)) {
        return _react2.default.createElement(
          'div',
          { className: 'message' },
          noResultsMessage
        );
      }

      var isActive = multiple ? function (optValue) {
        return (0, _includes3.default)(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };

      return (0, _map3.default)(options, function (opt, i) {
        return _DropdownItem2.default.create((0, _extends3.default)({
          active: isActive(opt.value),
          onClick: _this52.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: (0, _extends3.default)({}, opt.style, { pointerEvents: 'all' })
        }));
      });
    }
  }, {
    key: '__renderMenu__REACT_HOT_LOADER__',
    value: function __renderMenu__REACT_HOT_LOADER__() {
      var _props20 = this.props,
          children = _props20.children,
          header = _props20.header;
      var open = this.state.open;

      var menuClasses = open ? 'visible' : '';
      var ariaOptions = this.getDropdownMenuAriaOptions();

      // single menu child
      if (!_lib.childrenUtils.isNil(children)) {
        var menuChild = _react.Children.only(children);
        var className = (0, _classnames2.default)(menuClasses, menuChild.props.className);

        return (0, _react.cloneElement)(menuChild, (0, _extends3.default)({ className: className }, ariaOptions));
      }

      return _react2.default.createElement(
        _DropdownMenu2.default,
        (0, _extends3.default)({}, ariaOptions, { className: menuClasses }),
        _DropdownHeader2.default.create(header),
        this.renderOptions()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      debug('render()');
      debug('props', this.props);
      debug('state', this.state);

      var _props21 = this.props,
          basic = _props21.basic,
          button = _props21.button,
          className = _props21.className,
          compact = _props21.compact,
          disabled = _props21.disabled,
          error = _props21.error,
          fluid = _props21.fluid,
          floating = _props21.floating,
          icon = _props21.icon,
          inline = _props21.inline,
          item = _props21.item,
          labeled = _props21.labeled,
          loading = _props21.loading,
          multiple = _props21.multiple,
          pointing = _props21.pointing,
          search = _props21.search,
          selection = _props21.selection,
          scrolling = _props21.scrolling,
          simple = _props21.simple,
          trigger = _props21.trigger,
          upward = _props21.upward;
      var open = this.state.open;

      // Classes

      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(open, 'active visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(button, 'button'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      (0, _lib.useKeyOnly)(labeled, 'labeled'), (0, _lib.useKeyOnly)(item, 'item'), (0, _lib.useKeyOnly)(multiple, 'multiple'), (0, _lib.useKeyOnly)(search, 'search'), (0, _lib.useKeyOnly)(selection, 'selection'), (0, _lib.useKeyOnly)(simple, 'simple'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), (0, _lib.useKeyOnly)(upward, 'upward'), (0, _lib.useKeyOrValueAndKey)(pointing, 'pointing'), 'dropdown', className);
      var rest = (0, _lib.getUnhandledProps)(Dropdown, this.props);
      var ElementType = (0, _lib.getElementType)(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, ariaOptions, {
          className: classes,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          tabIndex: this.computeTabIndex(),
          ref: this.handleRef
        }),
        this.renderLabels(),
        this.renderSearchInput(),
        this.renderSearchSizer(),
        trigger || this.renderText(),
        _Icon2.default.create(icon, {
          overrideProps: this.handleIconOverrides
        }),
        this.renderMenu()
      );
    }
  }]);
  return Dropdown;
}(_lib.AutoControlledComponent);

Dropdown.defaultProps = {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref3) {
    var text = _ref3.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true
};
Dropdown.autoControlledProps = ['open', 'selectedLabel', 'value'];
Dropdown._meta = {
  name: 'Dropdown',
  type: _lib.META.TYPES.MODULE
};
Dropdown.Divider = _DropdownDivider2.default;
Dropdown.Header = _DropdownHeader2.default;
Dropdown.Item = _DropdownItem2.default;
Dropdown.Menu = _DropdownMenu2.default;
Dropdown.SearchInput = _DropdownSearchInput2.default;
Dropdown.handledProps = ['additionLabel', 'additionPosition', 'allowAdditions', 'as', 'basic', 'button', 'children', 'className', 'closeOnBlur', 'closeOnChange', 'compact', 'defaultOpen', 'defaultSelectedLabel', 'defaultValue', 'disabled', 'error', 'floating', 'fluid', 'header', 'icon', 'inline', 'item', 'labeled', 'loading', 'minCharacters', 'multiple', 'noResultsMessage', 'onAddItem', 'onBlur', 'onChange', 'onClick', 'onClose', 'onFocus', 'onLabelClick', 'onMouseDown', 'onOpen', 'onSearchChange', 'open', 'openOnFocus', 'options', 'placeholder', 'pointing', 'renderLabel', 'scrolling', 'search', 'searchInput', 'selectOnBlur', 'selectedLabel', 'selection', 'simple', 'tabIndex', 'text', 'trigger', 'upward', 'value'];
var _default = Dropdown;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Dropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Label prefixed to an option added by a user. */
  additionLabel: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: _propTypes2.default.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: _lib.customPropTypes.every([_lib.customPropTypes.demand(['options', 'selection', 'search']), _propTypes2.default.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: _propTypes2.default.bool,

  /** Format the Dropdown to appear as a button. */
  button: _propTypes2.default.bool,

  /** Primary content. */
  children: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['options', 'selection']), _lib.customPropTypes.givenProps({ children: _propTypes2.default.any.isRequired }, _propTypes2.default.element.isRequired)]),

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: _propTypes2.default.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: _propTypes2.default.bool,

  /** A compact dropdown has no minimum width. */
  compact: _propTypes2.default.bool,

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: _lib.customPropTypes.every([_lib.customPropTypes.demand(['multiple']), _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])]),

  /** Initial value or value array if multiple. */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: _propTypes2.default.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: _propTypes2.default.bool,

  /** A dropdown menu can contain floated content. */
  floating: _propTypes2.default.bool,

  /** A dropdown can take the full width of its parent */
  fluid: _propTypes2.default.bool,

  /** A dropdown menu can contain a header. */
  header: _propTypes2.default.node,

  /** Shorthand for Icon. */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: _propTypes2.default.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: _propTypes2.default.bool,

  /** A dropdown can be labeled. */
  labeled: _propTypes2.default.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: _propTypes2.default.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: _propTypes2.default.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: _propTypes2.default.bool,

  /** Message to display when there are no results. */
  noResultsMessage: _propTypes2.default.string,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: _propTypes2.default.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: _propTypes2.default.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: _propTypes2.default.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes2.default.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: _propTypes2.default.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: _propTypes2.default.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes2.default.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange: _propTypes2.default.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: _propTypes2.default.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: _propTypes2.default.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.arrayOf(_propTypes2.default.shape(_DropdownItem2.default.propTypes))]),

  /** Placeholder text. */
  placeholder: _propTypes2.default.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: _propTypes2.default.func,

  /** A dropdown can have its menu scroll. */
  scrolling: _propTypes2.default.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),

  /** A shorthand for a search input. */
  searchInput: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.node, _propTypes2.default.object]),

  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: _propTypes2.default.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: _lib.customPropTypes.every([_lib.customPropTypes.demand(['multiple']), _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['options']), _propTypes2.default.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: _propTypes2.default.bool,

  /** A dropdown can receive focus. */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: _propTypes2.default.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['selection', 'text']), _propTypes2.default.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),

  /** A dropdown can open upward. */
  upward: _propTypes2.default.bool
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Dropdown/Dropdown.js');

  __REACT_HOT_LOADER__.register(getKeyOrValue, 'getKeyOrValue', 'src/modules/Dropdown/Dropdown.js');

  __REACT_HOT_LOADER__.register(Dropdown, 'Dropdown', 'src/modules/Dropdown/Dropdown.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Dropdown/Dropdown.js');
}();

;