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
    if (screen.width() > 768) {
      return $(window).on('resize', function() {
        return maximize_jumbotron();
      });
    }


  }(jQuery));

  (function($) {

    if ($(".parallaxParent")[0]){
      
      // init controller
      var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#hero.parallaxParent"})
              .setTween("#hero.parallaxParent > .parallax-img", {y: "80%", ease: Linear.easeNone})
              //.addIndicators()
              .setClassToggle('#hero', 'is-active')
              .addTo(parallaxController);

    }
      // $('.content-copy, .hero-content').find('h1,h2,h3,li,p,span').each(function() {
      //   $(this).html($(this).html().replace(/\s([^\s<]{0,11})\s*$/,'&nbsp;$1'));
      // });

      // init controller
      var controller = new ScrollMagic.Controller();

      $('.scrollable').each(function(){
        var currentShow = this;

        var sceneShow = new new ScrollMagic.Scene({triggerElement: currentShow, triggerHook: 'onEnter'})
        .setClassToggle(currentShow, 'show')
        .on('leave', function(e) {
           // if (currentShow.classList.contains('sun')) {
           //  sunTl.time(0);
           // } else if (currentShow.classList.contains('odor')) {
           //  odorTl.time(0);
           // } else if (currentShow.classList.contains('sus')) {
           //  tl.time(0);
           // }
        })
        // .addIndicators()
        .addTo(controller);
      }); 
    

  }(jQuery));

}).call(this);

