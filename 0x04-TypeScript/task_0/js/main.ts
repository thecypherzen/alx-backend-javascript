/* define interface */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/* create students */
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

/* create array and table with data */
const studentsList = [studentA, studentB];
const table = document.createElement("table");
const tBody = document.createElement("tbody");
const tHead = document.createElement("thead");
const tHeadData = `
	<tr>
		<th scope="col">First Name</th>
		<th scope="col">Location</th>
	</tr>
`;
tHead.innerHTML = tHeadData;
table.appendChild(tHead);
let rows = "";
studentsList.forEach((student) => {
    rows += `
    <tr>
		<td>${student.firstName}</td>
		<td>${student.location}</td>
    </tr>
	`;
});
/* add table to document */
tBody.innerHTML = rows;
table.appendChild(tBody);
document.body.appendChild(table);
