interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
}

interface studentInterface {
  firstName: string;
  lastName: string;
}

interface studentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements studentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
