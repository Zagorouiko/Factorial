describe('factorial', function() {
  it("finds the factorial of 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("finds the factorial of 1", function() {
    expect(factorial(1)).to.equal(1);
  });

  it("finds the factorial of 2", function() {
    expect(factorial(2)).to.equal(2);
  })
});
