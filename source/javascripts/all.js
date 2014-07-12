//ie8 doesn't have a forEach method. This fixes that.
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  }
}


(function($){
  /*
    makes the image_tag helper retina images work.
  */
  window.isRetina = false;

  if(window.devicePixelRatio >= 1.2){
    window.isRetina = true;
    $("[data-src-2x]").each(function(){
      if(this.tagName === "IMG"){
        $(this).attr("src",$(this).attr("data-src-2x"));
      } else {
        $(this).css({"background-image":"url("+$(this).attr("data-src-2x")+")"});
      }
    });
  }

  //Address submission
  (function($){

    $("#address").bind("keypress", function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) { //Enter keycode
        e.preventDefault();

        submitAddress();
      }
    });

    var submitAddress = function() {
      var address = $("#address").val().split(' ').join('+');
      var url = "https://www.google.com/maps/dir/" + address + "/Saratoga+Springs+Picnic+%26+Campgrounds,+22801+Big+Basin+Way,+Saratoga,+CA+95070";
      window.open(url, '_blank');
    };

    $('#address-button').click(submitAddress);

  })($);

  //Parallax
  (function($){
    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this), // assigning the object
          $window = $(window);
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));

        // Put together our final background position
        var coords = '50% '+ yPos + 'px';
        // var coords = yPos + 'px center';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
      });
    });
  })($);

  //
  (function($){
    var windowHeight = $(window).height();

    $('span[data-src]').click(function(){

      $('html, body').animate({
        scrollTop: $($(this).data('src')).offset().top - ((windowHeight - 600)/2)
      }, 1000);
    });
  })($);

  //clock hover
  (function($){
    var when = $("#when");

    $(window).on('scroll', function() {
      if(when.offset().top + when.innerHeight() <= $(this).scrollTop() + $(this).height()){
        if(when.hasClass('hover')) {
          return;
        }

        when.addClass('hover');

        $('.twelve').addClass('show');
        setTimeout(function(){
          $('.twelve').removeClass('show');
        }, 500);

        setTimeout(function(){
          $('.one').addClass('show');
          setTimeout(function(){
            $('.one').removeClass('show');
          }, 500);
        }, 500);

        setTimeout(function(){
          $('.two').addClass('show');
          setTimeout(function(){
            $('.two').removeClass('show');
          }, 500);
        }, 1000);

        setTimeout(function(){
          $('.three').addClass('show');
          setTimeout(function(){
            $('.three').removeClass('show');
          }, 500);
        }, 1500);

        setTimeout(function(){
          $('.four').addClass('show');
          setTimeout(function(){
            $('.four').removeClass('show');
          }, 800);
        }, 2000);

        setTimeout(function(){
          $('.five').addClass('show');
          setTimeout(function(){
            $('.five').removeClass('show');
          }, 1500);
        }, 2800);

        setTimeout(function(){
          $('.six').addClass('show');
        }, 4500);
      }
    });
  })($);


})($);