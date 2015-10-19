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
      $(':input', 'form').val('');
      $("#all").html("");
      listRestraunts();
    });
  });
});

$(document).on("click",".delete-button", function(e){
  e.preventDefault();
  $.ajax({
    method:"DELETE",
    url:"/api/restraunts/"+$(this).attr("id")
  }).done(function(data){
    $("#all").html("");
    $("#results").html("Success!");
    listRestraunts();
  });
});

$(document).on("click",".edit-button", function(){
  $.get("/api/restraunts/"+$(this).attr("id")
).done(function(data){
  $('#edit-name').val(data.name);
  $('#edit-type').val(data.type);
  $('#edit-rating').val(data.rating);
  $('.update-button').attr("id",data._id);
});
  $("#mainForm").hide();
  $("#edit-form").show();
  $("#restrauntName").val();
});

$(".update-button").on("click", function(e){
  console.log("in update");
  e.preventDefault();
  var restrauntName= $("#edit-name").val();
  var restrauntType= $("#edit-type").val();
  var restrauntRating= $("#edit-rating").val();
  var payload = {
    name: restrauntName,
    type: restrauntType,
    rating: restrauntRating
  };
  $.ajax({
    method:"PUT",
    url:"/api/restraunts/"+$(this).attr("id"),
    changeData: payload
  }).done(function(data){
    console.log(data);
  });

});

$("#cancel-edit").on("click", function(e){
  e.preventDefault();
  $("#edit-form").hide();
  $("#mainForm").show();

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
