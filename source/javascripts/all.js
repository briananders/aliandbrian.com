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

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  7000);
})($);