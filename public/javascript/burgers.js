$(function(){
    $(".devour").on("click", function(e){
        // console.log("PUT HIT front end--------Good")
        let id= $(this).data("id");
        
        let newDevour = $(this).data("newdevour");
        
        let newDevourState = {
            devoured: newDevour
        };

        console.log("newDevour " + newDevour);
        console.log("newDevourState " + JSON.stringify(newDevourState)); 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            newDevour: newDevour
        }).then(
            function(){
                console.log("change devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(e){
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: 0
        };

        console.log("frontend burgers.js")
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        );
    });
});