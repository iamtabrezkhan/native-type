const getNativeType = require("..");
const assert = require("assert");

describe("native-type", () => {
  it("should get correct native types or object class", () => {
    assert.equal(getNativeType(""), "string");
    assert.equal(getNativeType(123), "number");
    assert.equal(getNativeType({}), "object");
    assert.equal(getNativeType([]), "array");
    assert.equal(getNativeType(undefined), "undefined");
    assert.equal(getNativeType(new Date()), "date");
    assert.equal(getNativeType(new Map()), "map");
    assert.equal(getNativeType(new Set()), "set");
    assert.equal(getNativeType(new Promise(() => {})), "promise");
    assert.equal(getNativeType(null), "null");
    assert.equal(getNativeType(9n), "bigint");
    assert.equal(getNativeType(Symbol), "function");
    assert.equal(
      getNativeType(() => {}),
      "function"
    );
    assert.equal(getNativeType(Symbol.iterator), "symbol");
    assert.equal(getNativeType(Symbol("foo")), "symbol");
    function* g(i) {
      yield i;
    }
    assert.equal(getNativeType(g), "generatorfunction");
    const it = g();
    assert.equal(getNativeType(it), "generator");
    assert.equal(getNativeType(true), "boolean");
    assert.equal(getNativeType(new ArrayBuffer()), "arraybuffer");
    assert.equal(getNativeType(Object.create(null)), "object");
    assert.equal(getNativeType(new RegExp()), "regexp");
    assert.equal(getNativeType(/abc/), "regexp");
    assert.equal(getNativeType(new WeakSet()), "weakset");
    assert.equal(getNativeType(new WeakMap()), "weakmap");
    assert.equal(getNativeType(new Error()), "error");
    assert.equal(getNativeType(new TypeError()), "error");
    assert.equal(getNativeType(arguments), "arguments");
    assert.equal(getNativeType(new Int8Array()), "int8array");
    assert.equal(getNativeType(new Uint8Array()), "uint8array");
    assert.equal(getNativeType(new Uint8ClampedArray()), "uint8clampedarray");
    assert.equal(getNativeType(new Int16Array()), "int16array");
    assert.equal(getNativeType(new Uint16Array()), "uint16array");
    assert.equal(getNativeType(new Int32Array()), "int32array");
    assert.equal(getNativeType(new Uint32Array()), "uint32array");
    assert.equal(getNativeType(new Float32Array()), "float32array");
    assert.equal(getNativeType(new Float64Array()), "float64array");
    assert.equal(getNativeType([1, 2, 3][Symbol.iterator]()), "arrayiterator");
    assert.equal(getNativeType(new Map()[Symbol.iterator]()), "mapiterator");
    assert.equal(getNativeType(new Set()[Symbol.iterator]()), "setiterator");
    assert.equal(getNativeType("abc"[Symbol.iterator]()), "stringiterator");
  });
});
