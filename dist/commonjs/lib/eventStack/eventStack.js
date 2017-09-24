'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _isBrowser = require('../isBrowser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

var _EventTarget = require('./EventTarget');

var _EventTarget2 = _interopRequireDefault(_EventTarget);

var _normalizeTarget = require('./normalizeTarget');

var _normalizeTarget2 = _interopRequireDefault(_normalizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventStack = function EventStack() {
  var _this = this;

  (0, _classCallCheck3.default)(this, EventStack);
  this._eventTargets = {};
  this._targets = [];

  this._find = function (target) {
    var normalized = (0, _normalizeTarget2.default)(target);
    var index = _this._targets.indexOf(normalized);

    if (index !== -1) return _this._eventTargets[index];

    index = _this._targets.push(normalized) - 1;
    _this._eventTargets[index] = new _EventTarget2.default(normalized);

    return _this._eventTargets[index];
  };

  this._remove = function (target) {
    var normalized = (0, _normalizeTarget2.default)(target);
    var index = _this._targets.indexOf(normalized);

    _this._targets = (0, _without3.default)(_this._targets, normalized);
    delete _this._eventTargets[index];
  };

  this.sub = function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!_isBrowser2.default) return;

    var _options$target = options.target,
        target = _options$target === undefined ? document : _options$target,
        _options$pool = options.pool,
        pool = _options$pool === undefined ? 'default' : _options$pool;

    var eventTarget = _this._find(target);

    eventTarget.sub(name, handlers, pool);
  };

  this.unsub = function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!_isBrowser2.default) return;

    var _options$target2 = options.target,
        target = _options$target2 === undefined ? document : _options$target2,
        _options$pool2 = options.pool,
        pool = _options$pool2 === undefined ? 'default' : _options$pool2;

    var eventTarget = _this._find(target);

    eventTarget.unsub(name, handlers, pool);
    if (eventTarget.empty()) _this._remove(target);
  };
}

// ------------------------------------
// Target utils
// ------------------------------------

// ------------------------------------
// Pub/sub
// ------------------------------------

;

var instance = new EventStack();

exports.default = instance;