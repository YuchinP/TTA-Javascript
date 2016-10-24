/* String variable declare and initialize*/

$(document).ready(function() {
  var hText = "This is just some text.";

  $("h1").click(function() {
    $("p").text(hText);
  });
});

/*Text method*/
$(document).ready(function() {
  var hText = $("#head1").text();

  $("h1").click(function() {
    $("p").text(hText);
  });
});

/*Combining strings*/
$(document).ready(function() {
  var hText = $("#head1").text();
  var text1 = "The heading text is ";
  var text2 = text1 + hText;

  $("h1").click(function() {
    $("p").text(text2);
  });
});

