/** definie an interface */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: "James",
    lastName: "Jackson",
    location: "Nigeria",
    age: 32,
};

const studentB = {
    firstName: "Clarity",
    lastName: "Onyenwe",
    location: "Ghana",
    age: 24,
};

console.log(typeof studentB);
const studentsList = [studentA, studentB];
const table = document.createElement("table");
let rows = "";
studentsList.forEach((student) => {
    rows += `
    <tr>
		<td>${student.firstName}</td>
		<td>${student.location}</td>
    </tr>
	`;
});
table.innerHTML = rows;
