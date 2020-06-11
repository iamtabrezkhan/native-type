## Examples

```js
getNativeType(Symbol("foo")); // ==> symbol
function* g(i) {
  yield i;
}
getNativeType(g); // ==> generatorfunction
const it = g();
getNativeType(it); // ==> generator
getNativeType(true); // ==> boolean
getNativeType(new ArrayBuffer()); // ==> arraybuffer
getNativeType(Object.create(null)); // ==> object
getNativeType(new RegExp()); // ==> regexp
getNativeType(/abc/); // ==> regexp
getNativeType(new WeakSet()); // ==> weakset
getNativeType(new WeakMap()); // ==> weakmap
getNativeType(new Error()); // ==> error
getNativeType(new TypeError()); // ==> error
getNativeType(arguments); // ==> arguments
getNativeType(new Int8Array()); // ==> int8array
getNativeType(new Uint8Array()); // ==> uint8array
getNativeType(new Uint8ClampedArray()); // ==> uint8clampedarray
getNativeType(new Int16Array()); // ==> int16array
getNativeType(new Uint16Array()); // ==> uint16array
getNativeType(new Int32Array()); // ==> int32array
getNativeType(new Uint32Array()); // ==> uint32array
getNativeType(new Float32Array()); // ==> float32array
getNativeType(new Float64Array()); // ==> float64array
getNativeType([1, 2, 3][Symbol.iterator]()); // ==> arrayiterator
getNativeType(new Map()[Symbol.iterator]()); // ==> mapiterator
getNativeType(new Set()[Symbol.iterator]()); // ==> setiterator
getNativeType("abc"[Symbol.iterator]()); // ==> stringiterator
```
