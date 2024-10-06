"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../logger"));
const logDirectory = path_1.default.join(__dirname, "../../logger");
const logFilePath = path_1.default.join(logDirectory, "test.log");
const ensureLogDirectoryExists = () => {
    if (!fs_1.default.existsSync(logDirectory)) {
        fs_1.default.mkdirSync(logDirectory, { recursive: true });
    }
};
describe("Logger functionality", () => {
    beforeAll(() => {
        ensureLogDirectoryExists();
        if (fs_1.default.existsSync(logFilePath)) {
            fs_1.default.unlinkSync(logFilePath);
        }
    });
    afterAll(() => {
        if (fs_1.default.existsSync(logFilePath)) {
            fs_1.default.unlinkSync(logFilePath);
        }
    });
    it("should create a logger with default settings", () => {
        const logger = (0, logger_1.default)();
        expect(logger).toBeDefined();
        expect(logger.level).toEqual("info");
    });
    it("should log messages according to the specified level", () => {
        const logger = (0, logger_1.default)({ level: "debug", filename: logFilePath });
        logger.info("This is an info message");
        logger.debug("This is a debug message");
        // Wait a moment for the file writes to complete
        setTimeout(() => {
            const logContents = fs_1.default.readFileSync(logFilePath, "utf-8");
            expect(logContents).toContain("This is an info message");
            expect(logContents).toContain("This is a debug message");
        }, 500);
    });
    it("should not log messages below the specified level", () => {
        const logger = (0, logger_1.default)({ level: "warn", filename: logFilePath });
        logger.info("This info message should not be logged");
        logger.warn("This warn message should be logged");
        setTimeout(() => {
            const logContents = fs_1.default.readFileSync(logFilePath, "utf-8");
            expect(logContents).not.toContain("This info message should not be logged");
            expect(logContents).toContain("This warn message should be logged");
        }, 500);
    });
});
//# sourceMappingURL=logger.test.js.map