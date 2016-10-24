/*add to selection */

$(document).ready(function() {
  $("h1").click(function() {
    $(this).add("p").css("background-color", "red");
  });
});

/*remove selections*/
$(document).ready(function() {
  $("h1").click(function() {
    $("p").not("p.second").css("background-color", "red");
  });
});

/*Get next sibling*/
$(document).ready(function() {
  $("h1").click(function() {
    $("div").next().css("background-color", "red");
  });
});

