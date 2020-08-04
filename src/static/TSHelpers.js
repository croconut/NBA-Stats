"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.get = function (obj, prop) {
        if (obj) {
            return obj[prop];
        }
        else {
            return undefined;
        }
    };
    return default_1;
}());
exports.default = default_1;
