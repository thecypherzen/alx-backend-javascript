/* teacher interface */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

/* Directors interface */
interface Directors extends Teacher {
    numberOfReports: number;
}

/* Printeacher function interface and function */
interface printTeacherFunction {
    (arg1: string, arg2: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

export { Directors, printTeacher, printTeacherFunction, Teacher };
