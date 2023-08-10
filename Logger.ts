export interface Logger {
  log(message: string): void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to database: ${message}`);
  }
}