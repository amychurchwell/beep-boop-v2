function Number1(number1) {
  this.number = number1;
}

Number1.prototype.checkType = function() {
  if (this.number.toString().match(/0/)) {
    return true;
  }
};

exports.numberModule = Number1;
