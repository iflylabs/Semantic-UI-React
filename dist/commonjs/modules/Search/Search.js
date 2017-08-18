'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _partialRight2 = require('lodash/partialRight');

var _partialRight3 = _interopRequireDefault(_partialRight2);

var _inRange2 = require('lodash/inRange');

var _inRange3 = _interopRequireDefault(_inRange2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _get5 = require('lodash/get');

var _get6 = _interopRequireDefault(_get5);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Input = require('../../elements/Input');

var _Input2 = _interopRequireDefault(_Input);

var _SearchCategory = require('./SearchCategory');

var _SearchCategory2 = _interopRequireDefault(_SearchCategory);

var _SearchResult = require('./SearchResult');

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _SearchResults = require('./SearchResults');

var _SearchResults2 = _interopRequireDefault(_SearchResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _lib.makeDebugger)('search');

/**
 * A search module allows a user to query for results from a selection of data
 */

var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleResultSelect = function () {
      var _this2;

      return (_this2 = _this).__handleResultSelect__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleSelectionChange = function () {
      var _this3;

      return (_this3 = _this).__handleSelectionChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.closeOnEscape = function () {
      var _this4;

      return (_this4 = _this).__closeOnEscape__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.moveSelectionOnKeyDown = function () {
      var _this5;

      return (_this5 = _this).__moveSelectionOnKeyDown__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.selectItemOnEnter = function () {
      var _this6;

      return (_this6 = _this).__selectItemOnEnter__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.closeOnDocumentClick = function () {
      var _this7;

      return (_this7 = _this).__closeOnDocumentClick__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.handleMouseDown = function () {
      var _this8;

      return (_this8 = _this).__handleMouseDown__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.handleDocumentMouseUp = function () {
      var _this9;

      return (_this9 = _this).__handleDocumentMouseUp__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.handleInputClick = function () {
      var _this10;

      return (_this10 = _this).__handleInputClick__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _this.handleItemClick = function () {
      var _this11;

      return (_this11 = _this).__handleItemClick__REACT_HOT_LOADER__.apply(_this11, arguments);
    }, _this.handleFocus = function () {
      var _this12;

      return (_this12 = _this).__handleFocus__REACT_HOT_LOADER__.apply(_this12, arguments);
    }, _this.handleBlur = function () {
      var _this13;

      return (_this13 = _this).__handleBlur__REACT_HOT_LOADER__.apply(_this13, arguments);
    }, _this.handleSearchChange = function () {
      var _this14;

      return (_this14 = _this).__handleSearchChange__REACT_HOT_LOADER__.apply(_this14, arguments);
    }, _this.getFlattenedResults = function () {
      var _this15;

      return (_this15 = _this).__getFlattenedResults__REACT_HOT_LOADER__.apply(_this15, arguments);
    }, _this.getSelectedResult = function () {
      var _this16;

      return (_this16 = _this).__getSelectedResult__REACT_HOT_LOADER__.apply(_this16, arguments);
    }, _this.setValue = function () {
      var _this17;

      return (_this17 = _this).__setValue__REACT_HOT_LOADER__.apply(_this17, arguments);
    }, _this.moveSelectionBy = function () {
      var _this18;

      return (_this18 = _this).__moveSelectionBy__REACT_HOT_LOADER__.apply(_this18, arguments);
    }, _this.scrollSelectedItemIntoView = function () {
      var _this19;

      return (_this19 = _this).__scrollSelectedItemIntoView__REACT_HOT_LOADER__.apply(_this19, arguments);
    }, _this.tryOpen = function () {
      var _this20;

      return (_this20 = _this).__tryOpen__REACT_HOT_LOADER__.apply(_this20, arguments);
    }, _this.open = function () {
      var _this21;

      return (_this21 = _this).__open__REACT_HOT_LOADER__.apply(_this21, arguments);
    }, _this.close = function () {
      var _this22;

      return (_this22 = _this).__close__REACT_HOT_LOADER__.apply(_this22, arguments);
    }, _this.renderSearchInput = function () {
      var _this23;

      return (_this23 = _this).__renderSearchInput__REACT_HOT_LOADER__.apply(_this23, arguments);
    }, _this.renderNoResults = function () {
      var _this24;

      return (_this24 = _this).__renderNoResults__REACT_HOT_LOADER__.apply(_this24, arguments);
    }, _this.renderResult = function () {
      var _this25;

      return (_this25 = _this).__renderResult__REACT_HOT_LOADER__.apply(_this25, arguments);
    }, _this.renderResults = function () {
      var _this26;

      return (_this26 = _this).__renderResults__REACT_HOT_LOADER__.apply(_this26, arguments);
    }, _this.renderCategories = function () {
      var _this27;

      return (_this27 = _this).__renderCategories__REACT_HOT_LOADER__.apply(_this27, arguments);
    }, _this.renderMenuContent = function () {
      var _this28;

      return (_this28 = _this).__renderMenuContent__REACT_HOT_LOADER__.apply(_this28, arguments);
    }, _this.renderResultsMenu = function () {
      var _this29;

      return (_this29 = _this).__renderResultsMenu__REACT_HOT_LOADER__.apply(_this29, arguments);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
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
      (0, _get4.default)(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      debug('changed props:', (0, _lib.objectDiff)(nextProps, this.props));

      if (!(0, _isEqual3.default)(nextProps.value, this.props.value)) {
        debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
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
        debug('search focused');
        if (!this.isMouseDown) {
          debug('mouse is not down, opening');
          this.tryOpen();
        }
        if (this.state.open) {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
      } else if (prevState.focus && !this.state.focus) {
        debug('search blurred');
        if (!this.isMouseDown) {
          debug('mouse is not down, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        debug('search opened');
        this.open();
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('click', this.closeOnDocumentClick);
      } else if (prevState.open && !this.state.open) {
        debug('search closed');
        this.close();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!_lib.isBrowser) return;

      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

  }, {
    key: '__handleResultSelect__REACT_HOT_LOADER__',
    value: function __handleResultSelect__REACT_HOT_LOADER__(e, result) {
      debug('handleResultSelect()');
      debug(result);

      (0, _invoke3.default)(this.props, 'onResultSelect', e, (0, _extends3.default)({}, this.props, { result: result }));
    }
  }, {
    key: '__handleSelectionChange__REACT_HOT_LOADER__',
    value: function __handleSelectionChange__REACT_HOT_LOADER__(e) {
      debug('handleSelectionChange()');

      var result = this.getSelectedResult();
      (0, _invoke3.default)(this.props, 'onSelectionChange', e, (0, _extends3.default)({}, this.props, { result: result }));
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
      debug('moveSelectionOnKeyDown()');
      debug(_lib.keyboardKey.getName(e));
      switch (_lib.keyboardKey.getCode(e)) {
        case _lib.keyboardKey.ArrowDown:
          e.preventDefault();
          this.moveSelectionBy(e, 1);
          break;
        case _lib.keyboardKey.ArrowUp:
          e.preventDefault();
          this.moveSelectionBy(e, -1);
          break;
        default:
          break;
      }
    }
  }, {
    key: '__selectItemOnEnter__REACT_HOT_LOADER__',
    value: function __selectItemOnEnter__REACT_HOT_LOADER__(e) {
      debug('selectItemOnEnter()');
      debug(_lib.keyboardKey.getName(e));
      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Enter) return;

      var result = this.getSelectedResult();

      // prevent selecting null if there was no selected item value
      if (!result) return;

      e.preventDefault();

      // notify the onResultSelect prop that the user is trying to change value
      this.setValue(result.title);
      this.handleResultSelect(e, result);
      this.close();
    }
  }, {
    key: '__closeOnDocumentClick__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    value: function __closeOnDocumentClick__REACT_HOT_LOADER__(e) {
      debug('closeOnDocumentClick()');
      debug(e);
      this.close();
    }
  }, {
    key: '__handleMouseDown__REACT_HOT_LOADER__',
    value: function __handleMouseDown__REACT_HOT_LOADER__(e) {
      debug('handleMouseDown()');
      var onMouseDown = this.props.onMouseDown;

      if (onMouseDown) onMouseDown(e, this.props);
      this.isMouseDown = true;
      // Do not access document when server side rendering
      if (!_lib.isBrowser) return;
      document.addEventListener('mouseup', this.handleDocumentMouseUp);
    }
  }, {
    key: '__handleDocumentMouseUp__REACT_HOT_LOADER__',
    value: function __handleDocumentMouseUp__REACT_HOT_LOADER__() {
      debug('handleDocumentMouseUp()');
      this.isMouseDown = false;
      // Do not access document when server side rendering
      if (!_lib.isBrowser) return;
      document.removeEventListener('mouseup', this.handleDocumentMouseUp);
    }
  }, {
    key: '__handleInputClick__REACT_HOT_LOADER__',
    value: function __handleInputClick__REACT_HOT_LOADER__(e) {
      debug('handleInputClick()', e);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      this.tryOpen();
    }
  }, {
    key: '__handleItemClick__REACT_HOT_LOADER__',
    value: function __handleItemClick__REACT_HOT_LOADER__(e, _ref2) {
      var id = _ref2.id;

      debug('handleItemClick()');
      debug(id);
      var result = this.getSelectedResult(id);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      // notify the onResultSelect prop that the user is trying to change value
      this.setValue(result.title);
      this.handleResultSelect(e, result);
      this.close();
    }
  }, {
    key: '__handleFocus__REACT_HOT_LOADER__',
    value: function __handleFocus__REACT_HOT_LOADER__(e) {
      debug('handleFocus()');
      var onFocus = this.props.onFocus;

      if (onFocus) onFocus(e, this.props);
      this.setState({ focus: true });
    }
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function __handleBlur__REACT_HOT_LOADER__(e) {
      debug('handleBlur()');
      var onBlur = this.props.onBlur;

      if (onBlur) onBlur(e, this.props);
      this.setState({ focus: false });
    }
  }, {
    key: '__handleSearchChange__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Getters
    // ----------------------------------------

    value: function __handleSearchChange__REACT_HOT_LOADER__(e) {
      debug('handleSearchChange()');
      debug(e.target.value);
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = this.props.minCharacters;
      var open = this.state.open;

      var newQuery = e.target.value;

      (0, _invoke3.default)(this.props, 'onSearchChange', e, (0, _extends3.default)({}, this.props, { value: newQuery }));

      // open search dropdown on search query
      if (newQuery.length < minCharacters) {
        this.close();
      } else if (!open) {
        this.tryOpen(newQuery);
      }

      this.setValue(newQuery);
    }
  }, {
    key: '__getFlattenedResults__REACT_HOT_LOADER__',
    value: function __getFlattenedResults__REACT_HOT_LOADER__() {
      var _props = this.props,
          category = _props.category,
          results = _props.results;


      return !category ? results : (0, _reduce3.default)(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    }
  }, {
    key: '__getSelectedResult__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Setters
    // ----------------------------------------

    value: function __getSelectedResult__REACT_HOT_LOADER__() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.selectedIndex;

      var results = this.getFlattenedResults();
      return (0, _get6.default)(results, index);
    }
  }, {
    key: '__setValue__REACT_HOT_LOADER__',
    value: function __setValue__REACT_HOT_LOADER__(value) {
      debug('setValue()');
      debug('value', value);

      var selectFirstResult = this.props.selectFirstResult;


      this.trySetState({ value: value }, { selectedIndex: selectFirstResult ? 0 : -1 });
    }
  }, {
    key: '__moveSelectionBy__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    value: function __moveSelectionBy__REACT_HOT_LOADER__(e, offset) {
      debug('moveSelectionBy()');
      debug('offset: ' + offset);
      var selectedIndex = this.state.selectedIndex;


      var results = this.getFlattenedResults();
      var lastIndex = results.length - 1;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      this.setState({ selectedIndex: nextIndex });
      this.scrollSelectedItemIntoView();
      this.handleSelectionChange(e);
    }
  }, {
    key: '__scrollSelectedItemIntoView__REACT_HOT_LOADER__',


    // Open if the current value is greater than the minCharacters prop
    value: function __scrollSelectedItemIntoView__REACT_HOT_LOADER__() {
      debug('scrollSelectedItemIntoView()');
      // Do not access document when server side rendering
      if (!_lib.isBrowser) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      var item = menu.querySelector('.result.active');
      if (!item) return;
      debug('menu (results): ' + menu);
      debug('item (result): ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }
  }, {
    key: '__tryOpen__REACT_HOT_LOADER__',
    value: function __tryOpen__REACT_HOT_LOADER__() {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.value;

      debug('open()');

      var minCharacters = this.props.minCharacters;

      if (currentValue.length < minCharacters) return;

      this.open();
    }
  }, {
    key: '__open__REACT_HOT_LOADER__',
    value: function __open__REACT_HOT_LOADER__() {
      debug('open()');
      this.trySetState({ open: true });
    }
  }, {
    key: '__close__REACT_HOT_LOADER__',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function __close__REACT_HOT_LOADER__() {
      debug('close()');
      this.trySetState({ open: false });
    }
  }, {
    key: '__renderSearchInput__REACT_HOT_LOADER__',
    value: function __renderSearchInput__REACT_HOT_LOADER__(rest) {
      var _props2 = this.props,
          icon = _props2.icon,
          input = _props2.input;
      var value = this.state.value;


      return _Input2.default.create(input, { defaultProps: (0, _extends3.default)({}, rest, {
          icon: icon,
          input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
          onBlur: this.handleBlur,
          onChange: this.handleSearchChange,
          onClick: this.handleInputClick,
          onFocus: this.handleFocus,
          value: value
        }) });
    }
  }, {
    key: '__renderNoResults__REACT_HOT_LOADER__',


    /**
     * Offset is needed for determining the active item for results within a
     * category. Since the index is reset to 0 for each new category, an offset
     * must be passed in.
     */
    value: function __renderNoResults__REACT_HOT_LOADER__() {
      var _props3 = this.props,
          noResultsDescription = _props3.noResultsDescription,
          noResultsMessage = _props3.noResultsMessage;


      return _react2.default.createElement(
        'div',
        { className: 'message empty' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          noResultsMessage
        ),
        noResultsDescription && _react2.default.createElement(
          'div',
          { className: 'description' },
          noResultsDescription
        )
      );
    }
  }, {
    key: '__renderResult__REACT_HOT_LOADER__',
    value: function __renderResult__REACT_HOT_LOADER__(_ref3, index, _array) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var childKey = _ref3.childKey,
          result = (0, _objectWithoutProperties3.default)(_ref3, ['childKey']);
      var resultRenderer = this.props.resultRenderer;
      var selectedIndex = this.state.selectedIndex;

      var offsetIndex = index + offset;

      return _react2.default.createElement(_SearchResult2.default, (0, _extends3.default)({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click
      }));
    }
  }, {
    key: '__renderResults__REACT_HOT_LOADER__',
    value: function __renderResults__REACT_HOT_LOADER__() {
      var results = this.props.results;


      return (0, _map3.default)(results, this.renderResult);
    }
  }, {
    key: '__renderCategories__REACT_HOT_LOADER__',
    value: function __renderCategories__REACT_HOT_LOADER__() {
      var _this30 = this;

      var _props4 = this.props,
          categoryRenderer = _props4.categoryRenderer,
          categories = _props4.results;
      var selectedIndex = this.state.selectedIndex;


      var count = 0;

      return (0, _map3.default)(categories, function (_ref4) {
        var childKey = _ref4.childKey,
            category = (0, _objectWithoutProperties3.default)(_ref4, ['childKey']);

        var categoryProps = (0, _extends3.default)({
          key: childKey || category.name,
          active: (0, _inRange3.default)(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);
        var renderFn = (0, _partialRight3.default)(_this30.renderResult, count);

        count += category.results.length;

        return _react2.default.createElement(
          _SearchCategory2.default,
          categoryProps,
          category.results.map(renderFn)
        );
      });
    }
  }, {
    key: '__renderMenuContent__REACT_HOT_LOADER__',
    value: function __renderMenuContent__REACT_HOT_LOADER__() {
      var _props5 = this.props,
          category = _props5.category,
          showNoResults = _props5.showNoResults,
          results = _props5.results;


      if ((0, _isEmpty3.default)(results)) {
        return showNoResults ? this.renderNoResults() : null;
      }

      return category ? this.renderCategories() : this.renderResults();
    }
  }, {
    key: '__renderResultsMenu__REACT_HOT_LOADER__',
    value: function __renderResultsMenu__REACT_HOT_LOADER__() {
      var open = this.state.open;

      var resultsClasses = open ? 'visible' : '';
      var menuContent = this.renderMenuContent();

      if (!menuContent) return;

      return _react2.default.createElement(
        _SearchResults2.default,
        { className: resultsClasses },
        menuContent
      );
    }
  }, {
    key: 'render',
    value: function render() {
      debug('render()');
      debug('props', this.props);
      debug('state', this.state);
      var _state2 = this.state,
          searchClasses = _state2.searchClasses,
          focus = _state2.focus,
          open = _state2.open;
      var _props6 = this.props,
          aligned = _props6.aligned,
          category = _props6.category,
          className = _props6.className,
          fluid = _props6.fluid,
          loading = _props6.loading,
          size = _props6.size;

      // Classes

      var classes = (0, _classnames2.default)('ui', open && 'active visible', size, searchClasses, (0, _lib.useKeyOnly)(category, 'category'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(aligned, 'aligned'), 'search', className);
      var unhandled = (0, _lib.getUnhandledProps)(Search, this.props);
      var ElementType = (0, _lib.getElementType)(Search, this.props);

      var _partitionHTMLInputPr = (0, _lib.partitionHTMLInputProps)(unhandled, {
        htmlProps: _lib.htmlInputAttrs
      }),
          _partitionHTMLInputPr2 = (0, _slicedToArray3.default)(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, {
          className: classes,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown
        }),
        this.renderSearchInput(htmlInputProps),
        this.renderResultsMenu()
      );
    }
  }]);
  return Search;
}(_lib.AutoControlledComponent);

Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search.autoControlledProps = ['open', 'value'];
Search._meta = {
  name: 'Search',
  type: _lib.META.TYPES.MODULE
};
Search.Category = _SearchCategory2.default;
Search.Result = _SearchResult2.default;
Search.Results = _SearchResults2.default;
Search.handledProps = ['aligned', 'as', 'category', 'categoryRenderer', 'className', 'defaultOpen', 'defaultValue', 'fluid', 'icon', 'input', 'loading', 'minCharacters', 'noResultsDescription', 'noResultsMessage', 'onBlur', 'onFocus', 'onMouseDown', 'onResultSelect', 'onSearchChange', 'onSelectionChange', 'open', 'resultRenderer', 'results', 'selectFirstResult', 'showNoResults', 'size', 'value'];
var _default = Search;
exports.default = _default;
process.env.NODE_ENV !== "production" ? Search.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** Initial value. */
  defaultValue: _propTypes2.default.string,

  /** Shorthand for Icon. */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object]),

  /** Minimum characters to query for results */
  minCharacters: _propTypes2.default.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: _propTypes2.default.node,

  /** Message to display when there are no results. */
  noResultsMessage: _propTypes2.default.node,

  /** Controls whether or not the results menu is displayed. */
  open: _propTypes2.default.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape(_SearchResult2.default.propTypes)), _propTypes2.default.object]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: _propTypes2.default.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: _propTypes2.default.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: _propTypes2.default.string,

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: _propTypes2.default.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: _propTypes2.default.func,

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: _propTypes2.default.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: _propTypes2.default.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: _propTypes2.default.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: _propTypes2.default.func,

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: _propTypes2.default.func,

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: _propTypes2.default.string,

  /** A search can display results from remote content ordered by categories. */
  category: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A search can have its results take up the width of its container. */
  fluid: _propTypes2.default.bool,

  /** A search input can take up the width of its container. */
  input: _lib.customPropTypes.itemShorthand,

  /** A search can show a loading indicator. */
  loading: _propTypes2.default.bool,

  /** A search can have different sizes. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium'))
} : void 0;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/modules/Search/Search.js');

  __REACT_HOT_LOADER__.register(Search, 'Search', 'src/modules/Search/Search.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/modules/Search/Search.js');
}();

;