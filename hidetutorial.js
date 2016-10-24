$(document).ready(function() {
  $("h1").click(function() {
    $("h2").hide(1000);
  });
});

/* Show */
$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").show(1000);
  });
});


/*SlideUp/down*/
$(document).ready(function() {
  //$("h2").hide();
  
  $("h1").click(function() {
    $("h2").slideUp(1000);
  });
});

$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").slideDown(1000);
  });
});


/*Toggle*/
$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").toggle(1000);
  });
});

$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").slideToggle(1000);
  });
});

/*Fade*/
$(document).ready(function() {
  //$("h2").hide();
  
  $("h1").click(function() {
    $("h2").fadeOut(1000);
  });
});
$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").fadeIn(1000);
  });
});
$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").fadeToggle(1000);
  });
});
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").fadeTo(1000, 0.3);
  });
});

/*delay*/
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").delay(2000).fadeToggle(1000);
  });
});

/*Callback*/
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").hide(1000, function() {
      $("h3").fadeOut(1000);
    });
  });
});