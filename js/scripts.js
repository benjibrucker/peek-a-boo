$(document).ready(function() {
//  $(".clickable").click(function() {
 //   $("#walrus-showing").slideToggle();
 //   $("#walrus-hidden").slideToggle();
 // });

  $("button#dark-mode").click(function() {
    $("body").removeClass("light");
    $("body").addClass("dark");
  });
  $("button#light-mode").click(function() {
    $("body").removeClass("dark");
    $("body").addClass("light");
  });

});


