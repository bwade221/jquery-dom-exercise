$(document).ready(function(){
    console.log("Let's get ready to party with jQuery")
});

let $images = $("img");
$images.addClass("image-center");

let $paragraph = $("article").children().last();
$paragraph.remove();

let $title = $("#title");
$title.css("font-size", (Math.random()*100))

let $ol = $("ol");
let $newLi = $("<li>");
$newLi.text("New List Item");
$newLi.appendTo($ol);

let $aside = $("aside");
$aside.empty();
let $newParagraph = $("<p>");
$newParagraph.text("Sorry for the weird list");
$newParagraph.appendTo($aside);

$('.form-control').on('keyup blur change', function() {
    let $red = $("#red").val();
    let $blue = $("#blue").val();
    let $green = $("#green").val();
    let $body = $("body");
    $body.css("background-color", `rgb(${$red},${$green},${$blue})`);
});

$("article").on("click", "#pup-in-cup", function(){
    $(this).remove();
});