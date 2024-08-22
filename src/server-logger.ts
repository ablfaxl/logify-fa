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
  private levelsOrder: LogLevel[] = ["debug", "info", "warn", "error"];
  private colors: Record<LogLevel, (msg: string) => string> = {
    debug: chalk.blue,
    info: chalk.green,
    warn: chalk.yellow,
    error: chalk.red,
  };

  constructor(level: LogLevel = "info") {
    this.level = level;
  }

  private getPersianDate(): string {
    const now = new Date();
    const { jy, jm, jd } = jalaali.toJalaali(now);
    return `${jy}-${jm}-${jd}`;
  }

  private log(level: LogLevel, message: string, meta?: T): void {
    if (this.shouldLog(level)) {
      const logMessage: LogMessage<T> = {
        level,
        message,
        meta,
        timestamp: this.getPersianDate(),
      };

      const color = this.colors[level] || ((msg: string) => msg);
      const coloredMessage = color(
        `[${logMessage.timestamp}] [${logMessage.level.toUpperCase()}]: ${
          logMessage.message
        }`
      );

      console.log(coloredMessage, logMessage.meta);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return (
      this.levelsOrder.indexOf(level) >= this.levelsOrder.indexOf(this.level)
    );
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

const serverLogger = new Logger<unknown>("debug");
export default serverLogger;
