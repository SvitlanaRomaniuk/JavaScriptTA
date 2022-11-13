// 4.
const foodFilter = require('./food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

test('Test food filter by price', () => {
    const min = 12;
    const max = 40;
    const filterFood = foodFilter.filterFoodPrice(food, min, max);

    expect(filterFood).toHaveLength(3);
    // expect(filterFood).toContainEqual({ name: 'pepper', price: 27 });
    expect(filterFood).toEqual([{ kind: 'bred', price: 16 }, { kind: 'pepper', price: 27 }, { kind: 'banana', price: 32 }]);
    expect(filterFood[0].price).toBeGreaterThanOrEqual(min);
    expect(filterFood[2].price).toBeLessThanOrEqual(max);
    expect(filterFood).not.toContainEqual({ kind: 'lemon', price: 50 });
    expect(filterFood[1]).toEqual({ kind: 'pepper', price: 27 });
    expect(filterFood[1]).toHaveProperty('price', 27);

});