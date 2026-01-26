"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const sum = function () {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};
class User {
  constructor(name) {
    this.name = name;
  }
}
var _default = exports.default = User;