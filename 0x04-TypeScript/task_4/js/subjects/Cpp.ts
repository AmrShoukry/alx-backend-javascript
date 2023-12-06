namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    constructor(teacher: Teacher = null) {
      super(teacher);
    }
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
