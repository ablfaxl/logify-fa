"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var chalk_1 = __importDefault(require("chalk"));
var jalaali_js_1 = __importDefault(require("jalaali-js"));
var Logger = /** @class */ (function () {
    function Logger(level) {
        if (level === void 0) { level = "info"; }
        this.level = level;
    }
    Logger.prototype.getPersianDate = function () {
        var now = new Date();
        var _a = jalaali_js_1.default.toJalaali(now), jy = _a.jy, jm = _a.jm, jd = _a.jd;
        return "".concat(jy, "-").concat(jm, "-").concat(jd);
    };
    Logger.prototype.log = function (level, message, meta) {
        var levelsOrder = ["debug", "info", "warn", "error"];
        if (levelsOrder.indexOf(level) >= levelsOrder.indexOf(this.level)) {
            var logMessage = {
                level: level,
                message: message,
                meta: meta,
                timestamp: this.getPersianDate(),
            };
            var coloredMessage = void 0;
            switch (level) {
                case "debug":
                    coloredMessage = chalk_1.default.blue("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                case "info":
                    coloredMessage = chalk_1.default.green("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                case "warn":
                    coloredMessage = chalk_1.default.yellow("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                case "error":
                    coloredMessage = chalk_1.default.red("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                default:
                    coloredMessage = "[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message);
            }
            console.log(coloredMessage, logMessage.meta);
        }
    };
    Logger.prototype.debug = function (message, meta) {
        this.log("debug", message, meta);
    };
    Logger.prototype.info = function (message, meta) {
        this.log("info", message, meta);
    };
    Logger.prototype.warn = function (message, meta) {
        this.log("warn", message, meta);
    };
    Logger.prototype.error = function (message, meta) {
        this.log("error", message, meta);
    };
    return Logger;
}());
exports.Logger = Logger;
var clientLogger = new Logger("debug");
exports.default = clientLogger;
