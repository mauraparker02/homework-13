$(function() {

    // Button for making a new order
        $("#add").on("click", function(event) {
        event.preventDefault();

        var newBurger = $("#new-burger").val().trim();

        $.ajax("/api/create/" + newBurger, {
            type: "POST"
        }).then(
            function() {
            console.log("ordered");
            location.reload();
            }
        );
    });

    // Order filled 
    $(".eat").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("id");
        var newDevour = $(this).attr("data-ate");
        console.log(newDevour);
    
    $.ajax("/api/change/" + newDevour + "/" + id, {
        type: "PUT"
      }).then(
        function() {
        }
      );
      location.reload();
    });

    // Take off filled order 
    $(".delete").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-del");
    
        $.ajax("api/delete/" + id, {
          type: "DELETE"
        }).then(
          function(data) {
          }
        );
        location.reload();
      });
});