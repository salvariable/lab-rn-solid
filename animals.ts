export abstract class Animal {
  abstract getInfo: () => string
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public getInfo = () => {
    return `Dog's name: ${this.name}`
  }
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  public getInfo = () => {
    return `Fish type: ${this.type}`
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
