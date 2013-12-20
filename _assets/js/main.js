$(document).ready(function() {

//ADMIN BAR

$(".sign-in").on("click", function(e){
  e.preventDefault();
  $(".login-fields").slideToggle("slow");
});

//HOMEPAGE CAROUSEL 

$("#fluid-wrap").carouFredSel({
    width   : "100%",
    scroll  : 2
});

// HOMEPAGE BACK-TO-TOP BTN
    $(".back-to-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });



//CANVAS CODE
$(function(){
      function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      var sources = {
        tshirt: '_assets/img/t-shirt.png'
      };

      loadImages(sources, function(images) {
        context.drawImage(images.tshirt, 50, 10, 500, 686)//(x, y, width, height)
      });
})
})
