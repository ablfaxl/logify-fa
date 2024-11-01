"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var logger_1 = __importDefault(require("../logger"));
var logDirectory = path_1.default.join(__dirname, "../../logger");
var logFilePath = path_1.default.join(logDirectory, "test.log");
var ensureLogDirectoryExists = function () {
    if (!fs_1.default.existsSync(logDirectory)) {
        fs_1.default.mkdirSync(logDirectory, { recursive: true });
    }
};
describe("Logger functionality", function () {
    beforeAll(function () {
        ensureLogDirectoryExists();
        if (fs_1.default.existsSync(logFilePath)) {
            fs_1.default.unlinkSync(logFilePath);
        }
    });
    afterAll(function () {
        if (fs_1.default.existsSync(logFilePath)) {
            fs_1.default.unlinkSync(logFilePath);
        }
    });
    it("should create a logger with default settings", function () {
        var logger = (0, logger_1.default)();
        expect(logger).toBeDefined();
        expect(logger.level).toEqual("info");
    });
    it("should log messages according to the specified level", function () {
        var logger = (0, logger_1.default)({ level: "debug", filename: logFilePath });
        logger.info("This is an info message");
        logger.debug("This is a debug message");
        // Wait a moment for the file writes to complete
        setTimeout(function () {
            var logContents = fs_1.default.readFileSync(logFilePath, "utf-8");
            expect(logContents).toContain("This is an info message");
            expect(logContents).toContain("This is a debug message");
        }, 500);
    });
    it("should not log messages below the specified level", function () {
        var logger = (0, logger_1.default)({ level: "warn", filename: logFilePath });
        logger.info("This info message should not be logged");
        logger.warn("This warn message should be logged");
        setTimeout(function () {
            var logContents = fs_1.default.readFileSync(logFilePath, "utf-8");
            expect(logContents).not.toContain("This info message should not be logged");
            expect(logContents).toContain("This warn message should be logged");
        }, 500);
    });
});
//# sourceMappingURL=logger.test.js.map