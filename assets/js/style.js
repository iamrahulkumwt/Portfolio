var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
}).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 2100,
    delay: (el, i) => 100 + 30 * i
});


// heading animation
anime.timeline({loop: true})
.add({
    targets: '.ml15 .word',
    scale: [3,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
}).add({
    targets: '.ml15',
    opacity: 1,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
});


// number counter
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


// scroll to top
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 60) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// testimonial owl carousel
$(".testimonial_carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplayTimeout: 3000,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 2000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
});


// portfolioProject owl carousel
$(".portfolioProject_carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplayTimeout: 3000,
  autoplay: true,
  autoplayHoverPause: true,
  smartSpeed: 2000,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});


// preloader
$(window).on('load', function() {
  $('.preloader').delay(100).fadeOut("slow");
});


