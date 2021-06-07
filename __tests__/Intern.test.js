const Intern = require('./../lib/Intern');

describe('Intern class', () => {
    const e = new Intern(4, 'Kelly Hayes', 'hayesloud@gmail.com', 'UT Austin');

    it('Has a school attribute', () => {
        expect(e.school).toBe('UT Austin');
    });

    it('Can get role via getRole()', () => {
        expect(e.getRole()).toBe('Intern');
    });

    it('Can get school via getSchool()', () => {
        expect(e.getSchool()).toBe('UT Austin');
    });

});