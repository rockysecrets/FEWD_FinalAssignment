$( "#herolink" ).click(function() {
  $('html, body').animate({
         scrollTop: $("#articles").offset().top
     }, 1000);
});
