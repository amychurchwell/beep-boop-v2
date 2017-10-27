//back-end//


//front-end//

$(document).ready(function(){
  $('#form').submit(function(event){

    event.preventDefault();
    var input = $('#input').val();

    $('#results').text(input);
  });
});
