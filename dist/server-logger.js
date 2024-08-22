"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const jalaali = require("jalaali-js");
class Logger {
    level;
    levelsOrder = ["debug", "info", "warn", "error"];
    colors = {
        debug: chalk.blue,
        info: chalk.green,
        warn: chalk.yellow,
        error: chalk.red,
    };
    constructor(level = "info") {
        this.level = level;
    }
    getPersianDate() {
        const now = new Date();
        const { jy, jm, jd } = jalaali.toJalaali(now);
        return `${jy}-${jm}-${jd}`;
    }
    log(level, message, meta) {
        if (this.shouldLog(level)) {
            const logMessage = {
                level,
                message,
                meta,
                timestamp: this.getPersianDate(),
            };
            const color = this.colors[level] || ((msg) => msg);
            const coloredMessage = color(`[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`);
            console.log(coloredMessage, logMessage.meta);
        }
    }
    shouldLog(level) {
        return (this.levelsOrder.indexOf(level) >= this.levelsOrder.indexOf(this.level));
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
const serverLogger = new Logger("debug");
exports.default = serverLogger;
