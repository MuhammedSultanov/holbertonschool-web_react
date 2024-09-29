//Teacher interface with index signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; //allows additional properties with any type
}

//Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

//Example object using Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, //required attribute specific to Directors
};

//Log the object to the console
console.log(director1);

//Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

//Example usage of printTeacher
console.log(printTeacher("John", "Doe"));

//Define the interface for the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

//Interface for the StudentClass
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

//Implement the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //Method workOnHomework returns a specific string
  workOnHomework(): string {
    return "Currently working";
  }

  //Method displayName returns the student's first name
  displayName(): string {
    return this.firstName;
  }
}
