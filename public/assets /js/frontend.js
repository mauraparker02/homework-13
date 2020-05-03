$(function() {

    // Button for making a new order
        $("#add").on("click", function(event) {
        event.preventDefault();

        var newOrder = $("#new-burger").val().trim();

        $.ajax("/api/create/" + newOrder, {
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
        var newOrderFilled = $(this).attr("data-ate");
        console.log(newOrderFilled);
    
    $.ajax("/api/change/" + newOrderFilled + "/" + id, {
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