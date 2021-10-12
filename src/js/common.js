$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	$('.js-portfolio-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.js-portfolio-slider-btn-prev'),
		nextArrow: $('.js-portfolio-slider-btn-next'),
		fade: false,
		asNavFor: '.js-portfolio-thumbnails',
		infinite: true
	});

	$('.js-portfolio-thumbnails').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-portfolio-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		vertical: true,
		focusOnSelect: true,

		
	});


	$('[data-fancybox]').fancybox({'gallery': true, 'loop': true});


	gsap.registerPlugin(ScrollTrigger);

	TweenLite.defaultEase = Power0.easeNone;

	var lines = gsap.utils.toArray('.program-progress__line');

	var tl_1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-program-step-1',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			toggleClass: 'is-active',
			markers: false
			
		}
	});

	var tl_2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-program-step-2',
			start: 'top 20px top',
			end: 'bottom top',
			scrub: true,
			toggleClass: 'is-active',
			markers: false
			
		}
	});

	var tl_3 = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-program-step-3',
			start: 'top 20px top',
			end: 'bottom top',
			scrub: true,
			toggleClass: 'is-active',
			markers: false
			
		}
	});

	tl_1.from($('.js-program-step-1 .program-progress__line') , 1, {
		y: '-101%'
	});

	tl_2.from($('.js-program-step-2 .program-progress__line') , 1, {
		y: '-101%'
	});

	tl_3.from($('.js-program-step-3 .program-progress__line') , 1, {
		y: '-101%'
	});

	// tl_2.to($('.js-program-step-2 .program-progress__line') , {
	// 	height: '100%',
	// 	duration: .1,
	// 	ease: 'none'
	// });

	// tl_3.to($('.js-program-step-3 .program-progress__line') , {
	// 	height: '100%',
	// 	duration: .1,
	// 	ease: 'none'
	// });




	


});
