class School {
  // Array to store student objects
  private students: Student[];

  constructor() {
    this.students = [];
  }

  // Method to add a student to the array
  public addStudent(student: Student): void {
    this.students.push(student);
  }

  // Method to get the list of all students
  public getStudents(): Student[] {
    return this.students;
  }
}

// Student class with properties
class Student {
  private name: string;
  private age: number;
  private grade: number;

  constructor(name: string, age: number, grade: number) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to display student information
  public displayInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Example usage:
const school = new School();
school.addStudent(new Student('Alice', 12, 6));
school.addStudent(new Student('Bob', 13, 7));

// Log the list of students
console.log(school.getStudents().map(student => student.displayInfo()));
