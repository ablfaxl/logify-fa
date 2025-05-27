export declare class LogifyFa {
    private colorize;
    constructor(colorize?: boolean);
    private pad;
    private toJalali;
    private getPersianDate;
    private formatMessage;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    debug(msg: string): void;
}
export declare const logger: LogifyFa;
