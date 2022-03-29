const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager')

test('get manager role', () => {
    const steve = new Manager('Steve', '3', 'steve@gmail.com', '1')
    managerRole = steve.getRole()
    expect(managerRole).toBe('Manager')
})