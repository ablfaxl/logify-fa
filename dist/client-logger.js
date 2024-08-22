import chalk from "chalk";
import jalaali from "jalaali-js";
var Logger = /** @class */ (function () {
    function Logger(level) {
        if (level === void 0) { level = "info"; }
        this.level = level;
    }
    Logger.prototype.getPersianDate = function () {
        var now = new Date();
        var _a = jalaali.toJalaali(now), jy = _a.jy, jm = _a.jm, jd = _a.jd;
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
                    coloredMessage = chalk.blue("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                case "info":
                    coloredMessage = chalk.green("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                case "warn":
                    coloredMessage = chalk.yellow("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
                    break;
                case "error":
                    coloredMessage = chalk.red("[".concat(logMessage.timestamp, "] [").concat(logMessage.level.toUpperCase(), "]: ").concat(logMessage.message));
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
var clientLogger = new Logger("debug");
export default clientLogger;
//# sourceMappingURL=client-logger.js.map