$(document).ready(function(){
  $("#close-nav").click(function(){
    $("#header").fadeOut();
  });
  $("#menu-icon").click(function(){
    $("#header").fadeIn();
  });
});