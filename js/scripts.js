// DONE 1. It can count up to the provided number.
// DONE 2. Numbers divisible by 3 are replaced with 'I'm sorry, Dave. I'm afraid I can't do that.'
// 3. Numbers that contain a 1 are replaced with "Boop!"
// 4. Numbers that contain a 0 are replaced with "Beep!"

 function test(input) {

   var results = [];
   for (var i = 1; i <= input; i++) {

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

// front-end

$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    var input = parseInt($('#input').val());
    $('.card').slideDown();
    $('#results').text(test(input));

    if (input >= 100){
      $('#length').show();
    }else{
      $('#length').hide();
    }
  });
});
