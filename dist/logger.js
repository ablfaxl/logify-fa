"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const jalaali_js_1 = __importDefault(require("jalaali-js"));
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
};
const levelColors = {
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue",
};
winston_1.default.addColors(levelColors);
const createLogger = (options = {}) => {
    const { level = "info", filename = "logger/logs.log" } = options;
    const getJalaaliDate = () => {
        const now = new Date();
        const { jy, jm, jd } = jalaali_js_1.default.toJalaali(now);
        return `${jy}-${jm}-${jd}`;
    };
    return winston_1.default.createLogger({
        levels,
        level,
        format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: getJalaaliDate }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf(({ level, message, timestamp }) => `[${timestamp}] [${level}]: ${message}`)),
        transports: [
            new winston_1.default.transports.Console(),
            new winston_1.default.transports.File({ filename }),
        ],
    });
};
exports.default = createLogger;
//# sourceMappingURL=logger.js.map