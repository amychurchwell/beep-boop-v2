//back-end//

//range of numbers//
var countUp = function(input){
  var answer = [];
  for(var i = 1; i < input; i++) {
    answer += i + ", ";
  }
  return beepBoop(answer + input);
}


//replaces 0's and 1's, needs to replace entire number.//
var beepBoop = function(input){
  return input.replace(/[1]/g, "Boop!").replace(/[0]/g, "Beep!");
}

//4. Numbers _divisible by 3_ are replaced with "I'm sorry, Dave. I'm afraid I can't do that."//
 var divide = function(input){
   if(input % 3){
     return "I'm sorry, Dave. I'm afraid I can't do that.";
   }else{
     return "TEST";
   }
 }


//front-end//

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = $('#input').val();
    $('#results').text(divide(input));
  });
});
