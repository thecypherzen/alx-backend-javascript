/* This code was modified to fix bugs. Watchout out for comments
 *  HolbertonClass used to be defined here, but now it's imported
 */

import HolbertonClass from './9-holberton_class';

/* this used to be at the bottom */
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    /* eslint no-underscore-dangle: [
      "error", {
          "allow": ["_firstName", "_lastName", "_holbertonClass"]
       }
      ]
    */
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    /* all 'this' here were 'self' */
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

/* these holbetton instances used to be at the top */
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');
/* these ones didn't change */
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

/* here we had export const listOfStudents ...  */
const listOfStudents = [student1, student2, student3, student4, student5];

export { HolbertonClass };
export default listOfStudents;
