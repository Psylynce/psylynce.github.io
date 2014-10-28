$(document).ready(function() {
  
  var getRandomURL = function () {

    var URLs = ['http://theawesomer.com/photos/2010/11/112910_natgeo_photo_contest_1.jpg', 
                'http://api.ning.com/files/5k4oCm5fkVYkzJn7U822UuS6cg4ZUGDRH3lE6Xk6RdEjU3*Ia3rlP4eM6adlqkYgEenzuO9AxI762MUngPpGjsBZqOe5WyJe/natgeo2.jpg',
                'http://mwvg.s3.amazonaws.com/wp-content/uploads/2010/09/Nat-Geo-Challenge-Wild-Life-3.jpg',
                'http://ngm.nationalgeographic.com/u/TvyamNb-BivtNwcoxtkc5xGBuGkIMh_nj4UJHQKuor8A-_owDSGN-dKKYKZKkFYMpvSQLF6vfI2EYg/',
                'http://fc08.deviantart.net/fs71/f/2010/219/6/6/blurry_abstract_background_by_soukupl.jpg'
                ];

    var randomURL = URLs[Math.floor(Math.random() * URLs.length)];

    $('.photography').css('background-image', 'url(' + randomURL + ')');
  };

  // setInterval(getRandomURL, 5000);

  var page = $('html, body');
  $('nav a').click(function(event) {
    page.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500, 'easeInOutQuad');
    return false;
  });

});