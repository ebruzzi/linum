// function debounce(fn, wait) {
//   var timeout;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       fn.apply(this, arguments);
//     }, (wait || 1));
//   };
// }

// window.addEventListener('resize', debounce(function () {

//     var vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', vh + 'px' );

// }, 500));

if( /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 document.documentElement.className += ' ' + 'is-mob';
 var isMobile = true;
} else {
 document.documentElement.className += ' ' + 'is-desk';
 var isMobile = false;
}

(function() {

  (function($) {

    var maximize_jumbotron, maximize_container;
    // var navOffset = $("#navigation").height() + $(".top-bar").height();
    var navOffset = 0;

    maximize_container = function(container, offset) {
      var maximized_height;
      if (offset == null) {
        offset = 0;
      }

      maximized_height = $(window).height() - offset;
      return container.outerHeight(maximized_height);
    };

    maximize_jumbotron = function() {
      // hero-tile id to be replace with div w/background-img
      return maximize_container($('#hero'), navOffset);
    };

    maximize_jumbotron();
    var screen = $(window);
    if (isMobile === false ) {
      return $(window).on('resize', function() {
        return maximize_jumbotron();
      });
    }


  }(jQuery));

  (function($) {


    

  }(jQuery));

}).call(this);

