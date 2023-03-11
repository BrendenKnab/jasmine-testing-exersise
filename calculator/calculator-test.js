
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:20000, years:20, rate:3})).toEqual('110.92');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:2000,years:8,rate:2.49})).toEqual('23.00');
});
