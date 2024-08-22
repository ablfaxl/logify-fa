"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var jalaali_js_1 = __importDefault(require("jalaali-js"));
var Logger = /** @class */ (function () {
    function Logger(level) {
        if (level === void 0) { level = "info"; }
        this.levelsOrder = ["debug", "info", "warn", "error"];
        this.colors = {
            debug: chalk_1.default.blue,
            info: chalk_1.default.green,
            warn: chalk_1.default.yellow,
            error: chalk_1.default.red,
        };
        this.level = level;
    }
    Logger.prototype.getPersianDate = function () {
        var now = new Date();
        var _a = jalaali_js_1.default.toJalaali(now), jy = _a.jy, jm = _a.jm, jd = _a.jd;
        return "".concat(jy, "-").concat(jm, "-").concat(jd);
    };
    Logger.prototype.log = function (level, message, meta) {
        if (this.shouldLog(level)) {
            var logMessage = {
                level: level,
                message: message,
                meta: meta,
                timestamp: this.getPersianDate(),
            };
            var color = this.colors[level] || (function (msg) { return msg; });
            var coloredMessage = color("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
            console.log(coloredMessage, logMessage.meta);
        }
    };
    Logger.prototype.shouldLog = function (level) {
        return (this.levelsOrder.indexOf(level) >= this.levelsOrder.indexOf(this.level));
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
var serverLogger = new Logger("debug");
exports.default = serverLogger;
