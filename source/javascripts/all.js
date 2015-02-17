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

    var submitAddress = function(e) {
      e.preventDefault();
      var address = $("#address").val().split(' ').join('+');
      var url = "https://www.google.com/maps/dir/" + address + "/Saratoga+Springs+Picnic+%26+Campgrounds,+22801+Big+Basin+Way,+Saratoga,+CA+95070";
      window.open(url, '_blank');
    };

    $('#address-button').click(submitAddress);

  })($);


  //add title attribute
  (function($){
    var links = $('a').filter(function(){
      return !$(this).attr('title') || $(this).attr('title') === "";
    });

    links.each(function() {
      $(this).attr('title', $(this).text().trim());
    });
  })($);


  setInterval(function(){
    var firstElement = $('#slideshow img:first');
    firstElement.css('width', $('#slideshow img:first').width());
    firstElement.css('height', 'auto');

    setTimeout(function() {
      firstElement.addClass('hide');
    }, 0);

    setTimeout(function() {
      firstElement.appendTo('#slideshow div');
      firstElement.removeClass('hide');
    }, 1000);

  }, 5000);


})($);