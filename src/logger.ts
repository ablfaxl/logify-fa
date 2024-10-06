import winston from "winston";
import jalaali from "jalaali-js";

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

winston.addColors(levelColors);

const createLogger = (options: { level?: string; filename?: string } = {}) => {
  const { level = "info", filename = "logger/logs.log" } = options;

  const getJalaaliDate = () => {
    const now = new Date();
    const { jy, jm, jd } = jalaali.toJalaali(now);
    return `${jy}-${jm}-${jd}`;
  };

  return winston.createLogger({
    levels,
    level,
    format: winston.format.combine(
      winston.format.timestamp({ format: getJalaaliDate }),
      winston.format.colorize({ all: true }),
      winston.format.printf(
        ({ level, message, timestamp }) =>
          `[${timestamp}] [${level}]: ${message}`
      )
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename }),
    ],
  });
};

export default createLogger;
