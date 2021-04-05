let $list = $(".movie-list");

$("#form-submit").click(function(event){
    event.preventDefault();
    let movieName = $("#movie-name").val();
    let movieRating = $("#movie-rating").val();
    let $deleteButton = $("<button>");
    $deleteButton.html('<button style="height:25px"> Delete Movie </button>')
    let $newLi = $("<li>").text(`You Gave ${movieName} a ${movieRating} out of 10`);    
    $newLi.appendTo($list);
    $deleteButton.appendTo($newLi);
    $deleteButton.click(function(){
        $(this).parent().remove();
    })
});

