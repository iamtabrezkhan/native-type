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
  });
});
