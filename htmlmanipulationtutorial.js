$(document).ready(function() {
  $("h1").click(function() {
    $("p").html("new <b>text</b>");
  });
});

/*Replaces whole thing*/
$(document).ready(function() {
  $("h1").click(function() {
    $("div").html('new <b style="color: red;">text</b>');
  });
});

/*Empty content*/
$(document).ready(function() {
  $("h1").click(function() {
    $("div").empty();
  });
});

/*Append additional text*/
$(document).ready(function() {
  $("h1").click(function() {
    $("p").append(" More text.");
  });
});

/*Append new text in the div*/
$(document).ready(function() {
  $("h1").click(function() {
    $("div").append("<p>new text</p>");
  });
});

/*Append new text after the div*/
$(document).ready(function() {
  $("h1").click(function() {
    $("div").after("<p>new text</p>");
  });
});

/*add html to multiple elements*/
$(document).ready(function() {
  $("h1").click(function() {
    $("p").after("<p>new text</p>");
  });
});

/*Prepend before the heading in the div*/
$(document).ready(function() {
  $("h1").click(function() {
    $("div").prepend("<p>new text</p>");
  });
});

/*Add before the div*/

$(document).ready(function() {
  $("h1").click(function() {
    $("div").before("<p>new text</p>");
  });
});

/*Replace selected elements with HTML*/
$(document).ready(function() {
  $("h1").click(function() {
    $("p").replaceWith("<h2>new text</h2>");
  });
});

/*Change attribute this changes the picture in this case*/

$(document).ready(function() {
  $("h1").click(function() {
    $("#picture").attr("src", "floatingball.gif");
  });
});