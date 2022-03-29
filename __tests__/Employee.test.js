const Employee = require('../lib/Employee')

test('get employee name', () => {
    const dave = new Employee('Dave', '1', 'dave@gmail.com')
    const employeeName = dave.getName()
    expect(employeeName).toBe('Dave')
})
test('get employee id', () => {
    const dave = new Employee('Dave', '1', 'dave@gmail.com')
    const employeeId = dave.getId()
    expect(employeeId).toBe('1')
})
test('get employee email', () => {
    const dave = new Employee('Dave', '1', 'dave@gmail.com')
    const employeeEmail = dave.getEmail()
    expect(employeeEmail).toBe('dave@gmail.com')
})
test('get employee role', () => {
    const dave = new Employee('Dave', '1', 'dave@gmail.com')
    const employeeRole = dave.getRole()
    expect(employeeRole).toBe('Employee')
})