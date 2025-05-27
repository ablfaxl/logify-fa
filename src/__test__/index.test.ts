import { LogifyFa } from "../index";

describe("LogifyFa", () => {
  let logger: LogifyFa;

  beforeEach(() => {
    // Disable colors in tests for clean assertions
    logger = new LogifyFa(false);

    jest.useFakeTimers();
    jest.setSystemTime(new Date(2024, 0, 1, 14, 30, 45)); // Fixed time

    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "debug").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test("info logs with correct format", () => {
    logger.info("info message");
    expect(console.log).toHaveBeenCalled();
    const call = (console.log as jest.Mock).mock.calls[0][0];
    expect(call).toBe("[1402/10/11 14:30:45] [INFO] info message");
  });

  test("warn logs with correct format", () => {
    logger.warn("warn message");
    expect(console.warn).toHaveBeenCalled();
    const call = (console.warn as jest.Mock).mock.calls[0][0];
    expect(call).toBe("[1402/10/11 14:30:45] [WARN] warn message");
  });

  test("error logs with correct format", () => {
    logger.error("error message");
    expect(console.error).toHaveBeenCalled();
    const call = (console.error as jest.Mock).mock.calls[0][0];
    expect(call).toBe("[1402/10/11 14:30:45] [ERROR] error message");
  });

  test("debug logs with correct format", () => {
    logger.debug("debug message");
    expect(console.debug).toHaveBeenCalled();
    const call = (console.debug as jest.Mock).mock.calls[0][0];
    expect(call).toBe("[1402/10/11 14:30:45] [DEBUG] debug message");
  });
});
