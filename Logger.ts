export interface Logger {
  log(message: string): void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  // TODO: Fill in the missing code to adhere to the Dependency Inversion Principle
}