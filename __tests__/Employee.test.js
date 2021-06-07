const Employee = require('./../lib/Employee');

describe('Employee class', () => {
    const e = new Employee(1, 'Scott', 'sbrunz@aol.com');
    it('Has an id attribute', () => {
        expect(e.id).toBe(1);
    });

    it('Has a name attribute', () => {
        expect(e.name).toBe('Scott');
    });

    it('Has a email attribute', () => {
        expect(e.email).toBe('sbrunz@aol.com');
    });

    it('Can get id via getId()', () => {
        expect(e.getId()).toBe(1);
    });

    it('Can get name via getName()', () => {
        expect(e.getName()).toBe('Scott');
    });

    it('Can get email via getEmail()', () => {
        expect(e.getEmail()).toBe('sbrunz@aol.com');
    });

    it('Can get role via getRole()', () => {
        expect(e.getRole()).toBe('Employee');
    });
});