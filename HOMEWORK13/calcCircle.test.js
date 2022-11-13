// 3.
const circle = require('./calcCircle');
test('Verify function Circle length', () => {
    expect(circle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    expect(circle.getCircleLength()).toBeNaN();
});
test('Verify function Circle area', () => {
    expect(circle.getCircleArea(9)).toBeCloseTo(254.47);
    expect(circle.getCircleArea()).toBeNaN();
});
