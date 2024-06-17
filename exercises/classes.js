"use strict";

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  // The getFullName() method returns a string that combines
  // the first and last names
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getIntro() {
    let intro =
      "Hi! I'm " + this.getFullName() + " and I am a " + this.jobTitle;
    return intro;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
console.log(employee1.getIntro());


employee1.promote("Sr. Graphic Artist", 46.75);
// console.log(`Employee ${employee1.getFullName()} created`);
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);
