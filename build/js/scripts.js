var maximized_height;
var navOffset = $("#navigation").height() + $(".top-bar").height();
var durationSize;

function maxSize() {
  //console.log(durationSize * 2);
  return durationSize * 3;
}

(function () {

var delayInMilliseconds = 1000; //1 second

  var maximize_jumbotron, maximize_container;

  // console.log(navOffset);

  maximize_container = function (container, offset) {

    if (offset == null) {
      offset = 0;
    }

    maximized_height = $(window).height() - offset;
    durationSize = $(window).height();

    return container.outerHeight(maximized_height);

  };

  maximize_jumbotron = function () {
    // hero-tile id to be replace with div w/background-img
    return maximize_container($('#hero'), navOffset);

  };

  maximize_jumbotron().promise().done(function(){
    setTimeout(function() {
        $('#hero').addClass('show-it');
        $('.made-row').addClass('show-it');
       // console.log('done');
    }, delayInMilliseconds);

  });

  return $(window).on('resize', function () {
    return {
      max_j: maximize_jumbotron()
      //max_second_j: maximize_second_jumbotron()
    };
  });

}).call(this);

// GM Modal

// Get the modal
var modalGm = document.getElementById('gmModal');

// Get the button that opens the modal
var btnGm = $('.question-gm');
 //console.log(btnGm);
// Get the <span> element that closes the modal
var spanGm = document.getElementsByClassName("close-modal-gm")[0];

// When the user clicks on the button, open the modal
if (undefined !== btnGm && null !== btnGm) {
  btnGm.on('click', function () {
    modalGm.style.opacity = "1";
    modalGm.style.top = "0px";
  });
}

// When the user clicks on <span> (x), close the modal
if (undefined !== spanGm && null !== spanGm) {
  spanGm.onclick = function () {
    modalGm.style.opacity = "0";
    modalGm.style.top = "-999px";
  };
}

//youtube modal

// Get the modal
var modalcm = document.getElementById('videoModal');

// Get the button that opens the modal
var btn = document.getElementById('video') || document.getElementById('video-container');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

var player;

var tag = document.createElement('script');
tag.id = 'iframe-player';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {

  player = new YT.Player('video-placeholder', {
    width: 1280,
    height: 720,
    videoId: btn.getAttribute('data-video-id'),
    playerVars: {
      modestbranding: 1,
      showinfo:0,
      color: 'white',
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  //console.log('ready');
}

function checkState(playerStatus) {

  if (playerStatus == -1) {
    // console.log('unstarted');
  } else if (playerStatus == 0) {
    // console.log('ended');
    modalcm.style.visibility = "hidden";
    modalcm.style.top = "-999px";
    player.stopVideo();
  } else if (playerStatus == 1) {
    // console.log('playing');
  } else if (playerStatus == 2) {
    // console.log('paused');
  } else if (playerStatus == 3) {
    // console.log('buffering');
  } else if (playerStatus == 5) {
    // console.log('cued');
  }

}

function onPlayerStateChange(event) {
  checkState(event.data);
}

// When the user clicks on the button, open the modal
if (undefined !== btn && null !== btn) {
  btn.onclick = function () {
    modalcm.style.visibility = "visible";
    modalcm.style.top = "0px";
    player.playVideo();
  };
}

// When the user clicks on <span> (x), close the modal
if (undefined !== span && null !== span) {
  span.onclick = function () {
    modalcm.style.visibility = "hidden";
    modalcm.style.top = "-999px";
    player.stopVideo();
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalcm) {
    modalcm.style.visibility = "hidden";
    modalcm.style.top = "-999px";
    player.stopVideo();
  }
};

// vimeo video background

if( $('#video-background').length ) {
  hpVidFlag = false;
  hpVid = $("#video-background");
  hpVidWrap = $(".vid-wrap");

  $(document).ready(function () {
    hpVid.on(
        "timeupdate",
        function (event) {
          if (this.currentTime >= 0.1 && hpVidFlag === false) {
            hpVidFlag = false;
            hpVidWrap.addClass('show-vid');
            hpVid.off();
          }

        });
  });

}

jQuery(document).ready(function () {

  // Other animations

  var duration = 0.35;
  var stagger = 0.35;
  var animationClass = 'show-item';

   $(".a-link a").click(function(e) {
        e.stopPropagation();
   });

  $('.shop-mob').on("click", function() {
    var someClassName = $(this).find('.shop-item');
    if ($(this).hasClass('hiding')) {
      $(this).removeClass('hiding').addClass('showing');
      TweenMax.staggerTo(someClassName, duration, {className: '+=' + animationClass}, stagger);
    } else {
      $(this).removeClass('showing').addClass('hiding');
      TweenMax.staggerTo(someClassName, duration, {className: '-=' + animationClass}, stagger);
    }

  });

  $('.plus-item').on("click", function() {
    if ($(this).hasClass('hiding')) {
      $(this).removeClass('hiding').addClass('showing');
    } else {
      $(this).removeClass('showing').addClass('hiding');
    }

  });

  $('.base-layer-page').find('h3,li,p,span').each(function() {
      $(this).html($(this).html().replace(/\s([^\s<]{0,11})\s*$/,'&nbsp;$1'));
  });

  // init controller
  var controller = new ScrollMagic.Controller();

  var Pinscene = new ScrollMagic.Scene({triggerElement: "#mens-section",triggerHook:"1", duration: maxSize})
          .on('enter leave', function () {
            $("#womens-section .features-plus").toggleClass("fixed");
            $("#static-copy").toggleClass("fixed");
            $("#womens-section .avail-in").toggleClass("fixed");
          })
          //.addIndicators() // add indicators (requires plugin)
          .addTo(controller);

  $('.scrollable').each(function(){
      var currentShow = this;

      var sceneShow = new new ScrollMagic.Scene({triggerElement: currentShow, triggerHook: 'onEnter'})
      .setClassToggle(currentShow, 'show')
    //.addIndicators()
      .addTo(controller);
  });

  $('.shop').click(function() {

    if ( $(this).closest('.shop-item').hasClass('show-item') ) {
      $(this).closest('.shop-item').removeClass('show-item');
    } else {
      $(this).closest('.shop-item').addClass('show-item');
    }

  });

});
