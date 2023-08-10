export interface Printer {
  printContent(content: string): void;
}

export class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}