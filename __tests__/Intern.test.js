const Intern = require('../lib/Intern')

test('get intern school name', () => {
    const kyle = new Intern ('Kyle', '2', 'kyle@gmail.com', 'Yale')
    const internSchool = kyle.getSchool()
    expect(internSchool).toBe('Yale')
})
test('get intern role', () => {
    const kyle = new Intern ('Kyle', '2', 'kyle@gmail.com', 'Yale')
    const internRole = kyle.getRole()
    expect(internRole).toBe('Intern')
})