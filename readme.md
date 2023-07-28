![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | RN S.O.L.I.D.

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Implement solid principles on typescript.
- Identify benefits of using the solid principles.
- Identify opportunity areas to implement solid on your next projects.

## Introduction

In this lab, we're you're going to learn more about solid principles by fixing some code implementation we have ready for you!

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install # | yarn
```

- Start the project.

```bash
npm start # | yarn start
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request so your TAs can review your work.

## Instructions

### Iteration 1: Single Responsibility Principle

The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one responsibility. This principle encourages the separation of concerns and promotes more maintainable and extensible code.

You are provided with a partially implemented `User` class. Your task is to analyze the class and its methods to determine if it follows the Single Responsibility Principle.

```typescript
class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public saveToDatabase(): void {
    // TODO: Implement the logic to save the user data to the database
  }

  public sendWelcomeEmail(): void {
    // TODO: Implement the logic to send a welcome email to the user
  }

  public validatePassword(inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return false;
  }

  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return '';
  }
}
```

**Requirements:**

1. Evaluate the `User` class and its methods to determine if it follows the Single Responsibility Principle.
2. Identify any potential areas where the class may have multiple responsibilities.
3. Suggest a refactoring plan if necessary to improve the adherence to the Single Responsibility Principle.

**Example Usage:**

```typescript
const user = new User(1, "John Doe", "john@example.com", "secretpassword");
user.saveToDatabase();
user.sendWelcomeEmail();
```

**Instructions:**

1. Analyze the `User` class and its methods to determine if it follows the Single Responsibility Principle.
2. Identify any potential areas where the class may have multiple responsibilities.
3. If needed, suggest a refactoring plan to improve adherence to the Single Responsibility Principle.


## Iteration 2: Open/Closed Principle

The Open/Closed Principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This principle encourages designing systems that can be easily extended without modifying existing code.

You are provided with a partially implemented `Shape` class and a `AreaCalculator` class. Your task is to analyze the code to determine if it follows the Open/Closed Principle.

```typescript
class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }
}

class AreaCalculator {
  public static calculateArea(shape: Shape): number {
    let area = 0;

    if (shape.getType() === "circle") {
      const circle = shape as Circle;
      area = Math.PI * circle.radius * circle.radius;
    } else if (shape.getType() === "rectangle") {
      const rectangle = shape as Rectangle;
      area = rectangle.width * rectangle.height;
    } else if (shape.getType() === "triangle") {
      const triangle = shape as Triangle;
      area = (triangle.base * triangle.height) / 2;
    }

    return area;
  }
}

class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }
}

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }
}

class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super("triangle");
    this.base = base;
    this.height = height;
  }
}
```

**Requirements:**

1. Evaluate the `Shape` and `AreaCalculator` classes to determine if they follow the Open/Closed Principle.
2. Identify any potential areas where the classes can be improved to adhere to the Open/Closed Principle.
3. Suggest a refactoring plan if necessary to make the classes more extensible without modifying existing code.

**Example Usage:**

```typescript
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = AreaCalculator.calculateArea(circle);
const rectangleArea = AreaCalculator.calculateArea(rectangle);
const triangleArea = AreaCalculator.calculateArea(triangle);

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12
```

**Instructions:**

1. Analyze the `Shape` and `AreaCalculator` classes to determine if they follow the Open/Closed Principle.
2. Identify any potential areas where the classes can be improved to adhere to the Open/Closed Principle.
3. If needed, suggest a refactoring plan to make the classes more extensible without modifying existing code.
4. Make a comment on your thoughts and if needed also add comments on your suggestions.

### Iteration 3: Liskov Substitution Principle

You are provided with a partially implemented `Animal` class and two subclasses `Dog` and `Fish`. Your task is to fill in the missing code to ensure that the classes follow the Liskov Substitution Principle.

```typescript
class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

// Example Usage:
function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish
```

**Requirements:**

1. Complete the `Animal` class to ensure it follows the Liskov Substitution Principle. The `Animal` class should have a method named `getInfo` that returns information about the animal.
2. Complete the `Dog` class to ensure it follows the Liskov Substitution Principle. The `Dog` class should implement the `getInfo` method to return information specific to a dog.
3. Complete the `Fish` class to ensure it follows the Liskov Substitution Principle. The `Fish` class should implement the `getInfo` method to return information specific to a fish.

**Instructions:**

1. Fill in the missing code in the `Animal` class to adhere to the Liskov Substitution Principle.
2. Fill in the missing code in the `Dog` class to adhere to the Liskov Substitution Principle.
3. Fill in the missing code in the `Fish` class to adhere to the Liskov Substitution Principle.
4. Test your implementation by running the provided example usage code.

### Iteration 4: Interface Segregation Principle

You are tasked to create a printing system with two types of printers: a simple printer and a fancy printer. Both printers should follow the Interface Segregation Principle. You are provided with a partially implemented `Printer` interface and the `SimplePrinter` class. Your task is to complete the code for the `FancyPrinter` class and ensure adherence to the Interface Segregation Principle.

```typescript
interface Printer {
  printContent(content: string): void;
  printFancyContent(content: string): void;
}

class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

class FancyPrinter implements Printer {
  // TODO: Fill in the missing code to adhere to the Interface Segregation Principle
}

// Example Usage:
const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.
```

**Requirements:**

1. Complete the `FancyPrinter` class to ensure it follows the Interface Segregation Principle. The `FancyPrinter` class should implement the `printContent` method to perform fancy printing.
2. Ensure that the `FancyPrinter` class does not implement any unnecessary methods.

**Instructions:**

1. Fill in the missing code in the `FancyPrinter` class to adhere to the Interface Segregation Principle.
2. Test your implementation by running the provided example usage code.

### Iteration 5: Dependency Inversion Principle

You are working on a simple logging system for a web application. You have two types of loggers: a file logger and a database logger. You want to adhere to the Dependency Inversion Principle. You are provided with a partially implemented `Logger` interface and the `FileLogger` class. Your task is to complete the code for the `DatabaseLogger` class and ensure adherence to the Dependency Inversion Principle.

```typescript
interface Logger {
  log(message: string): void;
}

class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

class DatabaseLogger implements Logger {
  // TODO: Fill in the missing code to adhere to the Dependency Inversion Principle
}

// Example Usage:
const fileLogger: Logger = new FileLogger();
const databaseLogger: Logger = new DatabaseLogger();

fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.
```

**Requirements:**

1. Complete the `DatabaseLogger` class to ensure it follows the Dependency Inversion Principle. The `DatabaseLogger` class should implement the `log` method to perform logging to the database.
2. Ensure that the `DatabaseLogger` class does not have a direct dependency on low-level modules like the database itself.

**Instructions:**

1. Fill in the missing code in the `DatabaseLogger` class to adhere to the Dependency Inversion Principle.
2. Test your implementation by running the provided example usage code.

<br><br>

**Happy coding!** 💙