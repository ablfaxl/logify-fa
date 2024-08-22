type LogLevel = "debug" | "info" | "warn" | "error";
declare class Logger<T = unknown> {
    private level;
    private levelsOrder;
    private colors;
    constructor(level?: LogLevel);
    private getPersianDate;
    private log;
    private shouldLog;
    debug(message: string, meta?: T): void;
    info(message: string, meta?: T): void;
    warn(message: string, meta?: T): void;
    error(message: string, meta?: T): void;
}
declare const serverLogger: Logger<unknown>;
export default serverLogger;
//# sourceMappingURL=server-logger.d.ts.map