interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome: () => string;
  getToWork: () => string;
  workDirectorTasks: () => string;
  getCoffeeBreak: () => string;

  constructor() {
    this.workFromHome = function (): string {
      return "Working from home";
    };
    this.getCoffeeBreak = function () {
      return "Cannot have a break";
    };
    this.workDirectorTasks = function () {
      return "Getting to director tasks";
    };
    this.getToWork = function () {
      return "Getting a coffee break";
    };
  }
}

class Teacher implements TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
  constructor() {
    this.workFromHome = function () {
      return "Cannot work from home";
    };
    this.getCoffeeBreak = function () {
      return "Cannot have a break";
    };
    this.workTeacherTasks = function () {
      return "Getting to work";
    };
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
}

function isDirector(employee: any): boolean {
  return employee instanceof Director;
}

function executeWork(employee: any): void {
  return isDirector(employee)
    ? console.log(employee.workDirectorTasks())
    : console.log(employee.workTeacherTasks());
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
