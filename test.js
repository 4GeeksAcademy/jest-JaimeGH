const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One dollar should be equivalent to 147.79 yen", function() {
    const dollars = 1;
    const expected = dollars * (156.5 / 1.07);
    expect(fromDollarToYen(dollars)).toBeCloseTo(expected, 2);
});

test("One euro should be 1.07 dollars", function() {
    const euros = 1;
    const expected = euros * 1.07;
    expect(fromEuroToDollar(euros)).toBeCloseTo(expected, 2);
});

test("One yen should be equivalent to approximately 0.0056 pounds", function() {
    const yen = 1;
    const expected = yen * (0.87 / 156.5);
    expect(fromYenToPound(yen)).toBeCloseTo(expected, 4);
});
