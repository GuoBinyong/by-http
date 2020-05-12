(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = global || self, global.ByHttp = factory(global.axios));
}(this, (function (axios) { 'use strict';

  axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$1(obj);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$1(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  /**
   * DoneCount
   * 完成计数
   * 用于统计一组操作的完成情况
   */
  var DoneCount = /*#__PURE__*/function () {
    _createClass$1(DoneCount, [{
      key: "total",

      /**
       * forcedDone : boolean     强制完成标识
       */
      //总数量
      get: function get() {
        if (this.oriTotal == undefined) {
          this.oriTotal = 1;
        }

        return this.oriTotal;
      },
      set: function set(newValue) {
        this.oriTotal = newValue;
      } //已完成数量

    }, {
      key: "doneNum",
      get: function get() {
        if (!this._doneNum) {
          this._doneNum = 0;
        }

        return this._doneNum;
      },
      set: function set(newValue) {
        this._doneNum = newValue || 0;
      }
      /**
       *
       * @param totalOrOptions : DoneCountOptions
       * DoneCountOptions = total:number | DoneCountProps
       * DoneCountProps = {total:number,doneNum:number}
       */

    }]);

    function DoneCount(totalOrOptions) {
      _classCallCheck$1(this, DoneCount);

      _defineProperty$1(this, "forcedDone", false);

      if (_typeof$1(totalOrOptions) == "object") {
        var total = totalOrOptions.total,
            otherProps = _objectWithoutProperties$1(totalOrOptions, ["total"]);
      } else {
        total = totalOrOptions;
      }

      this.total = total;

      if (otherProps) {
        Object.assign(this, otherProps);
      }
    }

    _createClass$1(DoneCount, [{
      key: "reset",

      /**
       * 重置
       */
      value: function reset() {
        this.total = 1;
        this.resetDoneNum();
      }
      /**
       * 重置
       */

    }, {
      key: "resetDoneNum",
      value: function resetDoneNum() {
        this.doneNum = 0;
      }
      /**
       * 登录新的完成次数
       * @param num : number
       * @returns boolean 是否完成
       */

    }, {
      key: "doneAgain",
      value: function doneAgain() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.doneNum += num;
        return this.done;
      }
    }, {
      key: "undoneNum",
      get: function get() {
        var total = this.total;
        var doneNum = this.doneNum;
        return total < doneNum ? 0 : total - doneNum;
      }
      /**
       * done : boolean   只读；表示是否完成
       */

    }, {
      key: "done",
      get: function get() {
        return this.forcedDone || this.realDone;
      }
      /**
       * realDone : boolean   只读；表示实际上是否真正的完成
       */

    }, {
      key: "realDone",
      get: function get() {
        return this.total <= this.doneNum;
      }
    }]);

    return DoneCount;
  }();
  var NamedDoneCount = /*#__PURE__*/function (_DoneCount) {
    _inherits(NamedDoneCount, _DoneCount);

    var _super = _createSuper(NamedDoneCount);

    /**
     *
     * @param totalOrOptions : NamedDoneCountOptions
     * NamedDoneCountOptions = total:number | NamedDoneCountProps
     * NamedDoneCountProps = {...DoneCountProps,namesOrNum : Names | DoneNum,names: Names,autoIncrTotalIfRepeat:boolean,maxRepetNum:number}
     *
     * Names : string | [string]
     * DoneNum : number
     */
    function NamedDoneCount(totalOrOptions) {
      var _this;

      _classCallCheck$1(this, NamedDoneCount);

      if (_typeof$1(totalOrOptions) == "object") {
        var total = totalOrOptions.total,
            namesOrNum = totalOrOptions.namesOrNum,
            names = totalOrOptions.names,
            doneNum = totalOrOptions.doneNum,
            otherProps = _objectWithoutProperties$1(totalOrOptions, ["total", "namesOrNum", "names", "doneNum"]);
      } else {
        total = totalOrOptions;
      }

      _this = _super.call(this, total);

      _defineProperty$1(_assertThisInitialized(_this), "autoIncrTotalIfRepeat", void 0);

      _this.total = total;

      if (names) {
        _this.doneAgainNames(names);
      } else if (doneNum != undefined) {
        _this._doneNum = doneNum;
      } else {
        _this.doneNum = namesOrNum;
      }

      if (otherProps) {
        Object.assign(_assertThisInitialized(_this), otherProps);
      }

      return _this;
    }
    /**
     * 当 name 重复时，是否自动增长 total
     * @type {boolean}
     */


    _createClass$1(NamedDoneCount, [{
      key: "resetDoneNum",

      /**
       * 重置
       */
      value: function resetDoneNum() {
        this.nameRecord.clear();
        this._doneNum = 0;
      }
      /**
       *
       * @param namesOrNum : DoneNamesOrNum
       * DoneNamesOrNum = number | DoneNames
       * DoneNames = string | [string]
       * @returns {*}
       */

    }, {
      key: "doneAgain",
      value: function doneAgain() {
        var namesOrNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (typeof namesOrNum == "number") {
          this._doneNum += namesOrNum;
        } else {
          this.doneAgainNames(namesOrNum);
        }

        return this.done;
      }
      /**
       * @param names : DoneNames
       * @returns {*}
       */

    }, {
      key: "doneAgainNames",
      value: function doneAgainNames(names) {
        if (!Array.isArray(names)) {
          names = [names];
        }

        var nameRecord = this.nameRecord;
        names.forEach(function (nm) {
          var nameCount = nameRecord.get(nm) || 0;
          nameRecord.set(nm, ++nameCount);
        });
        return this.done;
      }
    }, {
      key: "has",
      value: function has(name) {
        return this.nameRecord.has(name);
      }
      /**
       * 获取指定 name 的计数
       * @param name
       * @returns {*|number}
       */

    }, {
      key: "getNameNum",
      value: function getNameNum(name) {
        var nameNum = this.nameRecord.get(name) || 0;
        return Math.min(nameNum, this.maxRepetNum);
      }
      /**
       * 获取最大的 name 计数
       * @returns {number}
       */

    }, {
      key: "total",
      get: function get() {
        return this.autoIncrTotalIfRepeat ? this.oriTotal * (this.maxNameNum || 1) : this.oriTotal;
      },
      set: function set(newValue) {
        this.oriTotal = newValue;
      }
    }, {
      key: "oriTotal",
      get: function get() {
        if (this._oriTotal == undefined) {
          this._oriTotal = 1;
        }

        return this._oriTotal;
      },
      set: function set(newValue) {
        this._oriTotal = newValue;
      }
    }, {
      key: "nameRecord",
      get: function get() {
        if (!this._nameRecord) {
          this._nameRecord = new Map();
        }

        return this._nameRecord;
      }
      /**
       * 最大重复数目
       * @type {number}
       */

    }, {
      key: "maxRepetNum",
      get: function get() {
        var _maxRepetNum = this._maxRepetNum;
        return _maxRepetNum && _maxRepetNum > 0 ? _maxRepetNum : Infinity;
      },
      set: function set(newValue) {
        this._maxRepetNum = newValue;
      }
      /**
       * 获取所有 name 的总计数
       * @returns {number}
       */

    }, {
      key: "nameNum",
      get: function get() {
        var _nameNum = 0;
        var maxRepetNum = this.maxRepetNum;
        this.nameRecord.forEach(function (count, key) {
          _nameNum += Math.min(count, maxRepetNum);
        });
        return _nameNum;
      }
    }, {
      key: "_doneNum",
      get: function get() {
        if (this._doneNum_ == undefined) {
          this._doneNum_ = 0;
        }

        return this._doneNum_;
      },
      set: function set(newValue) {
        this._doneNum_ = newValue;
      }
    }, {
      key: "doneNum",
      get: function get() {
        return this.nameNum + this._doneNum;
      },
      set: function set(newValue) {
        if (typeof newValue == "number") {
          var oldNum = this.doneNum;

          if (oldNum < newValue) {
            this._doneNum = newValue - this.nameNum;
          } else {
            this.resetDoneNum();
            this._doneNum = newValue;
          }
        } else if (newValue == undefined) {
          this.resetDoneNum();
        } else {
          this.doneAgainNames(newValue);
        }
      }
    }, {
      key: "maxNameNum",
      get: function get() {
        var countArr = Array.from(this.nameRecord.values());
        var maxCount = countArr.length > 0 ? Math.max.apply(Math, countArr) : 0;
        return Math.min(maxCount, this.maxRepetNum);
      }
    }]);

    return NamedDoneCount;
  }(DoneCount);
  /**
   * 冲突策略 ConflictPolicy 类型常量
   * ConflictPolicy = "Add" | "Reset" | "Recreate" | "Update"
   */

  var conflictPolicy_Add = "Add";
  var conflictPolicy_Reset = "Reset";
  var conflictPolicy_Recreate = "Recreate";
  var conflictPolicy_Update = "Update";
  /**
   * 自动删除目标 AutoDeleteTarget 类型常量
   * AutoDeleteTarget = "ForcedDone" | "RealDone" | "Done"
   */

  var autoDeleteTarget_ForcedDone = "ForcedDone";
  var autoDeleteTarget_RealDone = "RealDone";
  /**
   * 自动删除目标 AutoDeleteMode 类型常量
   * AutoDeleteMode = "Delay" | "Immediately" | "No"
   */

  var autoDeleteMode_Delay = "Delay";
  var autoDeleteMode_Immediately = "Immediately";
  var DoneCountManager = /*#__PURE__*/function () {
    /**
     * props : DCManagerProps
     * DCManagerProps = {clearDelay:number,conflictPolicy : ConflictPolicy ,autoDeleteTarget:AutoDeleteTarget ,autoDeleteMode:AutoDeleteMode}
     * @param props
     */
    function DoneCountManager() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$1(this, DoneCountManager);

      Object.assign(this, props);
    }

    _createClass$1(DoneCountManager, [{
      key: "_createDoneCount",

      /**
       * 创建 DoneCount 实例
       * @param totalOrOptions : DoneCountOptions
       * @returns {DoneCount}
       */
      value: function _createDoneCount(totalOrOptions) {
        return new DoneCount(totalOrOptions);
      }
      /**
       * 在不改变完成数的情况下，根据 confOpts 配置 doneCount
       * @param doneCount : DoneCount
       * @param dcProps : DoneCountProps
       * @returns {*}
       * @private
       */

    }, {
      key: "_confDoneCount",
      value: function _confDoneCount(doneCount, dcProps) {
        var doneNum = dcProps.doneNum,
            otherProps = _objectWithoutProperties$1(dcProps, ["doneNum"]);

        Object.assign(doneCount, otherProps);
        return doneCount;
      }
      /**
       * 设置 延迟清除已完成的 DoneCount 的延时时间
       * @returns {number|*}
       */

    }, {
      key: "delayClearKey",

      /**
       * 延迟删除指定 key 的 DoneCount
       * @param key : DoneCountKey  需要被延迟删除的 DoneCount 的 key
       * @param delay ?: number   可选；默认值：this.clearDelay； 延时时间；
       *
       * 注意：
       * - 只有 当 doneCount 已经完成时 才会被删除，否则，不会被删除；
       */
      value: function delayClearKey(key) {
        var _this2 = this;

        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.clearDelay;
        var doneCount = this.doneMap.get(key);

        if (doneCount.done) {
          setTimeout(function () {
            _this2.clearKey(key);
          }, delay);
        }
      }
      /**
       * 删除指定 key 的 DoneCount
       * @param key : DoneCountKey  需要被删除的 DoneCount 的 key
       * @return boolean  表示是否完成删除；
       *
       * 注意：
       * - 只有 当 doneCount 已经完成时 才会被删除，否则，不会被删除；
       * - 当指定 key 的 doneCount 不存时，也会 返回 true ；
       */

    }, {
      key: "clearKey",
      value: function clearKey(key) {
        var doneMap = this.doneMap;
        var doneCount = doneMap.get(key);
        var done = doneCount ? doneCount.done : true;

        if (doneCount && done) {
          doneMap.delete(key);
        }

        return done;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this3 = this;

        var keyArr = Array.from(this.doneMap.keys());
        return keyArr.every(function (key) {
          return _this3.clearKey(key);
        });
      }
    }, {
      key: "forcedDoneKey",
      value: function forcedDoneKey(key) {
        var doneCount = this.doneMap.get(key);

        if (doneCount) {
          doneCount.forcedDone = true;
        }
      }
    }, {
      key: "forcedDone",
      value: function forcedDone() {
        this.doneMap.forEach(function (dc) {
          dc.forcedDone = true;
        });
      }
      /**
       * 注册 DoneCount 时，当 注册的 DoneCount 的 total 和 已存在的 DoneCount 的 total 不一致时 的处理方式
       * @returns {string|*}
       */

    }, {
      key: "register",

      /**
       * 注册DoneCount
       * @param keyOrOpts : DoneAgainOptions
       *
       * DoneAgainOptions = key | {key,conflictPolicy,...DoneCountProps}
       * @returns {DoneCount}
       */
      value: function register(keyOrOpts) {
        if (_typeof$1(keyOrOpts) == "object") {
          var key = keyOrOpts.key,
              _keyOrOpts$total = keyOrOpts.total,
              total = _keyOrOpts$total === void 0 ? 1 : _keyOrOpts$total,
              conflictPolicy = keyOrOpts.conflictPolicy,
              otherOpts = _objectWithoutProperties$1(keyOrOpts, ["key", "total", "conflictPolicy"]);
        } else {
          key = keyOrOpts;
          total = 1;
        }

        conflictPolicy = conflictPolicy || this.conflictPolicy;
        var doneMap = this.doneMap;
        var doneCount = doneMap.get(key);

        if (!doneCount || doneCount.realDone) {
          doneCount = this._createDoneCount(total);
        } else if (doneCount.oriTotal != total) {
          switch (conflictPolicy) {
            case conflictPolicy_Recreate:
              {
                doneCount = this._createDoneCount(total);
                break;
              }

            case conflictPolicy_Add:
              {
                doneCount.total += total;
                break;
              }

            case conflictPolicy_Reset:
              {
                doneCount.reset();
                doneCount.total = total;
                break;
              }

            case conflictPolicy_Update:
              {
                doneCount.total = total;
                break;
              }
          }
        }

        if (otherOpts) {
          doneCount = this._confDoneCount(doneCount, otherOpts);
        }

        doneMap.set(key, doneCount);
        return doneCount;
      }
      /**
       *
       * @param keyOrOpts : DoneAgainOptions
       * @param doneNum
       * @returns DoneCount | Error
       */

    }, {
      key: "unsafeDoneAgain",
      value: function unsafeDoneAgain(keyOrOpts) {
        var _arguments = arguments,
            _this4 = this;

        var doneNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return function (doneNum) {
          if (_typeof$1(keyOrOpts) == "object") {
            var key = keyOrOpts.key,
                _keyOrOpts$doneNum = keyOrOpts.doneNum,
                doneNum = _keyOrOpts$doneNum === void 0 ? 1 : _keyOrOpts$doneNum,
                otherProps = _objectWithoutProperties$1(keyOrOpts, ["key", "doneNum"]);
          } else {
            key = keyOrOpts;
          }

          var doneCount = _this4.doneMap.get(key);

          if (!doneCount) {
            // console.error("不存在 key 为 %s 的 DoneCount 实例；该 key 对应的 DoneCount 可能已经完成，请检查 相关配置选项是否正确； 传入的参数为: %o",key,arguments);
            var message = "\u4E0D\u5B58\u5728 key \u4E3A ".concat(key, " \u7684 DoneCount \u5B9E\u4F8B\uFF1B\u8BE5 key \u5BF9\u5E94\u7684 DoneCount \u53EF\u80FD\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5 \u76F8\u5173\u914D\u7F6E\u9009\u9879\u662F\u5426\u6B63\u786E\uFF1B \u4F20\u5165\u7684\u53C2\u6570\u4E3A: ").concat(JSON.stringify(_arguments));
            var err = new Error(message);
            err.name = "DoneCountManager";
            return err;
          }

          doneCount.doneAgain(doneNum);

          _this4.autoDelete(key, otherProps);

          return doneCount;
        }(doneNum);
      }
      /**
       * autoDeleteTarget : AutoDeleteTarget    自动删除目标
       */

    }, {
      key: "autoDelete",

      /**
       * 根据配置 options ，自动删除指定 key 的 DoneCount
       * @param key : DoneCountKey    被自动删除的 DoneCount 的 key
       * @param options ?: AutoDeleteOptions   可选；配置选项
       *
       * AutoDeleteOptions = {autoDeleteMode : AutoDeleteMode,autoDeleteTarget : AutoDeleteTarget,clearDelay : number}
       */
      value: function autoDelete(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$autoDeleteMo = options.autoDeleteMode,
            autoDeleteMode = _options$autoDeleteMo === void 0 ? this.autoDeleteMode : _options$autoDeleteMo,
            _options$autoDeleteTa = options.autoDeleteTarget,
            autoDeleteTarget = _options$autoDeleteTa === void 0 ? this.autoDeleteTarget : _options$autoDeleteTa,
            clearDelay = options.clearDelay;
        var doneCount = this.doneMap.get(key);

        switch (autoDeleteTarget) {
          case autoDeleteTarget_RealDone:
            {
              if (!doneCount.realDone) {
                return;
              }

              break;
            }

          case autoDeleteTarget_ForcedDone:
            {
              if (!doneCount.forcedDone) {
                return;
              }

              break;
            }
        }

        switch (autoDeleteMode) {
          case autoDeleteMode_Delay:
            {
              this.delayClearKey(key, clearDelay);
              break;
            }

          case autoDeleteMode_Immediately:
            {
              this.clearKey(key);
              break;
            }
        }
      }
      /**
       *
       * @param keyOrOpts : DoneAgainOptions
       * @param doneNum : DoneNamesOrNum
       * @returns {*}
       */

    }, {
      key: "doneAgain",
      value: function doneAgain(keyOrOpts) {
        var doneNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        this.register(keyOrOpts);
        return this.unsafeDoneAgain(keyOrOpts, doneNum);
      }
    }, {
      key: "getDoneCount",
      value: function getDoneCount(key) {
        return this.doneMap.get(key);
      }
    }, {
      key: "getUndoneNum",
      value: function getUndoneNum(key) {
        var dc = this.getDoneCount(key);
        return dc ? dc.undoneNum : 0;
      }
    }, {
      key: "getDone",
      value: function getDone(key) {
        return this.getUndoneNum(key) == 0;
      }
    }, {
      key: "doneMap",
      get: function get() {
        if (!this._doneMap) {
          this._doneMap = new Map();
        }

        return this._doneMap;
      },
      set: function set(newValue) {
        this._doneMap = newValue;
      }
    }, {
      key: "clearDelay",
      get: function get() {
        if (this._clearDelay == undefined) {
          this._clearDelay = 100;
        }

        return this._clearDelay;
      },
      set: function set(newValue) {
        this._clearDelay = newValue;
      }
    }, {
      key: "conflictPolicy",
      get: function get() {
        if (!this._conflictPolicy) {
          this._conflictPolicy = conflictPolicy_Recreate;
        }

        return this._conflictPolicy;
      },
      set: function set(newValue) {
        this._conflictPolicy = newValue;
      }
    }, {
      key: "autoDeleteTarget",
      get: function get() {
        if (!this._autoDeleteTarget) {
          this._autoDeleteTarget = autoDeleteTarget_RealDone;
        }

        return this._autoDeleteTarget;
      },
      set: function set(newValue) {
        this._autoDeleteTarget = newValue;
      }
      /**
       * autoDeleteMode : AutoDeleteMode   自动删除模式
       */

    }, {
      key: "autoDeleteMode",
      get: function get() {
        if (!this._autoDeleteMode) {
          this._autoDeleteMode = autoDeleteMode_Delay;
        }

        return this._autoDeleteMode;
      },
      set: function set(newValue) {
        this._autoDeleteMode = newValue;
      }
    }, {
      key: "info",
      get: function get() {
        var info = {
          total: 0,
          doneNum: 0,
          undoneNum: 0
        };
        var keys = [];
        var allDone = true;
        this.doneMap.forEach(function (dc, key) {
          info.total += dc.total;
          info.doneNum += dc.doneNum;
          info.undoneNum += dc.undoneNum;
          keys.push(key);

          if (!dc.done) {
            allDone = false;
          }
        });
        info.keys = keys;
        info.allDone = allDone;
        return info;
      }
    }, {
      key: "total",
      get: function get() {
        var total = 0;
        this.doneMap.forEach(function (dc) {
          total += dc.total;
        });
        return total;
      }
    }, {
      key: "doneNum",
      get: function get() {
        var total = 0;
        this.doneMap.forEach(function (dc) {
          total += dc.doneNum;
        });
        return total;
      }
    }, {
      key: "undoneNum",
      get: function get() {
        var total = 0;
        this.doneMap.forEach(function (dc) {
          total += dc.undoneNum;
        });
        return total;
      }
    }, {
      key: "done",
      get: function get() {
        var allDone = true;
        this.doneMap.forEach(function (dc, key) {
          if (!dc.done) {
            allDone = false;
          }
        });
        return allDone;
      }
    }]);

    return DoneCountManager;
  }();
  var NamedDoneCountManager = /*#__PURE__*/function (_DoneCountManager) {
    _inherits(NamedDoneCountManager, _DoneCountManager);

    var _super2 = _createSuper(NamedDoneCountManager);

    function NamedDoneCountManager() {
      var _this5;

      _classCallCheck$1(this, NamedDoneCountManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this5 = _super2.call.apply(_super2, [this].concat(args));

      _defineProperty$1(_assertThisInitialized(_this5), "autoIncrTotalIfRepeat", void 0);

      return _this5;
    }

    _createClass$1(NamedDoneCountManager, [{
      key: "_createDoneCount",

      /**
       * 创建 DoneCount 实例
       * @param totalOrOptions
       * @returns {DoneCount}
       */
      value: function _createDoneCount(totalOrOptions) {
        return new NamedDoneCount(totalOrOptions);
      }
      /**
       * DoneCount 的 autoIncrTotalIfRepeat 的默认值
       * @type {boolean}
       */

    }, {
      key: "_confDoneCount",

      /**
       * 在不改变完成数的情况下，根据 confOpts 配置 doneCount
       * @param doneCount
       * @param confOpts
       * @returns {*}
       * @private
       */
      value: function _confDoneCount(doneCount, confOpts) {
        var namesOrNum = confOpts.namesOrNum,
            names = confOpts.names,
            doneNum = confOpts.doneNum,
            _confOpts$autoIncrTot = confOpts.autoIncrTotalIfRepeat,
            autoIncrTotalIfRepeat = _confOpts$autoIncrTot === void 0 ? this.autoIncrTotalIfRepeat : _confOpts$autoIncrTot,
            otherOpts = _objectWithoutProperties$1(confOpts, ["namesOrNum", "names", "doneNum", "autoIncrTotalIfRepeat"]);

        otherOpts.autoIncrTotalIfRepeat = autoIncrTotalIfRepeat;
        Object.assign(doneCount, otherOpts);
        return doneCount;
      }
      /**
       *
       * @param keyOrOpts : DoneAgainOptions
       * @param namesOrNum : DoneNamesOrNum
       * @returns DoneCount | Error
       *
       * DoneAgainOptions = {key,namesOrNum,names,doneNum,...}
       */

    }, {
      key: "unsafeDoneAgain",
      value: function unsafeDoneAgain(keyOrOpts) {
        var _arguments2 = arguments,
            _this6 = this;

        var namesOrNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return function (namesOrNum) {
          if (_typeof$1(keyOrOpts) == "object") {
            var key = keyOrOpts.key,
                namesOrNum = keyOrOpts.namesOrNum,
                names = keyOrOpts.names,
                doneNum = keyOrOpts.doneNum,
                otherProps = _objectWithoutProperties$1(keyOrOpts, ["key", "namesOrNum", "names", "doneNum"]);

            namesOrNum = doneNum || namesOrNum || 1;
          } else {
            key = keyOrOpts;
          }

          var doneCount = _this6.doneMap.get(key);

          if (!doneCount) {
            // console.error("不存在 key 为 %s 的 DoneCount 实例；该 key 对应的 DoneCount 可能已经完成，请检查 相关配置选项是否正确； 传入的参数为: %o",key,arguments);
            var message = "\u4E0D\u5B58\u5728 key \u4E3A ".concat(key, " \u7684 DoneCount \u5B9E\u4F8B\uFF1B\u8BE5 key \u5BF9\u5E94\u7684 DoneCount \u53EF\u80FD\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5 \u76F8\u5173\u914D\u7F6E\u9009\u9879\u662F\u5426\u6B63\u786E\uFF1B \u4F20\u5165\u7684\u53C2\u6570\u4E3A: ").concat(JSON.stringify(_arguments2));
            var err = new Error(message);
            err.name = "DoneCountManager";
            return err;
          }

          if (names) {
            doneCount.doneAgainNames(names);
          } else {
            doneCount.doneAgain(namesOrNum);
          }

          _this6.autoDelete(key, otherProps);

          return doneCount;
        }(namesOrNum);
      }
    }]);

    return NamedDoneCountManager;
  }(DoneCountManager);

  function _typeof$2(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$2 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$2 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$2(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /*
   使用属性描述来定义属性的原因：
   - 为了不让 for...in 等类似的操作遍历这些定义在原型上的方法或属性，需要将属性设置为不可枚举的；
   - 为了解决给 Object.prototype 添加属性会在Vue中报错的问题，需要将属性设置为不可枚举的；
   */
  var propertyDescriptors = {
    //去重：开始

    /*
    getNoRepeats()
    获取去除重复项目后的数组
     ## 注意
    - 该方法不改原数组，会返回一个新的数组；
    - 该方法是通过 严格相等 `===` 运算符来判断 数组的元素是否重复的；
    */
    getNoRepeats: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        return this.filter(function (currentItem, index, arr) {
          return index === arr.indexOf(currentItem);
        });
      }
    },

    /**
     getNoRepeatsUseRepeatTest(isRepeated)
     根据重复测试函数 `isRepeated` 来获取去除重复项目后的新数组
      - @param isRepeated  : (item1,item2)=> boolean      重复油测试函数，传入被测试的2个项目，返回布尔值，表示这2个项目是否是重复的；
     - @returns : Array  返回去除重复项目后的新数组
      ## 注意
     - 该方法不改原数组，会返回一个新的数组；
     - 该方法是通过 isRepeated 函数来判断 数组的元素是否重复的；
     */
    getNoRepeatsUseRepeatTest: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(isRepeated) {
        return this.filter(function (currentItem, index, arr) {
          return index === arr.findIndex(function (findItem) {
            return isRepeated(findItem, currentItem);
          });
        });
      }
    },
    //去重：结束
    //安全操作：开始

    /*
    JavaScript 数组中与遍历相关的方法都是非安全 和 非严谨的，当在遍历时增删原始数组的元素时，会引出问题；
    详情请参考文章：https://www.jianshu.com/p/6dd641d0c13d
     以下 安全操作 的方法便是用来解决这些问题的；
     */

    /**
     * safelyOperateIndexs(indexList, operation, thisValue)
     * 安全操作指定的索引
     * @param indexList : [Index]   需要被操作的索引数组
     * @param operation : (currentValue,currentIndex,currentArray)=>Void     执行的操作
     * @param thisValue ? : any   可选，默认值是被操作的数组，即调用者；操作 operation 的 this 值
     * @returns [Item]   被操作的元素列表
     *
     *
     * operation(currentValue,currentIndex,currentArray)=>Void
     * @param currentValue : any   调用 operation 时的元素的值；
     * @param currentIndex : number     调用 operation 时 currentValue 对应的最新状态的索引值；
     * @param currentArray : Array   调用 operation 时 被操作时最新状态的数组；
     *
     */
    safelyOperateIndexs: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(indexList, operation, thisValue) {
        var _this = this;

        if (thisValue == undefined) {
          thisValue = this;
        }

        var itemList = this.filter(function (currentValue, index) {
          return indexList.includes(index);
        });
        itemList.forEach(function (currentValue) {
          var currentIndex = _this.indexOf(currentValue);

          operation.call(thisValue, currentValue, currentIndex, _this);
        });
        return itemList;
      }
    },

    /**
     * safelyOperateItems(itemList, operation, thisValue)
     * 安全操作指定的元素
     * @param itemList : [Item]   需要被操作的元素的数组
     * @param operation : (currentValue,currentIndex,currentArray)=>Void     执行的操作
     * @param thisValue ? : any   可选，默认值是被操作的数组，即调用者；操作 operation 的 this 值
     * @returns [Index]   被操作的元素的索引的列表；
     *
     *
     * operation(currentValue,currentIndex,currentArray)=>Void
     * @param currentValue : any   调用 operation 时的元素的值；
     * @param currentIndex : number     调用 operation 时 currentValue 对应的最新状态的索引值；
     * @param currentArray : Array   调用 operation 时 被操作时最新状态的数组；
     *
     */
    safelyOperateItems: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(itemList, operation, thisValue) {
        var _this2 = this;

        if (thisValue == undefined) {
          thisValue = this;
        }

        var itemListCopy = [];
        var indexList = itemList.map(function (item) {
          itemListCopy.push(item);
          return _this2.indexOf(item);
        });
        itemListCopy.forEach(function (currentValue) {
          var currentIndex = _this2.indexOf(currentValue);

          operation.call(thisValue, currentValue, currentIndex, _this2);
        });
        return indexList;
      }
    },

    /**
     * safelyFilter(operation, thisValue)
     * 安全地操作并过滤所有元素；与 forEach 和 filter 的区别是： safelyFilter 能保证会遍历数组中所有已存在的元素，不会受 operation 中的行为的影响；
     * @param operation : (currentValue,currentIndex,currentArray)=>boolean | undefined     执行的操作， 该函数的返回值表示是否要过滤出该元素
     * @param thisValue ? : any   可选，默认值是被操作的数组，即调用者；操作 operation 的 this 值
     * @returns [Item]  返回被 operation 过滤出的元素
     *
     *
     * operation(currentValue,currentIndex,currentArray)=>boolean | undefined
     * @param currentValue : any   调用 operation 时的元素的值；
     * @param currentIndex : number     调用 operation 时 currentValue 对应的最新状态的索引值；
     * @param currentArray : Array   调用 operation 时 被操作时最新状态的数组；
     * @returns boolean | undefined  表示是否要过滤出 currentValue ；
     *
     */
    safelyFilter: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(operation, thisValue) {
        var _this3 = this;

        if (thisValue == undefined) {
          thisValue = this;
        }

        var arrayCopy = this.slice();
        return arrayCopy.filter(function (currentValue) {
          var currentIndex = _this3.indexOf(currentValue);

          operation.call(thisValue, currentValue, currentIndex, _this3);
        });
      }
    },
    //安全操作：结束
    //移动元素：开始

    /**
     * move(fromIndex, toIndex, length = 1)
     * 根据索引移动数组的元素
     * @param fromIndex : number   被移动的元素的开始索引
     * @param toIndex : number    元素被移动到的新位置的索引
     * @param length ? : number   可选，默认值：1 ； 被移动的元素的长度；
     * @returns Array   被移动的元素的数组
     */
    move: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(fromIndex, toIndex) {
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var moveEleArr = this.splice(fromIndex, length);
        this.splice.apply(this, [toIndex, 0].concat(_toConsumableArray(moveEleArr)));
        return moveEleArr;
      }
    },

    /**
     * moveTo(toIndex, ...fromIndexs)
     * 根据索引批量移动数组的元素
     * @param toIndex : number    元素被移动到的新位置的索引
     * @param fromIndex : number   被移动的元素的索引
     * @returns Array<Item>   被移动的元素的数组
     */
    moveTo: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(toIndex) {
        for (var _len = arguments.length, fromIndexs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          fromIndexs[_key - 1] = arguments[_key];
        }

        var moveItems = this.deleteIndexs.apply(this, fromIndexs);
        this.splice.apply(this, [toIndex, 0].concat(_toConsumableArray(moveItems)));
        return moveItems;
      }
    },

    /**
     * moveItemsTo(toIndex, ...items)
     * 批量移动数组的指定元素
     * @param toIndex : number    元素被移动到的新位置的索引
     * @param item : any   被移动的元素
     * @returns Array<number>   被移动的元素的索引的数组
     */
    moveItemsTo: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(toIndex) {
        for (var _len2 = arguments.length, items = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          items[_key2 - 1] = arguments[_key2];
        }

        var indexArr = this.deleteItems.apply(this, items);
        this.splice.apply(this, [toIndex, 0].concat(items));
        return indexArr;
      }
    },

    /**
     * moveToUseTest(toIndex, needMoveTest)
     * 根据测试函数批量移动数组的元素
     * @param toIndex : number    元素被移动到的新位置的索引
     * @param needMoveTest : (currentValue,index,arr)=>boolean    测试数组元素是否需要被移动的函数，返回 boolean 值，表示当前元素 currentValue 是否需要被移动；
     * @returns Array<Item>   被移动的元素的数组
     */
    moveToUseTest: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(toIndex, needMoveTest, thisValue) {
        var moveItems = this.deleteUseTest(needMoveTest, thisValue);
        this.splice.apply(this, [toIndex, 0].concat(_toConsumableArray(moveItems)));
        return moveItems;
      }
    },
    //移动元素：结束
    //插入元素：开始

    /**
     * insertItem(item, toIndex = 0, equalTest)
     * 将指定元素插入到调用者数组中指定索引处，并且会删除调用者数组中与 item 相同的元素
     * @param item : any    被插入的元素
     * @param toIndex : number    元素被插入到的位置的索引
     * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
     * @returns Array<Item>   被删除的元素
     */
    insertItem: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(item) {
        var _this4 = this;

        var toIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var equalTest = arguments.length > 2 ? arguments[2] : undefined;

        if (!equalTest) {
          equalTest = function equalTest(a, b) {
            return a === b;
          };
        }

        var deleItems = this.filter(function (currentValue, currentIndex, arr) {
          return equalTest.call(_this4, currentValue, item);
        });
        this.deleteItems.apply(this, _toConsumableArray(deleItems));
        this.splice(toIndex, 0, item);
        return deleItems;
      }
    },

    /**
     * insertItemList(itemList, toIndex = 0, equalTest)
     * 将指定数组itemList中的元素插入到调用者数组的指定索引处，并且会删除调用者数组中 与 itemList中元素 相同的元素
     * @param itemList : [any]    被插入的元素数组
     * @param toIndex ? : number    可靠；默认值：0 ； 元素被插入到的位置的索引；
     * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
     * @returns Array<Item>   被删除的元素
     */
    insertItemList: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(itemList, toIndex, equalTest) {
        var _this5 = this;

        return itemList.reduceRight(function (deleItemList, item) {
          var deleItems = _this5.insertItem(item, toIndex, equalTest);

          deleItemList.unshift.apply(deleItemList, _toConsumableArray(deleItems));
          return deleItemList;
        }, []);
      }
    },
    //插入元素：结束
    //删除元素：开始

    /**
     * delete(start, end)
     * 根据索引删除数组的元素
     * @param start : number   被删除的元素的开始索引
     * @param end ? : number   可选，默认值：start ； 被删除的元素的结束索引；
     * @returns Array   被删除的元素的数组
     */
    delete: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(start, end) {
        if (end == null) {
          end = start;
        }

        var length = end + 1 - start;
        return this.splice(start, length);
      }
    },

    /**
     * deleteIndexs(...indexs)
     * 删除数组中指定的元素
     * @param index : number   被删除的元素的索引
     * @returns Array<Item>   被删除的元素的数组
     */
    deleteIndexs: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        for (var _len3 = arguments.length, indexs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          indexs[_key3] = arguments[_key3];
        }

        return this.safelyOperateIndexs(indexs, function (currentValue, currentIndex, currentArray) {
          currentArray.splice(currentIndex, 1);
        }, this);
      }
    },

    /**
     * deleteItems(...items)
     * 删除数组中指定的元素
     * @param item : any   被删除的元素
     * @returns Array<number>   被删除的元素的索引数组
     */
    deleteItems: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        for (var _len4 = arguments.length, items = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          items[_key4] = arguments[_key4];
        }

        return this.safelyOperateItems(items, function (currentValue, currentIndex, currentArray) {
          currentArray.splice(currentIndex, 1);
        }, this);
      }
    },

    /**
     * deleteUseTest(needDeleteTest)
     * 根据测试函数批量删除数组的元素
     * @param needDeleteTest : (currentValue,index,arr)=>boolean    测试数组元素是否需要被删除的函数，返回 boolean 值，表示当前元素 currentValue 是否需要被删除；
     * @returns Array<Item>   被删除的元素的数组
     */
    deleteUseTest: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(needDeleteTest, thisValue) {
        if (thisValue === undefined) {
          thisValue = this;
        }

        var itemList = this.filter(function (currentValue, currentIndex, arr) {
          return needDeleteTest.call(thisValue, currentValue, currentIndex, arr);
        });
        this.safelyOperateItems(itemList, function (currentValue, currentIndex, currentArray) {
          currentArray.splice(currentIndex, 1);
        }, this);
        return itemList;
      }
    },
    //删除元素：结束
    //查找元素：开始

    /**
     * filterIndexs(filterTest,thisArg)
     * 该方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素的索引。
     * @param filterTest : (currentValue,index,arr)=>boolean    用来测试数组的每个元素的函数。调用时使用参数 (currentValue,index,arr)。返回true表示保留该元素（通过测试），false则不保留
     * @param thisArg ? : any 可选。执行 callback 时的用于 this 的值。
     * @returns Array<Index>   通过测试的元素的索引
     */
    filterIndexs: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(filterTest, thisArg) {
        if (thisArg == undefined) {
          thisArg = this;
        }

        return this.reduce(function (indexList, currentValue, index, arr) {
          if (filterTest.call(thisArg, currentValue, index, arr)) {
            indexList.push(index);
          }

          return indexList;
        }, []);
      }
    },

    /**
     * 属性; 返回最后一个元素
     */
    lastItem: {
      configurable: true,
      enumerable: false,
      get: function get() {
        return this[this.length - 1];
      }
    },
    //查找元素：结束
    //集合运算：开始

    /**
     * isContains(arr,equalTest)
     * 判断当前数组 是否包含 数组arr 的所有元素；
     * @param arr : Array   被测试的数组
     * @param equalTest ? : (thisEle,arrEle)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素thisEle 和 元素arrEle  相同；
     * @returns boolean
     */
    isContains: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(arr, equalTest) {
        if (!equalTest) {
          equalTest = function equalTest(a, b) {
            return a === b;
          };
        }

        return arr.every(function (item) {
          return this.some(function (thisItem) {
            return equalTest.call(this, thisItem, item);
          }, this);
        }, this);
      }
    },

    /**
     * getIntersection(arr,equalTest)
     * 获取指定数组的交集
     * @param arr  : Array   数组
     * @param equalTest ? : (thisEle,arrEle)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素thisEle 和 元素arrEle  相同；
     * @returns Array   所有指定数组的交集
     */
    getIntersection: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(arr, equalTest) {
        if (!equalTest) {
          equalTest = function equalTest(a, b) {
            return a === b;
          };
        }

        return this.filter(function (thisEle) {
          return arr.some(function (arrEle) {
            return equalTest(thisEle, arrEle);
          });
        });
      }
    },

    /**
     * isIntersect(arr,equalTest)
     * 判断当前数组与指定数组是否相交
     * @param arr ? : Array   数组
     * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
     * @returns boolean   当前数组与指定数组是否相交
     */
    isIntersect: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(arr, equalTest) {
        if (!equalTest) {
          equalTest = function equalTest(a, b) {
            return a === b;
          };
        }

        return this.some(function (thisEle) {
          return arr.some(function (arrEle) {
            return equalTest(thisEle, arrEle);
          });
        });
      }
    },

    /**
     * 获取当前数组在指定数组上的补集
     * @param universalArr ? : Array   全集数组
     * @param equalTest ? : (arrItem,thisItem)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
     * @returns Array   当前数组在指定数组上的补集
     */
    getComplementOn: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(universalArr, equalTest) {
        if (!equalTest) {
          equalTest = function equalTest(a, b) {
            return a === b;
          };
        }

        return universalArr.filter(function (arrItem) {
          return !this.some(function (thisItem) {
            return equalTest.call(this, arrItem, thisItem);
          }, this);
        }, this);
      }
    },

    /**
     * 获取符合 包含 和 排除 项 的所有元素
     * getIncludeAndExclude(options,equalTest)
     * @param options : {include ?: Array,exclude ?: Array}    必须；配置 包含 和 排除 数组 的 选项；
     * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
     * @returns Array   返回符合 options 中设置的 包含 和 排除 项 的所有元素
     */
    getIncludeAndExclude: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(options, equalTest) {
        var include = options.include,
            exclude = options.exclude;
        var valids = this;

        if (include) {
          valids = valids.getIntersection(include, equalTest);
        }

        if (exclude) {
          valids = exclude.getComplementOn(valids, equalTest);
        }

        return valids;
      }
    },
    //集合运算：结束
    //处理索引：开始

    /**
     * 获取指定索引的反相索引，即从后往前的索引，从0开始
     * @param index : number   正向的索引
     */
    reverseIndexForIndex: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(index) {
        return this.length - index - 1;
      }
    },
    //处理索引：结束
    //队列：开始

    /**
     * queuePush(item1, item2, ..., itemX)
     * 从队列尾部推入所有的item；此操作会从数组开始删除相应的数目的元素
     * @param item : any    推入队列的元素
     * @returns Array    返回包含所有删除元素的数组
     */
    queuePush: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        this.push.apply(this, arguments);
        return this.splice(0, arguments.length);
      }
    },

    /**
     * queuePop()
     * 从队列尾部推出（删除）一个item；此操作会将数组剩下的元素往数组尾部移动一位；
     * @returns any    返回被删除的元素
     */
    queuePop: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        this.unshift(undefined);
        return this.pop();
      }
    },

    /**
     * queueUnshift(item1, item2, ..., itemX)
     * 从队列头部推入所有的item；此操作会从数组尾部删除相应的数目的元素
     * @param item : any    推入队列的元素
     * @returns Array    返回包含所有删除元素的数组
     */
    queueUnshift: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        this.unshift.apply(this, arguments);
        var len = arguments.length;
        return this.splice(-len, len);
      }
    },

    /**
     * queueShift()
     * 从队列头部推出（删除）一个item；此操作会将数组剩下的元素往数组头部移动一位；
     * @returns any    返回被删除的元素
     */
    queueShift: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        this.push(undefined);
        return this.shift();
      }
    } //队列：结果

  };
  Object.defineProperties(Array.prototype, propertyDescriptors); //集合运算：开始

  /**
   * 获取所有指定数组的交集
   * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
   * @param array ? : Array   数组
   * @returns Array   所有指定数组的交集
   */

  Array.intersectionOf = function intersectionOf(equalTest) {
    for (var _len5 = arguments.length, arrays = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      arrays[_key5 - 1] = arguments[_key5];
    }

    if (typeof equalTest != "function") {
      if (Array.isArray(equalTest)) {
        arrays.unshift(equalTest);
      }

      equalTest = function equalTest(a, b) {
        return a === b;
      };
    }

    arrays.sort(function (arr1, arr2) {
      return arr1.length - arr2.length;
    });
    var leastArr = arrays.shift();
    return leastArr.filter(function (item) {
      return arrays.every(function (arr) {
        return arr.some(function (arrItem) {
          return equalTest(item, arrItem);
        });
      });
    });
  };
  /**
   * 判断所有指定数组是否有交集
   * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
   * @param array ? : Array   数组
   * @returns boolean   所有指定数组是否有交集
   */


  Array.isIntersect = function isIntersect(equalTest) {
    for (var _len6 = arguments.length, arrays = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      arrays[_key6 - 1] = arguments[_key6];
    }

    if (typeof equalTest != "function") {
      if (Array.isArray(equalTest)) {
        arrays.unshift(equalTest);
      }

      equalTest = function equalTest(a, b) {
        return a === b;
      };
    }

    arrays.sort(function (arr1, arr2) {
      return arr1.length - arr2.length;
    });
    var leastArr = arrays.shift();
    return leastArr.some(function (item) {
      return arrays.every(function (arr) {
        return arr.some(function (arrItem) {
          return equalTest(item, arrItem);
        });
      });
    });
  }; //集合运算：结束

  /**
   * isArrayLike(target)
   * 判断 target 是否为 类数组对象
   * @param target : any    目标
   * @returns boolean
   */


  Array.isArrayLike = function isArrayLike(target) {
    var length = target && target.length;
    return Number.isInteger(target.length) && length >= 0;
  };

  //对 JSON 扩展的属性和方法都写在 extendJSON 里面
  var extendJSON = {
    extended: true,
    //用于标识 JSON 是否这被对象 extendJSON 扩展过；

    /**
     * 安全地解析字符串，不会抛出错误，返回一个解析结果的信息对象
     * @param text : string   必需， 一个有效的 JSON 字符串。
     * @param reviver ?: function   可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
     * @returns {parsed: boolean, result: string | JSONObject }   解析的结果； parsed ：表示是否成功解析； result ： 最终解析的结果，如果成功解析，则该值为解析后的JSON对象，如果未成功解析，则该值为原字符串 text
     */
    safelyParse: function safelyParse(text, reviver) {
      var parseInfo = {
        parsed: true,
        result: text
      };

      try {
        parseInfo.result = JSON.parse(text, reviver);
      } catch (e) {
        parseInfo.parsed = false;
      }

      return parseInfo;
    },

    /**
     * 将目标深度序列化成JSON字符串
     * @param target : any    将要序列化成 一个JSON 字符串的值。
     * @param replacer ? : (key,vlaue)=>vlaue |  Array    如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；关于该参数更详细的解释和示例，请参考使用原生的 JSON 对象一文。
     * @param space ?  指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。
     * @returns string   一个表示给定值的JSON字符串。
     *
     *
     *
     * 注意：
     * 该方法会把 target 的中的所有对象属性单独序列化成 JSON 字符串
     */
    depthStringify: function depthStringify(target, replacer, space) {
      var _this = this;

      var newTarget = Object.keys(target).reduce(function (total, key) {
        var prop = target[key];

        if (_typeof$2(prop) == "object") {
          prop = _this.depthStringify(prop, replacer, space);
        }

        total[key] = prop;
        return total;
      }, {});
      return JSON.stringify(newTarget, replacer, space);
    },

    /**
     * 深度解析； depthStringify 的逆运算
     * @param text
     * @param reviver
     * @returns any
     */
    depthParse: function depthParse(text, reviver) {
      var _this2 = this;

      var result = JSON.correctParse(text, reviver);

      if (_typeof$2(result) == "object") {
        Object.keys(result).forEach(function (key) {
          var prop = result[key];
          prop = _this2.depthParse(prop, reviver);
          result[key] = prop;
        });
      }

      return result;
    },

    /**
     * 判断 text 是否是有效的JSON字符串
     * @returns boolean
     */
    isJSONString: function isJSONString(text) {
      try {
        var parsed = JSON.parse(text);
        var isJSON = parsed !== text;
      } catch (e) {
        isJSON = false;
      }

      return isJSON;
    },

    /**
     * correctParse(text,reviver)
     * 正确地解析，即：如果 text 是有效的 JSON 字符串，则解析它并返回解析后的结果，否则，返回原来的text
     * @param text :  string   被解析的字符串
     * @returns any
     */
    correctParse: function correctParse(text, reviver) {
      try {
        var parsed = JSON.parse(text, reviver);
        var isJSON = parsed !== text;
      } catch (e) {
        isJSON = false;
      }

      if (!isJSON) {
        parsed = text;
      }

      return parsed;
    }
  };
  var oriJSON = globalThis.JSON;
  /*
  * 翻用这种方式的原因是：
  * 为了防止别人重置 JSON 对象时忽略了本文件扩展的方法；
  * */

  Object.defineProperty(globalThis, "JSON", {
    get: function get() {
      return globalThis._JSON;
    },
    set: function set(newValue) {
      if (!newValue.extended) {
        Object.assign(newValue, extendJSON);
      }

      globalThis._JSON = newValue;
    }
  });
  globalThis.JSON = oriJSON;

  Object.defineProperties(String.prototype, {
    /**
     * 是否是有效的 JSON 字符串
     */
    isJSONString: {
      configurable: true,
      get: function get() {
        return JSON.isJSONString(this);
      }
    },

    /**
     * 是否不包任何非空字符
     */
    noChars: {
      configurable: true,
      get: function get() {
        return !/\S+/.test(this);
      }
    },

    /**
     * 首字母大写
     */
    capFirstLetter: {
      configurable: true,
      get: function get() {
        return this.replace(/(^\W*)(\w)/, function (match, p1, p2) {
          return p1 + p2.toUpperCase();
        });
      }
    },

    /**
     * 把字符串转换成分隔线的格式
     * @param separator ? : string   可选，默认值："-" ；   分隔线
     * @property caseType ? : L | U | N     大小写类型；   L : 小写，当没有设置 separator 时，将会把所有字符都转为小写 ； U : 大写 ，当没有设置 separator 时，将会把所有字符都转为大写； N : 正常，不做改变；
     * @returns string
     */
    toSeparatorLineFormat: {
      configurable: true,
      writable: true,
      value: function value(separator, caseType) {
        if (separator == undefined) {
          separator = "-";
        }

        if (caseType == undefined) {
          caseType = "N";
        }

        var lowerCase = caseType == "L";
        var targetStr = this.replace(/[A-Z]+/g, function (match, offset, oriStr) {
          var matchStr = lowerCase ? match.toLowerCase() : match;
          return separator + matchStr;
        });
        var errorSeparatorRexStr = "(^\\s*)" + separator + "+";
        var errorSeparatorRex = new RegExp(errorSeparatorRexStr);
        targetStr = targetStr.replace(errorSeparatorRex, "$1"); //如果首字母是大写，执行replace时会多一个_，这里需要去掉

        if (caseType == "U") {
          targetStr = targetStr.capFirstLetter;
        }

        return targetStr;
      }
    },

    /**
     * 把字符串从分隔线格式转换成驼峰格式
     * @param separators ? : string | string[]   可选，默认值：['-', '_'] ；   分隔线，或 包含多个分隔线的数组
     * @returns string
     */
    toHumpFormat: {
      configurable: true,
      writable: true,
      value: function value(separators) {
        if (separators == undefined) {
          separators = ['-', '_'];
        } else if (!Array.isArray(separators)) {
          separators = [separators];
        }

        var separatorRexStr = '(' + separators.join('|') + ')' + '+([A-Za-z]?)';
        var separatorRex = new RegExp(separatorRexStr, 'g');
        return this.replace(separatorRex, function (match, p1, p2) {
          return p2.toUpperCase();
        });
      }
    },

    /**
     * 获取所有指定格式的字符串
     * @param formats : [FormatObject]  | FormatObject   格式对象 或者 数组
     * FormatObject := {separator : string, caseType : L | U | N}
     * @property separator  : string     分隔符
     * @property caseType  : L | U | N     大小写类型；   L : 小写，当没有设置 separator 时，将会把所有字符都转为小写 ； U : 大写 ，当没有设置 separator 时，将会把所有字符都转为大写； N : 正常
     * @returns [string]  所有指定格式的字符串数组
     */
    getAllStrForFormats: {
      configurable: true,
      writable: true,
      value: function value(formats) {
        var _this = this;

        if (!Array.isArray(formats)) {
          formats = [formats];
        }

        var allStrs = formats.reduce(function (total, format) {
          var separator = format.separator;
          var caseType = format.caseType || "N";
          var targetStr = _this;

          if (separator != undefined) {
            targetStr = _this.toSeparatorLineFormat(separator, caseType);
          } else if (caseType == "U") {
            targetStr = _this.toUpperCase();
          } else if (caseType == "L") {
            targetStr = _this.toLowerCase();
          }

          total.push(targetStr);
          return total;
        }, []);
        return allStrs;
      }
    },
    //URL相关：开始

    /**
     * 是否是URL
     */
    isURL: {
      configurable: true,
      get: function get() {
        return /^\w+:\/\/\S+/.test(this);
      }
    } //URL相关：结束

  });

  /**
   * 接口1:
   * distanceSort(target, num1,num2 ,...)
   * 根据各个 num 在数轴上距 target 远近来排序
   * @param target : number  目标，参考数
   * @param num : number    参与比较的数
   * @returns [number]   返回 按距离 target 从近到远排列的数的数组
   *
   *
   * 接口2:
   * distanceSort(target, nums)
   * 根据 nums 各个数在数轴上距 target 远近来排序
   * @param target : number  目标，参考数
   * @param nums : [number]    参考比较的数的数组
   * @returns [number]   返回 按距离 target 从近到远排列的数的数组
   */
  Math.distanceSort = function distanceSort(target) {
    for (var _len = arguments.length, nums = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      nums[_key - 1] = arguments[_key];
    }

    var numList = nums;
    var firstNum = nums[0];

    if (nums.length == 1 && Array.isArray(firstNum)) {
      numList = firstNum.slice();
    }

    var disSort = numList.sort(function (a, b) {
      return Math.abs(a - target) - Math.abs(b - target);
    });
    return disSort;
  };
  /**
   * 接口1:
   * nearest(target, num1,num2 ,...)
   * 返回距 target 最近的数
   * @param target : number  目标，参考数
   * @param num : number    参与比较的数
   * @returns [number]   返回 按距离 target 从近到远排列的数的数组
   *
   *
   * 接口2:
   * nearest(target, nums)
   * 返回距 target 最近的数
   * @param target : number  目标，参考数
   * @param nums : [number]    参考比较的数的数组
   * @returns [number]   返回 按距离 target 从近到远排列的数的数组
   */


  Math.nearest = function nearest(target) {
    for (var _len2 = arguments.length, nums = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      nums[_key2 - 1] = arguments[_key2];
    }

    var disSort = Math.distanceSort.apply(Math, [target].concat(nums));
    return disSort[0];
  };
  /**
   * 接口1:
   * farthest(target, num1,num2 ,...)
   * 返回距 target 最远的数
   * @param target : number  目标，参考数
   * @param num : number    参与比较的数
   * @returns [number]   返回 按距离 target 从近到远排列的数的数组
   *
   *
   * 接口2:
   * farthest(target, nums)
   * 返回距 target 最远的数
   * @param target : number  目标，参考数
   * @param nums : [number]    参考比较的数的数组
   * @returns [number]   返回 按距离 target 从近到远排列的数的数组
   */


  Math.farthest = function farthest(target) {
    for (var _len3 = arguments.length, nums = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      nums[_key3 - 1] = arguments[_key3];
    }

    var disSort = Math.distanceSort.apply(Math, [target].concat(nums));
    var lastIndex = disSort.length - 1;
    return disSort[lastIndex];
  };

  var propertyDescriptors$1 = {
    /**
     * 接口1:
     * distanceSort(num1,num2 ,...)
     * 根据各个 num 在数轴上距 自己 远近来排序
     * @param num : number    参与比较的数
     * @returns [number]   返回 按距离 自己 从近到远排列的数的数组
     *
     *
     * 接口2:
     * distanceSort(nums)
     * 根据 nums 各个数在数轴上距 自己 远近来排序
     * @param nums : [number]    参考比较的数的数组
     * @returns [number]   返回 按距离 自己 从近到远排列的数的数组
     */
    distanceSort: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
          nums[_key] = arguments[_key];
        }

        return Math.distanceSort.apply(Math, [this].concat(nums));
      }
    },

    /**
     * 接口1:
     * nearest(num1,num2 ,...)
     * 返回距 自己 最近的数
     * @param num : number    参与比较的数
     * @returns [number]   返回 按距离 自己 从近到远排列的数的数组
     *
     *
     * 接口2:
     * nearest(nums)
     * 返回距 自己 最近的数
     * @param nums : [number]    参考比较的数的数组
     * @returns [number]   返回 按距离 自己 从近到远排列的数的数组
     */
    nearest: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          nums[_key2] = arguments[_key2];
        }

        return Math.nearest.apply(Math, [this].concat(nums));
      }
    },

    /**
     * 接口1:
     * farthest(num1,num2 ,...)
     * 返回距 自己 最远的数
     * @param num : number    参与比较的数
     * @returns [number]   返回 按距离 自己 从近到远排列的数的数组
     *
     *
     * 接口2:
     * farthest(nums)
     * 返回距 自己 最远的数
     * @param nums : [number]    参考比较的数的数组
     * @returns [number]   返回 按距离 自己 从近到远排列的数的数组
     */
    farthest: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value() {
        for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          nums[_key3] = arguments[_key3];
        }

        return Math.farthest.apply(Math, [this].concat(nums));
      }
    }
  };
  Object.defineProperties(Number.prototype, propertyDescriptors$1); //兼容：开始

  if (!Number.isInteger) {
    Number.isInteger = Number.isInteger || function (value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
  } //兼容：结束

  /**
   *
   * 接口1
   * getDaysOfMonth(timestamp)
   * 获取指定时间所在月份的总天数
   * @param timestamp : number  代表自1970年1月1日00:00:00 (世界标准时间) 起经过的毫秒数。
   * @returns number   返回指定月份的天数
   *
   *
   *
   * 接口2
   * getDaysOfMonth(dateString)
   * 获取指定时间所在月份的总天数
   * @param dateString : string  日期的字符串值。该字符串应该能被 Date.parse() 方法识别
   * @returns number   返回指定月份的天数
   *
   *
   *
   * 接口3
   * getDaysOfMonth(date)
   * 获取指定时间实例所在月份的总天数
   * @param date : Date  Date 实例。
   * @returns number   返回指定月份的天数
   *
   *
   * 接口4
   * getDaysOfMonth(year, month)
   * 获取指定月份的总开数
   * @param year : number  年份
   * @param month : number  月份
   * @returns number   返回指定月份的天数
   *
   *
   * 接口5
   * getDaysOfMonth()
   * 获取当前时间实例所在月份的总天数
   * @returns number   返回当前时间所在月份的总天数
   */
  Date.getDayNumberOfMonth = function getDayNumberOfMonth(year, month) {
    switch (arguments.length) {
      case 2:
        {
          var date = new Date(year, month);
          break;
        }

      case 1:
        {
          var initValue = year;

          if (year instanceof Date) {
            initValue = year.getTime();
          }

          date = new Date(initValue);
          break;
        }

      default:
        {
          date = new Date();
        }
    }

    date.setMonthOffset(1);
    date.setDate(0);
    var dayNum = date.getDate();
    return dayNum;
  };
  /**
   * 获取该日期所在月份的天数
   */


  Date.prototype.getDayNumber = function getDayNumber() {
    return Date.getDayNumberOfMonth(this);
  };
  /**
   * setYearOffset(offset)
   * 设置年份偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns number   偏移后的年份
   */


  Date.prototype.setYearOffset = function setYearOffset(offset) {
    if (offset) {
      var num = this.getFullYear();
      this.setFullYear(num + offset);
    }

    return this.getFullYear();
  };
  /**
   * setMonthOffset(offset)
   * 设置月份偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns number   偏移后的月份
   */


  Date.prototype.setMonthOffset = function setMonthOffset(offset) {
    if (offset) {
      var num = this.getMonth();
      this.setMonth(num + offset);
    }

    return this.getMonth();
  };
  /**
   * setDateOffset(offset)
   * 设置天偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns number   偏移后的天
   */


  Date.prototype.setDateOffset = function setDateOffset(offset) {
    if (offset) {
      var num = this.getDate();
      this.setDate(num + offset);
    }

    return this.getDate();
  };
  /**
   * setHourOffset(offset)
   * 设置小时偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns date : number   偏移后的小时
   */


  Date.prototype.setHourOffset = function setHourOffset(offset) {
    if (offset) {
      var num = this.getHours();
      this.setHours(num + offset);
    }

    return this.getHours();
  };
  /**
   * setMinuteOffset(offset)
   * 设置分钟偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns number   偏移后的分钟
   */


  Date.prototype.setMinuteOffset = function setMinuteOffset(offset) {
    if (offset) {
      var num = this.getMinutes();
      this.setMinutes(num + offset);
    }

    return this.getMinutes();
  };
  /**
   * setSecondOffset(offset)
   * 设置秒数偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns number   偏移后的秒数
   */


  Date.prototype.setSecondOffset = function setSecondOffset(offset) {
    if (offset) {
      var num = this.getSeconds();
      this.setMinutes(num + offset);
    }

    return this.getSeconds();
  };
  /**
   * setMillisecondOffset(offset)
   * 设置亳秒数偏移量 正数：向未来偏移，负数，表示向过去偏移
   * @param offset : number   偏移量，正数：向未来偏移，负数，表示向过去偏移
   * @returns number   偏移后的亳秒数
   */


  Date.prototype.setMillisecondOffset = function setMillisecondOffset(offset) {
    if (offset) {
      var num = this.getMilliseconds();
      this.setMilliseconds(num + offset);
    }

    return this.getMilliseconds();
  }; //获取从开始到结束的步长为step的所有时间

  /*Date.getAllDate  = function(start,step,end) {

    switch (step) {
      case

    }


  };*/

  /*
   使用属性描述来定义属性的原因：
   - 为了不让 for...in 等类似的操作遍历这些定义在原型上的方法或属性，需要将属性设置为不可枚举的；
   - 为了解决给 Object.prototype 添加属性会在Vue中报错的问题，需要将属性设置为不可枚举的；


   注意：
   - Object.prototype 和  Object 上不能定义同名成员；
   */

  var propertyDescriptors$2 = {
    /**
     * 找出对象中符合测试函数的属性名
     * @param testFun:(propValue,propkey,index)=> boolean  ; 测试条件函数
     */
    findKey: {
      configurable: true,
      writable: true,
      //为了兼容 lodash 库，因为 rollup-plugin-typescript2 所依赖的 lodash 库会更改该属性 findKey
      enumerable: false,
      value: function value(testFun) {
        var _this2 = this;

        return Object.keys(this).find(function (key, index) {
          var propValue = _this2[key];
          return testFun(propValue, key, index);
        });
      }
    },

    /**
     * 找出对象中符合测试函数的属性信息
     * @param testFun:(propValue,propkey,index)=> boolean  ; 测试条件函数
     * @return PropertyInfo : {key:string,value:any}
     */
    findProperty: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(testFun) {
        var prop = Object.entries(this).find(function (entry, index) {
          return testFun(entry[1], entry[0], index);
        });
        var propInfo = {
          key: null,
          value: null
        };

        if (prop) {
          propInfo.key = prop[0];
          propInfo.value = prop[1];
        }

        return propInfo;
      }
    },

    /**
     * 检验该对象自身是否是扁平的，即：该对象的所有的直接属性的属性值都是非对象类型；
     */
    isFlat: {
      configurable: true,
      enumerable: false,
      get: function get() {
        var noFlat = Object.values(this).some(function (propValue) {
          var propType = _typeof$2(propValue);

          return propValue && (propType === "object" || propType === "function");
        });
        return !noFlat;
      }
    },

    /**
     * 返回对象是否是空的对象，即没有自己的可枚举的属性
     */
    noKeys: {
      configurable: true,
      enumerable: false,
      get: function get() {
        return Object.keys(this).length == 0;
      }
    },

    /**
     * 获取对象中拥有的 相应key的值；
     * @param keys:[string]  指定的key的数组
     * @return [any]    对象中拥有的相应key的值
     */
    getValuesOfKeys: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(keys) {
        var _this = this;

        return keys.reduce(function (total, currentKey) {
          if (currentKey in _this) {
            total.push(_this[currentKey]);
          }

          return total;
        }, []);
      }
    },

    /**
     * 获取对象中拥有的 相应key的 有效值；
     * 注意：不包含值为 undefined 或 null 的值
     * @param keys:[string]  指定的key的数组
     * @return [any]    对象中拥有的相应key的有效值
     *
     */
    getVirtualValuesOfKeys: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(keys) {
        var _this = this;

        return keys.reduce(function (total, currentKey) {
          var currValue = _this[currentKey];

          if (currValue != undefined) {
            total.push(currValue);
          }

          return total;
        }, []);
      }
    },

    /**
     * 查找对象中所有指定的属性中的第一个有效值
     * @param keys : [string]   被查找的属性列表
     * @returns any  对象中所有指定的属性中的第一个有效值
     */
    findValueOfKeys: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(keys) {
        var findValue;
        keys.find(function (currentKey) {
          var currValue = this[currentKey];
          var valid = currValue != undefined;

          if (valid) {
            findValue = currValue;
          }

          return valid;
        }, this);
        return findValue;
      }
    },

    /**
     * 获取对象中所有指定格式的属性的值列表
     * @param key : string   基本的属性字符串
     * @param formats : [FormatObject]  | FormatObject   格式对象 或者 数组
     * FormatObject := {separator : string, caseType : L | U | N}
     * @property separator  : string     分隔符
     * @property caseType  : L | U | N     大小写类型；   L : 小写，当没有设置 separator 时，将会把所有字符都转为小写 ； U : 大写 ，当没有设置 separator 时，将会把所有字符都转为大写； N : 正常
     * @returns [any]  对象中所有指定格式的属性的值列表
     */
    getValuesForKeyFormats: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(key, formats) {
        var keyStrList = key.getAllStrForFormats(formats);
        return this.getValuesOfKeys(keyStrList);
      }
    },

    /**
     * 获取对象中所有指定格式的属性的有效值列表
     * @param key : string   基本的属性字符串
     * @param formats : [FormatObject]  | FormatObject   格式对象 或者 数组
     * FormatObject := {separator : string, caseType : L | U | N}
     * @property separator  : string     分隔符
     * @property caseType  : L | U | N     大小写类型；   L : 小写，当没有设置 separator 时，将会把所有字符都转为小写 ； U : 大写 ，当没有设置 separator 时，将会把所有字符都转为大写； N : 正常
     * @returns [any]  对象中所有指定格式的属性的值列表
     */
    getVirtualValuesForKeyFormats: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(key, formats) {
        var keyStrList = key.getAllStrForFormats(formats);
        return this.getVirtualValuesOfKeys(keyStrList);
      }
    },

    /**
     * 查找对象中所有指定格式的属性的第一个有效值
     * @param key : string   基本的属性字符串
     * @param formats : [FormatObject]  | FormatObject   格式对象 或者 数组
     * FormatObject := {separator : string, caseType : L | U | N}
     * @property separator  : string     分隔符
     * @property caseType  : L | U | N     大小写类型；   L : 小写，当没有设置 separator 时，将会把所有字符都转为小写 ； U : 大写 ，当没有设置 separator 时，将会把所有字符都转为大写； N : 正常
     * @returns any  对象中所有指定格式的属性的第一个有效值
     */
    findValueForKeyFormats: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(key, formats) {
        var keyStrList = key.getAllStrForFormats(formats);
        return this.findValueOfKeys(keyStrList);
      }
    },
    //集合：开始

    /**
     * 判断当前对象是否是指定对象的子集；即当前对象自己的所有可枚举属性 及 值 是否都包含于 指定的对象上；
     * @param universalObj : Object   全集对象
     * @param equalTest ? : (a,b)=>boolean    可选， 默认是通过全等 === 来判断元素是否相等的；测试数组元素是否相同的函数，返回 boolean 值，表示 元素a 和 元素b  相同；
     * @returns boolean   当前对象是否是指定对象的子集
     */
    isSubsetOf: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(universalObj, equalTest) {
        if (!equalTest) {
          equalTest = function equalTest(a, b) {
            return a === b;
          };
        }

        var thisEntries = Object.entries(this);
        return thisEntries.every(function (entrie, index) {
          var key = entrie[0];
          var value = entrie[1];
          return equalTest.call(this, value, universalObj[key]);
        }, this);
      }
    },
    //集合：结束

    /**
     * depthLoopOwnProperty(callback,depth,all,thisValue,initDepth)=> stopInfo
     * 递归遍历自身属性链中的所有属性
     * @param callback : (key,value,obj,currDepth))=> stopInfo : any    必选； 循环遍历的回调函数； key : 当前被遍历的属性名；value : 当前被遍历的属性值；obj : 当前被遍历的属性所属的对象；currDepth : 当前遍历的深度值，从 initDepth 所表示的值开始计数；返回值 stopInfo : 表示是否中止循环，并且该值会被 depthLoopOwnProperty 函数返回，如果返回的值是真值，则终止循环；
     * @param depth ? : number    可选；默认值：-1 ,即无限深度； 要循环遍历的深度；
     * @param all ? : boolean    可选；默认值: false ;  是否遍历自身所有的属性，包括不可枚举的；
     * @param thisValue ? : any    可选；   callback 回调函数的this值 ；默认值：当前被遍历的属性所属的对象；
     * @param initDepth ? : number   可选；默认值：1；深度的初始值； 注意：设计该属性的主要目的是为了递归调用时记录当前传递当前的深度值的；
     * @returns stopInfo ： any   终止循环时返回的信息；
     */
    depthLoopOwnProperty: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(callback, depth, all, thisValue, initDepth) {
        if (depth == undefined) {
          depth = -1;
        }

        if (depth == 0) {
          return;
        }

        if (initDepth == undefined) {
          initDepth = 1;
        }

        if (thisValue === undefined) {
          thisValue = this;
        }

        if (all) {
          var keyList = Object.getOwnPropertyNames(this);
        } else {
          keyList = Object.keys(this);
        } //中止遍历


        var stopInfo;

        var _iterator = _createForOfIteratorHelper(keyList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            var value = this[key];

            if (_typeof$2(value) == "object") {
              stopInfo = value.depthLoopOwnProperty(callback, depth - 1, all, thisValue, initDepth + 1);

              if (stopInfo) {
                break;
              }
            }

            stopInfo = callback.call(thisValue, key, value, this, initDepth);

            if (stopInfo) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return stopInfo;
      }
    },

    /**
     * depthLoopPropertyWithPrototype(callback,depth,thisValue,initDepth)=> stopInfo
     * 递归遍历自身包括原型的属性链中的所有可枚举的属性
     * @param callback : (key,value,obj,currDepth))=>stopInfo : any    必选； 循环遍历的回调函数； key : 当前被遍历的属性名；value : 当前被遍历的属性值；obj : 当前被遍历的属性所属的对象；currDepth : 当前遍历的深度值，从 initDepth 所表示的值开始计数；返回值 stopInfo : 表示是否中止循环，并且该值会被 depthLoopOwnProperty 函数返回，如果返回的值是真值，则终止循环；
     * @param depth ? : number    可选；默认值：-1 ,即无限深度； 要循环遍历的深度；
     * @param thisValue ? : any    可选；   callback 回调函数的this值 ；默认值：当前被遍历的属性所属的对象；
     * @param initDepth ? : number   可选；默认值：1；深度的初始值； 注意：设计该属性的主要目的是为了递归调用时记录当前传递当前的深度值的；
     * @returns stopInfo ： any   终止循环时返回的信息；
     */
    depthLoopPropertyWithPrototype: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(callback, depth, thisValue, initDepth) {
        if (depth == undefined) {
          depth = -1;
        }

        if (depth == 0) {
          return;
        }

        if (initDepth == undefined) {
          initDepth = 1;
        }

        if (thisValue === undefined) {
          thisValue = this;
        } //中止遍历


        var stopInfo;

        for (var key in this) {
          var value = this[key];

          if (_typeof$2(value) == "object") {
            stopInfo = value.depthLoopPropertyWithPrototype(callback, depth - 1, thisValue, initDepth + 1);

            if (stopInfo) {
              break;
            }
          }

          stopInfo = callback.call(thisValue, key, value, this, initDepth);

          if (stopInfo) {
            break;
          }
        }

        return stopInfo;
      }
    },

    /**
     * filterProperty(filter,thisValue)
     * 返回包含符合条件的所有属性的新对象
     * @param filter : (key,value,obj)=>boolean    必选；
     * @param thisValue ? : any   可选；默认值：当前对象； filter 函数的this 值；
     * @returns Object   返回包含符合条件的所有属性的新对象
     */
    filterProperty: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(filter, thisValue) {
        var _this3 = this;

        if (arguments.length < 2) {
          thisValue = this;
        }

        return Object.entries(this).reduce(function (preValue, entr) {
          var key = entr[0];
          var value = entr[1];

          if (filter.call(thisValue, key, value, _this3)) {
            preValue[key] = value;
          }

          return preValue;
        }, {});
      }
    }
  };
  Object.defineProperties(Object.prototype, propertyDescriptors$2);
  /**
   * 用于将所有指定的属性的值从源对象复制到目标对象。它将返回目标对象。
   * @param target : Object     目标对象。
   * @param keys : Array<String>   需要复制的属性名数组
   * @param ...sources : Object    源对象参数序列
   * @return target    返回目标对象
   */

  Object.assignKeys = function (target, keys) {
    if (keys) {
      for (var _len = arguments.length, sources = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        sources[_key - 2] = arguments[_key];
      }

      var keysSourceList = sources.map(function (source) {
        return keys.reduce(function (newSource, aKey) {
          var aValue = source[aKey];

          if (aValue !== undefined) {
            newSource[aKey] = aValue;
          }

          return newSource;
        }, {});
      });
      Object.assign.apply(Object, [target].concat(_toConsumableArray(keysSourceList)));
    }

    return target;
  };
  /**
   * 用于将所有指定的属性之外的所有属性和值从源对象复制到目标对象。它将返回目标对象。
   * @param target : Object     目标对象。
   * @param keys : Array<String>   需要排除的属性名数组
   * @param ...sources : Object    源对象参数序列
   * @return target    返回目标对象
   */


  Object.assignExcludeKeys = function (target, keys) {
    if (keys) {
      for (var _len2 = arguments.length, sources = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        sources[_key2 - 2] = arguments[_key2];
      }

      var keysSourceList = sources.map(function (source) {
        var allKeys = Object.keys(source);
        var validKeys = keys.getComplementOn(allKeys);
        return validKeys.reduce(function (newSource, aKey) {
          var aValue = source[aKey];

          if (aValue !== undefined) {
            newSource[aKey] = aValue;
          }

          return newSource;
        }, {});
      });
      Object.assign.apply(Object, [target].concat(_toConsumableArray(keysSourceList)));
    }

    return target;
  };
  /**
   * 用于将所有符合 options 配置 的属性和值从源对象复制到目标对象。它将返回目标对象。
   * @param target : Object     目标对象。
   * @param options : IncludeAndExcludeKeysOptions  必须；配置 包含 和 排除 的 key 的 数组 的 选项；
   * @param ...sources : Object    源对象参数序列
   * @return target    返回目标对象
   *
   * IncludeAndExcludeKeysOptions = {include ?: Array,exclude ?: Array}
   */


  Object.assignIncludeAndExcludeKeys = function (target, options) {
    if (options && !options.noKeys) {
      for (var _len3 = arguments.length, sources = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        sources[_key3 - 2] = arguments[_key3];
      }

      var keysSourceList = sources.map(function (source) {
        var allKeys = Object.keys(source);
        var validKeys = allKeys.getIncludeAndExclude(options);
        return validKeys.reduce(function (newSource, aKey) {
          var aValue = source[aKey];

          if (aValue !== undefined) {
            newSource[aKey] = aValue;
          }

          return newSource;
        }, {});
      });
      Object.assign.apply(Object, [target].concat(_toConsumableArray(keysSourceList)));
    }

    return target;
  }; //兼容：开始
  //Object.entries(obj)


  if (!Object.entries) {
    Object.entries = function (obj) {
      var ownProps = Object.keys(obj),
          i = ownProps.length,
          resArray = new Array(i);

      while (i--) {
        var key = ownProps[i];
        resArray[i] = [key, obj[key]];
      }

      return resArray;
    };
  } //Object.fromEntries(entries)


  if (!Object.fromEntries) {
    Object.fromEntries = function (entries) {
      return entries.reduce(function (obj, entry) {
        obj[entry[0]] = entry[1];
        return obj;
      }, {});
    };
  } //兼容：结束

  /**
   * 定义代理属性； 给 对象 proxy 增加 能够代理 target 对象 的 属性 prop；
   * 当在 访问或配置 proxy 对象上的 prop 属性时，会将操作转发到 target 对象的 prop 属性；
   *
   * @param proxy : Object   必选；会在该对象上添加代理属性 prop
   * @param target : Object   必选；被代理的对象
   * @param prop : Property   必选；代理属性的名字；
   * @param options ?: ProxyOptions  代理属性的配置选项
   *
   * ProxyOptions = {get:boolean,set:boolean,configurable:boolean,enumerable:boolean,getDefault,setDefault}
   * get:boolean  可选；默认值：true； 表示是否要定义 get 的代理；
   * set:boolean  可选；默认值：true； 表示是否要定义 set 的代理；
   * configurable:boolean  可选；默认值：true； 表示该属性描述符的类型是否可以被改变并且该属性可以从对应对象中删除。
   * enumerable:boolean  可选；默认值：true； 表示当在枚举相应对象上的属性时该属性是否显现。
   * getDefault:any  可选；当 target 的属性 prop 为 undefined 时，proxy 会返回默认值 getDefault
   * setDefault:any  可选；当给代理对象 proxy 的 prop 属性 设置的 新值是 undefined 时，会将默认值 setDefault 设置 到 target 对象的 prop 属性上；
   *
   * @returns proxy : Object  传递给函数的 代理对象 proxy
   */


  Object.defineProxyProperty = function (proxy, target, prop, options) {
    var _ref = options || {},
        _ref$get = _ref.get,
        get = _ref$get === void 0 ? true : _ref$get,
        _ref$set = _ref.set,
        set = _ref$set === void 0 ? true : _ref$set,
        _ref$configurable = _ref.configurable,
        configurable = _ref$configurable === void 0 ? true : _ref$configurable,
        _ref$enumerable = _ref.enumerable,
        enumerable = _ref$enumerable === void 0 ? true : _ref$enumerable,
        getDefault = _ref.getDefault,
        setDefault = _ref.setDefault;

    var descriptor = {
      configurable: configurable,
      enumerable: enumerable
    };

    if (get) {
      descriptor.get = function () {
        var propValue = target[prop];
        return propValue === undefined ? getDefault : propValue;
      };
    }

    if (set) {
      descriptor.set = function (newValue) {
        newValue = newValue === undefined ? setDefault : newValue;
        target[prop] = newValue;
      };
    }

    Object.defineProperty(proxy, prop, descriptor);
    return proxy;
  };
  /**
   * 批量定义代理属性
   *
   * 接口1：defineProxyProperties(proxy,target,propOptions)
   * @param proxy : Object   必选；会在该对象上添加代理属性 prop
   * @param target : Object   必选；被代理的对象
   * @param propOptions : {propName:ProxyOptions}   必选；要定义的代理属性的配置对象；以该配置对象的属性名为 要配置的属性的名字，以其值为 本配置的属性的 配置选项
   * @returns proxy : Object  传递给函数的 代理对象 proxy
   *
   *
   * 接口2：defineProxyProperties(proxy,target,propArray,options)
   * @param proxy : Object   必选；会在该对象上添加代理属性 prop
   * @param target : Object   必选；被代理的对象
   * @param propArray : [string]   必选；要定义的代理属性的名字的列表。
   * @param options ?: ProxyOptions     可选；所有代理属性的配置选项
   *
   *  @returns proxy : Object  传递给函数的 代理对象 proxy
   */


  Object.defineProxyProperties = function (proxy, target, props, options) {
    var propsObj = props;

    if (Array.isArray(props)) {
      propsObj = props.reduce(function (total, propName) {
        total[propName] = options;
        return total;
      }, {});
    }

    Object.keys(propsObj).forEach(function (propName) {
      var propOpts = propsObj[propName];
      Object.defineProxyProperty(proxy, target, propName, propOpts);
    });
    return proxy;
  };
  /**
   * 判断 目标 是否是可迭代的对象，即 实现了 可迭代协议
   * @param target : any
   * @return {boolean}
   */


  Object.isIterable = function (target) {
    return target && typeof target[Symbol.iterator] === "function";
  };
  /**
   * 判断 目标 是否是迭代器，即 实现了 迭代器协议
   * @param target : any
   * @return {boolean}
   */


  Object.isIterator = function (target) {
    return target && typeof target.next === "function";
  };
  /**
   * isDepthEqual(a, b, nullNotEqualUndefined)
   * 深度测试  a 和 b 是否完全相等；如果 a 和 b 是 对象，会进行递归相等测试，只有所有的属性 都相等时，才会认为是相等的；
   *
   * 注意：
   * - 对于 值为 undefined 的属性 和 不存在的属性 认为是相等的属性；
   * - 对于 对于 函数 ，如果整个函数的代码字符（fun.toString()）串相等，则认为函数是相等的；
   * - 目前只判断了 基础类型、Object、Array、function、Date、可迭代 类型；
   * - 对于可迭代类型，必须迭代 索引 和 索引对应的值 都相等才认为是相等的；
   *
   * @param a : any
   * @param b : any
   * @param nullNotEqualUndefined ? : boolean    可选；默认值：false;  是否把 null 和 undefined 作为不等的值来对待
   * @param strict ? : boolean    可选；默认值：false;  是否使用严格相等来对 基本类型的值 进行比较
   * @return boolean
   */


  Object.isDepthEqual = function isDepthEqual(a, b, nullNotEqualUndefined, strict) {
    if (strict) {
      if (nullNotEqualUndefined) {
        var equalTest = function equalTest(a, b) {
          return a === b;
        };
      } else {
        equalTest = function equalTest(a, b) {
          return a === b || a == null && b == null;
        };
      }
    } else {
      if (nullNotEqualUndefined) {
        var equalTest = function equalTest(a, b) {
          return a == null ? a === b : a == b;
        };
      } else {
        equalTest = function equalTest(a, b) {
          return a == b;
        };
      }
    }

    if (equalTest(a, b) || Object.is(a, b)) {
      return true;
    } else if (a == null || b == null) {
      return equalTest(a, b);
    }

    var aType = _typeof$2(a);

    var bType = _typeof$2(b);

    if (aType != bType) {
      //测试 基础类型 与 其包装类型 的相等性
      return equalTest(a.valueOf ? a.valueOf() : a, b.valueOf ? b.valueOf() : b);
    }

    if (aType == "function") {
      return equalTest(a, b) || equalTest(a.toString(), b.toString());
    }

    if (aType == "object") {
      if (a instanceof Date) {
        return equalTest(a.valueOf(), b.valueOf());
      }

      if (a instanceof Map) {
        if (b instanceof Map && a.size === b.size) ; else {
          return false;
        }
      }

      var aIsArr = Array.isArray(a);
      var bIsArr = Array.isArray(b);

      if (!aIsArr && Object.isIterable(a)) {
        var aArr = [];

        var _iterator2 = _createForOfIteratorHelper(a),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var value = _step2.value;
            aArr.push(value);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        a = aArr;
        aIsArr = true;
      }

      if (!bIsArr && Object.isIterable(b)) {
        var bArr = [];

        var _iterator3 = _createForOfIteratorHelper(b),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _value = _step3.value;
            bArr.push(_value);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        b = bArr;
        bIsArr = true;
      }

      if (aIsArr != bIsArr) {
        return false;
      }

      if (isArr) {
        if (a.length != b.length) {
          return false;
        }

        return a.every(function (aValue, index) {
          var bValue = b[index];
          return Object.isDepthEqual(aValue, bValue, nullNotEqualUndefined, strict);
        });
      }

      var aEntrs = Object.entries(a);
      var bEntrs = Object.entries(b);
      aEntrs = aEntrs.filter(function (entr) {
        !equalTest(entr[1], undefined);
        return !equalTest(entr[1], undefined);
      });
      bEntrs = bEntrs.filter(function (entr) {
        return !equalTest(entr[1], undefined);
      });

      if (aEntrs.length != bEntrs.length) {
        return false;
      }

      return aEntrs.every(function (aEntr) {
        var key = aEntr[0];
        var aValue = aEntr[1];
        var bValue = b[key];
        return Object.isDepthEqual(aValue, bValue, nullNotEqualUndefined, strict);
      });
    }

    return equalTest(a, b);
  };

  /**
   * loadingDoneAgain 和 requestDoneAgain 配置对象 代理 DoneCountManager 属性列表
   */

  var _doneAgainProxyProps = ["urlAsDoneCountName", "conflictPolicy", "autoIncrTotalIfRepeat", "autoDeleteTarget", "autoDeleteMode", "clearDelay"];

  var ByHttp = /*#__PURE__*/function () {
    /**
     * 创建HTTP请求对象
     * @param httpConfig : Object  HTTP的配置对象，
     *
     * httpConfig 中可配置的字段如下：
     *
     * baseURL : string    基URL
     * method  : string    默认的请求方式
     * publicData : Object | (reqOptions)=>Object  公共的参数 或者是 用来获取公共参数的函数，会对所有请求都追加些参数
     * reqTransforms : [(ReqOptions)=>ReqOptions]  转换请求选项的转换函数数组，用于对reqOptions进行转换，也可以在函数里给数据添加一些公共的参数
     * resTransforms : [(Response,ReqOptions)=>Response]  转换响应的转换函数数组，用于对 response 进行转换；
     * headers  : Object    默认的请求头对象
     * reqOptions.responseType : string         表明服务器返回的数据类型，如：'json','text' 等等
     * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
     * mainDataGet  : (responseData:any)=>mainData:any    如果 mainData 设置为 true，当请求成功时，会返回被 mainDataGet 处理过的数据；
     * successPrompt : boolean    是否启用全局的成功提示；
     * promptHandle : (info:data | error,success:boolean)=>Void    请求成功或者失败的回调函数
     * failPrompt  : boolean    是启用用全局的失败提示;
     * showLoading  : boolean    是否启用加载状态指示；默认值为 true
     * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
     * loadText  : string   加载的提示文本
     * startLoadingHandle : (loadText:string,reqOptions:ReqOptions,{showCount:number,globalShowCount:number,doneCount:DoneCount,doneCountManager:DoneCountManager,http:ByHttp})=>showCountIncrStep : number | undefined  开始显示 loading 的回调函数；返回 加载状态指示显示计数 loadingShowCount 的 增加量；
     * endLoadingHandle  : (succeed,reqOptions:ReqOptions,resData:ResponseData,{showCount:number,globalShowCount:number,doneCount:DoneCount,doneCountOnFail:DoneCount,doneCountManager:DoneCountManager,http:ByHttp})=>showCountDecrStep : number | undefined   结束显示 loading 的回调函数；返回 加载状态指示显示计数 loadingShowCount 的 减少量；
     *
     * startRequestHandle : (reqOptions,addInfo:RequestHandleAddInfo)=>Void     请求开始的回调函数
     * endRequestHandle :  (succeed,reqOptions:ReqOptions,resData:ResponseData,addInfo:RequestHandleAddInfo)=>Void    请求结束的回调函数；
     *
     *
     * dependent : boolean   设置请求是否依赖 dependentPro
     * dependentPro : Promise 请求的依赖项，当请求有依赖时，请求会 等到 dependentPro 解决之后触发
     * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
     * 注意：
     * - 当 HandleResult 为 false 时，会取消请求；
     * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
     * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
     * @returns AxiosPromise    请求的 AxiosPromise 对象
     *
     *
     * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
     * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
     *
     *
     * addInfoInRes ?: boolean    可选；默认值：false；是否在响应数据中添加额外的信息； 当值为 true 时，会在失败 或 成功时返回一个数组，数据的中第1个元素就是请求真正的响应数据 或 错误信息，第2个元素是这种格式的对象 : {doneCount:DoneCount,doneCountManager:DoneCountManager,http:ByHttp}
     * doneAgain ?: HttpDoneAgainOptions    可选；完成计数的配置对象；如果 loadingDoneAgain 或 requestDoneAgain 未配置，则会采用 doneAgain；
     * loadingDoneAgain ?: HttpDoneAgainOptions   可选；loading完成计数的配置对象；如果 loadingDoneAgain  未配置，则会采用 doneAgain；
     * requestDoneAgain ?: HttpDoneAgainOptions   可选；request完成计数的配置对象；如果 requestDoneAgain  未配置，则会采用 doneAgain；
     *
     * doneAgain.urlAsDoneCountName ?: boolean  可选；默认值：false； 当 DoneCount 选项中没有设置 namesOrNum 、 names 、 doneNum 选项时，是否将 urlPath 的值 作为 names 选项的值；
     *
     *
     *
     *
     * # 类型定义
     *
     * RequestHandleAddInfo = {
          loadText:string,showCount:number,globalShowCount:number,,
          loadingDoneAgain,loadingDoneCount:DoneCount,loadingDoneCountOnFail:DoneCount,loadingDoneCountManager:DoneCountManager,
          requestDoneAgain,requestDoneCount:DoneCount,requestDoneCountOnFail:DoneCount,requestDoneCountManager:DoneCountManager,
          http:ByHttp}
     *
     *
     *
     * HttpDoneAgainOptions = {
     *    urlAsDoneCountName:boolean,
     *    conflictPolicy:ConflictPolicy,
     *    autoIncrTotalIfRepeat:boolean,
     *    autoDeleteTarget:AutoDeleteTarget
     *    autoDeleteMode:AutoDeleteMode,
     *    clearDelay:number,
     *    failDoneAgain: Names | DoneNum | HttpDoneAgainOptions,    可选；当请求失败时附加应用的 完成计数的配置对象，注意：本次请求配置的 完成计数配置对象 也会被应用；
     *    ...DoneCountProps}
     *
     * ConflictPolicy = "Add" | "Reset" | "Recreate" | "Update"
     * AutoDeleteTarget = "ForcedDone" | "RealDone" | "Done"
     * AutoDeleteMode = "Delay" | "Immediately" | "No"
     */
    function ByHttp(_ref) {
      var reqTransforms = _ref.reqTransforms,
          publicData = _ref.publicData,
          resTransforms = _ref.resTransforms,
          mainData = _ref.mainData,
          mainDataGet = _ref.mainDataGet,
          validateHttpStatus = _ref.validateHttpStatus,
          validateDataStatus = _ref.validateDataStatus,
          successPrompt = _ref.successPrompt,
          failPrompt = _ref.failPrompt,
          promptHandle = _ref.promptHandle,
          _ref$showLoading = _ref.showLoading,
          showLoading = _ref$showLoading === void 0 ? true : _ref$showLoading,
          _ref$loadingDelay = _ref.loadingDelay,
          loadingDelay = _ref$loadingDelay === void 0 ? 0 : _ref$loadingDelay,
          loadText = _ref.loadText,
          startLoadingHandle = _ref.startLoadingHandle,
          endLoadingHandle = _ref.endLoadingHandle,
          dependent = _ref.dependent,
          dependentPro = _ref.dependentPro,
          dependResultHandle = _ref.dependResultHandle,
          addInfoInRes = _ref.addInfoInRes,
          doneAgain = _ref.doneAgain,
          loadingDoneAgain = _ref.loadingDoneAgain,
          requestDoneAgain = _ref.requestDoneAgain,
          startRequestHandle = _ref.startRequestHandle,
          endRequestHandle = _ref.endRequestHandle,
          header = _ref.header,
          otherConfig = _objectWithoutProperties(_ref, ["reqTransforms", "publicData", "resTransforms", "mainData", "mainDataGet", "validateHttpStatus", "validateDataStatus", "successPrompt", "failPrompt", "promptHandle", "showLoading", "loadingDelay", "loadText", "startLoadingHandle", "endLoadingHandle", "dependent", "dependentPro", "dependResultHandle", "addInfoInRes", "doneAgain", "loadingDoneAgain", "requestDoneAgain", "startRequestHandle", "endRequestHandle", "header"]);

      _classCallCheck(this, ByHttp);

      _defineProperty(this, "loadingShowCount", 0);

      _defineProperty(this, "propFormats", [{
        caseType: "N"
      }, {
        caseType: "L"
      }, {
        caseType: "U"
      }, {
        separator: "-",
        caseType: "L"
      }, {
        separator: "-",
        caseType: "U"
      }, {
        separator: "-",
        caseType: "N"
      }]);

      _defineProperty(this, "haveHttpBodyMethods", ["post"]);

      var defaultConfig = _objectSpread2({
        headers: header
      }, otherConfig);

      if (validateHttpStatus) {
        defaultConfig.validateStatus = validateHttpStatus;
      }

      var responseType = defaultConfig.findValueForKeyFormats("responseType", this.propFormats);

      if (responseType) {
        defaultConfig.responsetype = responseType;
      }

      this.axios = axios.create(defaultConfig);
      this.publicData = publicData;
      this.reqTransforms = reqTransforms;
      this.resTransforms = resTransforms;
      this.mainDataGet = mainDataGet;
      this.successPrompt = successPrompt;
      this.failPrompt = failPrompt;
      this.mainData = mainData;
      this.showLoading = showLoading;
      this.loadingDelay = loadingDelay;
      this.loadText = loadText;
      this.startLoadingHandle = startLoadingHandle;
      this.endLoadingHandle = endLoadingHandle;
      this.promptHandle = promptHandle;
      this.startRequestHandle = startRequestHandle;
      this.endRequestHandle = endRequestHandle;
      this.dependent = dependent;
      this.dependentPro = dependentPro;
      this.dependResultHandle = dependResultHandle;
      this.validateDataStatus = validateDataStatus;
      this.addInfoInRes = addInfoInRes;
      this.loadingDoneAgain = loadingDoneAgain || doneAgain;
      this.requestDoneAgain = requestDoneAgain || doneAgain;
    } //显示计数：开始

    /**
     * 全局的 加载状态指示的显示计数
     */


    _createClass(ByHttp, [{
      key: "incrLoadingShowCount",

      /**
       * 将 加载状态指示的显示计数 loadingShowCount 增加 step
       * @param step ? : number 默认值:1; 增加的数量；
       * @returns number 增加后的 显示计数 loadingShowCount 值
       */
      value: function incrLoadingShowCount(step) {
        step = step == undefined ? 1 : step;
        this.constructor.incrLoadingShowCount(step);
        return this.loadingShowCount += step;
      }
      /**
       * 将 加载状态指示的显示计数 loadingShowCount 减少 step
       * @param step ? : number 默认值:1; 减少的数量；
       * @returns number 减少后的 显示计数 loadingShowCount 值
       */

    }, {
      key: "decrLoadingShowCount",
      value: function decrLoadingShowCount(step) {
        step = step == undefined ? 1 : step;
        this.constructor.decrLoadingShowCount(step);
        return this.loadingShowCount -= step;
      } //显示计数：结束
      //完成计数：开始

      /**
       * 同时 设置 全局默认的 requestDoneAgain 和 requestDoneAgain 配置
       */

    }, {
      key: "unsafeDoneAgain_Loading",

      /**
       *
       * @param httpDoneAgainOpts : HttpDoneAgainOptions
       * @returns {*}
       */
      value: function unsafeDoneAgain_Loading(httpDoneAgainOpts) {
        var key = httpDoneAgainOpts && httpDoneAgainOpts.key;

        if (key == undefined) {
          return;
        }

        if (httpDoneAgainOpts.global) {
          return this.constructor.loadingDoneCountManager.unsafeDoneAgain(httpDoneAgainOpts);
        } else {
          return this.loadingDoneCountManager.unsafeDoneAgain(httpDoneAgainOpts);
        }
      }
    }, {
      key: "doneAgain_Loading",
      value: function doneAgain_Loading(httpDoneAgainOpts) {
        var key = httpDoneAgainOpts && httpDoneAgainOpts.key;

        if (key == undefined) {
          return;
        }

        if (httpDoneAgainOpts.global) {
          return this.constructor.loadingDoneCountManager.doneAgain(httpDoneAgainOpts);
        } else {
          return this.loadingDoneCountManager.doneAgain(httpDoneAgainOpts);
        }
      }
      /**
       *
       * @param httpDoneAgainOpts : HttpDoneAgainOptions
       * HttpDoneAgainOptions = {...DoneAgainOptions,global:boolean}
       * @returns {*}
       */

    }, {
      key: "registerDoneCount_Loading",
      value: function registerDoneCount_Loading(httpDoneAgainOpts) {
        var key = httpDoneAgainOpts && httpDoneAgainOpts.key;

        if (key == undefined) {
          return;
        }

        if (httpDoneAgainOpts.global) {
          return this.constructor.loadingDoneCountManager.register(httpDoneAgainOpts);
        } else {
          return this.loadingDoneCountManager.register(httpDoneAgainOpts);
        }
      }
      /**
       * 设置 和 获取 全局默认的 loadingDoneAgain 配置
       */

    }, {
      key: "unsafeDoneAgain_Request",
      value: function unsafeDoneAgain_Request(httpDoneAgainOpts) {
        var key = httpDoneAgainOpts && httpDoneAgainOpts.key;

        if (key == undefined) {
          return;
        }

        if (httpDoneAgainOpts.global) {
          return this.constructor.requestDoneCountManager.unsafeDoneAgain(httpDoneAgainOpts);
        } else {
          return this.requestDoneCountManager.unsafeDoneAgain(httpDoneAgainOpts);
        }
      }
    }, {
      key: "doneAgain_Request",
      value: function doneAgain_Request(httpDoneAgainOpts) {
        var key = httpDoneAgainOpts && httpDoneAgainOpts.key;

        if (key == undefined) {
          return;
        }

        if (httpDoneAgainOpts.global) {
          return this.constructor.requestDoneCountManager.doneAgain(httpDoneAgainOpts);
        } else {
          return this.requestDoneCountManager.doneAgain(httpDoneAgainOpts);
        }
      }
    }, {
      key: "registerDoneCount_Request",
      value: function registerDoneCount_Request(httpDoneAgainOpts) {
        var key = httpDoneAgainOpts && httpDoneAgainOpts.key;

        if (key == undefined) {
          return;
        }

        if (httpDoneAgainOpts.global) {
          return this.constructor.requestDoneCountManager.register(httpDoneAgainOpts);
        } else {
          return this.requestDoneCountManager.register(httpDoneAgainOpts);
        }
      }
      /**
       * 设置 和 获取 全局默认的 requestDoneAgain 配置
       */

    }, {
      key: "setHeaders",

      /**
       * 设置 headers
       * @param key : string    headers的键
       * @param value : string   值
       * @param methods ? : Method | [Method]   默认值：common，表示对所有的请求方式都有效； key 和 value 被应用到的请求方式的列表；
       */
      value: function setHeaders(key, value) {
        var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "common";
        var headers = this.axios.defaults.headers;

        if (!Array.isArray(methods)) {
          methods = [methods];
        }

        methods.forEach(function (method) {
          method = method.toLowerCase();
          var methodHeader = headers[method];

          if (!methodHeader) {
            methodHeader = {};
          }

          methodHeader[key] = value;
          headers[method] = methodHeader;
        });
        this.axios.defaults.headers = headers;
      }
      /**
       * 获取 相应请求方式的 headers
       * @param method ? : Method   默认值：common，表示获取通用的头；
       */

    }, {
      key: "getHeaders",
      value: function getHeaders(method) {
        var headers = this.axios.defaults.headers;
        var commonHeader = headers["common"];

        if (method) {
          method = method.toLowerCase();
          var methodHeader = headers[method];
        }

        if (commonHeader || methodHeader) {
          var finalHeader = _objectSpread2(_objectSpread2({}, commonHeader), methodHeader);
        }

        return finalHeader;
      }
    }, {
      key: "addPublicData",

      /**
       * 添加公共参数
       * @param reqOptions : ReqOptions
       * @returns ReqOptions
       */
      value: function addPublicData(reqOptions) {
        //  公共参数
        var publicData = this.publicData;

        if (typeof publicData == "function") {
          publicData = this.publicData(reqOptions);
        }

        if (publicData) {
          publicData = Object.assign({}, publicData);
        } else {
          return reqOptions;
        }

        var params = reqOptions.params,
            data = reqOptions.data,
            _reqOptions$method = reqOptions.method,
            method = _reqOptions$method === void 0 ? this.method : _reqOptions$method;

        if (params) {
          params = _objectSpread2(_objectSpread2({}, publicData), params);
        }

        if (_typeof(data) == "object") {
          if (data.constructor.name == "Object") {
            data = _objectSpread2(_objectSpread2({}, publicData), data);
          } else if (data instanceof FormData) {
            Object.keys(publicData).forEach(function (key) {
              data.set(key, publicData[key]);
            });
          }
        }

        if (!params && !data) {
          if (method && this.haveHttpBodyMethods.includes(method.toLowerCase())) {
            data = publicData;
          } else {
            params = publicData;
          }
        }

        if (params) {
          reqOptions.params = params;
        }

        if (data) {
          reqOptions.data = data;
        }

        return reqOptions;
      }
      /**
       * 合并 完成计数 DoneCount 相关的选项
       * @param reqOptions
       * @private
       */

    }, {
      key: "_mergeDoneAgainOptions",
      value: function _mergeDoneAgainOptions(reqOptions) {
        var mergeDCOptions = {};
        var doneAgain = reqOptions.doneAgain;
        var urlPath = reqOptions.urlPath,
            _reqOptions$loadingDo = reqOptions.loadingDoneAgain,
            loadingDoneAgain = _reqOptions$loadingDo === void 0 ? doneAgain : _reqOptions$loadingDo,
            _reqOptions$requestDo = reqOptions.requestDoneAgain,
            requestDoneAgain = _reqOptions$requestDo === void 0 ? doneAgain : _reqOptions$requestDo;

        if (loadingDoneAgain) {
          mergeDCOptions.loadingDoneAgain = this._perfectDoneAgainOptions(loadingDoneAgain, urlPath, true);
        }

        if (requestDoneAgain) {
          mergeDCOptions.requestDoneAgain = this._perfectDoneAgainOptions(requestDoneAgain, urlPath);
        }

        return mergeDCOptions;
      }
    }, {
      key: "_perfectDoneAgainOptions",
      value: function _perfectDoneAgainOptions(doneAgainOpts, urlPath, forLoading) {
        if (_typeof(doneAgainOpts) == "object") {
          var failDoneAgain = doneAgainOpts.failDoneAgain,
              doneAgain = _objectWithoutProperties(doneAgainOpts, ["failDoneAgain"]);
        } else {
          doneAgain = {
            key: doneAgainOpts
          };
        }

        var _doneAgain = doneAgain,
            namesOrNum = _doneAgain.namesOrNum,
            names = _doneAgain.names,
            doneNum = _doneAgain.doneNum,
            urlAsDoneCountName = _doneAgain.urlAsDoneCountName,
            doneAgainOther = _objectWithoutProperties(_doneAgain, ["namesOrNum", "names", "doneNum", "urlAsDoneCountName"]);

        if (!urlAsDoneCountName) {
          var defaultDoneAgain = doneAgain.global ? forLoading ? this.constructor.loadingDoneAgain : this.constructor.requestDoneAgain : forLoading ? this.loadingDoneAgain : this.requestDoneAgain;
          urlAsDoneCountName = defaultDoneAgain.urlAsDoneCountName;
        }

        if (urlAsDoneCountName && (namesOrNum || names || doneNum) == undefined) {
          doneAgain.names = urlPath;
        }

        if (failDoneAgain) {
          var failDAType = _typeof(failDoneAgain);

          if (failDAType == "number") {
            failDoneAgain = {
              doneNum: failDoneAgain
            };
          } else if (failDAType == "string" || Array.isArray(failDoneAgain)) {
            failDoneAgain = {
              names: failDoneAgain
            };
          }

          failDoneAgain = Object.assign({}, doneAgainOther, failDoneAgain);
          doneAgain.failDoneAgain = failDoneAgain;
        }

        return doneAgain;
      }
      /**
       * 发送请求
       * @param reqOptions : Object  请求的选项对象，
       *
       * reqOptions 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * method  : string    请求方式
       * data  : Object    请求的数据，这些数据将被放入请求体中
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * header | headers  : Object    请求头对象
       * responseType : string         表明服务器返回的数据类型，如：'json','text' 等等
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       *
       * addInfoInRes ?: boolean    可选；默认值：false；是否在响应数据中添加额外的信息； 当值为 true 时，会在失败 或 成功时返回一个数组，数据的中第1个元素就是请求真正的响应数据 或 错误信息，第2个元素是这种格式的对象 : {doneCount:DoneCount,doneCountManager:DoneCountManager,http:ByHttp}
       * doneAgain ?: HttpDoneAgainOptions    可选；完成计数的配置对象；如果 loadingDoneAgain 或 requestDoneAgain 未配置，则会采用 doneAgain；
       * loadingDoneAgain ?: HttpDoneAgainOptions   可选；loading完成计数的配置对象；如果 loadingDoneAgain  未配置，则会采用 doneAgain；
       * requestDoneAgain ?: HttpDoneAgainOptions   可选；request完成计数的配置对象；如果 requestDoneAgain  未配置，则会采用 doneAgain；
       *
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "request",
      value: function request(reqOptions) {
        var _this = this;

        var _reqOptions$dependent = reqOptions.dependent,
            dependent = _reqOptions$dependent === void 0 ? this.dependent : _reqOptions$dependent,
            _reqOptions$dependRes = reqOptions.dependResultHandle,
            dependResultHandle = _reqOptions$dependRes === void 0 ? this.dependResultHandle : _reqOptions$dependRes;

        if (dependent) {
          return this.dependentPro.then(function (dependentResult) {
            var depReqOptions = dependResultHandle && dependResultHandle.call(_this, dependentResult, reqOptions);

            if (depReqOptions == false) {
              return Promise.reject("请求被依赖阻止！");
            } else {
              depReqOptions = depReqOptions || reqOptions;
              return _this._request(depReqOptions);
            }
          });
        } else {
          return this._request(reqOptions);
        }
      }
    }, {
      key: "_request",
      value: function _request(reqOptions) {
        var _this2 = this;

        var addPublicOptions = this.addPublicData(reqOptions);
        reqOptions = this.reqTransforms.reduce(function (options, transform) {
          var newOptions = transform.call(_this2, options);
          return newOptions;
        }, addPublicOptions);

        var _reqOptions = reqOptions,
            urlPath = _reqOptions.urlPath,
            validateHttpStatus = _reqOptions.validateHttpStatus,
            _reqOptions$validateD = _reqOptions.validateDataStatus,
            validateDataStatus = _reqOptions$validateD === void 0 ? this.validateDataStatus : _reqOptions$validateD,
            _reqOptions$successPr = _reqOptions.successPrompt,
            successPrompt = _reqOptions$successPr === void 0 ? this.successPrompt : _reqOptions$successPr,
            _reqOptions$failPromp = _reqOptions.failPrompt,
            failPrompt = _reqOptions$failPromp === void 0 ? this.failPrompt : _reqOptions$failPromp,
            _reqOptions$mainData = _reqOptions.mainData,
            mainData = _reqOptions$mainData === void 0 ? this.mainData : _reqOptions$mainData,
            _reqOptions$showLoadi = _reqOptions.showLoading,
            showLoading = _reqOptions$showLoadi === void 0 ? this.showLoading : _reqOptions$showLoadi,
            _reqOptions$loadingDe = _reqOptions.loadingDelay,
            loadingDelay = _reqOptions$loadingDe === void 0 ? this.loadingDelay : _reqOptions$loadingDe,
            _reqOptions$loadText = _reqOptions.loadText,
            loadText = _reqOptions$loadText === void 0 ? this.loadText : _reqOptions$loadText,
            dependent = _reqOptions.dependent,
            dependResultHandle = _reqOptions.dependResultHandle,
            doneAgain = _reqOptions.doneAgain,
            loadingDoneAgain = _reqOptions.loadingDoneAgain,
            requestDoneAgain = _reqOptions.requestDoneAgain,
            _reqOptions$addInfoIn = _reqOptions.addInfoInRes,
            addInfoInRes = _reqOptions$addInfoIn === void 0 ? this.addInfoInRes : _reqOptions$addInfoIn,
            otherConfig = _objectWithoutProperties(_reqOptions, ["urlPath", "validateHttpStatus", "validateDataStatus", "successPrompt", "failPrompt", "mainData", "showLoading", "loadingDelay", "loadText", "dependent", "dependResultHandle", "doneAgain", "loadingDoneAgain", "requestDoneAgain", "addInfoInRes"]);

        var httpDoneAgainOptsMap = this._mergeDoneAgainOptions({
          urlPath: urlPath,
          doneAgain: doneAgain,
          loadingDoneAgain: loadingDoneAgain,
          requestDoneAgain: requestDoneAgain
        });

        loadingDoneAgain = httpDoneAgainOptsMap.loadingDoneAgain;
        requestDoneAgain = httpDoneAgainOptsMap.requestDoneAgain;
        var loadingDoneCount = this.registerDoneCount_Loading(loadingDoneAgain);
        var loadingDoneCountManager = loadingDoneAgain && loadingDoneAgain.global ? this.constructor.loadingDoneCountManager : this.loadingDoneCountManager;
        var requestDoneCount = this.registerDoneCount_Request(requestDoneAgain);
        var requestDoneCountManager = requestDoneAgain && requestDoneAgain.global ? this.constructor.requestDoneCountManager : this.requestDoneCountManager;

        var reqConfig = _objectSpread2({
          url: urlPath
        }, otherConfig);

        var header = reqOptions.findValueOfKeys(["header", "headers"]);

        if (header) {
          reqConfig.headers = header;
        }

        var responseType = reqOptions.findValueForKeyFormats("responseType", this.propFormats);

        if (responseType) {
          reqConfig.responsetype = responseType;
        }

        if (validateHttpStatus) {
          var valHttpStatus = validateHttpStatus;

          if (Array.isArray(validateHttpStatus)) {
            valHttpStatus = function valHttpStatus(status) {
              return validateHttpStatus.some(function (valiStatus) {
                return valiStatus == status || Number(valiStatus) == Number(status) || String(valiStatus) == String(status);
              });
            };
          } else if (typeof validateHttpStatus != "function") {
            valHttpStatus = function valHttpStatus(status) {
              return validateHttpStatus == status || Number(validateHttpStatus) == Number(status) || String(validateHttpStatus) == String(status);
            };
          }

          reqConfig.validateStatus = valHttpStatus;
        }

        if (showLoading) {
          if (this.startLoadingHandle) {
            //mark:显示加载指示器
            var loadingIsStarted = false;

            var performStartLoadHandle = function performStartLoadHandle() {
              loadingIsStarted = true;

              var step = _this2.startLoadingHandle.call(_this2, loadText, reqOptions, {
                showCount: _this2.loadingShowCount,
                globalShowCount: _this2.constructor.loadingShowCount,
                doneCount: loadingDoneCount,
                doneCountManager: loadingDoneCountManager,
                http: _this2
              });

              _this2.incrLoadingShowCount(step);
            };

            if (loadingDelay > 0) {
              var loadingTimeoutID = setTimeout(performStartLoadHandle, loadingDelay);
            } else {
              performStartLoadHandle();
            }
          }
        }

        if (this.startRequestHandle) {
          this.startRequestHandle(reqOptions, {
            loadText: loadText,
            showCount: this.loadingShowCount,
            globalShowCount: this.constructor.loadingShowCount,
            loadingDoneAgain: loadingDoneAgain,
            loadingDoneCount: loadingDoneCount,
            loadingDoneCountManager: loadingDoneCountManager,
            requestDoneAgain: requestDoneAgain,
            requestDoneCount: requestDoneCount,
            requestDoneCountManager: requestDoneCountManager,
            http: this
          });
        }

        var completeHandle = function completeHandle(succeed, respData) {
          //doneAgain：开始
          loadingDoneCount = _this2.unsafeDoneAgain_Loading(loadingDoneAgain);
          requestDoneCount = _this2.unsafeDoneAgain_Request(requestDoneAgain);

          if (!succeed) {
            var loadingDoneAgainOnFail = loadingDoneAgain && loadingDoneAgain.failDoneAgain;

            if (loadingDoneAgainOnFail) {
              var loadingDoneCountOnFail = _this2.doneAgain_Loading(loadingDoneAgainOnFail);
            }

            var requestDoneAgainOnFail = requestDoneAgain && requestDoneAgain.failDoneAgain;

            if (requestDoneAgainOnFail) {
              var requestDoneCountOnFail = _this2.doneAgain_Loading(requestDoneAgainOnFail);
            }
          } //doneAgain：结束
          //endLoadingHandle：开始


          if (showLoading) {
            loadingTimeoutID && clearTimeout(loadingTimeoutID);

            if (loadingIsStarted && _this2.endLoadingHandle) {
              //mark:关闭加载指示器
              var step = _this2.endLoadingHandle.call(_this2, succeed, reqOptions, respData, {
                showCount: _this2.loadingShowCount,
                globalShowCount: _this2.constructor.loadingShowCount,
                doneCount: loadingDoneCount,
                doneCountOnFail: loadingDoneCountOnFail,
                doneCountManager: loadingDoneCountManager,
                http: _this2
              });

              _this2.decrLoadingShowCount(step);
            }
          } //endLoadingHandle：结束
          //endRequestHandle：开始


          if (_this2.endRequestHandle) {
            _this2.endRequestHandle(succeed, reqOptions, respData, {
              loadText: loadText,
              showCount: _this2.loadingShowCount,
              globalShowCount: _this2.constructor.loadingShowCount,
              loadingDoneAgain: loadingDoneAgain,
              loadingDoneCount: loadingDoneCount,
              loadingDoneCountOnFail: loadingDoneCountOnFail,
              loadingDoneCountManager: loadingDoneCountManager,
              requestDoneAgain: requestDoneAgain,
              requestDoneCount: requestDoneCount,
              requestDoneCountOnFail: requestDoneCountOnFail,
              requestDoneCountManager: requestDoneCountManager,
              http: _this2
            });
          } //endRequestHandle：结束

        };

        var axiosPromise = this.axios.request(reqConfig);
        axiosPromise = axiosPromise.then(function (response) {
          response = _this2.resTransforms.reduce(function (res, transform) {
            var newRes = transform.call(_this2, res, reqOptions);
            return newRes;
          }, response);
          var respData = response.data;

          if (validateDataStatus && !validateDataStatus.call(_this2, respData, reqOptions)) {
            throw respData;
          }

          if (successPrompt && _this2.promptHandle) {
            // mark: 成功的弹窗提示
            _this2.promptHandle(respData, true);
          }

          if (mainData) {
            respData = _this2.mainDataGet(respData);
          }

          completeHandle(true, respData);

          if (addInfoInRes) {
            respData = [respData, {
              doneCount: requestDoneCount,
              doneCountManager: requestDoneCountManager,
              http: _this2
            }];
          }

          return respData;
        }).catch(function (error) {
          if (failPrompt && _this2.promptHandle) {
            //mark: 失败的弹窗提示
            _this2.promptHandle(error, false);
          }

          var throwData = error.response || error;
          completeHandle(false, throwData);

          if (addInfoInRes) {
            throwData = [throwData, {
              doneCount: requestDoneCount,
              doneCountManager: requestDoneCountManager,
              http: _this2
            }];
          }

          throw throwData;
        });
        return axiosPromise;
      }
      /**
       * 发送get请求
       * @param options : ReqOptions   get请求的选项对象;
       *
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "get",
      value: function get(options) {
        options.method = "get";
        return this.request(options);
      }
      /**
       * 发送post请求
       * @param options : ReqOptions
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * data  : Object    请求的数据，这些数据将被放入请求体中
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * contentType  : string    请求头的'Content-Type'字段的值
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       *
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "post",
      value: function post(options) {
        var contentType = options.contentType,
            reqOptions = _objectWithoutProperties(options, ["contentType"]);

        if (contentType) {
          reqOptions.headers = _objectSpread2(_objectSpread2({}, reqOptions.headers), {}, {
            'Content-Type': contentType
          });
        }

        reqOptions.method = "post";
        return this.request(reqOptions);
      }
      /**
       * 发送 put 请求
       * @param options : ReqOptions
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * data  : Object    请求的数据，这些数据将被放入请求体中
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * contentType  : string    请求头的'Content-Type'字段的值
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       *
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "put",
      value: function put(options) {
        var contentType = options.contentType,
            reqOptions = _objectWithoutProperties(options, ["contentType"]);

        if (contentType) {
          reqOptions.headers = _objectSpread2(_objectSpread2({}, reqOptions.headers), {}, {
            'Content-Type': contentType
          });
        }

        reqOptions.method = "put";
        return this.request(reqOptions);
      }
      /**
       * 发送 patch 请求
       * @param options : ReqOptions
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * data  : Object    请求的数据，这些数据将被放入请求体中
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * contentType  : string    请求头的'Content-Type'字段的值
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       *
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "patch",
      value: function patch(options) {
        var contentType = options.contentType,
            reqOptions = _objectWithoutProperties(options, ["contentType"]);

        if (contentType) {
          reqOptions.headers = _objectSpread2(_objectSpread2({}, reqOptions.headers), {}, {
            'Content-Type': contentType
          });
        }

        reqOptions.method = "patch";
        return this.request(reqOptions);
      }
      /**
       * 发送 delete 请求
       * @param options : ReqOptions   get请求的选项对象;
       *
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "delete",
      value: function _delete(options) {
        options.method = "delete";
        return this.request(options);
      }
      /**
       * 发送 head 请求
       * @param options : ReqOptions   get请求的选项对象;
       *
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "head",
      value: function head(options) {
        options.method = "head";
        return this.request(options);
      }
      /**
       * 发送 options 请求
       * @param options : ReqOptions   get请求的选项对象;
       *
       *
       * options 中可配置的字段如下：
       *
       * urlPath : string    url路径
       * params  : Object    请求的参数，这些参数将会被序列化放入请求的URL后面
       * header | headers  : Object    请求头对象
       * successPrompt : boolean    是否启用全局的成功提示；
       * failPrompt  : boolean    是启用用全局的失败提示;
       * mainData  : boolean    当请求成功时，是否返回经过 mainDataGet 处理过的数据；
       * showLoading  : boolean    是否启用加载状态指示；
       * loadingDelay  : number    加载状态指示的延时显示时间，单位：毫秒；默认值：0
       * loadText  : string   加载的提示文本
       * dependent : boolean   设置请求是否依赖 dependentPro
       * dependResultHandle : (result,reqOptions)=> HandleResult : ReqOptions || boolean || null || undefined    依赖结果处理器，当请求有依赖时，在 依赖解决之后 请求解决之前 调用该处理器；
       * 注意：
       * - 当 HandleResult 为 false 时，会取消请求；
       * - 当 HandleResult 为 非假值时， 会使用 HandleResult 进行请求；
       * - 当 HandleResult 为 除 false 之外的假值时，会使用 原来的 reqOptions 进行请求；
       * validateHttpStatus ?: number | string | Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码 或 有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * validateDataStatus ?: (responseData: any,reqOptions:ReqOptions) => boolean   定义 后台数据的返回的状态码的 的有效性，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       * @returns AxiosPromise    请求的 AxiosPromise 对象
       *
       */

    }, {
      key: "options",
      value: function options(_options) {
        _options.method = "head";
        return this.request(_options);
      }
    }, {
      key: "doneAgain",

      /**
       * 同时 设置 默认的 requestDoneAgain 和 requestDoneAgain 配置
       */
      set: function set(newValue) {
        this.loadingDoneAgain = newValue;
        this.requestDoneAgain = newValue;
      } //loading完成计数：开始

    }, {
      key: "loadingDoneCountManager",
      get: function get() {
        if (!this._loadingDoneCountManager) {
          var doneCountManager = new NamedDoneCountManager();
          doneCountManager.urlAsDoneCountName = true;
          this._loadingDoneCountManager = doneCountManager;
        }

        return this._loadingDoneCountManager;
      }
    }, {
      key: "loadingDoneAgain",

      /**
       * 设置 和 获取 默认的 loadingDoneAgain 配置
       */
      get: function get() {
        return Object.defineProxyProperties({}, this.loadingDoneCountManager, _doneAgainProxyProps);
      },
      set: function set(newValue) {
        if (newValue) {
          Object.assign(this.loadingDoneCountManager, newValue);
        }
      } //loading完成计数：结束
      //request完成计数：开始

    }, {
      key: "requestDoneCountManager",
      get: function get() {
        if (!this._requestDoneCountManager) {
          var doneCountManager = new NamedDoneCountManager();
          doneCountManager.urlAsDoneCountName = true;
          this._requestDoneCountManager = doneCountManager;
        }

        return this._requestDoneCountManager;
      }
    }, {
      key: "requestDoneAgain",

      /**
       * 设置 和 获取 默认的 requestDoneAgain 配置
       */
      get: function get() {
        return Object.defineProxyProperties({}, this.requestDoneCountManager, _doneAgainProxyProps);
      },
      set: function set(newValue) {
        if (newValue) {
          Object.assign(this.requestDoneCountManager, newValue);
        }
      } //request完成计数：结束
      //完成计数：结束

      /**
       * 属性的格式列表
       */

    }, {
      key: "reqTransforms",
      set: function set(newValue) {
        if (newValue && !Array.isArray(newValue)) {
          newValue = [newValue];
        }

        this._reqTransforms = newValue;
      },
      get: function get() {
        if (!this._reqTransforms) {
          this._reqTransforms = [];
        }

        return this._reqTransforms;
      }
    }, {
      key: "resTransforms",
      set: function set(newValue) {
        if (newValue && !Array.isArray(newValue)) {
          newValue = [newValue];
        }

        this._resTransforms = newValue;
      },
      get: function get() {
        if (!this._resTransforms) {
          this._resTransforms = [];
        }

        return this._resTransforms;
      }
      /**
       * 计算属性 validateHttpStatus
       * set : newValue ?: Array<status> | (status: number) => boolean    定义 有效的 http返回状态码，可以是有效状态码的数组，也可以是返回表示状态码是否有效的布尔值的函数，如果返回true（或者设置成null/undefined），promise将会resolve；其他的promise将reject。
       */

    }, {
      key: "validateHttpStatus",
      set: function set(newValue) {
        var valHttpStatus = newValue;

        if (Array.isArray(newValue)) {
          valHttpStatus = function valHttpStatus(status) {
            return newValue.includes(status);
          };
        } else if (typeof newValue != "function") {
          valHttpStatus = function valHttpStatus(status) {
            return newValue == status;
          };
        }

        this.axios.defaults.validateStatus = valHttpStatus;
      },
      get: function get() {
        return this.axios.defaults.validateStatus;
      } // dependentPro 请求依赖的 Promise

    }, {
      key: "dependentPro",
      set: function set(newValue) {
        if (this._dependentResolve) {
          this._dependentResolve(newValue);
        }

        this._dependentPro = newValue;
      },
      get: function get() {
        var _this3 = this;

        if (!this._dependentPro) {
          this._dependentPro = new Promise(function (resolve, reject) {
            _this3._dependentResolve = resolve;
          });
        }

        return this._dependentPro;
      }
      /**
       * 请求头的配置对象 headers
       * headers 可配置如下选项：
       * headers.common : Object    配置所有请求公共的请求头字段
       * headers.get : Object    配置 get 请求的请求头字段
       * headers.put : Object    配置 put 请求的请求头字段
       * headers.post : Object    配置 post 请求的请求头字段
       * headers.patch : Object    配置 patch 请求的请求头字段
       * headers.head : Object    配置 head 请求的请求头字段
       * headers.delete : Object    配置 delete 请求的请求头字段
       */

    }, {
      key: "headers",
      set: function set(newValue) {
        var _this4 = this;

        if (newValue) {
          Object.keys(newValue).forEach(function (headerKey) {
            Object.assign(_this4.axios.defaults.headers[headerKey], newValue[headerKey]);
          });
        }
      },
      get: function get() {
        return this.axios.defaults.headers;
      }
    }, {
      key: "mainDataGet",
      set: function set(newValue) {
        this._mainDataGet = newValue;
      },
      get: function get() {
        if (!this._mainDataGet) {
          this._mainDataGet = function (responseData) {
            return responseData;
          };
        }

        return this._mainDataGet;
      }
    }, {
      key: "baseURL",
      set: function set(newValue) {
        this.axios.defaults.baseURL = newValue;
      },
      get: function get() {
        return this.axios.defaults.baseURL;
      }
    }, {
      key: "method",
      set: function set(newValue) {
        this.axios.defaults.method = newValue;
      },
      get: function get() {
        return this.axios.defaults.method;
      }
    }, {
      key: "authorization",
      set: function set(newValue) {
        if (newValue) {
          if (_typeof(newValue) == "object") {
            newValue = JSON.stringify(newValue);
          }

          this.setHeaders('Authorization', newValue);
        }
      }
    }, {
      key: "contentType",
      set: function set(newValue) {
        if (newValue) {
          this.setHeaders('Content-Type', newValue, "post");
        }
      }
    }], [{
      key: "incrLoadingShowCount",

      /**
       * 将 全局的 加载状态指示的显示计数 loadingShowCount 增加 step
       * @param step ? : number 默认值:1; 增加的数量；
       * @returns number 增加后的 显示计数 loadingShowCount 值
       */
      value: function incrLoadingShowCount(step) {
        step = step == undefined ? 1 : step;
        return this.loadingShowCount += step;
      }
      /**
       * 将 全局的 加载状态指示的显示计数 loadingShowCount 减少 step
       * @param step ? : number 默认值:1; 减少的数量；
       * @returns number 减少后的 显示计数 loadingShowCount 值
       */

    }, {
      key: "decrLoadingShowCount",
      value: function decrLoadingShowCount(step) {
        step = step == undefined ? 1 : step;
        return this.loadingShowCount -= step;
      }
      /**
       * 加载状态指示的显示计数
       */

    }, {
      key: "doneAgain",
      set: function set(newValue) {
        this.loadingDoneAgain = newValue;
        this.requestDoneAgain = newValue;
      }
    }, {
      key: "loadingDoneCountManager",
      get: function get() {
        if (!this._loadingDoneCountManager) {
          var doneCountManager = new NamedDoneCountManager();
          doneCountManager.urlAsDoneCountName = true;
          this._loadingDoneCountManager = doneCountManager;
        }

        return this._loadingDoneCountManager;
      }
    }, {
      key: "loadingDoneAgain",
      get: function get() {
        return Object.defineProxyProperties({}, this.loadingDoneCountManager, _doneAgainProxyProps);
      },
      set: function set(newValue) {
        if (newValue) {
          Object.assign(this.loadingDoneCountManager, newValue);
        }
      }
    }, {
      key: "requestDoneCountManager",
      get: function get() {
        if (!this._requestDoneCountManager) {
          var doneCountManager = new NamedDoneCountManager();
          doneCountManager.urlAsDoneCountName = true;
          this._requestDoneCountManager = doneCountManager;
        }

        return this._requestDoneCountManager;
      }
    }, {
      key: "requestDoneAgain",
      get: function get() {
        return Object.defineProxyProperties({}, this.requestDoneCountManager, _doneAgainProxyProps);
      },
      set: function set(newValue) {
        if (newValue) {
          Object.assign(this.requestDoneCountManager, newValue);
        }
      }
    }]);

    return ByHttp;
  }();

  _defineProperty(ByHttp, "loadingShowCount", 0);

  return ByHttp;

})));
