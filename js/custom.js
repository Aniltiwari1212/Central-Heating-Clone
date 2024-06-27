// Header menu js //
	$(document).ready(function() {
		$(function($) {
		  let url = window.location.href;
		  $('.header_sec .navbar .navbar-nav > li > a').each(function() {
			if (this.href === url) {
			  $(this).closest('li').addClass('active');
			}
		  });
		});
	});

	$('.header_sec .navbar .dropdown > .dropdown-toggle').click(function () {
		window.location = $(this).attr('href');
	});
// Sticky-Header js //
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
		   $('.header_sec').addClass('header_sticky');
		} else {
		   $('.header_sec').removeClass('header_sticky');
		}
	});


	// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// owl-carousel js
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:4
			},
			1024:{
				items:5
			}
		}
	});
	$('.banner-slider').owlCarousel({
		loop:true,
		margin:0,
		dots:false,
		nav:true,
		//mouseDrag:false,
		autoplay:true,
		animateOut: 'slideOutUp',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('.testiSlide').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			}
		}
	});
	$('.reviewSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:20,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:3
			}
		}
	});
});


//Video Modal js
$('.btn-close').click(function() {
	$('#video').attr('src', ''); 
 });
 $(window).click(function() {
	$('#video').attr('src', ''); 
 });
 
 $(document).ready(function() {
	 // Gets the video src from the data-src on each button
	 var $videoSrc;  
	 $('.video-btn').click(function() {
		 $videoSrc = $(this).data( "src" );
	 });
	 console.log($videoSrc);
	 // when the modal is opened autoplay it  
	 $('#myModal').on('shown.bs.modal', function (e) {
	 // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	 $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	 })
	 // stop playing the youtube video when I close the modal
	 $('#myModal').on('hide.bs.modal', function (e) {
		 // a poor man's stop video
		 $("#video").attr('src',$videoSrc); 
	 }) 
	 // document ready  
 });

 $(document).ready(function(){
	$(".plus_icon").click(function(){
	  $(this).siblings(".header_sec .dropdown-menu").slideToggle("slow");
	  $(this).parents(".header_sec .dropdown").siblings(".header_sec .dropdown").children(".header_sec .dropdown .dropdown-menu").slideUp("slow");
	});
});

// Read More Text
$('.readMore_btn a').click(function (e) {
    e.preventDefault();
    $(this).children('span').text(function (i, text) {
    return text === "Read Less" ? "Read More" : "Read Less";
    })
    $('.readMore_txt').slideToggle();
});

new WOW().init();