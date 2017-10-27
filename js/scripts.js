// back-end magic


// var countUp = function(input){
//   var answer = [];
//   for(var i = 1; i < input; i++) {
//     answer += i + ", ";
//   }
//   return beepBoop(answer + input);
// }

// 1. It can count up to the provided number.
// 2. Numbers that *contain* a 1 are replaced with "Boop!"
// 3. Numbers that *contain* a 0 are replaced with "Beep!"
// 4. Numbers _divisible by 3_ are replaced with 'I'm sorry, Dave. I'm afraid I can't do that.'

var beepBoop = function(input){
  return input.replace(/[1]/g, "Boop!").replace(/[0]/g, "Beep!");
}

 function test(input) {
   for (var i = 1; i <= input; i++) {
     if (i % 3 == 0 ) {
       console.log("DAVE");

     } else if (i == /[1]g/) {
       console.log("Boop!")

     } else if (i == 0) {
       console.log("Beep!")
     }
     else {
       console.log(i);
     }
   }
 }


// front-end

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = parseInt($('#input').val());
    $('#results').text(test(input));
  });
});
