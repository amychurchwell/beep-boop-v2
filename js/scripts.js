// DONE 1. It can count up to the provided number.
// DONE 2. Numbers divisible by 3 are replaced with 'I'm sorry, Dave. I'm afraid I can't do that.'
// 3. Numbers that contain a 1 are replaced with "Boop!"
// 4. Numbers that contain a 0 are replaced with "Beep!"
function Shit(number) {
  this.number1 = number;
}

 Shit.prototype.test = function() {
   var results = [];
   for (var i = 1; i <= this.number1; i++) {

     if (i % 3 == 0 ) {
       results.push("I'm sorry, Dave. I'm afraid I can't do that.");
     } else if (i.toString().match(/0/)) {
       results.push("Beep!")

     } else if (i.toString().match(/1/)) {
       results.push("Boop!")

     } else {
       results.push(i);
     }
   }
   return results;
 }

exports.shitModule = Shit;
