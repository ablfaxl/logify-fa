type LogLevel = "info" | "warn" | "error" | "debug";

const COLORS: Record<LogLevel, string> = {
  info: "\x1b[36m", // cyan
  warn: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
  debug: "\x1b[35m", // magenta
};
const RESET = "\x1b[0m";

export class LogifyFa {
  private colorize: boolean;

  constructor(colorize = true) {
    this.colorize = colorize;
  }

  private pad(num: number): string {
    return num.toString().padStart(2, "0");
  }

  // Jalali conversion adapted from jalaali-js (MIT)
  private toJalali(
    gy: number,
    gm: number,
    gd: number
  ): [number, number, number] {
    const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let jy: number;
    let jm: number;
    let jd: number;

    let gy2 = gm > 2 ? gy + 1 : gy;
    let days =
      355666 +
      365 * gy +
      Math.floor((gy2 + 3) / 4) -
      Math.floor((gy2 + 99) / 100) +
      Math.floor((gy2 + 399) / 400) +
      gd +
      g_d_m[gm - 1];
    jy = -1595 + 33 * Math.floor(days / 12053);
    days %= 12053;
    jy += 4 * Math.floor(days / 1461);
    days %= 1461;
    if (days > 365) {
      jy += Math.floor((days - 1) / 365);
      days = (days - 1) % 365;
    }
    if (days < 186) {
      jm = 1 + Math.floor(days / 31);
      jd = 1 + (days % 31);
    } else {
      jm = 7 + Math.floor((days - 186) / 30);
      jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
  }

  private getPersianDate(): string {
    const now = new Date();
    const [jy, jm, jd] = this.toJalali(
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate()
    );
    const hh = this.pad(now.getHours());
    const mm = this.pad(now.getMinutes());
    const ss = this.pad(now.getSeconds());
    return `${jy}/${this.pad(jm)}/${this.pad(jd)} ${hh}:${mm}:${ss}`;
  }

  private formatMessage(level: LogLevel, msg: string): string {
    const dateStr = this.getPersianDate();
    if (this.colorize) {
      const color = COLORS[level];
      return `${color}[${dateStr}] [${level.toUpperCase()}]${RESET} ${msg}`;
    } else {
      return `[${dateStr}] [${level.toUpperCase()}] ${msg}`;
    }
  }

  info(msg: string): void {
    console.log(this.formatMessage("info", msg));
  }

  warn(msg: string): void {
    console.warn(this.formatMessage("warn", msg));
  }

  error(msg: string): void {
    console.error(this.formatMessage("error", msg));
  }

  debug(msg: string): void {
    console.debug(this.formatMessage("debug", msg));
  }
}

export const logger = new LogifyFa();
