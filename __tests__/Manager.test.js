const Manager = require('./../lib/Manager');

describe('Manager class', () => {
    const e = new Manager(2, 'Hailey Tappan', 'woohaileyshere@gmail.com', '516-382-2416');

    it('Has an office number attribute', () => {
        expect(e.officeNumber).toBe('516-382-2416');
    });

    it('Can get role via getRole()', () => {
        expect(e.getRole()).toBe('Manager');
    });

    it('Can get office number via getOfficeNumber()', () => {
        expect(e.getOfficeNumber()).toBe('516-382-2416');
    });

});