function daySalary() {
    let hourlySalary = parseFloat(prompt());
    let workHour = parseFloat(prompt());
    let totalSalary;
    let salary = parseFloat(workHour * hourlySalary);
    if (workHour == 7) {
        console.log(salary);
    } else if (workHour > 7 && workHour == 9) {
        console.log(totalSalary = parseFloat(salary + (salary * .50)));
    } else if (workHour > 9) {
        console.log(totalSalary = parseFloat(salary + (salary * (100/100))));
    }
}
daySalary();