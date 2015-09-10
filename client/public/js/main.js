// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  $("#edit-form").hide();

  $("#restrauntForm").on("click", function(e){
    e.preventDefault();
  $("#edit-form").show();

  });
});
