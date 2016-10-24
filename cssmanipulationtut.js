/*Css margin left*/

$(document).ready(function() {
  $("h1").mouseenter(function() {
    $(this).css("margin-left", "50px");
  });
});

/*multiple properties*/
$(document).ready(function() {
  $("h1").mouseenter(function() {
    $(this).css({
      "margin-left": "+=50px",
      "background-color": "red"
    });
  });
});


