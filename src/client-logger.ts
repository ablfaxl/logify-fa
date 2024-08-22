const chalk = require("chalk");
const jalaali = require("jalaali-js");

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogMessage<T = unknown> {
  level: LogLevel;
  message: string;
  meta?: T;
  timestamp: string;
}

class Logger<T = unknown> {
  private level: LogLevel;

  constructor(level: LogLevel = "info") {
    this.level = level;
  }

  private getPersianDate(): string {
    const now = new Date();
    const { jy, jm, jd } = jalaali.toJalaali(now);
    return `${jy}-${jm}-${jd}`;
  }

  private log(level: LogLevel, message: string, meta?: T): void {
    const levelsOrder: LogLevel[] = ["debug", "info", "warn", "error"];
    if (levelsOrder.indexOf(level) >= levelsOrder.indexOf(this.level)) {
      const logMessage: LogMessage<T> = {
        level,
        message,
        meta,
        timestamp: this.getPersianDate(),
      };

      let coloredMessage: string;
      switch (level) {
        case "debug":
          coloredMessage = chalk.blue(
            `[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${
              logMessage.message
            }`
          );
          break;
        case "info":
          coloredMessage = chalk.green(
            `[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${
              logMessage.message
            }`
          );
          break;
        case "warn":
          coloredMessage = chalk.yellow(
            `[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${
              logMessage.message
            }`
          );
          break;
        case "error":
          coloredMessage = chalk.red(
            `[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${
              logMessage.message
            }`
          );
          break;
        default:
          coloredMessage = `[${
            logMessage.timestamp
          }] [${logMessage.level.toUpperCase()}]: ${logMessage.message}`;
      }

      console.log(coloredMessage, logMessage.meta);
    }
  }

  debug(message: string, meta?: T): void {
    this.log("debug", message, meta);
  }

  info(message: string, meta?: T): void {
    this.log("info", message, meta);
  }

  warn(message: string, meta?: T): void {
    this.log("warn", message, meta);
  }

  error(message: string, meta?: T): void {
    this.log("error", message, meta);
  }
}

const serverLogger = new Logger("debug");
export default serverLogger;
