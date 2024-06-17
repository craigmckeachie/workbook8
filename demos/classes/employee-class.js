"use strict";

//convention: classes (blueprints) use Pascal-casing. First Letter of each word capitalized
class Employee {
  constructor() {
    this.employeeId = 1;
    this.firstName = "James";
    this.lastName = "Spader";
  }
}

// let employee = {
//   employeeId: 1,
//   firstName: "James",
//   lastName: "Spader",
// };

// let employee2 = {
//   employeeId: 1,
//   firstName: "James",
//   lastName: "Spader",
// };

let employee = new Employee();
let employee2 = new Employee();

console.log(employee);
console.log(employee);
console.log(new Employee());
console.log(new Employee());
console.log(new Employee());
console.log(new Employee());
console.log(new Employee());
console.log(new Employee());
