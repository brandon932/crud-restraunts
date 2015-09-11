// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  listRestraunts();
  $("#edit-form").hide();

  $("#restrauntForm").on("click", function(e){
    e.preventDefault();
    var restrauntName= $("#restrauntName").val();
    var restrauntType= $("#restrauntType").val();
    var restrauntRating= $("#restrauntRating").val();
    var payload = {
      name: restrauntName,
      type: restrauntType,
      rating: restrauntRating
    };
    $.post("/api/restraunts",payload, function(data){
      $("#all").html("");
      listRestraunts();
    });
  });
});

function listRestraunts(){
  console.log("in function");
  $.get('/api/restraunts', function(data){
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend(
        '<tr>'+
        '<td><a href="#">'+data[i].name+'</a></td>'+
        '<td>'+data[i].type+'</td>'+
        '<td>'+data[i].rating+'</td>'+
        '<td><a class="btn btn-danger btn-xs delete-button" id="'+data[i]._id+'" role="button">Delete</a>'+
        '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="'+data[i]._id+'" role="button">Edit</a></td>'+
        '</tr>'
      );
    }
  });
}
