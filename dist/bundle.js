(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.Yanime = factory(global.React));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var dataViewTag = '[object DataView]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
      rsComboSymbolsRange = '\\u20d0-\\u20f0',
      rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral = '[' + rsAstralRange + ']',
      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Symbol$1 = root.Symbol,
      iteratorSymbol = Symbol$1 ? Symbol$1.iterator : undefined,
      propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeFloor = Math.floor,
      nativeKeys = overArg(Object.keys, Object),
      nativeRandom = Math.random;

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map$1 = getNative(root, 'Map'),
      Promise$1 = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap');

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = (isArray(value) || isArguments(value))
      ? baseTimes(value.length, String)
      : [];

    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }
      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }

  /**
   * The base implementation of `getTag`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    return objectToString.call(value);
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.random` without support for returning
   * floating-point numbers.
   *
   * @private
   * @param {number} lower The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the random number.
   */
  function baseRandom(lower, upper) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11,
  // for data views in Edge < 14, and promises in Node.js.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map$1 && getTag(new Map$1) != mapTag) ||
      (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = objectToString.call(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : undefined;

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Gets `n` random elements at unique keys from `collection` up to the
   * size of `collection`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @param {number} [n=1] The number of elements to sample.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the random elements.
   * @example
   *
   * _.sampleSize([1, 2, 3], 2);
   * // => [3, 1]
   *
   * _.sampleSize([1, 2, 3], 4);
   * // => [2, 3, 1]
   */
  function sampleSize(collection, n, guard) {
    var index = -1,
        result = toArray(collection),
        length = result.length,
        lastIndex = length - 1;

    if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
      n = 1;
    } else {
      n = baseClamp(toInteger(n), 0, length);
    }
    while (++index < n) {
      var rand = baseRandom(index, lastIndex),
          value = result[rand];

      result[rand] = result[index];
      result[index] = value;
    }
    result.length = n;
    return result;
  }

  /**
   * Creates an array of shuffled values, using a version of the
   * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   * @example
   *
   * _.shuffle([1, 2, 3, 4]);
   * // => [4, 1, 3, 2]
   */
  function shuffle(collection) {
    return sampleSize(collection, MAX_ARRAY_LENGTH);
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
      (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray(value) {
    if (!value) {
      return [];
    }
    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (iteratorSymbol && value[iteratorSymbol]) {
      return iteratorToArray(value[iteratorSymbol]());
    }
    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

    return func(value);
  }

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values(object) {
    return object ? baseValues(object, keys(object)) : [];
  }

  var lodash_shuffle = shuffle;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "@keyframes yanime-keyframes-fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.yanime-fade-in {\n  opacity: 0;\n  animation: yanime-keyframes-fade-in 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-0 {\n  0% {\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-0 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-0 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-10 {\n  0% {\n    transform: scale(0.1, 0.1);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-10 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-10 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-20 {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-20 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-20 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-30 {\n  0% {\n    transform: scale(0.3, 0.3);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-30 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-30 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-40 {\n  0% {\n    transform: scale(0.4, 0.4);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-40 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-40 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-50 {\n  0% {\n    transform: scale(0.5, 0.5);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-50 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-50 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-60 {\n  0% {\n    transform: scale(0.6, 0.6);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-60 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-60 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-70 {\n  0% {\n    transform: scale(0.7, 0.7);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-70 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-70 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-80 {\n  0% {\n    transform: scale(0.8, 0.8);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-80 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-80 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-90 {\n  0% {\n    transform: scale(0.9, 0.9);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-90 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-90 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-scale-in-100 {\n  0% {\n    transform: scale(1, 1);\n    opacity: 0; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.yanime-scale-in-100 {\n  opacity: 0;\n  animation: yanime-keyframes-scale-in-100 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-0px {\n  0% {\n    transform: translate(0, 0px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-0 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-0px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-10px {\n  0% {\n    transform: translate(0, 10px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-10 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-10px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-20px {\n  0% {\n    transform: translate(0, 20px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-20 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-20px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-30px {\n  0% {\n    transform: translate(0, 30px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-30 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-30px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-40px {\n  0% {\n    transform: translate(0, 40px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-40 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-40px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-50px {\n  0% {\n    transform: translate(0, 50px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-50 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-50px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-60px {\n  0% {\n    transform: translate(0, 60px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-60 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-60px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-70px {\n  0% {\n    transform: translate(0, 70px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-70 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-70px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-80px {\n  0% {\n    transform: translate(0, 80px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-80 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-80px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-90px {\n  0% {\n    transform: translate(0, 90px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-90 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-90px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-100px {\n  0% {\n    transform: translate(0, 100px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-100 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-100px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-110px {\n  0% {\n    transform: translate(0, 110px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-110 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-110px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-120px {\n  0% {\n    transform: translate(0, 120px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-120 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-120px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-130px {\n  0% {\n    transform: translate(0, 130px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-130 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-130px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-140px {\n  0% {\n    transform: translate(0, 140px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-140 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-140px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-150px {\n  0% {\n    transform: translate(0, 150px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-150 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-150px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-160px {\n  0% {\n    transform: translate(0, 160px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-160 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-160px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-170px {\n  0% {\n    transform: translate(0, 170px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-170 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-170px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-180px {\n  0% {\n    transform: translate(0, 180px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-180 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-180px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-190px {\n  0% {\n    transform: translate(0, 190px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-190 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-190px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-200px {\n  0% {\n    transform: translate(0, 200px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-200 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-200px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-210px {\n  0% {\n    transform: translate(0, 210px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-210 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-210px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-220px {\n  0% {\n    transform: translate(0, 220px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-220 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-220px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-230px {\n  0% {\n    transform: translate(0, 230px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-230 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-230px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-240px {\n  0% {\n    transform: translate(0, 240px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-240 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-240px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n@keyframes yanime-keyframes-slide-up-250px {\n  0% {\n    transform: translate(0, 250px);\n    opacity: 0; }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1; } }\n\n.yanime-slide-up-250 {\n  opacity: 0;\n  animation: yanime-keyframes-slide-up-250px 500ms cubic-bezier(0.005, 0.795, 0.17, 0.995);\n  animation-fill-mode: forwards; }\n\n.yanime-delay-0 {\n  animation-delay: 0ms; }\n\n.yanime-delay-25 {\n  animation-delay: 25ms; }\n\n.yanime-delay-50 {\n  animation-delay: 50ms; }\n\n.yanime-delay-75 {\n  animation-delay: 75ms; }\n\n.yanime-delay-100 {\n  animation-delay: 100ms; }\n\n.yanime-delay-125 {\n  animation-delay: 125ms; }\n\n.yanime-delay-150 {\n  animation-delay: 150ms; }\n\n.yanime-delay-175 {\n  animation-delay: 175ms; }\n\n.yanime-delay-200 {\n  animation-delay: 200ms; }\n\n.yanime-delay-225 {\n  animation-delay: 225ms; }\n\n.yanime-delay-250 {\n  animation-delay: 250ms; }\n\n.yanime-delay-275 {\n  animation-delay: 275ms; }\n\n.yanime-delay-300 {\n  animation-delay: 300ms; }\n\n.yanime-delay-325 {\n  animation-delay: 325ms; }\n\n.yanime-delay-350 {\n  animation-delay: 350ms; }\n\n.yanime-delay-375 {\n  animation-delay: 375ms; }\n\n.yanime-delay-400 {\n  animation-delay: 400ms; }\n\n.yanime-delay-425 {\n  animation-delay: 425ms; }\n\n.yanime-delay-450 {\n  animation-delay: 450ms; }\n\n.yanime-delay-475 {\n  animation-delay: 475ms; }\n\n.yanime-delay-500 {\n  animation-delay: 500ms; }\n\n.yanime-delay-525 {\n  animation-delay: 525ms; }\n\n.yanime-delay-550 {\n  animation-delay: 550ms; }\n\n.yanime-delay-575 {\n  animation-delay: 575ms; }\n\n.yanime-delay-600 {\n  animation-delay: 600ms; }\n\n.yanime-delay-625 {\n  animation-delay: 625ms; }\n\n.yanime-delay-650 {\n  animation-delay: 650ms; }\n\n.yanime-delay-675 {\n  animation-delay: 675ms; }\n\n.yanime-delay-700 {\n  animation-delay: 700ms; }\n\n.yanime-delay-725 {\n  animation-delay: 725ms; }\n\n.yanime-delay-750 {\n  animation-delay: 750ms; }\n\n.yanime-delay-775 {\n  animation-delay: 775ms; }\n\n.yanime-delay-800 {\n  animation-delay: 800ms; }\n\n.yanime-delay-825 {\n  animation-delay: 825ms; }\n\n.yanime-delay-850 {\n  animation-delay: 850ms; }\n\n.yanime-delay-875 {\n  animation-delay: 875ms; }\n\n.yanime-delay-900 {\n  animation-delay: 900ms; }\n\n.yanime-delay-925 {\n  animation-delay: 925ms; }\n\n.yanime-delay-950 {\n  animation-delay: 950ms; }\n\n.yanime-delay-975 {\n  animation-delay: 975ms; }\n\n.yanime-delay-1000 {\n  animation-delay: 1000ms; }\n\n.yanime-delay-1025 {\n  animation-delay: 1025ms; }\n\n.yanime-delay-1050 {\n  animation-delay: 1050ms; }\n\n.yanime-delay-1075 {\n  animation-delay: 1075ms; }\n\n.yanime-delay-1100 {\n  animation-delay: 1100ms; }\n\n.yanime-delay-1125 {\n  animation-delay: 1125ms; }\n\n.yanime-delay-1150 {\n  animation-delay: 1150ms; }\n\n.yanime-delay-1175 {\n  animation-delay: 1175ms; }\n\n.yanime-delay-1200 {\n  animation-delay: 1200ms; }\n\n.yanime-delay-1225 {\n  animation-delay: 1225ms; }\n\n.yanime-delay-1250 {\n  animation-delay: 1250ms; }\n\n.yanime-delay-1275 {\n  animation-delay: 1275ms; }\n\n.yanime-delay-1300 {\n  animation-delay: 1300ms; }\n\n.yanime-delay-1325 {\n  animation-delay: 1325ms; }\n\n.yanime-delay-1350 {\n  animation-delay: 1350ms; }\n\n.yanime-delay-1375 {\n  animation-delay: 1375ms; }\n\n.yanime-delay-1400 {\n  animation-delay: 1400ms; }\n\n.yanime-delay-1425 {\n  animation-delay: 1425ms; }\n\n.yanime-delay-1450 {\n  animation-delay: 1450ms; }\n\n.yanime-delay-1475 {\n  animation-delay: 1475ms; }\n\n.yanime-delay-1500 {\n  animation-delay: 1500ms; }\n\n.yanime-delay-1525 {\n  animation-delay: 1525ms; }\n\n.yanime-delay-1550 {\n  animation-delay: 1550ms; }\n\n.yanime-delay-1575 {\n  animation-delay: 1575ms; }\n\n.yanime-delay-1600 {\n  animation-delay: 1600ms; }\n\n.yanime-delay-1625 {\n  animation-delay: 1625ms; }\n\n.yanime-delay-1650 {\n  animation-delay: 1650ms; }\n\n.yanime-delay-1675 {\n  animation-delay: 1675ms; }\n\n.yanime-delay-1700 {\n  animation-delay: 1700ms; }\n\n.yanime-delay-1725 {\n  animation-delay: 1725ms; }\n\n.yanime-delay-1750 {\n  animation-delay: 1750ms; }\n\n.yanime-delay-1775 {\n  animation-delay: 1775ms; }\n\n.yanime-delay-1800 {\n  animation-delay: 1800ms; }\n\n.yanime-delay-1825 {\n  animation-delay: 1825ms; }\n\n.yanime-delay-1850 {\n  animation-delay: 1850ms; }\n\n.yanime-delay-1875 {\n  animation-delay: 1875ms; }\n\n.yanime-delay-1900 {\n  animation-delay: 1900ms; }\n\n.yanime-delay-1925 {\n  animation-delay: 1925ms; }\n\n.yanime-delay-1950 {\n  animation-delay: 1950ms; }\n\n.yanime-delay-1975 {\n  animation-delay: 1975ms; }\n\n.yanime-delay-2000 {\n  animation-delay: 2000ms; }\n\n.yanime-delay-2025 {\n  animation-delay: 2025ms; }\n\n.yanime-delay-2050 {\n  animation-delay: 2050ms; }\n\n.yanime-delay-2075 {\n  animation-delay: 2075ms; }\n\n.yanime-delay-2100 {\n  animation-delay: 2100ms; }\n\n.yanime-delay-2125 {\n  animation-delay: 2125ms; }\n\n.yanime-delay-2150 {\n  animation-delay: 2150ms; }\n\n.yanime-delay-2175 {\n  animation-delay: 2175ms; }\n\n.yanime-delay-2200 {\n  animation-delay: 2200ms; }\n\n.yanime-delay-2225 {\n  animation-delay: 2225ms; }\n\n.yanime-delay-2250 {\n  animation-delay: 2250ms; }\n\n.yanime-delay-2275 {\n  animation-delay: 2275ms; }\n\n.yanime-delay-2300 {\n  animation-delay: 2300ms; }\n\n.yanime-delay-2325 {\n  animation-delay: 2325ms; }\n\n.yanime-delay-2350 {\n  animation-delay: 2350ms; }\n\n.yanime-delay-2375 {\n  animation-delay: 2375ms; }\n\n.yanime-delay-2400 {\n  animation-delay: 2400ms; }\n\n.yanime-delay-2425 {\n  animation-delay: 2425ms; }\n\n.yanime-delay-2450 {\n  animation-delay: 2450ms; }\n\n.yanime-delay-2475 {\n  animation-delay: 2475ms; }\n\n.yanime-delay-2500 {\n  animation-delay: 2500ms; }\n\n.yanime-delay-2525 {\n  animation-delay: 2525ms; }\n\n.yanime-delay-2550 {\n  animation-delay: 2550ms; }\n\n.yanime-delay-2575 {\n  animation-delay: 2575ms; }\n\n.yanime-delay-2600 {\n  animation-delay: 2600ms; }\n\n.yanime-delay-2625 {\n  animation-delay: 2625ms; }\n\n.yanime-delay-2650 {\n  animation-delay: 2650ms; }\n\n.yanime-delay-2675 {\n  animation-delay: 2675ms; }\n\n.yanime-delay-2700 {\n  animation-delay: 2700ms; }\n\n.yanime-delay-2725 {\n  animation-delay: 2725ms; }\n\n.yanime-delay-2750 {\n  animation-delay: 2750ms; }\n\n.yanime-delay-2775 {\n  animation-delay: 2775ms; }\n\n.yanime-delay-2800 {\n  animation-delay: 2800ms; }\n\n.yanime-delay-2825 {\n  animation-delay: 2825ms; }\n\n.yanime-delay-2850 {\n  animation-delay: 2850ms; }\n\n.yanime-delay-2875 {\n  animation-delay: 2875ms; }\n\n.yanime-delay-2900 {\n  animation-delay: 2900ms; }\n\n.yanime-delay-2925 {\n  animation-delay: 2925ms; }\n\n.yanime-delay-2950 {\n  animation-delay: 2950ms; }\n\n.yanime-delay-2975 {\n  animation-delay: 2975ms; }\n\n.yanime-delay-3000 {\n  animation-delay: 3000ms; }\n\n.yanime-delay-3025 {\n  animation-delay: 3025ms; }\n\n.yanime-delay-3050 {\n  animation-delay: 3050ms; }\n\n.yanime-delay-3075 {\n  animation-delay: 3075ms; }\n\n.yanime-delay-3100 {\n  animation-delay: 3100ms; }\n\n.yanime-delay-3125 {\n  animation-delay: 3125ms; }\n\n.yanime-delay-3150 {\n  animation-delay: 3150ms; }\n\n.yanime-delay-3175 {\n  animation-delay: 3175ms; }\n\n.yanime-delay-3200 {\n  animation-delay: 3200ms; }\n\n.yanime-delay-3225 {\n  animation-delay: 3225ms; }\n\n.yanime-delay-3250 {\n  animation-delay: 3250ms; }\n\n.yanime-delay-3275 {\n  animation-delay: 3275ms; }\n\n.yanime-delay-3300 {\n  animation-delay: 3300ms; }\n\n.yanime-delay-3325 {\n  animation-delay: 3325ms; }\n\n.yanime-delay-3350 {\n  animation-delay: 3350ms; }\n\n.yanime-delay-3375 {\n  animation-delay: 3375ms; }\n\n.yanime-delay-3400 {\n  animation-delay: 3400ms; }\n\n.yanime-delay-3425 {\n  animation-delay: 3425ms; }\n\n.yanime-delay-3450 {\n  animation-delay: 3450ms; }\n\n.yanime-delay-3475 {\n  animation-delay: 3475ms; }\n\n.yanime-delay-3500 {\n  animation-delay: 3500ms; }\n\n.yanime-delay-3525 {\n  animation-delay: 3525ms; }\n\n.yanime-delay-3550 {\n  animation-delay: 3550ms; }\n\n.yanime-delay-3575 {\n  animation-delay: 3575ms; }\n\n.yanime-delay-3600 {\n  animation-delay: 3600ms; }\n\n.yanime-delay-3625 {\n  animation-delay: 3625ms; }\n\n.yanime-delay-3650 {\n  animation-delay: 3650ms; }\n\n.yanime-delay-3675 {\n  animation-delay: 3675ms; }\n\n.yanime-delay-3700 {\n  animation-delay: 3700ms; }\n\n.yanime-delay-3725 {\n  animation-delay: 3725ms; }\n\n.yanime-delay-3750 {\n  animation-delay: 3750ms; }\n\n.yanime-delay-3775 {\n  animation-delay: 3775ms; }\n\n.yanime-delay-3800 {\n  animation-delay: 3800ms; }\n\n.yanime-delay-3825 {\n  animation-delay: 3825ms; }\n\n.yanime-delay-3850 {\n  animation-delay: 3850ms; }\n\n.yanime-delay-3875 {\n  animation-delay: 3875ms; }\n\n.yanime-delay-3900 {\n  animation-delay: 3900ms; }\n\n.yanime-delay-3925 {\n  animation-delay: 3925ms; }\n\n.yanime-delay-3950 {\n  animation-delay: 3950ms; }\n\n.yanime-delay-3975 {\n  animation-delay: 3975ms; }\n\n.yanime-delay-4000 {\n  animation-delay: 4000ms; }\n\n.yanime-delay-4025 {\n  animation-delay: 4025ms; }\n\n.yanime-delay-4050 {\n  animation-delay: 4050ms; }\n\n.yanime-delay-4075 {\n  animation-delay: 4075ms; }\n\n.yanime-delay-4100 {\n  animation-delay: 4100ms; }\n\n.yanime-delay-4125 {\n  animation-delay: 4125ms; }\n\n.yanime-delay-4150 {\n  animation-delay: 4150ms; }\n\n.yanime-delay-4175 {\n  animation-delay: 4175ms; }\n\n.yanime-delay-4200 {\n  animation-delay: 4200ms; }\n\n.yanime-delay-4225 {\n  animation-delay: 4225ms; }\n\n.yanime-delay-4250 {\n  animation-delay: 4250ms; }\n\n.yanime-delay-4275 {\n  animation-delay: 4275ms; }\n\n.yanime-delay-4300 {\n  animation-delay: 4300ms; }\n\n.yanime-delay-4325 {\n  animation-delay: 4325ms; }\n\n.yanime-delay-4350 {\n  animation-delay: 4350ms; }\n\n.yanime-delay-4375 {\n  animation-delay: 4375ms; }\n\n.yanime-delay-4400 {\n  animation-delay: 4400ms; }\n\n.yanime-delay-4425 {\n  animation-delay: 4425ms; }\n\n.yanime-delay-4450 {\n  animation-delay: 4450ms; }\n\n.yanime-delay-4475 {\n  animation-delay: 4475ms; }\n\n.yanime-delay-4500 {\n  animation-delay: 4500ms; }\n\n.yanime-delay-4525 {\n  animation-delay: 4525ms; }\n\n.yanime-delay-4550 {\n  animation-delay: 4550ms; }\n\n.yanime-delay-4575 {\n  animation-delay: 4575ms; }\n\n.yanime-delay-4600 {\n  animation-delay: 4600ms; }\n\n.yanime-delay-4625 {\n  animation-delay: 4625ms; }\n\n.yanime-delay-4650 {\n  animation-delay: 4650ms; }\n\n.yanime-delay-4675 {\n  animation-delay: 4675ms; }\n\n.yanime-delay-4700 {\n  animation-delay: 4700ms; }\n\n.yanime-delay-4725 {\n  animation-delay: 4725ms; }\n\n.yanime-delay-4750 {\n  animation-delay: 4750ms; }\n\n.yanime-delay-4775 {\n  animation-delay: 4775ms; }\n\n.yanime-delay-4800 {\n  animation-delay: 4800ms; }\n\n.yanime-delay-4825 {\n  animation-delay: 4825ms; }\n\n.yanime-delay-4850 {\n  animation-delay: 4850ms; }\n\n.yanime-delay-4875 {\n  animation-delay: 4875ms; }\n\n.yanime-delay-4900 {\n  animation-delay: 4900ms; }\n\n.yanime-delay-4925 {\n  animation-delay: 4925ms; }\n\n.yanime-delay-4950 {\n  animation-delay: 4950ms; }\n\n.yanime-delay-4975 {\n  animation-delay: 4975ms; }\n\n.yanime-delay-5000 {\n  animation-delay: 5000ms; }\n\n.yanime-delay-5025 {\n  animation-delay: 5025ms; }\n\n.yanime-delay-5050 {\n  animation-delay: 5050ms; }\n\n.yanime-delay-5075 {\n  animation-delay: 5075ms; }\n\n.yanime-delay-5100 {\n  animation-delay: 5100ms; }\n\n.yanime-delay-5125 {\n  animation-delay: 5125ms; }\n\n.yanime-delay-5150 {\n  animation-delay: 5150ms; }\n\n.yanime-delay-5175 {\n  animation-delay: 5175ms; }\n\n.yanime-delay-5200 {\n  animation-delay: 5200ms; }\n\n.yanime-delay-5225 {\n  animation-delay: 5225ms; }\n\n.yanime-delay-5250 {\n  animation-delay: 5250ms; }\n\n.yanime-delay-5275 {\n  animation-delay: 5275ms; }\n\n.yanime-delay-5300 {\n  animation-delay: 5300ms; }\n\n.yanime-delay-5325 {\n  animation-delay: 5325ms; }\n\n.yanime-delay-5350 {\n  animation-delay: 5350ms; }\n\n.yanime-delay-5375 {\n  animation-delay: 5375ms; }\n\n.yanime-delay-5400 {\n  animation-delay: 5400ms; }\n\n.yanime-delay-5425 {\n  animation-delay: 5425ms; }\n\n.yanime-delay-5450 {\n  animation-delay: 5450ms; }\n\n.yanime-delay-5475 {\n  animation-delay: 5475ms; }\n\n.yanime-delay-5500 {\n  animation-delay: 5500ms; }\n\n.yanime-delay-5525 {\n  animation-delay: 5525ms; }\n\n.yanime-delay-5550 {\n  animation-delay: 5550ms; }\n\n.yanime-delay-5575 {\n  animation-delay: 5575ms; }\n\n.yanime-delay-5600 {\n  animation-delay: 5600ms; }\n\n.yanime-delay-5625 {\n  animation-delay: 5625ms; }\n\n.yanime-delay-5650 {\n  animation-delay: 5650ms; }\n\n.yanime-delay-5675 {\n  animation-delay: 5675ms; }\n\n.yanime-delay-5700 {\n  animation-delay: 5700ms; }\n\n.yanime-delay-5725 {\n  animation-delay: 5725ms; }\n\n.yanime-delay-5750 {\n  animation-delay: 5750ms; }\n\n.yanime-delay-5775 {\n  animation-delay: 5775ms; }\n\n.yanime-delay-5800 {\n  animation-delay: 5800ms; }\n\n.yanime-delay-5825 {\n  animation-delay: 5825ms; }\n\n.yanime-delay-5850 {\n  animation-delay: 5850ms; }\n\n.yanime-delay-5875 {\n  animation-delay: 5875ms; }\n\n.yanime-delay-5900 {\n  animation-delay: 5900ms; }\n\n.yanime-delay-5925 {\n  animation-delay: 5925ms; }\n\n.yanime-delay-5950 {\n  animation-delay: 5950ms; }\n\n.yanime-delay-5975 {\n  animation-delay: 5975ms; }\n\n.yanime-delay-6000 {\n  animation-delay: 6000ms; }\n\n.yanime-delay-6025 {\n  animation-delay: 6025ms; }\n\n.yanime-delay-6050 {\n  animation-delay: 6050ms; }\n\n.yanime-delay-6075 {\n  animation-delay: 6075ms; }\n\n.yanime-delay-6100 {\n  animation-delay: 6100ms; }\n\n.yanime-delay-6125 {\n  animation-delay: 6125ms; }\n\n.yanime-delay-6150 {\n  animation-delay: 6150ms; }\n\n.yanime-delay-6175 {\n  animation-delay: 6175ms; }\n\n.yanime-delay-6200 {\n  animation-delay: 6200ms; }\n\n.yanime-delay-6225 {\n  animation-delay: 6225ms; }\n\n.yanime-delay-6250 {\n  animation-delay: 6250ms; }\n\n.yanime-delay-6275 {\n  animation-delay: 6275ms; }\n\n.yanime-delay-6300 {\n  animation-delay: 6300ms; }\n\n.yanime-delay-6325 {\n  animation-delay: 6325ms; }\n\n.yanime-delay-6350 {\n  animation-delay: 6350ms; }\n\n.yanime-delay-6375 {\n  animation-delay: 6375ms; }\n\n.yanime-delay-6400 {\n  animation-delay: 6400ms; }\n\n.yanime-delay-6425 {\n  animation-delay: 6425ms; }\n\n.yanime-delay-6450 {\n  animation-delay: 6450ms; }\n\n.yanime-delay-6475 {\n  animation-delay: 6475ms; }\n\n.yanime-delay-6500 {\n  animation-delay: 6500ms; }\n\n.yanime-delay-6525 {\n  animation-delay: 6525ms; }\n\n.yanime-delay-6550 {\n  animation-delay: 6550ms; }\n\n.yanime-delay-6575 {\n  animation-delay: 6575ms; }\n\n.yanime-delay-6600 {\n  animation-delay: 6600ms; }\n\n.yanime-delay-6625 {\n  animation-delay: 6625ms; }\n\n.yanime-delay-6650 {\n  animation-delay: 6650ms; }\n\n.yanime-delay-6675 {\n  animation-delay: 6675ms; }\n\n.yanime-delay-6700 {\n  animation-delay: 6700ms; }\n\n.yanime-delay-6725 {\n  animation-delay: 6725ms; }\n\n.yanime-delay-6750 {\n  animation-delay: 6750ms; }\n\n.yanime-delay-6775 {\n  animation-delay: 6775ms; }\n\n.yanime-delay-6800 {\n  animation-delay: 6800ms; }\n\n.yanime-delay-6825 {\n  animation-delay: 6825ms; }\n\n.yanime-delay-6850 {\n  animation-delay: 6850ms; }\n\n.yanime-delay-6875 {\n  animation-delay: 6875ms; }\n\n.yanime-delay-6900 {\n  animation-delay: 6900ms; }\n\n.yanime-delay-6925 {\n  animation-delay: 6925ms; }\n\n.yanime-delay-6950 {\n  animation-delay: 6950ms; }\n\n.yanime-delay-6975 {\n  animation-delay: 6975ms; }\n\n.yanime-delay-7000 {\n  animation-delay: 7000ms; }\n\n.yanime-delay-7025 {\n  animation-delay: 7025ms; }\n\n.yanime-delay-7050 {\n  animation-delay: 7050ms; }\n\n.yanime-delay-7075 {\n  animation-delay: 7075ms; }\n\n.yanime-delay-7100 {\n  animation-delay: 7100ms; }\n\n.yanime-delay-7125 {\n  animation-delay: 7125ms; }\n\n.yanime-delay-7150 {\n  animation-delay: 7150ms; }\n\n.yanime-delay-7175 {\n  animation-delay: 7175ms; }\n\n.yanime-delay-7200 {\n  animation-delay: 7200ms; }\n\n.yanime-delay-7225 {\n  animation-delay: 7225ms; }\n\n.yanime-delay-7250 {\n  animation-delay: 7250ms; }\n\n.yanime-delay-7275 {\n  animation-delay: 7275ms; }\n\n.yanime-delay-7300 {\n  animation-delay: 7300ms; }\n\n.yanime-delay-7325 {\n  animation-delay: 7325ms; }\n\n.yanime-delay-7350 {\n  animation-delay: 7350ms; }\n\n.yanime-delay-7375 {\n  animation-delay: 7375ms; }\n\n.yanime-delay-7400 {\n  animation-delay: 7400ms; }\n\n.yanime-delay-7425 {\n  animation-delay: 7425ms; }\n\n.yanime-delay-7450 {\n  animation-delay: 7450ms; }\n\n.yanime-delay-7475 {\n  animation-delay: 7475ms; }\n\n.yanime-delay-7500 {\n  animation-delay: 7500ms; }\n\n.yanime-delay-7525 {\n  animation-delay: 7525ms; }\n\n.yanime-delay-7550 {\n  animation-delay: 7550ms; }\n\n.yanime-delay-7575 {\n  animation-delay: 7575ms; }\n\n.yanime-delay-7600 {\n  animation-delay: 7600ms; }\n\n.yanime-delay-7625 {\n  animation-delay: 7625ms; }\n\n.yanime-delay-7650 {\n  animation-delay: 7650ms; }\n\n.yanime-delay-7675 {\n  animation-delay: 7675ms; }\n\n.yanime-delay-7700 {\n  animation-delay: 7700ms; }\n\n.yanime-delay-7725 {\n  animation-delay: 7725ms; }\n\n.yanime-delay-7750 {\n  animation-delay: 7750ms; }\n\n.yanime-delay-7775 {\n  animation-delay: 7775ms; }\n\n.yanime-delay-7800 {\n  animation-delay: 7800ms; }\n\n.yanime-delay-7825 {\n  animation-delay: 7825ms; }\n\n.yanime-delay-7850 {\n  animation-delay: 7850ms; }\n\n.yanime-delay-7875 {\n  animation-delay: 7875ms; }\n\n.yanime-delay-7900 {\n  animation-delay: 7900ms; }\n\n.yanime-delay-7925 {\n  animation-delay: 7925ms; }\n\n.yanime-delay-7950 {\n  animation-delay: 7950ms; }\n\n.yanime-delay-7975 {\n  animation-delay: 7975ms; }\n\n.yanime-delay-8000 {\n  animation-delay: 8000ms; }\n\n.yanime-delay-8025 {\n  animation-delay: 8025ms; }\n\n.yanime-delay-8050 {\n  animation-delay: 8050ms; }\n\n.yanime-delay-8075 {\n  animation-delay: 8075ms; }\n\n.yanime-delay-8100 {\n  animation-delay: 8100ms; }\n\n.yanime-delay-8125 {\n  animation-delay: 8125ms; }\n\n.yanime-delay-8150 {\n  animation-delay: 8150ms; }\n\n.yanime-delay-8175 {\n  animation-delay: 8175ms; }\n\n.yanime-delay-8200 {\n  animation-delay: 8200ms; }\n\n.yanime-delay-8225 {\n  animation-delay: 8225ms; }\n\n.yanime-delay-8250 {\n  animation-delay: 8250ms; }\n\n.yanime-delay-8275 {\n  animation-delay: 8275ms; }\n\n.yanime-delay-8300 {\n  animation-delay: 8300ms; }\n\n.yanime-delay-8325 {\n  animation-delay: 8325ms; }\n\n.yanime-delay-8350 {\n  animation-delay: 8350ms; }\n\n.yanime-delay-8375 {\n  animation-delay: 8375ms; }\n\n.yanime-delay-8400 {\n  animation-delay: 8400ms; }\n\n.yanime-delay-8425 {\n  animation-delay: 8425ms; }\n\n.yanime-delay-8450 {\n  animation-delay: 8450ms; }\n\n.yanime-delay-8475 {\n  animation-delay: 8475ms; }\n\n.yanime-delay-8500 {\n  animation-delay: 8500ms; }\n\n.yanime-delay-8525 {\n  animation-delay: 8525ms; }\n\n.yanime-delay-8550 {\n  animation-delay: 8550ms; }\n\n.yanime-delay-8575 {\n  animation-delay: 8575ms; }\n\n.yanime-delay-8600 {\n  animation-delay: 8600ms; }\n\n.yanime-delay-8625 {\n  animation-delay: 8625ms; }\n\n.yanime-delay-8650 {\n  animation-delay: 8650ms; }\n\n.yanime-delay-8675 {\n  animation-delay: 8675ms; }\n\n.yanime-delay-8700 {\n  animation-delay: 8700ms; }\n\n.yanime-delay-8725 {\n  animation-delay: 8725ms; }\n\n.yanime-delay-8750 {\n  animation-delay: 8750ms; }\n\n.yanime-delay-8775 {\n  animation-delay: 8775ms; }\n\n.yanime-delay-8800 {\n  animation-delay: 8800ms; }\n\n.yanime-delay-8825 {\n  animation-delay: 8825ms; }\n\n.yanime-delay-8850 {\n  animation-delay: 8850ms; }\n\n.yanime-delay-8875 {\n  animation-delay: 8875ms; }\n\n.yanime-delay-8900 {\n  animation-delay: 8900ms; }\n\n.yanime-delay-8925 {\n  animation-delay: 8925ms; }\n\n.yanime-delay-8950 {\n  animation-delay: 8950ms; }\n\n.yanime-delay-8975 {\n  animation-delay: 8975ms; }\n\n.yanime-delay-9000 {\n  animation-delay: 9000ms; }\n\n.yanime-delay-9025 {\n  animation-delay: 9025ms; }\n\n.yanime-delay-9050 {\n  animation-delay: 9050ms; }\n\n.yanime-delay-9075 {\n  animation-delay: 9075ms; }\n\n.yanime-delay-9100 {\n  animation-delay: 9100ms; }\n\n.yanime-delay-9125 {\n  animation-delay: 9125ms; }\n\n.yanime-delay-9150 {\n  animation-delay: 9150ms; }\n\n.yanime-delay-9175 {\n  animation-delay: 9175ms; }\n\n.yanime-delay-9200 {\n  animation-delay: 9200ms; }\n\n.yanime-delay-9225 {\n  animation-delay: 9225ms; }\n\n.yanime-delay-9250 {\n  animation-delay: 9250ms; }\n\n.yanime-delay-9275 {\n  animation-delay: 9275ms; }\n\n.yanime-delay-9300 {\n  animation-delay: 9300ms; }\n\n.yanime-delay-9325 {\n  animation-delay: 9325ms; }\n\n.yanime-delay-9350 {\n  animation-delay: 9350ms; }\n\n.yanime-delay-9375 {\n  animation-delay: 9375ms; }\n\n.yanime-delay-9400 {\n  animation-delay: 9400ms; }\n\n.yanime-delay-9425 {\n  animation-delay: 9425ms; }\n\n.yanime-delay-9450 {\n  animation-delay: 9450ms; }\n\n.yanime-delay-9475 {\n  animation-delay: 9475ms; }\n\n.yanime-delay-9500 {\n  animation-delay: 9500ms; }\n\n.yanime-delay-9525 {\n  animation-delay: 9525ms; }\n\n.yanime-delay-9550 {\n  animation-delay: 9550ms; }\n\n.yanime-delay-9575 {\n  animation-delay: 9575ms; }\n\n.yanime-delay-9600 {\n  animation-delay: 9600ms; }\n\n.yanime-delay-9625 {\n  animation-delay: 9625ms; }\n\n.yanime-delay-9650 {\n  animation-delay: 9650ms; }\n\n.yanime-delay-9675 {\n  animation-delay: 9675ms; }\n\n.yanime-delay-9700 {\n  animation-delay: 9700ms; }\n\n.yanime-delay-9725 {\n  animation-delay: 9725ms; }\n\n.yanime-delay-9750 {\n  animation-delay: 9750ms; }\n\n.yanime-delay-9775 {\n  animation-delay: 9775ms; }\n\n.yanime-delay-9800 {\n  animation-delay: 9800ms; }\n\n.yanime-delay-9825 {\n  animation-delay: 9825ms; }\n\n.yanime-delay-9850 {\n  animation-delay: 9850ms; }\n\n.yanime-delay-9875 {\n  animation-delay: 9875ms; }\n\n.yanime-delay-9900 {\n  animation-delay: 9900ms; }\n\n.yanime-delay-9925 {\n  animation-delay: 9925ms; }\n\n.yanime-delay-9950 {\n  animation-delay: 9950ms; }\n\n.yanime-delay-9975 {\n  animation-delay: 9975ms; }\n\n.yanime-delay-10000 {\n  animation-delay: 10000ms; }\n\n.yanime-delay-10025 {\n  animation-delay: 10025ms; }\n\n.yanime-delay-10050 {\n  animation-delay: 10050ms; }\n\n.yanime-delay-10075 {\n  animation-delay: 10075ms; }\n\n.yanime-delay-10100 {\n  animation-delay: 10100ms; }\n\n.yanime-delay-10125 {\n  animation-delay: 10125ms; }\n\n.yanime-delay-10150 {\n  animation-delay: 10150ms; }\n\n.yanime-delay-10175 {\n  animation-delay: 10175ms; }\n\n.yanime-delay-10200 {\n  animation-delay: 10200ms; }\n\n.yanime-delay-10225 {\n  animation-delay: 10225ms; }\n\n.yanime-delay-10250 {\n  animation-delay: 10250ms; }\n\n.yanime-delay-10275 {\n  animation-delay: 10275ms; }\n\n.yanime-delay-10300 {\n  animation-delay: 10300ms; }\n\n.yanime-delay-10325 {\n  animation-delay: 10325ms; }\n\n.yanime-delay-10350 {\n  animation-delay: 10350ms; }\n\n.yanime-delay-10375 {\n  animation-delay: 10375ms; }\n\n.yanime-delay-10400 {\n  animation-delay: 10400ms; }\n\n.yanime-delay-10425 {\n  animation-delay: 10425ms; }\n\n.yanime-delay-10450 {\n  animation-delay: 10450ms; }\n\n.yanime-delay-10475 {\n  animation-delay: 10475ms; }\n\n.yanime-delay-10500 {\n  animation-delay: 10500ms; }\n\n.yanime-delay-10525 {\n  animation-delay: 10525ms; }\n\n.yanime-delay-10550 {\n  animation-delay: 10550ms; }\n\n.yanime-delay-10575 {\n  animation-delay: 10575ms; }\n\n.yanime-delay-10600 {\n  animation-delay: 10600ms; }\n\n.yanime-delay-10625 {\n  animation-delay: 10625ms; }\n\n.yanime-delay-10650 {\n  animation-delay: 10650ms; }\n\n.yanime-delay-10675 {\n  animation-delay: 10675ms; }\n\n.yanime-delay-10700 {\n  animation-delay: 10700ms; }\n\n.yanime-delay-10725 {\n  animation-delay: 10725ms; }\n\n.yanime-delay-10750 {\n  animation-delay: 10750ms; }\n\n.yanime-delay-10775 {\n  animation-delay: 10775ms; }\n\n.yanime-delay-10800 {\n  animation-delay: 10800ms; }\n\n.yanime-delay-10825 {\n  animation-delay: 10825ms; }\n\n.yanime-delay-10850 {\n  animation-delay: 10850ms; }\n\n.yanime-delay-10875 {\n  animation-delay: 10875ms; }\n\n.yanime-delay-10900 {\n  animation-delay: 10900ms; }\n\n.yanime-delay-10925 {\n  animation-delay: 10925ms; }\n\n.yanime-delay-10950 {\n  animation-delay: 10950ms; }\n\n.yanime-delay-10975 {\n  animation-delay: 10975ms; }\n\n.yanime-delay-11000 {\n  animation-delay: 11000ms; }\n\n.yanime-delay-11025 {\n  animation-delay: 11025ms; }\n\n.yanime-delay-11050 {\n  animation-delay: 11050ms; }\n\n.yanime-delay-11075 {\n  animation-delay: 11075ms; }\n\n.yanime-delay-11100 {\n  animation-delay: 11100ms; }\n\n.yanime-delay-11125 {\n  animation-delay: 11125ms; }\n\n.yanime-delay-11150 {\n  animation-delay: 11150ms; }\n\n.yanime-delay-11175 {\n  animation-delay: 11175ms; }\n\n.yanime-delay-11200 {\n  animation-delay: 11200ms; }\n\n.yanime-delay-11225 {\n  animation-delay: 11225ms; }\n\n.yanime-delay-11250 {\n  animation-delay: 11250ms; }\n\n.yanime-delay-11275 {\n  animation-delay: 11275ms; }\n\n.yanime-delay-11300 {\n  animation-delay: 11300ms; }\n\n.yanime-delay-11325 {\n  animation-delay: 11325ms; }\n\n.yanime-delay-11350 {\n  animation-delay: 11350ms; }\n\n.yanime-delay-11375 {\n  animation-delay: 11375ms; }\n\n.yanime-delay-11400 {\n  animation-delay: 11400ms; }\n\n.yanime-delay-11425 {\n  animation-delay: 11425ms; }\n\n.yanime-delay-11450 {\n  animation-delay: 11450ms; }\n\n.yanime-delay-11475 {\n  animation-delay: 11475ms; }\n\n.yanime-delay-11500 {\n  animation-delay: 11500ms; }\n\n.yanime-delay-11525 {\n  animation-delay: 11525ms; }\n\n.yanime-delay-11550 {\n  animation-delay: 11550ms; }\n\n.yanime-delay-11575 {\n  animation-delay: 11575ms; }\n\n.yanime-delay-11600 {\n  animation-delay: 11600ms; }\n\n.yanime-delay-11625 {\n  animation-delay: 11625ms; }\n\n.yanime-delay-11650 {\n  animation-delay: 11650ms; }\n\n.yanime-delay-11675 {\n  animation-delay: 11675ms; }\n\n.yanime-delay-11700 {\n  animation-delay: 11700ms; }\n\n.yanime-delay-11725 {\n  animation-delay: 11725ms; }\n\n.yanime-delay-11750 {\n  animation-delay: 11750ms; }\n\n.yanime-delay-11775 {\n  animation-delay: 11775ms; }\n\n.yanime-delay-11800 {\n  animation-delay: 11800ms; }\n\n.yanime-delay-11825 {\n  animation-delay: 11825ms; }\n\n.yanime-delay-11850 {\n  animation-delay: 11850ms; }\n\n.yanime-delay-11875 {\n  animation-delay: 11875ms; }\n\n.yanime-delay-11900 {\n  animation-delay: 11900ms; }\n\n.yanime-delay-11925 {\n  animation-delay: 11925ms; }\n\n.yanime-delay-11950 {\n  animation-delay: 11950ms; }\n\n.yanime-delay-11975 {\n  animation-delay: 11975ms; }\n\n.yanime-delay-12000 {\n  animation-delay: 12000ms; }\n\n.yanime-delay-12025 {\n  animation-delay: 12025ms; }\n\n.yanime-delay-12050 {\n  animation-delay: 12050ms; }\n\n.yanime-delay-12075 {\n  animation-delay: 12075ms; }\n\n.yanime-delay-12100 {\n  animation-delay: 12100ms; }\n\n.yanime-delay-12125 {\n  animation-delay: 12125ms; }\n\n.yanime-delay-12150 {\n  animation-delay: 12150ms; }\n\n.yanime-delay-12175 {\n  animation-delay: 12175ms; }\n\n.yanime-delay-12200 {\n  animation-delay: 12200ms; }\n\n.yanime-delay-12225 {\n  animation-delay: 12225ms; }\n\n.yanime-delay-12250 {\n  animation-delay: 12250ms; }\n\n.yanime-delay-12275 {\n  animation-delay: 12275ms; }\n\n.yanime-delay-12300 {\n  animation-delay: 12300ms; }\n\n.yanime-delay-12325 {\n  animation-delay: 12325ms; }\n\n.yanime-delay-12350 {\n  animation-delay: 12350ms; }\n\n.yanime-delay-12375 {\n  animation-delay: 12375ms; }\n\n.yanime-delay-12400 {\n  animation-delay: 12400ms; }\n\n.yanime-delay-12425 {\n  animation-delay: 12425ms; }\n\n.yanime-delay-12450 {\n  animation-delay: 12450ms; }\n\n.yanime-delay-12475 {\n  animation-delay: 12475ms; }\n\n.yanime-delay-12500 {\n  animation-delay: 12500ms; }\n\n.yanime-delay-12525 {\n  animation-delay: 12525ms; }\n\n.yanime-delay-12550 {\n  animation-delay: 12550ms; }\n\n.yanime-delay-12575 {\n  animation-delay: 12575ms; }\n\n.yanime-delay-12600 {\n  animation-delay: 12600ms; }\n\n.yanime-delay-12625 {\n  animation-delay: 12625ms; }\n\n.yanime-delay-12650 {\n  animation-delay: 12650ms; }\n\n.yanime-delay-12675 {\n  animation-delay: 12675ms; }\n\n.yanime-delay-12700 {\n  animation-delay: 12700ms; }\n\n.yanime-delay-12725 {\n  animation-delay: 12725ms; }\n\n.yanime-delay-12750 {\n  animation-delay: 12750ms; }\n\n.yanime-delay-12775 {\n  animation-delay: 12775ms; }\n\n.yanime-delay-12800 {\n  animation-delay: 12800ms; }\n\n.yanime-delay-12825 {\n  animation-delay: 12825ms; }\n\n.yanime-delay-12850 {\n  animation-delay: 12850ms; }\n\n.yanime-delay-12875 {\n  animation-delay: 12875ms; }\n\n.yanime-delay-12900 {\n  animation-delay: 12900ms; }\n\n.yanime-delay-12925 {\n  animation-delay: 12925ms; }\n\n.yanime-delay-12950 {\n  animation-delay: 12950ms; }\n\n.yanime-delay-12975 {\n  animation-delay: 12975ms; }\n\n.yanime-delay-13000 {\n  animation-delay: 13000ms; }\n\n.yanime-delay-13025 {\n  animation-delay: 13025ms; }\n\n.yanime-delay-13050 {\n  animation-delay: 13050ms; }\n\n.yanime-delay-13075 {\n  animation-delay: 13075ms; }\n\n.yanime-delay-13100 {\n  animation-delay: 13100ms; }\n\n.yanime-delay-13125 {\n  animation-delay: 13125ms; }\n\n.yanime-delay-13150 {\n  animation-delay: 13150ms; }\n\n.yanime-delay-13175 {\n  animation-delay: 13175ms; }\n\n.yanime-delay-13200 {\n  animation-delay: 13200ms; }\n\n.yanime-delay-13225 {\n  animation-delay: 13225ms; }\n\n.yanime-delay-13250 {\n  animation-delay: 13250ms; }\n\n.yanime-delay-13275 {\n  animation-delay: 13275ms; }\n\n.yanime-delay-13300 {\n  animation-delay: 13300ms; }\n\n.yanime-delay-13325 {\n  animation-delay: 13325ms; }\n\n.yanime-delay-13350 {\n  animation-delay: 13350ms; }\n\n.yanime-delay-13375 {\n  animation-delay: 13375ms; }\n\n.yanime-delay-13400 {\n  animation-delay: 13400ms; }\n\n.yanime-delay-13425 {\n  animation-delay: 13425ms; }\n\n.yanime-delay-13450 {\n  animation-delay: 13450ms; }\n\n.yanime-delay-13475 {\n  animation-delay: 13475ms; }\n\n.yanime-delay-13500 {\n  animation-delay: 13500ms; }\n\n.yanime-delay-13525 {\n  animation-delay: 13525ms; }\n\n.yanime-delay-13550 {\n  animation-delay: 13550ms; }\n\n.yanime-delay-13575 {\n  animation-delay: 13575ms; }\n\n.yanime-delay-13600 {\n  animation-delay: 13600ms; }\n\n.yanime-delay-13625 {\n  animation-delay: 13625ms; }\n\n.yanime-delay-13650 {\n  animation-delay: 13650ms; }\n\n.yanime-delay-13675 {\n  animation-delay: 13675ms; }\n\n.yanime-delay-13700 {\n  animation-delay: 13700ms; }\n\n.yanime-delay-13725 {\n  animation-delay: 13725ms; }\n\n.yanime-delay-13750 {\n  animation-delay: 13750ms; }\n\n.yanime-delay-13775 {\n  animation-delay: 13775ms; }\n\n.yanime-delay-13800 {\n  animation-delay: 13800ms; }\n\n.yanime-delay-13825 {\n  animation-delay: 13825ms; }\n\n.yanime-delay-13850 {\n  animation-delay: 13850ms; }\n\n.yanime-delay-13875 {\n  animation-delay: 13875ms; }\n\n.yanime-delay-13900 {\n  animation-delay: 13900ms; }\n\n.yanime-delay-13925 {\n  animation-delay: 13925ms; }\n\n.yanime-delay-13950 {\n  animation-delay: 13950ms; }\n\n.yanime-delay-13975 {\n  animation-delay: 13975ms; }\n\n.yanime-delay-14000 {\n  animation-delay: 14000ms; }\n\n.yanime-delay-14025 {\n  animation-delay: 14025ms; }\n\n.yanime-delay-14050 {\n  animation-delay: 14050ms; }\n\n.yanime-delay-14075 {\n  animation-delay: 14075ms; }\n\n.yanime-delay-14100 {\n  animation-delay: 14100ms; }\n\n.yanime-delay-14125 {\n  animation-delay: 14125ms; }\n\n.yanime-delay-14150 {\n  animation-delay: 14150ms; }\n\n.yanime-delay-14175 {\n  animation-delay: 14175ms; }\n\n.yanime-delay-14200 {\n  animation-delay: 14200ms; }\n\n.yanime-delay-14225 {\n  animation-delay: 14225ms; }\n\n.yanime-delay-14250 {\n  animation-delay: 14250ms; }\n\n.yanime-delay-14275 {\n  animation-delay: 14275ms; }\n\n.yanime-delay-14300 {\n  animation-delay: 14300ms; }\n\n.yanime-delay-14325 {\n  animation-delay: 14325ms; }\n\n.yanime-delay-14350 {\n  animation-delay: 14350ms; }\n\n.yanime-delay-14375 {\n  animation-delay: 14375ms; }\n\n.yanime-delay-14400 {\n  animation-delay: 14400ms; }\n\n.yanime-delay-14425 {\n  animation-delay: 14425ms; }\n\n.yanime-delay-14450 {\n  animation-delay: 14450ms; }\n\n.yanime-delay-14475 {\n  animation-delay: 14475ms; }\n\n.yanime-delay-14500 {\n  animation-delay: 14500ms; }\n\n.yanime-delay-14525 {\n  animation-delay: 14525ms; }\n\n.yanime-delay-14550 {\n  animation-delay: 14550ms; }\n\n.yanime-delay-14575 {\n  animation-delay: 14575ms; }\n\n.yanime-delay-14600 {\n  animation-delay: 14600ms; }\n\n.yanime-delay-14625 {\n  animation-delay: 14625ms; }\n\n.yanime-delay-14650 {\n  animation-delay: 14650ms; }\n\n.yanime-delay-14675 {\n  animation-delay: 14675ms; }\n\n.yanime-delay-14700 {\n  animation-delay: 14700ms; }\n\n.yanime-delay-14725 {\n  animation-delay: 14725ms; }\n\n.yanime-delay-14750 {\n  animation-delay: 14750ms; }\n\n.yanime-delay-14775 {\n  animation-delay: 14775ms; }\n\n.yanime-delay-14800 {\n  animation-delay: 14800ms; }\n\n.yanime-delay-14825 {\n  animation-delay: 14825ms; }\n\n.yanime-delay-14850 {\n  animation-delay: 14850ms; }\n\n.yanime-delay-14875 {\n  animation-delay: 14875ms; }\n\n.yanime-delay-14900 {\n  animation-delay: 14900ms; }\n\n.yanime-delay-14925 {\n  animation-delay: 14925ms; }\n\n.yanime-delay-14950 {\n  animation-delay: 14950ms; }\n\n.yanime-delay-14975 {\n  animation-delay: 14975ms; }\n\n.yanime-delay-15000 {\n  animation-delay: 15000ms; }\n\n.yanime-delay-15025 {\n  animation-delay: 15025ms; }\n\n.yanime-delay-15050 {\n  animation-delay: 15050ms; }\n\n.yanime-delay-15075 {\n  animation-delay: 15075ms; }\n\n.yanime-delay-15100 {\n  animation-delay: 15100ms; }\n\n.yanime-delay-15125 {\n  animation-delay: 15125ms; }\n\n.yanime-delay-15150 {\n  animation-delay: 15150ms; }\n\n.yanime-delay-15175 {\n  animation-delay: 15175ms; }\n\n.yanime-delay-15200 {\n  animation-delay: 15200ms; }\n\n.yanime-delay-15225 {\n  animation-delay: 15225ms; }\n\n.yanime-delay-15250 {\n  animation-delay: 15250ms; }\n\n.yanime-delay-15275 {\n  animation-delay: 15275ms; }\n\n.yanime-delay-15300 {\n  animation-delay: 15300ms; }\n\n.yanime-delay-15325 {\n  animation-delay: 15325ms; }\n\n.yanime-delay-15350 {\n  animation-delay: 15350ms; }\n\n.yanime-delay-15375 {\n  animation-delay: 15375ms; }\n\n.yanime-delay-15400 {\n  animation-delay: 15400ms; }\n\n.yanime-delay-15425 {\n  animation-delay: 15425ms; }\n\n.yanime-delay-15450 {\n  animation-delay: 15450ms; }\n\n.yanime-delay-15475 {\n  animation-delay: 15475ms; }\n\n.yanime-delay-15500 {\n  animation-delay: 15500ms; }\n\n.yanime-delay-15525 {\n  animation-delay: 15525ms; }\n\n.yanime-delay-15550 {\n  animation-delay: 15550ms; }\n\n.yanime-delay-15575 {\n  animation-delay: 15575ms; }\n\n.yanime-delay-15600 {\n  animation-delay: 15600ms; }\n\n.yanime-delay-15625 {\n  animation-delay: 15625ms; }\n\n.yanime-delay-15650 {\n  animation-delay: 15650ms; }\n\n.yanime-delay-15675 {\n  animation-delay: 15675ms; }\n\n.yanime-delay-15700 {\n  animation-delay: 15700ms; }\n\n.yanime-delay-15725 {\n  animation-delay: 15725ms; }\n\n.yanime-delay-15750 {\n  animation-delay: 15750ms; }\n\n.yanime-delay-15775 {\n  animation-delay: 15775ms; }\n\n.yanime-delay-15800 {\n  animation-delay: 15800ms; }\n\n.yanime-delay-15825 {\n  animation-delay: 15825ms; }\n\n.yanime-delay-15850 {\n  animation-delay: 15850ms; }\n\n.yanime-delay-15875 {\n  animation-delay: 15875ms; }\n\n.yanime-delay-15900 {\n  animation-delay: 15900ms; }\n\n.yanime-delay-15925 {\n  animation-delay: 15925ms; }\n\n.yanime-delay-15950 {\n  animation-delay: 15950ms; }\n\n.yanime-delay-15975 {\n  animation-delay: 15975ms; }\n\n.yanime-delay-16000 {\n  animation-delay: 16000ms; }\n\n.yanime-delay-16025 {\n  animation-delay: 16025ms; }\n\n.yanime-delay-16050 {\n  animation-delay: 16050ms; }\n\n.yanime-delay-16075 {\n  animation-delay: 16075ms; }\n\n.yanime-delay-16100 {\n  animation-delay: 16100ms; }\n\n.yanime-delay-16125 {\n  animation-delay: 16125ms; }\n\n.yanime-delay-16150 {\n  animation-delay: 16150ms; }\n\n.yanime-delay-16175 {\n  animation-delay: 16175ms; }\n\n.yanime-delay-16200 {\n  animation-delay: 16200ms; }\n\n.yanime-delay-16225 {\n  animation-delay: 16225ms; }\n\n.yanime-delay-16250 {\n  animation-delay: 16250ms; }\n\n.yanime-delay-16275 {\n  animation-delay: 16275ms; }\n\n.yanime-delay-16300 {\n  animation-delay: 16300ms; }\n\n.yanime-delay-16325 {\n  animation-delay: 16325ms; }\n\n.yanime-delay-16350 {\n  animation-delay: 16350ms; }\n\n.yanime-delay-16375 {\n  animation-delay: 16375ms; }\n\n.yanime-delay-16400 {\n  animation-delay: 16400ms; }\n\n.yanime-delay-16425 {\n  animation-delay: 16425ms; }\n\n.yanime-delay-16450 {\n  animation-delay: 16450ms; }\n\n.yanime-delay-16475 {\n  animation-delay: 16475ms; }\n\n.yanime-delay-16500 {\n  animation-delay: 16500ms; }\n\n.yanime-delay-16525 {\n  animation-delay: 16525ms; }\n\n.yanime-delay-16550 {\n  animation-delay: 16550ms; }\n\n.yanime-delay-16575 {\n  animation-delay: 16575ms; }\n\n.yanime-delay-16600 {\n  animation-delay: 16600ms; }\n\n.yanime-delay-16625 {\n  animation-delay: 16625ms; }\n\n.yanime-delay-16650 {\n  animation-delay: 16650ms; }\n\n.yanime-delay-16675 {\n  animation-delay: 16675ms; }\n\n.yanime-delay-16700 {\n  animation-delay: 16700ms; }\n\n.yanime-delay-16725 {\n  animation-delay: 16725ms; }\n\n.yanime-delay-16750 {\n  animation-delay: 16750ms; }\n\n.yanime-delay-16775 {\n  animation-delay: 16775ms; }\n\n.yanime-delay-16800 {\n  animation-delay: 16800ms; }\n\n.yanime-delay-16825 {\n  animation-delay: 16825ms; }\n\n.yanime-delay-16850 {\n  animation-delay: 16850ms; }\n\n.yanime-delay-16875 {\n  animation-delay: 16875ms; }\n\n.yanime-delay-16900 {\n  animation-delay: 16900ms; }\n\n.yanime-delay-16925 {\n  animation-delay: 16925ms; }\n\n.yanime-delay-16950 {\n  animation-delay: 16950ms; }\n\n.yanime-delay-16975 {\n  animation-delay: 16975ms; }\n\n.yanime-delay-17000 {\n  animation-delay: 17000ms; }\n\n.yanime-delay-17025 {\n  animation-delay: 17025ms; }\n\n.yanime-delay-17050 {\n  animation-delay: 17050ms; }\n\n.yanime-delay-17075 {\n  animation-delay: 17075ms; }\n\n.yanime-delay-17100 {\n  animation-delay: 17100ms; }\n\n.yanime-delay-17125 {\n  animation-delay: 17125ms; }\n\n.yanime-delay-17150 {\n  animation-delay: 17150ms; }\n\n.yanime-delay-17175 {\n  animation-delay: 17175ms; }\n\n.yanime-delay-17200 {\n  animation-delay: 17200ms; }\n\n.yanime-delay-17225 {\n  animation-delay: 17225ms; }\n\n.yanime-delay-17250 {\n  animation-delay: 17250ms; }\n\n.yanime-delay-17275 {\n  animation-delay: 17275ms; }\n\n.yanime-delay-17300 {\n  animation-delay: 17300ms; }\n\n.yanime-delay-17325 {\n  animation-delay: 17325ms; }\n\n.yanime-delay-17350 {\n  animation-delay: 17350ms; }\n\n.yanime-delay-17375 {\n  animation-delay: 17375ms; }\n\n.yanime-delay-17400 {\n  animation-delay: 17400ms; }\n\n.yanime-delay-17425 {\n  animation-delay: 17425ms; }\n\n.yanime-delay-17450 {\n  animation-delay: 17450ms; }\n\n.yanime-delay-17475 {\n  animation-delay: 17475ms; }\n\n.yanime-delay-17500 {\n  animation-delay: 17500ms; }\n\n.yanime-delay-17525 {\n  animation-delay: 17525ms; }\n\n.yanime-delay-17550 {\n  animation-delay: 17550ms; }\n\n.yanime-delay-17575 {\n  animation-delay: 17575ms; }\n\n.yanime-delay-17600 {\n  animation-delay: 17600ms; }\n\n.yanime-delay-17625 {\n  animation-delay: 17625ms; }\n\n.yanime-delay-17650 {\n  animation-delay: 17650ms; }\n\n.yanime-delay-17675 {\n  animation-delay: 17675ms; }\n\n.yanime-delay-17700 {\n  animation-delay: 17700ms; }\n\n.yanime-delay-17725 {\n  animation-delay: 17725ms; }\n\n.yanime-delay-17750 {\n  animation-delay: 17750ms; }\n\n.yanime-delay-17775 {\n  animation-delay: 17775ms; }\n\n.yanime-delay-17800 {\n  animation-delay: 17800ms; }\n\n.yanime-delay-17825 {\n  animation-delay: 17825ms; }\n\n.yanime-delay-17850 {\n  animation-delay: 17850ms; }\n\n.yanime-delay-17875 {\n  animation-delay: 17875ms; }\n\n.yanime-delay-17900 {\n  animation-delay: 17900ms; }\n\n.yanime-delay-17925 {\n  animation-delay: 17925ms; }\n\n.yanime-delay-17950 {\n  animation-delay: 17950ms; }\n\n.yanime-delay-17975 {\n  animation-delay: 17975ms; }\n\n.yanime-delay-18000 {\n  animation-delay: 18000ms; }\n\n.yanime-delay-18025 {\n  animation-delay: 18025ms; }\n\n.yanime-delay-18050 {\n  animation-delay: 18050ms; }\n\n.yanime-delay-18075 {\n  animation-delay: 18075ms; }\n\n.yanime-delay-18100 {\n  animation-delay: 18100ms; }\n\n.yanime-delay-18125 {\n  animation-delay: 18125ms; }\n\n.yanime-delay-18150 {\n  animation-delay: 18150ms; }\n\n.yanime-delay-18175 {\n  animation-delay: 18175ms; }\n\n.yanime-delay-18200 {\n  animation-delay: 18200ms; }\n\n.yanime-delay-18225 {\n  animation-delay: 18225ms; }\n\n.yanime-delay-18250 {\n  animation-delay: 18250ms; }\n\n.yanime-delay-18275 {\n  animation-delay: 18275ms; }\n\n.yanime-delay-18300 {\n  animation-delay: 18300ms; }\n\n.yanime-delay-18325 {\n  animation-delay: 18325ms; }\n\n.yanime-delay-18350 {\n  animation-delay: 18350ms; }\n\n.yanime-delay-18375 {\n  animation-delay: 18375ms; }\n\n.yanime-delay-18400 {\n  animation-delay: 18400ms; }\n\n.yanime-delay-18425 {\n  animation-delay: 18425ms; }\n\n.yanime-delay-18450 {\n  animation-delay: 18450ms; }\n\n.yanime-delay-18475 {\n  animation-delay: 18475ms; }\n\n.yanime-delay-18500 {\n  animation-delay: 18500ms; }\n\n.yanime-delay-18525 {\n  animation-delay: 18525ms; }\n\n.yanime-delay-18550 {\n  animation-delay: 18550ms; }\n\n.yanime-delay-18575 {\n  animation-delay: 18575ms; }\n\n.yanime-delay-18600 {\n  animation-delay: 18600ms; }\n\n.yanime-delay-18625 {\n  animation-delay: 18625ms; }\n\n.yanime-delay-18650 {\n  animation-delay: 18650ms; }\n\n.yanime-delay-18675 {\n  animation-delay: 18675ms; }\n\n.yanime-delay-18700 {\n  animation-delay: 18700ms; }\n\n.yanime-delay-18725 {\n  animation-delay: 18725ms; }\n\n.yanime-delay-18750 {\n  animation-delay: 18750ms; }\n\n.yanime-delay-18775 {\n  animation-delay: 18775ms; }\n\n.yanime-delay-18800 {\n  animation-delay: 18800ms; }\n\n.yanime-delay-18825 {\n  animation-delay: 18825ms; }\n\n.yanime-delay-18850 {\n  animation-delay: 18850ms; }\n\n.yanime-delay-18875 {\n  animation-delay: 18875ms; }\n\n.yanime-delay-18900 {\n  animation-delay: 18900ms; }\n\n.yanime-delay-18925 {\n  animation-delay: 18925ms; }\n\n.yanime-delay-18950 {\n  animation-delay: 18950ms; }\n\n.yanime-delay-18975 {\n  animation-delay: 18975ms; }\n\n.yanime-delay-19000 {\n  animation-delay: 19000ms; }\n\n.yanime-delay-19025 {\n  animation-delay: 19025ms; }\n\n.yanime-delay-19050 {\n  animation-delay: 19050ms; }\n\n.yanime-delay-19075 {\n  animation-delay: 19075ms; }\n\n.yanime-delay-19100 {\n  animation-delay: 19100ms; }\n\n.yanime-delay-19125 {\n  animation-delay: 19125ms; }\n\n.yanime-delay-19150 {\n  animation-delay: 19150ms; }\n\n.yanime-delay-19175 {\n  animation-delay: 19175ms; }\n\n.yanime-delay-19200 {\n  animation-delay: 19200ms; }\n\n.yanime-delay-19225 {\n  animation-delay: 19225ms; }\n\n.yanime-delay-19250 {\n  animation-delay: 19250ms; }\n\n.yanime-delay-19275 {\n  animation-delay: 19275ms; }\n\n.yanime-delay-19300 {\n  animation-delay: 19300ms; }\n\n.yanime-delay-19325 {\n  animation-delay: 19325ms; }\n\n.yanime-delay-19350 {\n  animation-delay: 19350ms; }\n\n.yanime-delay-19375 {\n  animation-delay: 19375ms; }\n\n.yanime-delay-19400 {\n  animation-delay: 19400ms; }\n\n.yanime-delay-19425 {\n  animation-delay: 19425ms; }\n\n.yanime-delay-19450 {\n  animation-delay: 19450ms; }\n\n.yanime-delay-19475 {\n  animation-delay: 19475ms; }\n\n.yanime-delay-19500 {\n  animation-delay: 19500ms; }\n\n.yanime-delay-19525 {\n  animation-delay: 19525ms; }\n\n.yanime-delay-19550 {\n  animation-delay: 19550ms; }\n\n.yanime-delay-19575 {\n  animation-delay: 19575ms; }\n\n.yanime-delay-19600 {\n  animation-delay: 19600ms; }\n\n.yanime-delay-19625 {\n  animation-delay: 19625ms; }\n\n.yanime-delay-19650 {\n  animation-delay: 19650ms; }\n\n.yanime-delay-19675 {\n  animation-delay: 19675ms; }\n\n.yanime-delay-19700 {\n  animation-delay: 19700ms; }\n\n.yanime-delay-19725 {\n  animation-delay: 19725ms; }\n\n.yanime-delay-19750 {\n  animation-delay: 19750ms; }\n\n.yanime-delay-19775 {\n  animation-delay: 19775ms; }\n\n.yanime-delay-19800 {\n  animation-delay: 19800ms; }\n\n.yanime-delay-19825 {\n  animation-delay: 19825ms; }\n\n.yanime-delay-19850 {\n  animation-delay: 19850ms; }\n\n.yanime-delay-19875 {\n  animation-delay: 19875ms; }\n\n.yanime-delay-19900 {\n  animation-delay: 19900ms; }\n\n.yanime-delay-19925 {\n  animation-delay: 19925ms; }\n\n.yanime-delay-19950 {\n  animation-delay: 19950ms; }\n\n.yanime-delay-19975 {\n  animation-delay: 19975ms; }\n\n.yanime-delay-20000 {\n  animation-delay: 20000ms; }\n\n.yanime-delay-20025 {\n  animation-delay: 20025ms; }\n\n.yanime-delay-20050 {\n  animation-delay: 20050ms; }\n\n.yanime-delay-20075 {\n  animation-delay: 20075ms; }\n\n.yanime-delay-20100 {\n  animation-delay: 20100ms; }\n\n.yanime-delay-20125 {\n  animation-delay: 20125ms; }\n\n.yanime-delay-20150 {\n  animation-delay: 20150ms; }\n\n.yanime-delay-20175 {\n  animation-delay: 20175ms; }\n\n.yanime-delay-20200 {\n  animation-delay: 20200ms; }\n\n.yanime-delay-20225 {\n  animation-delay: 20225ms; }\n\n.yanime-delay-20250 {\n  animation-delay: 20250ms; }\n\n.yanime-delay-20275 {\n  animation-delay: 20275ms; }\n\n.yanime-delay-20300 {\n  animation-delay: 20300ms; }\n\n.yanime-delay-20325 {\n  animation-delay: 20325ms; }\n\n.yanime-delay-20350 {\n  animation-delay: 20350ms; }\n\n.yanime-delay-20375 {\n  animation-delay: 20375ms; }\n\n.yanime-delay-20400 {\n  animation-delay: 20400ms; }\n\n.yanime-delay-20425 {\n  animation-delay: 20425ms; }\n\n.yanime-delay-20450 {\n  animation-delay: 20450ms; }\n\n.yanime-delay-20475 {\n  animation-delay: 20475ms; }\n\n.yanime-delay-20500 {\n  animation-delay: 20500ms; }\n\n.yanime-delay-20525 {\n  animation-delay: 20525ms; }\n\n.yanime-delay-20550 {\n  animation-delay: 20550ms; }\n\n.yanime-delay-20575 {\n  animation-delay: 20575ms; }\n\n.yanime-delay-20600 {\n  animation-delay: 20600ms; }\n\n.yanime-delay-20625 {\n  animation-delay: 20625ms; }\n\n.yanime-delay-20650 {\n  animation-delay: 20650ms; }\n\n.yanime-delay-20675 {\n  animation-delay: 20675ms; }\n\n.yanime-delay-20700 {\n  animation-delay: 20700ms; }\n\n.yanime-delay-20725 {\n  animation-delay: 20725ms; }\n\n.yanime-delay-20750 {\n  animation-delay: 20750ms; }\n\n.yanime-delay-20775 {\n  animation-delay: 20775ms; }\n\n.yanime-delay-20800 {\n  animation-delay: 20800ms; }\n\n.yanime-delay-20825 {\n  animation-delay: 20825ms; }\n\n.yanime-delay-20850 {\n  animation-delay: 20850ms; }\n\n.yanime-delay-20875 {\n  animation-delay: 20875ms; }\n\n.yanime-delay-20900 {\n  animation-delay: 20900ms; }\n\n.yanime-delay-20925 {\n  animation-delay: 20925ms; }\n\n.yanime-delay-20950 {\n  animation-delay: 20950ms; }\n\n.yanime-delay-20975 {\n  animation-delay: 20975ms; }\n\n.yanime-delay-21000 {\n  animation-delay: 21000ms; }\n\n.yanime-delay-21025 {\n  animation-delay: 21025ms; }\n\n.yanime-delay-21050 {\n  animation-delay: 21050ms; }\n\n.yanime-delay-21075 {\n  animation-delay: 21075ms; }\n\n.yanime-delay-21100 {\n  animation-delay: 21100ms; }\n\n.yanime-delay-21125 {\n  animation-delay: 21125ms; }\n\n.yanime-delay-21150 {\n  animation-delay: 21150ms; }\n\n.yanime-delay-21175 {\n  animation-delay: 21175ms; }\n\n.yanime-delay-21200 {\n  animation-delay: 21200ms; }\n\n.yanime-delay-21225 {\n  animation-delay: 21225ms; }\n\n.yanime-delay-21250 {\n  animation-delay: 21250ms; }\n\n.yanime-delay-21275 {\n  animation-delay: 21275ms; }\n\n.yanime-delay-21300 {\n  animation-delay: 21300ms; }\n\n.yanime-delay-21325 {\n  animation-delay: 21325ms; }\n\n.yanime-delay-21350 {\n  animation-delay: 21350ms; }\n\n.yanime-delay-21375 {\n  animation-delay: 21375ms; }\n\n.yanime-delay-21400 {\n  animation-delay: 21400ms; }\n\n.yanime-delay-21425 {\n  animation-delay: 21425ms; }\n\n.yanime-delay-21450 {\n  animation-delay: 21450ms; }\n\n.yanime-delay-21475 {\n  animation-delay: 21475ms; }\n\n.yanime-delay-21500 {\n  animation-delay: 21500ms; }\n\n.yanime-delay-21525 {\n  animation-delay: 21525ms; }\n\n.yanime-delay-21550 {\n  animation-delay: 21550ms; }\n\n.yanime-delay-21575 {\n  animation-delay: 21575ms; }\n\n.yanime-delay-21600 {\n  animation-delay: 21600ms; }\n\n.yanime-delay-21625 {\n  animation-delay: 21625ms; }\n\n.yanime-delay-21650 {\n  animation-delay: 21650ms; }\n\n.yanime-delay-21675 {\n  animation-delay: 21675ms; }\n\n.yanime-delay-21700 {\n  animation-delay: 21700ms; }\n\n.yanime-delay-21725 {\n  animation-delay: 21725ms; }\n\n.yanime-delay-21750 {\n  animation-delay: 21750ms; }\n\n.yanime-delay-21775 {\n  animation-delay: 21775ms; }\n\n.yanime-delay-21800 {\n  animation-delay: 21800ms; }\n\n.yanime-delay-21825 {\n  animation-delay: 21825ms; }\n\n.yanime-delay-21850 {\n  animation-delay: 21850ms; }\n\n.yanime-delay-21875 {\n  animation-delay: 21875ms; }\n\n.yanime-delay-21900 {\n  animation-delay: 21900ms; }\n\n.yanime-delay-21925 {\n  animation-delay: 21925ms; }\n\n.yanime-delay-21950 {\n  animation-delay: 21950ms; }\n\n.yanime-delay-21975 {\n  animation-delay: 21975ms; }\n\n.yanime-delay-22000 {\n  animation-delay: 22000ms; }\n\n.yanime-delay-22025 {\n  animation-delay: 22025ms; }\n\n.yanime-delay-22050 {\n  animation-delay: 22050ms; }\n\n.yanime-delay-22075 {\n  animation-delay: 22075ms; }\n\n.yanime-delay-22100 {\n  animation-delay: 22100ms; }\n\n.yanime-delay-22125 {\n  animation-delay: 22125ms; }\n\n.yanime-delay-22150 {\n  animation-delay: 22150ms; }\n\n.yanime-delay-22175 {\n  animation-delay: 22175ms; }\n\n.yanime-delay-22200 {\n  animation-delay: 22200ms; }\n\n.yanime-delay-22225 {\n  animation-delay: 22225ms; }\n\n.yanime-delay-22250 {\n  animation-delay: 22250ms; }\n\n.yanime-delay-22275 {\n  animation-delay: 22275ms; }\n\n.yanime-delay-22300 {\n  animation-delay: 22300ms; }\n\n.yanime-delay-22325 {\n  animation-delay: 22325ms; }\n\n.yanime-delay-22350 {\n  animation-delay: 22350ms; }\n\n.yanime-delay-22375 {\n  animation-delay: 22375ms; }\n\n.yanime-delay-22400 {\n  animation-delay: 22400ms; }\n\n.yanime-delay-22425 {\n  animation-delay: 22425ms; }\n\n.yanime-delay-22450 {\n  animation-delay: 22450ms; }\n\n.yanime-delay-22475 {\n  animation-delay: 22475ms; }\n\n.yanime-delay-22500 {\n  animation-delay: 22500ms; }\n\n.yanime-delay-22525 {\n  animation-delay: 22525ms; }\n\n.yanime-delay-22550 {\n  animation-delay: 22550ms; }\n\n.yanime-delay-22575 {\n  animation-delay: 22575ms; }\n\n.yanime-delay-22600 {\n  animation-delay: 22600ms; }\n\n.yanime-delay-22625 {\n  animation-delay: 22625ms; }\n\n.yanime-delay-22650 {\n  animation-delay: 22650ms; }\n\n.yanime-delay-22675 {\n  animation-delay: 22675ms; }\n\n.yanime-delay-22700 {\n  animation-delay: 22700ms; }\n\n.yanime-delay-22725 {\n  animation-delay: 22725ms; }\n\n.yanime-delay-22750 {\n  animation-delay: 22750ms; }\n\n.yanime-delay-22775 {\n  animation-delay: 22775ms; }\n\n.yanime-delay-22800 {\n  animation-delay: 22800ms; }\n\n.yanime-delay-22825 {\n  animation-delay: 22825ms; }\n\n.yanime-delay-22850 {\n  animation-delay: 22850ms; }\n\n.yanime-delay-22875 {\n  animation-delay: 22875ms; }\n\n.yanime-delay-22900 {\n  animation-delay: 22900ms; }\n\n.yanime-delay-22925 {\n  animation-delay: 22925ms; }\n\n.yanime-delay-22950 {\n  animation-delay: 22950ms; }\n\n.yanime-delay-22975 {\n  animation-delay: 22975ms; }\n\n.yanime-delay-23000 {\n  animation-delay: 23000ms; }\n\n.yanime-delay-23025 {\n  animation-delay: 23025ms; }\n\n.yanime-delay-23050 {\n  animation-delay: 23050ms; }\n\n.yanime-delay-23075 {\n  animation-delay: 23075ms; }\n\n.yanime-delay-23100 {\n  animation-delay: 23100ms; }\n\n.yanime-delay-23125 {\n  animation-delay: 23125ms; }\n\n.yanime-delay-23150 {\n  animation-delay: 23150ms; }\n\n.yanime-delay-23175 {\n  animation-delay: 23175ms; }\n\n.yanime-delay-23200 {\n  animation-delay: 23200ms; }\n\n.yanime-delay-23225 {\n  animation-delay: 23225ms; }\n\n.yanime-delay-23250 {\n  animation-delay: 23250ms; }\n\n.yanime-delay-23275 {\n  animation-delay: 23275ms; }\n\n.yanime-delay-23300 {\n  animation-delay: 23300ms; }\n\n.yanime-delay-23325 {\n  animation-delay: 23325ms; }\n\n.yanime-delay-23350 {\n  animation-delay: 23350ms; }\n\n.yanime-delay-23375 {\n  animation-delay: 23375ms; }\n\n.yanime-delay-23400 {\n  animation-delay: 23400ms; }\n\n.yanime-delay-23425 {\n  animation-delay: 23425ms; }\n\n.yanime-delay-23450 {\n  animation-delay: 23450ms; }\n\n.yanime-delay-23475 {\n  animation-delay: 23475ms; }\n\n.yanime-delay-23500 {\n  animation-delay: 23500ms; }\n\n.yanime-delay-23525 {\n  animation-delay: 23525ms; }\n\n.yanime-delay-23550 {\n  animation-delay: 23550ms; }\n\n.yanime-delay-23575 {\n  animation-delay: 23575ms; }\n\n.yanime-delay-23600 {\n  animation-delay: 23600ms; }\n\n.yanime-delay-23625 {\n  animation-delay: 23625ms; }\n\n.yanime-delay-23650 {\n  animation-delay: 23650ms; }\n\n.yanime-delay-23675 {\n  animation-delay: 23675ms; }\n\n.yanime-delay-23700 {\n  animation-delay: 23700ms; }\n\n.yanime-delay-23725 {\n  animation-delay: 23725ms; }\n\n.yanime-delay-23750 {\n  animation-delay: 23750ms; }\n\n.yanime-delay-23775 {\n  animation-delay: 23775ms; }\n\n.yanime-delay-23800 {\n  animation-delay: 23800ms; }\n\n.yanime-delay-23825 {\n  animation-delay: 23825ms; }\n\n.yanime-delay-23850 {\n  animation-delay: 23850ms; }\n\n.yanime-delay-23875 {\n  animation-delay: 23875ms; }\n\n.yanime-delay-23900 {\n  animation-delay: 23900ms; }\n\n.yanime-delay-23925 {\n  animation-delay: 23925ms; }\n\n.yanime-delay-23950 {\n  animation-delay: 23950ms; }\n\n.yanime-delay-23975 {\n  animation-delay: 23975ms; }\n\n.yanime-delay-24000 {\n  animation-delay: 24000ms; }\n\n.yanime-delay-24025 {\n  animation-delay: 24025ms; }\n\n.yanime-delay-24050 {\n  animation-delay: 24050ms; }\n\n.yanime-delay-24075 {\n  animation-delay: 24075ms; }\n\n.yanime-delay-24100 {\n  animation-delay: 24100ms; }\n\n.yanime-delay-24125 {\n  animation-delay: 24125ms; }\n\n.yanime-delay-24150 {\n  animation-delay: 24150ms; }\n\n.yanime-delay-24175 {\n  animation-delay: 24175ms; }\n\n.yanime-delay-24200 {\n  animation-delay: 24200ms; }\n\n.yanime-delay-24225 {\n  animation-delay: 24225ms; }\n\n.yanime-delay-24250 {\n  animation-delay: 24250ms; }\n\n.yanime-delay-24275 {\n  animation-delay: 24275ms; }\n\n.yanime-delay-24300 {\n  animation-delay: 24300ms; }\n\n.yanime-delay-24325 {\n  animation-delay: 24325ms; }\n\n.yanime-delay-24350 {\n  animation-delay: 24350ms; }\n\n.yanime-delay-24375 {\n  animation-delay: 24375ms; }\n\n.yanime-delay-24400 {\n  animation-delay: 24400ms; }\n\n.yanime-delay-24425 {\n  animation-delay: 24425ms; }\n\n.yanime-delay-24450 {\n  animation-delay: 24450ms; }\n\n.yanime-delay-24475 {\n  animation-delay: 24475ms; }\n\n.yanime-delay-24500 {\n  animation-delay: 24500ms; }\n\n.yanime-delay-24525 {\n  animation-delay: 24525ms; }\n\n.yanime-delay-24550 {\n  animation-delay: 24550ms; }\n\n.yanime-delay-24575 {\n  animation-delay: 24575ms; }\n\n.yanime-delay-24600 {\n  animation-delay: 24600ms; }\n\n.yanime-delay-24625 {\n  animation-delay: 24625ms; }\n\n.yanime-delay-24650 {\n  animation-delay: 24650ms; }\n\n.yanime-delay-24675 {\n  animation-delay: 24675ms; }\n\n.yanime-delay-24700 {\n  animation-delay: 24700ms; }\n\n.yanime-delay-24725 {\n  animation-delay: 24725ms; }\n\n.yanime-delay-24750 {\n  animation-delay: 24750ms; }\n\n.yanime-delay-24775 {\n  animation-delay: 24775ms; }\n\n.yanime-delay-24800 {\n  animation-delay: 24800ms; }\n\n.yanime-delay-24825 {\n  animation-delay: 24825ms; }\n\n.yanime-delay-24850 {\n  animation-delay: 24850ms; }\n\n.yanime-delay-24875 {\n  animation-delay: 24875ms; }\n\n.yanime-delay-24900 {\n  animation-delay: 24900ms; }\n\n.yanime-delay-24925 {\n  animation-delay: 24925ms; }\n\n.yanime-delay-24950 {\n  animation-delay: 24950ms; }\n\n.yanime-delay-24975 {\n  animation-delay: 24975ms; }\n\n.yanime-delay-25000 {\n  animation-delay: 25000ms; }\n\n.yanime-wrapper {\n  display: flex;\n  background: gold; }\n";
  styleInject(css);

  var Yanime =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Yanime, _React$Component);

    function Yanime() {
      _classCallCheck(this, Yanime);

      return _possibleConstructorReturn(this, _getPrototypeOf(Yanime).apply(this, arguments));
    }

    _createClass(Yanime, [{
      key: "render",
      value: function render() {
        var _this = this;

        var seed = this.props.seed;
        if (!seed) seed = this.props.triggerAnim;
        var delays = [];

        if (this.props.staggerDelay && this.props.items) {
          for (var i = 0; i < (this.props.items || []).length; i++) {
            var delay = this.props.staggerDelay || 0;
            delay *= 100;
            delay = Math.floor(delay / 25) * 25;
            delay *= i;
            delays.push("yanime-delay-".concat(delay));
          }

          if (this.props.staggerShuffle) {
            // delays = shuffle
            delays = lodash_shuffle(delays);
          }
        }

        var children = this.props.items.map(function (item, ind) {
          var child = _this.props.renderItem(item, ind);

          var classNames = [];
          if (child.props.className) classNames.push(child.props.className);
          if (_this.props.anim === "slide-up") classNames.push("yanime-slide-up-30");
          if (_this.props.anim === "scale-in") classNames.push("yanime-scale-in-50");
          if (_this.props.anim === "fade-in") classNames.push("yanime-fade-in");
          if (_this.props.staggerDelay) classNames.push(delays[ind]);
          return React.cloneElement(child, {
            key: "".concat(child.key, "-seed").concat(seed),
            className: classNames.join(' ')
          });
        });
        var styles = {};

        if (this.props.grid) {
          styles.flexDirection = 'row';
          styles.flexWrap = 'wrap';
        }

        if (this.props.row || this.props.horizontal) {
          styles.flexDirection = 'row';
        }

        if (this.props.column || this.props.vertical) {
          styles.flexDirection = 'column';
        }

        var classNames = ['yanime-wrapper'];
        if (this.props.className) classNames.push(this.props.className);
        return React.createElement("div", {
          className: classNames.join(' '),
          style: styles
        }, children);
      }
    }]);

    return Yanime;
  }(React.Component);

  return Yanime;

}));
