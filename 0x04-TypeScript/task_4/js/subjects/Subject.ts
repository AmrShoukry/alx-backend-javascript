namespace Subjects {
  export class Subject implements Teacher {
    firstName: string;
    lastName: string;

    constructor(public teacher: Teacher) {}

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
