"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jalaali_js_1 = __importDefault(require("jalaali-js"));
var levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
};
var levelColors = {
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue",
};
// Helper function to check if the environment is Node.js
var isNode = function () {
    return (typeof process !== "undefined" &&
        process.versions != null &&
        process.versions.node != null);
};
var getJalaaliDate = function () {
    var now = new Date();
    var _a = jalaali_js_1.default.toJalaali(now), jy = _a.jy, jm = _a.jm, jd = _a.jd;
    return "".concat(jy, "-").concat(jm, "-").concat(jd);
};
// Create a logger that adapts to the environment
var createLogger = function (options) {
    if (options === void 0) { options = {}; }
    var _a = options.level, level = _a === void 0 ? "info" : _a;
    // Use winston for Node.js environments
    if (isNode()) {
        var winston = require("winston");
        winston.addColors(levelColors);
        var transports = [
            new winston.transports.Console({
                format: winston.format.combine(winston.format.colorize(), winston.format.printf(function (info) {
                    return "[".concat(getJalaaliDate(), "] [").concat(info.level, "]: ").concat(info.message);
                })),
            }),
        ];
        if (options.filename) {
            transports.push(new winston.transports.File({ filename: options.filename }));
        }
        return winston.createLogger({
            levels: levels,
            level: level,
            transports: transports,
        });
    }
    // Use console for browser environments
    else {
        return {
            log: function (msg) { return console.log("[".concat(getJalaaliDate(), "] [log]: ").concat(msg)); },
            error: function (msg) {
                return console.error("[".concat(getJalaaliDate(), "] [error]: ").concat(msg));
            },
            warn: function (msg) {
                return console.warn("[".concat(getJalaaliDate(), "] [warn]: ").concat(msg));
            },
            info: function (msg) {
                return console.info("[".concat(getJalaaliDate(), "] [info]: ").concat(msg));
            },
            debug: function (msg) {
                return console.debug("[".concat(getJalaaliDate(), "] [debug]: ").concat(msg));
            },
        };
    }
};
exports.default = createLogger;
//# sourceMappingURL=logger.js.map