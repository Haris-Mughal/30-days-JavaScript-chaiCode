// Activity 1: Class Definition
// Task 1:
class Person {
  constructor(name, age, firstName, lastName) {
    this.name = name;
    this.age = age;

    this.firstName = firstName;
    this.lastName = lastName;
  }

  getGreeting() {
    return `Assalamualikum, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Task 2:
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  // Activity 3: - Task 5:
  static genericGreeting() {
    return "Assalamualikum, this is a generic greeting message.";
  }

  // Activity 4: - Task 7:
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Activity 4: - Task 8:
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Haris Mughl", 18);
console.log(person1.getGreeting());

person1.updateAge(19);

console.log(Person.genericGreeting());

console.log(person1.fullName);

person1.fullName = "Haris Mughal";
console.log(person1.fullName);

// Activity 2: Class Inheritance
// Task 3:
// using uper class
class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;

    // Activity 3: - Task 6:
    Student.studentCount++;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  // Task 4:
  getGreeting() {
    return `Assalamualikum, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
  }
}

const student1 = new Student("mehak", 19, "A-2055911");
console.log(student1.getGreeting());

console.log(`Total number of students: ${Student.studentCount}`);
