jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();
	
	
	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/

	$('.item-wrap a').magnificPopup({

	   type:'inline',
	   fixedContentPos: false,
	   removalDelay: 200,
	   showCloseBtn: false,
	   mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
	});
	
	
	/*----------------------------------------------------*/
	/*	Lazy image loading
	------------------------------------------------------*/
	
	const observer = lozad();
	observer.observe();

	/*----------------------------------------------------*/
	/*	Smooth Scrolling
	------------------------------------------------------*/
	
	$(".smooth-scroll").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
		   scrollTop: $(hash).offset().top
		 }, 700, function(){

		   // when done, add hash to url
		   // (default click behaviour)
		   window.location.hash = hash;
		 });

	});
	
	$(function() {
		$(".rslides").responsiveSlides({
			auto: true,             // Boolean: Animate automatically, true or false
			speed: 500,            // Integer: Speed of the transition, in milliseconds
			timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
			pager: true,           // Boolean: Show pager, true or false
			nav: false,             // Boolean: Show navigation, true or false
			random: false,          // Boolean: Randomize the order of the slides, true or false
			pause: false,           // Boolean: Pause on hover, true or false
			pauseControls: true,    // Boolean: Pause when hovering controls, true or false
			prevText: "Previous",   // String: Text for the "previous" button
			nextText: "Next",       // String: Text for the "next" button
			maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
			navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
			manualControls: "",     // Selector: Declare custom pager navigation
			namespace: "rslides",   // String: Change the default namespace used
			before: function(){},   // Function: Before callback
			after: function(){}     // Function: After callback
		});
	});
	

}); // JQuery end