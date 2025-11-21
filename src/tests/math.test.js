const { sum } = require("../math");

test("sum 2+3 = 5", () => {
    expect(sum(2, 3)).toBe(5);
});
const { avg } = require("../math");

test("avg 2+3+4 /3 = 3", () => {
    expect(avg(2, 3, 4)).toBe(3);
});
const { mod } = require("../math");
test("mod (2 + 3) % 10 = 5", () => {
    expect(mod(2, 3)).toBe(5);
});

