const Engineer = require('./../lib/Engineer');

describe('Engineer class', () => {
    const e = new Engineer(3, 'Bruna Fernandes', 'beeandreoni@gmail.com', 'beeandreoni');

    it('Has a github attribute', () => {
        expect(e.github).toBe('beeandreoni');
    });

    it('Can get role via getRole()', () => {
        expect(e.getRole()).toBe('Engineer');
    });

    it('Can get GitHub via getGitHub()', () => {
        expect(e.getGitHub()).toBe('beeandreoni');
    });

});