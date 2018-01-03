// front-end
var Shit = require('./../js/scripts.js').shitModule;
$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    var input = parseInt($('#input').val());
    $('.card').slideDown();
    var number = new Shit(input)
    $('#results').text(number.test());
    if (input >= 80){
      $('#length').slideDown();
    }else{
      $('#length').hide();
    }
  });
});
