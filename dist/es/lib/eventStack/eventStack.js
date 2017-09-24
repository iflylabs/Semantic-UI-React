import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _without from 'lodash/without';


import isBrowser from '../isBrowser';
import EventTarget from './EventTarget';
import normalizeTarget from './normalizeTarget';

var EventStack = function EventStack() {
  var _this = this;

  _classCallCheck(this, EventStack);

  this._eventTargets = {};
  this._targets = [];

  this._find = function (target) {
    var normalized = normalizeTarget(target);
    var index = _this._targets.indexOf(normalized);

    if (index !== -1) return _this._eventTargets[index];

    index = _this._targets.push(normalized) - 1;
    _this._eventTargets[index] = new EventTarget(normalized);

    return _this._eventTargets[index];
  };

  this._remove = function (target) {
    var normalized = normalizeTarget(target);
    var index = _this._targets.indexOf(normalized);

    _this._targets = _without(_this._targets, normalized);
    delete _this._eventTargets[index];
  };

  this.sub = function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isBrowser) return;

    var _options$target = options.target,
        target = _options$target === undefined ? document : _options$target,
        _options$pool = options.pool,
        pool = _options$pool === undefined ? 'default' : _options$pool;

    var eventTarget = _this._find(target);

    eventTarget.sub(name, handlers, pool);
  };

  this.unsub = function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isBrowser) return;

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

export default instance;