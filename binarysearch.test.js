const binarySearch = require("./binarySearch");

describe("Binary search tests",()=>{
    it("should be able to find a item in the list", ()=>{

        const array = [1,2,3,4,5];
        const target = 5;
        const result = binarySearch(array, 0, array.length - 1, target);

        expect(result).toBe(array.indexOf(target));
    });

    it("should be able to tell if a item is not on the list", ()=>{

        const array = [1,2,3,4];
        const target = 5;
        const result = binarySearch(array, 0, array.length - 1, target);

        expect(result).toBe(-1);
    });

    it("should be able to find a item on the left side of the array", ()=>{

        const array = [1,2,3,4,5];
        const target = 1;
        const result = binarySearch(array, 0, array.length - 1, target);

        expect(result).toBe(array.indexOf(target));
    });

});