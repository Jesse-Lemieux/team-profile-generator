const Engineer = require('../lib/Engineer')

test('get engineer github name', () => {
    const richard = new Engineer ('Richard', '2', 'richard@gmail.com', 'richard-web-development')
    const engineerGit = richard.getGithub()
    expect(engineerGit).toBe('richard-web-development')
})
test('get engineer role', () => {
    const richard = new Engineer ('Richard', '2', 'richard@gmail.com', 'richard-web-development')
    const engineerRole = richard.getRole()
    expect(engineerRole).toBe('Engineer')
})