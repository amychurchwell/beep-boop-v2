// back-end magic

// 1. It can count up to the provided number.
var countUp = function(input){
  var answer = [];
  for(var i = 1; i < input; i++) {
    answer += i + ", ";
  }
  return beepBoop(answer + input);
}


// 2. Numbers that *contain* a 1 are replaced with "Boop!"
// 3. Numbers that *contain* a 0 are replaced with "Beep!"
// current bug- find out how to replace entire number not just 0&1
var beepBoop = function(input){
  return input.replace(/[1]/g, "Boop!").replace(/[0]/g, "Beep!");
}

// 4. Numbers _divisible by 3_ are replaced with 'I'm sorry, Dave. I'm afraid I can't do that.'

 var divide = function(input){
   if(input % 3 === 0){
     answer = "I'm sorry, Dave. I'm afraid I can't do that."
     return answer;
   }else{
     return countUp(input);
   }
 }

 function test(input) {
   for (var i = 1; i <= input; i++) {
     if (input[i] % 3 == 0 ) {
       console.log("DAVE");
     }
     else if (input[i] == 1) {
       console.log("TEST")
     }
     else {
       console.log(i);
     }
   }
   return test(input);
 }


// front-end

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = $('#input').val();
    $('#results').text(test(input));
  });
});
