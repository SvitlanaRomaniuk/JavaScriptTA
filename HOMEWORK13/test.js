// 1. 
const product = require('./index');
describe( "Multiple tests", () => {
    test( "0.1 + 0.2 is 0.3", () => {
        expect(product(0.1,0.2)).toBeCloseTo(0.3);
});
})
