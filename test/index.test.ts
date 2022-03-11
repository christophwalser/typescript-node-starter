import { add, main } from '../src/index'

describe('Index module', () => {
    it('should return 4 on calling add function', () => {
        expect(add(2, 2)).toBe(4);
    });

    it('should return 1 on calling main function', () => {
        expect(main()).toBe(1);
    }); 
});