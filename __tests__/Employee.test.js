const Employee = require('./../lib/Employee');

describe('Employee class', () => {
    const e = new Employee(1, 'Valerie Michalecki', 'valerie227@gmail.com');

    it('Creates an employee object', () => {
        expect(typeof (e)).toBe('object');
    })

    it('Has an id attribute', () => {
        expect(e.id).toBe(1);
    });

    it('Has a name attribute', () => {
        expect(e.name).toBe('Valerie Michalecki');
    });

    it('Has an email attribute', () => {
        expect(e.email).toBe('valerie227@gmail.com');
    });

    it('Can get ID via getId()', () => {
        expect(e.getId()).toBe(1);``
    });

    it('Can get name via getName()', () => {
        expect(e.getName()).toBe('Valerie Michalecki');
    });

    it('Can get email via getEmail()', () => {
        expect(e.getEmail()).toBe('valerie227@gmail.com');
    });

    it('Can get role via getRole()', () => {
        expect(e.getRole()).toBe('Employee');
    });
});