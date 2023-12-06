interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Amr",
  lastName: "Shoukry",
  age: 20,
  location: "Egypt",
};
const studentTwo: Student = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  location: "Palestine",
};

const studentsList: Student[] = [studentOne, studentTwo];

const table: HTMLTableElement = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
document.body.appendChild(table);

for (let student of studentsList) {
  let row: HTMLTableRowElement = document.createElement("tr");
  let data1: HTMLTableCellElement = document.createElement("td");
  let data2: HTMLTableCellElement = document.createElement("td");
  data1.style.border = "1px solid black";
  data2.style.border = "1px solid black";
  data1.innerHTML = student.firstName;
  data2.innerHTML = student.location;

  table.appendChild(row);
  row.appendChild(data1);
  row.appendChild(data2);
}
