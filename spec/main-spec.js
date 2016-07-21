'use strict';
var sum1 = require('../main/main.js');

describe('findOddNumber', ()=> {
    const array = [1, 2, 3, 4, 5];

    it('should findOddNumer', ()=> {
        const expectOddArray = [1, 3, 5];

        const oddArray = sum1.findOddArray(array);

        expect(oddArray).toEqual(expectOddArray);
    });

    it('should generate oddSumArray', ()=> {

        const oddArray = [1, 3, 5];
        const expectoddSumArray = [1, 9, 25];

        const oddSumArray = sum1.generateOddSumArray(oddArray);

        expect(oddSumArray).toEqual(expectoddSumArray);
    });

    it("should calculate sum", ()=> {

        const oddSumArray = [1, 9, 25];
        const expectSum = 35;

        const sum = sum1.calculateSum(oddSumArray);
        expect(sum).toEqual(expectSum);
    });

    it("should print sum", ()=> {
        spyOn(console, 'log');
        const sum = 35;
        sum1.printSum(sum);

        expect(console.log).toHaveBeenCalledWith(sum);
    });
});