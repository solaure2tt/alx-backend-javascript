interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}
const student1: Student = {
  firstName: "TSL",
  lastName: "laure",
  age: 20,
  location: "Ontario",
  }
const student1: Student = {
  firstName: "Simo",
  lastName: "Vanessa",
  age: 18,
  location: "Quebec",
  }
  const studentsList: Array<Student> = [student1, student2]
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowH: HTMLTableRowElement = thead.insertRow(0);
const cell1H: HTMLTableCellElement = rowH.insertCell(0);
const cell2H: HTMLTableCellElement = rowH.insertCell(1);

cell1H.innerHTML = "firstName";
cell2H.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});
