$(function() {

    // Button for making a new order
        $("#add").on("click", function(event) {
        event.preventDefault();

        var newOrder = $("#new-order").val();
        console.log(newOrder)
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
    $(".btn-eat").on("click", function(event) {
        event.preventDefault();
        console.log("clicked")
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
    $(".btn-delete").on("click", function(event) {
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