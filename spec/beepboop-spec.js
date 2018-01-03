
var Number1 = require('./../js/beep-boop.js').numberModule;
describe('Number', function() {

  it('should test whether the number contains 0', function() {
    var number1 = new Number1(10)
    console.log(number1);
    expect(number1.checkType()).toEqual(true);
  });

});
