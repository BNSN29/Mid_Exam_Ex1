const {prod} = require('./product');

describe("prod function", () =>{
  it("multiply 5*8 to equal 40", () => {
    expect(prod(5,8)).toBe(40);
  });
});