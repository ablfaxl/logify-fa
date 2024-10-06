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

// Helper function to check if the environment is Node.js
const isNode = () => {
  return (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  );
};

const getJalaaliDate = () => {
  const now = new Date();
  const { jy, jm, jd } = jalaali.toJalaali(now);
  return `${jy}-${jm}-${jd}`;
};

// Create a logger that adapts to the environment
const createLogger = (options: { level?: string; filename?: string } = {}) => {
  const { level = "info" } = options;

  // Use winston for Node.js environments
  if (isNode()) {
    const winston = require("winston");
    winston.addColors(levelColors);

    const transports = [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.printf(
            (info: { level: string; message: string }) =>
              `[${getJalaaliDate()}] [${info.level}]: ${info.message}`
          )
        ),
      }),
    ];

    if (options.filename) {
      transports.push(
        new winston.transports.File({ filename: options.filename })
      );
    }

    return winston.createLogger({
      levels,
      level,
      transports,
    });
  }

  // Use console for browser environments
  else {
    return {
      log: (msg: string) => console.log(`[${getJalaaliDate()}] [log]: ${msg}`),
      error: (msg: string) =>
        console.error(`[${getJalaaliDate()}] [error]: ${msg}`),
      warn: (msg: string) =>
        console.warn(`[${getJalaaliDate()}] [warn]: ${msg}`),
      info: (msg: string) =>
        console.info(`[${getJalaaliDate()}] [info]: ${msg}`),
      debug: (msg: string) =>
        console.debug(`[${getJalaaliDate()}] [debug]: ${msg}`),
    };
  }
};

export default createLogger;
