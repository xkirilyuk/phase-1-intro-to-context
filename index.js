

function createEmployeeRecord(employee){
    return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event){

}




// function createTimeOutEvent
// function hoursWorkedOnDate
// function function wagesEarnedOnDate
// function allWagesFor
// function calculatePayroll