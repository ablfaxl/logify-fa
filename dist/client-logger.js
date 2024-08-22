"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk = require("chalk");
const jalaali = require("jalaali-js");
class Logger {
    level;
    constructor(level = "info") {
        this.level = level;
    }
    getPersianDate() {
        const now = new Date();
        const { jy, jm, jd } = jalaali.toJalaali(now);
        return `${jy}-${jm}-${jd}`;
    }
    log(level, message, meta) {
        const levelsOrder = ["debug", "info", "warn", "error"];
        if (levelsOrder.indexOf(level) >= levelsOrder.indexOf(this.level)) {
            const logMessage = {
                level,
                message,
                meta,
                timestamp: this.getPersianDate(),
            };
            let coloredMessage;
            switch (level) {
                case "debug":
                    coloredMessage = chalk.blue(`[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`);
                    break;
                case "info":
                    coloredMessage = chalk.green(`[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`);
                    break;
                case "warn":
                    coloredMessage = chalk.yellow(`[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`);
                    break;
                case "error":
                    coloredMessage = chalk.red(`[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`);
                    break;
                default:
                    coloredMessage = `[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`;
            }
            console.log(coloredMessage, logMessage.meta);
        }
    }
    debug(message, meta) {
        this.log("debug", message, meta);
    }
    info(message, meta) {
        this.log("info", message, meta);
    }
    warn(message, meta) {
        this.log("warn", message, meta);
    }
    error(message, meta) {
        this.log("error", message, meta);
    }
}
exports.Logger = Logger;
const clientLogger = new Logger("debug");
exports.default = clientLogger;
