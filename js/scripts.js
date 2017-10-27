//back-end//

//range of numbers, add commas or spaces later!//
//join is not working?//
var countUp = function(input){
  var answer = [];
  for(var i = 1; i < input; i++) {
    answer += i;
    answer.join();
  }
  return answer + input;
}


//front-end//

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = $('#input').val();
    $('#results').text(countUp(input));
  });
});
