// window.location.href = "https://en.wikipedia.org/wiki/Main_Page";

// var script = document.createElement('script');
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
// document.getElementsByTagName('head')[0].appendChild(script);


var scriptTag = "<script> $('a').hover(function(){
  $(this).hide()})<";
scriptTag +=  "/script>";


// $('a').hover(function(){
//   $(this).hide()
// })

$("#iframe").contents().find("body").append(scriptTag);

//makes everything hack the planet
  // var img = '<img src=https://media.giphy.com/media/14kdiJUblbWBXy/giphy.gif>';
  // $('a').hover(function(){ $(this).replaceWith(img); });
