/** Info/warn logs — development only. Errors always log (no secrets). */

export function logDevInfo(message: string, meta?: Record<string, unknown>): void {
  if (process.env.NODE_ENV !== "development") return;
  if (meta) {
    console.info(message, meta);
  } else {
    console.info(message);
  }
}

export function logDevWarn(message: string, meta?: Record<string, unknown>): void {
  if (process.env.NODE_ENV !== "development") return;
  if (meta) {
    console.warn(message, meta);
  } else {
    console.warn(message);
  }
}

export function logServerError(
  message: string,
  meta?: Record<string, unknown>,
): void {
  if (meta) {
    console.error(message, meta);
  } else {
    console.error(message);
  }
}
