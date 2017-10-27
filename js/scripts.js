//back-end//

//range of numbers, add commas or spaces later!//
//WORKS DO NOT TOUCH//
var countUp = function(input){
  var answer = [];
  for(var i = 1; i < input; i++) {
    answer += i;
  }
  return answer + input;
}

//Numbers that contain a 1 are replaced with "Boop!"//
var beepBoop = function(input){

  return input.replace(/[0]/g, "Boop!")

}


//Numbers that contain a 0 are replaced with "Beep!"//
// var beepFunc = function(input){
//   if (input.includes(0)){
//     return input.replace(/[0+]/g, "Beep!")
//   }
// }

//function to run all functions//
// var resultsFunc = function(input){
//   return boopFunc(input)
// }

//front-end//

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = $('#input').val();
    $('#results').text(beepBoop(input));
  });
});
