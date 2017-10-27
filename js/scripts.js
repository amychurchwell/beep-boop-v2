//back-end//

//range of numbers, add commas or spaces later!//
//join is not working?//
var countUp = function(input){
  var answer = [];
  for(var i = 1; i < input; i++) {
    answer += i;
  }
  return answer + input;
}

//Numbers that contain a 1 are replaced with "Boop!"//
var boop = function(input){
  return input.replace(/[1]/g, "Boop!");
}

//front-end//

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = $('#input').val();
    $('#results').text(boop(input));
  });
});
