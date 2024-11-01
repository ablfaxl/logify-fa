import fs from "fs";
import path from "path";
import createLogger from "../logger";

const logDirectory = path.join(__dirname, "../../logger");
const logFilePath = path.join(logDirectory, "test.log");

const ensureLogDirectoryExists = () => {
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
  }
};

describe("Logger functionality", () => {
  beforeAll(() => {
    ensureLogDirectoryExists();
    if (fs.existsSync(logFilePath)) {
      fs.unlinkSync(logFilePath);
    }
  });

  afterAll(() => {
    if (fs.existsSync(logFilePath)) {
      fs.unlinkSync(logFilePath);
    }
  });

  it("should create a logger with default settings", () => {
    const logger = createLogger();
    expect(logger).toBeDefined();
    expect(logger.level).toEqual("info");
  });

  it("should log messages according to the specified level", () => {
    const logger = createLogger({ level: "debug", filename: logFilePath });
    logger.info("This is an info message");
    logger.debug("This is a debug message");

    // Wait a moment for the file writes to complete
    setTimeout(() => {
      const logContents = fs.readFileSync(logFilePath, "utf-8");
      expect(logContents).toContain("This is an info message");
      expect(logContents).toContain("This is a debug message");
    }, 500);
  });

  it("should not log messages below the specified level", () => {
    const logger = createLogger({ level: "warn", filename: logFilePath });
    logger.info("This info message should not be logged");
    logger.warn("This warn message should be logged");

    setTimeout(() => {
      const logContents = fs.readFileSync(logFilePath, "utf-8");
      expect(logContents).not.toContain(
        "This info message should not be logged"
      );
      expect(logContents).toContain("This warn message should be logged");
    }, 500);
  });
});
