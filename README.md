<h1 align="center">Welcome to native-type 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/native-type" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/native-type.svg">
  </a>
  <a href="https://github.com/iamtabrezkhan/native-type#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/iamtabrezkhan/native-type/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/iamtabrezkhan/native-type/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/iamtabrezkhan/native-type" />
  </a>
  <a href="https://twitter.com/TabrezX" target="_blank">
    <img alt="Twitter: TabrezX" src="https://img.shields.io/twitter/follow/TabrezX.svg?style=social" />
  </a>
</p>

> Use this package to detect object class or native type in JavaScript.

### 🏠 [Homepage](https://github.com/iamtabrezkhan/native-type#readme)

## Install

```sh
npm install native-type
```

## Usage

```js
const getNativeType = require("native-type");

getNativeType(""); // ==> 'string'
getNativeType(123); // ==> 'number'
getNativeType({}); // ==> 'object'
getNativeType([]); // ==> 'array'
getNativeType(undefined); // ==> 'undefined'
getNativeType(new Date()); // ==> 'date'
getNativeType(new Map()); // ==> 'map'
getNativeType(new Set()); // ==> 'set'
getNativeType(new Promise(() => {})); // ==> 'promise'
getNativeType(null); // ==> 'null'
getNativeType(9n); // ==> 'bigint'
```

## Run tests

```sh
npm run test
```

## Author

👤 **Tabrez Khan (https://github.com/iamtabrezkhan)**

- Website: https://iamtabrezkhan.github.io
- Twitter: [@TabrezX](https://twitter.com/TabrezX)
- Github: [@iamtabrezkhan](https://github.com/iamtabrezkhan)
- LinkedIn: [@iamtabrezkhan](https://linkedin.com/in/iamtabrezkhan)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/iamtabrezkhan/native-type/issues). You can also take a look at the [contributing guide](https://github.com/iamtabrezkhan/native-type/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Tabrez Khan (https://github.com/iamtabrezkhan)](https://github.com/iamtabrezkhan).<br />
This project is [MIT](https://github.com/iamtabrezkhan/native-type/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
