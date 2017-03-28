import { expect } from 'chai';
import { describe, it } from 'mocha';
import deepCopy from './deepCopy';

describe('Deep Copy util func', () => {
    const testObject = {
        test: 'test',
        blah: 123
    };
    it('should create a deep copy of an object', () => {
        expect(deepCopy(testObject)).to.deep.equal(testObject);
        expect(deepCopy(testObject)).to.not.equal(testObject);
    });
    it('should create a deep copy of an array', () => {
        const testArray = [testObject];
        expect(deepCopy(testArray)).to.deep.equal(testArray);
        expect(deepCopy(testArray)).to.not.equal(testArray);
    });
});
