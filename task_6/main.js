function daySalary() {
    let hourlySalary = parseFloat(prompt("what is the hourly salary?"));
    let workHour = parseFloat(prompt("how many hours you worked?"));
    let totalSalary;
    let salary = parseFloat(workHour * hourlySalary);
    if (workHour == 7) {
        console.log(salary);
    } else if (workHour > 7 && workHour == 9) {
        console.log(totalSalary = parseFloat(salary + (salary * .50)));
    } else if (workHour > 9) {
        console.log(totalSalary = parseFloat(salary + salary));
    }
}
daySalary();