/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employee.timeInEvents.push({
        type: 'TimeIn',
        date,
        hour: parseInt(hour, 10)
    });
    return employee;
}

function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({
        type: 'TimeOut',
        date,
        hour: parseInt(hour, 10)
    });
    return employee;
}

function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({
        type: 'TimeOut',
        date,
        hour: parseInt(hour, 10)
    });
    return employee;
}

function hoursWorkedOnDate(employee, workDate) {
    const timeIn = employee.timeInEvents.find(event => event.date === workDate);
    const timeOut = employee.timeOutEvents.find(event => event.date === workDate);
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(employee, workDate) {
    const hoursWorked = hoursWorkedOnDate(employee, workDate);
    return hoursWorked * employee.payPerHour;
}

function allWagesFor(employee) {
    const dates = employee.timeInEvents.map(event => event.date);
    const totalWages = dates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    return totalWages;
}
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
}