/* teacher interface */
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

/* Directors interface */
export interface Directors extends Teacher {
    numberOfReports: number;
}

/* Printeacher function interface and function */
export interface printTeacherFunction {
    (arg1: string, arg2: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

/* StudentClass and constructor interfaces */
export interface StudentType {
    firstName: string;
    lastName: string;
    workOnHomeWork(): string;
    displayName(): string;
}

export interface StudentTypeConstructor {
    new (firstName: string, lastName: string): StudentType;
}

export class StudentClass implements StudentType {
    constructor(
        public firstName: string,
        public lastName: string,
    ) {}
    workOnHomeWork(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("James", "Clarence");
console.log(student);

export { printTeacher };
