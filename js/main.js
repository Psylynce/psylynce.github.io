$(document).ready(function() {
  
  var getRandomURL = function () {

    var URLs = ['flatirons_snow', 'hydrant', 'road', 'num8'];

    var randomURL = URLs[Math.floor(Math.random() * URLs.length)];

    $('#photography').css('background-image', 'url(img/' + randomURL + '.jpg)');
  };

  setInterval(getRandomURL, 5000);

  var page = $('html, body');
  $('nav a').click(function(event) {
    page.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500, 'easeInOutQuad');
    return false;
  });

  var more = $('.more');
  $('.arrow').click(function(event) {
    var arrow = $(this);
    var i = $('.arrow i');
    if (arrow.hasClass('left')) {
      
      arrow.removeClass('left');
      arrow.addClass('right');
      
      i.removeClass('fa-chevron-left');
      i.addClass('fa-chevron-right');

      more.animate({
        left: 0
      }, 1000, 'easeInOutQuad', function(){
        $('.info p').animate({
          opacity: 1
          }, 500);
      });

      return false;

    } else {
      
      arrow.removeClass('right');
      arrow.addClass('left');

      i.removeClass('fa-chevron-right');
      i.addClass('fa-chevron-left');

      more.animate({
        left: '95%'
      }, 1000, 'easeInOutQuad', function(){
        $('.info p').animate({
          opacity: 0
          }, 500);
      });

      return false;
    }
    
  });

});